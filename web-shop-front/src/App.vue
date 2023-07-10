<script setup lang="ts">
import { ref } from 'vue';
  import { RouterView } from 'vue-router';
  import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar />

  <RouterView />
</template>

