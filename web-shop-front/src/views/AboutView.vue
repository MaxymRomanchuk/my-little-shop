<template>
    <main>
        <section class="py-5 text-center container-fluid bg-body-secondary">
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <h1 class="fw-light">{{ t('about.title') }}</h1>
                    <p class="lead text-body-secondary">{{ t('about.description') }}</p>
                </div>
            </div>
        </section>
        <div class="container marketing">
            <hr class="featurette-divider">
            <div class="row">
                <div class="col-lg-9 col-md-8 d-flex flex-column justify-content-center">
                    <h2 class="featurette-heading">{{ t('about.firstRow.title') }} <span class="text-body-tertiary">{{ t('about.firstRow.subtitle') }}</span></h2>
                    <p class="lead">{{ t('about.firstRow.description')}}</p>
                </div>
                <div  class="col-lg-3 col-md-4">
                    <img :src="imgUrls[0]" alt="Image" class="img-fluid">
                </div>
            </div>
            <hr class="featurette-divider">
            <div class="row">
                <div class="col-lg-4 col-md-5">
                    <img :src="imgUrls[1]" alt="Image" class="img-fluid">
                </div>
                <div class="col-lg-8 col-md-7 d-flex flex-column justify-content-center">
                    <h2 class="featurette-heading">{{ t('about.secondRow.title') }} <span class="text-body-tertiary">{{ t('about.secondRow.subtitle') }}</span></h2>
                    <p class="lead">{{ t('about.secondRow.description')}}</p>
                </div>
            </div>
            <hr class="featurette-divider">
            <div class="row">
                <div class="col-lg-8 col-md-7 d-flex flex-column justify-content-center">
                    <h2 class="featurette-heading">{{ t('about.thirdRow.title') }} <span class="text-body-tertiary">{{ t('about.thirdRow.subtitle') }}</span></h2>
                    <p class="lead">{{ t('about.thirdRow.description')}}</p>
                </div>
                <div class="col-lg-4 col-md-5">
                    <img :src="imgUrls[2]" alt="Image" class="img-fluid">
                </div>
            </div>
            <hr class="featurette-divider">
        </div>
    </main>
</template>

<script setup lang="ts">
    //@ts-ignore
    import { useI18n } from 'vue-i18n'
    
    const { t } = useI18n();
    const imgUrls = [
        "https://qph.cf2.quoracdn.net/main-qimg-3f66e71fe1393cd2c79f065630d74279-lq",
        "https://yt3.googleusercontent.com/qptTMbq80W8hxC8laYcF8nYE-j5eJxB23PuIpjU3ijWHdqX9w4EoQjIPXBmhHcdIuixreY-M5w=s900-c-k-c0x00ffffff-no-rj",
        "https://i.ytimg.com/vi/FmGDAFNQyRQ/maxresdefault.jpg"
    ]
</script>

<style>
</style>
