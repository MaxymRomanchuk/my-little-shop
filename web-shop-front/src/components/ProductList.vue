<script setup lang="ts">
    import { reactive, watch } from 'vue';
    import { storeToRefs } from 'pinia';
    import Controller from '@/i18n/controller';
    import Product from '@/components/Product.vue';
    import { useCounterStore } from '@/stores/counter';
    import type { ProductItem } from '@/types/products';

    const { count } = storeToRefs(useCounterStore());

    // Fetch function
    async function fetchCardsData(): Promise<ProductItem[]> {
        console.log('Refetch started');
        return fetch(
            'http://localhost:3000/list?locale=' + Controller.getCurrentLocale(), 
        ).then(res => res.json()) as Promise<ProductItem[]>;
    }

    let productList = reactive({
        data: await fetchCardsData()
    });

    //@ts-ignore
    watch(count, async () => {
        productList.data = await fetchCardsData();
        console.log('Refetch finished');
    })
</script>

<template>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <Product v-for="i in productList.data" :label="i.label" :description="i.description" :price="i.price" :img-url="i.url" />
    </div>
</template>
