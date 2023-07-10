<script setup lang="ts">
    import { Suspense } from 'vue';
    //@ts-ignore
    import { useI18n } from 'vue-i18n'
    import ProductList from '@/components/ProductList.vue';
    
    const { t } = useI18n();

    const products = [
        {
            url: "https://cdn.vectorstock.com/i/preview-1x/22/67/fighter-airplane-icon-bold-blue-circle-border-vector-4212267.jpg",
            label: "Sample",
            description: "Just an example",
            price: "$100000"
        },
        {
            url: "https://cdn.vectorstock.com/i/preview-1x/22/67/fighter-airplane-icon-bold-blue-circle-border-vector-4212267.jpg",
            label: "Sample",
            description: "Just an example",
            price: "$100000"
        },
        {
            url: "https://cdn.vectorstock.com/i/preview-1x/22/67/fighter-airplane-icon-bold-blue-circle-border-vector-4212267.jpg",
            label: "Sample",
            description: "Just an example",
            price: "$100000"
        },
        {
            url: "https://cdn.vectorstock.com/i/preview-1x/22/67/fighter-airplane-icon-bold-blue-circle-border-vector-4212267.jpg",
            label: "Sample",
            description: "Just an example",
            price: "$100000"
        }
    ]
</script>

<template>
  <main>
    <section class="py-5 text-center container-fluid bg-light">
        <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
                <h1 class="fw-light">{{ t('products.title') }}</h1>
                <p class="lead text-body-secondary">{{ t('products.description') }}</p>
            </div>
        </div>
    </section>
    <div class="album py-5 bg-body-secondary">
    <div class="container">
        <Suspense>
            <ProductList />

            <template #fallback>
                Loading...
            </template>
        </Suspense>
    </div>
  </div>
  </main>
</template>