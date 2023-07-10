const ua = require('./storage_ua.json');
const en = require('./storage_en.json');

const db = {
    listProducts: async function (locale) {
        switch(locale) {
            case('ua'):
                return ua;
                break;
            case('en'):
                return en;
                break;
            default:
                throw new Error('Wrong locale');
        }
    }
}

module.exports = db