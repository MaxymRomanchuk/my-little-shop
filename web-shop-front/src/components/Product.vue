<script setup lang="ts">
    //@ts-ignore
    import { useI18n } from 'vue-i18n'
    
    const { t } = useI18n();

    const props = defineProps({
        imgUrl: String,
        label: String,
        description: String,
        price: String
    })
</script>

<template>
    <div class="col">
        <div class="card shadow-sm h-100">
            <div class="card-img-top" width="100%" height="225">
                <img class="bd-placeholder-img card-img-top" :src="props.imgUrl" height="225">
            </div>
            <div class="card-body d-flex flex-column justify-content-between">
                <p class="card-text text-black fw-bolder">{{ props.label }}</p>
                <p class="card-text">{{ props.description }}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <small class="text-body-secondary">{{ props.price }}</small>
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">{{ t('products.buyBtn') }}</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">{{ t('products.compareBtn') }}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>