<script setup>
import { ref } from 'vue';
import CardPage from './components/CardPage.vue';
import MainPage from './components/MainPage.vue';

const showBilet = ref(false)
</script>

<template>
  <div class="main">
    <MainPage @pickBilet="showBilet = true" />
    <CardPage @clearBilet="showBilet = false" v-if="showBilet" />
  </div>

</template>
<style scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
}
</style>
