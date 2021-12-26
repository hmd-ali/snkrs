<script setup lang="ts">
    import Navigation from './Navigation.vue'
    import { useUserStore } from '@/stores/user';
    import { storeToRefs } from 'pinia';
    import { ref } from 'vue'

    const userStore = useUserStore()
    const { user } = storeToRefs(userStore)

    const isNavToggled = ref(false)

    const handleToggle = () => {
        isNavToggled.value ? isNavToggled.value = false : isNavToggled.value = true
    }

</script>

<template>
    <header class="header" :class="isNavToggled ? 'h-screen' : ''">
        <div class="mobile-nav">
            <button @click="handleToggle" class="nav-toggle">
                <div class="toggler" :class="isNavToggled ? 'close' : '' "></div>
            </button>
            <div class="logo">
                <img width="32" height="32" class="logo-image" src="@/assets/images/logo.png" alt="">
                <span class="logo-text">
                    snkrs.
                </span>
            </div>
            <div class="cart-container">
                <FontAwesomeIcon class="icon" icon="shopping-cart" />
            </div>
        </div>
        <Navigation v-model="isNavToggled" />
        <div class="desktop-nav">

        </div>
    </header>
</template>

<style scoped>
    .header {
        @apply fixed top-0 left-0 w-full h-14 z-50 flex flex-col divide-y-2 divide-zinc-500
    }
    .mobile-nav {
        @apply w-full h-full px-6 py-2 flex items-center justify-between z-50 bg-black-141414
    }
    .nav-toggle {
        @apply relative w-5 h-5
    }
    .toggler {
        @apply absolute top-1 w-full h-px bg-white before:absolute before:left-0 before:top-0 before:translate-y-3 before:w-full before:h-full before:bg-white transition-all duration-300 before:transition-all before:duration-300
    }
    .toggler.close {
        @apply rotate-45 before:rotate-90 before:top-0 before:left-0 before:translate-y-0
    }
    .logo {
        @apply relative flex 
    }
    .logo-text {
        @apply text-white text-xl uppercase ml-2 tracking-widest;
        font-family: 'Shizuru', cursive;
    }
    .logo .logo-image {
        @apply w-8 h-8
    }
    .cart-container {
        @apply relative
    }
    .cart-container .icon {
        @apply text-white
    }
    .desktop-nav {
        @apply hidden
    }
</style>