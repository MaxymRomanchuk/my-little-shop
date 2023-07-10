<script setup lang="ts">
    //@ts-ignore
    import { useI18n } from 'vue-i18n'
    import { RouterLink } from 'vue-router';
    import Controller from '@/i18n/controller';

    const { t } = useI18n();

</script>

<template>
    <div class="container-fluid d-flex w-100 p-3 mx-auto flex-column align-items-center" id="homeContainer">

        <div class="container flex-grow-1" id="homeText">
            <h1 class="text-center text-shadow text-white fw-bolder">{{ t('home.title') }}</h1>
            <h3 class="text-center text-shadow text-light fw-bold ">{{ t('home.subtitle') }}</h3>
            <p>
                <RouterLink class="btn btn-lg btn-secondary fw-bold" :to="Controller.i18nRoute({ name: 'products' })">{{ t('home.btn') }}</RouterLink>
            </p>
        </div>

        <footer class="mt-auto text-white-50">
            {{ t('home.footer') }}
        </footer>
    </div>
</template>

<style>
    html, body, #app, #homeContainer {
        height: 100%;
    }

    main {
        height: 94%;
    }

    #homeContainer {
        background-image:  
            linear-gradient(
            rgba(0, 0, 0, 0.01),
            rgba(0, 0, 0, 0.01)
            ),
            url(@/assets/gun_with_tea.jpg);
        background-size: cover;
        background-position: center;
    }

    .text-shadow {
        text-shadow: 0 0 5px black;
    }

    #homeText {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>