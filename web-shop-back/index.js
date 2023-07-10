const express = require('express');
const db = require('./db/db');
const cors = require('cors');
const url = require('url');

const app = express();

app.get('/', function(req, res) {
    res.send({
        protocol: req.protocol,
        host: req.get('host'),
        path: req.originalUrl
    })
});

app.get('/list', cors(), async function(req, res) {
    const data = await db.listProducts(req.query.locale).catch(e => {
        res.status("400");
        res.send("Invalid locale");
    }).then(res => res.map(product => ({
                url: url.format({
                    protocol: req.protocol,
                    host: req.get('host'),
                    pathname: product.imgUrl
                }),
                label: product.label,
                description: product.description,
                price: product.price
            })
        )
    );

    res.send(data)
})

app.use('/static', express.static('public'));
app.listen(3000)