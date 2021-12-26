<script setup lang="ts">
  import Header from "./components/Header/Header.vue"
  import Footer from "./components/Footer/Footer.vue"
</script>

<template>
  <div class="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<style scoped>
  .app {
    @apply relative w-full min-h-screen
  }
</style>