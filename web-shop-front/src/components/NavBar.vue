<script setup lang="ts">
    import { reactive } from 'vue';
    //@ts-ignore
    import { useI18n } from 'vue-i18n'
    import { RouterLink, useRouter } from 'vue-router';
    import Translator from '@/i18n/controller';
    import { useCounterStore } from '@/stores/counter';

    const { t } = useI18n();
    const router = useRouter();
    const store = useCounterStore();

    const navButtons = reactive([
        {
            name: 'header.home',
            url: 'home'
        },
        {
            name: 'header.about',
            url: 'about'
        },
        {
            name: 'header.products',
            url: 'products'
        }
    ])

    async function onChange (target: { value: string }) {
        await Translator.setLocale(target.value);

        try {
            await router.replace({ params: { locale: target.value } })
            store.increment();
        } catch(e) {
            console.error(e);
            router.push("/");
        }
    }

</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <RouterLink class="navbar-brand" to="#">{{ t('title') }}</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item" v-for="i in navButtons">
                        <RouterLink class="nav-link" :to="Translator.i18nRoute({ name: i.url })">{{ t(i.name) }}</RouterLink>
                    </li>
                    <li class="nav-item">
                        <select class="form-select bg-warning" :value="Translator.getCurrentLocale()" @change="onChange($event.target as any)">
                            <option v-for="i in Translator.getSupportedLocales()" :value="i">{{ i.toUpperCase() }}</option>
                        </select>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
