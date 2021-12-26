<script setup lang="ts">
    import { useRoute, useRouter } from 'vue-router';
    import { usePartnersStore } from '@/stores/partners';
    import { storeToRefs } from 'pinia';

    const partnersStore = usePartnersStore()
    const { partners } = storeToRefs(partnersStore)
    const getPartnerImage = (url: string) => new URL(`/src/assets/partners/${url}`, import.meta.url).href
</script>

<template>
    <div class="footer">
        <div class="partners">
            <h2 class="partners-header">
                our partners
            </h2>
            <div v-for="(partner, index) in partners" class="partner">
                <img :key="index" class="partner-image" :src="getPartnerImage(partner.url)" :alt="`${partner.name} Image`" :title="`${partner.name}`">
            </div>
        </div>
        <div class="site-map">

        </div>
    </div>
</template>

<style scoped>
    .footer {
        @apply w-full relative
    }
    .partners {
        @apply relative flex flex-col items-center w-full py-4
    }
    .partners-header {
        @apply text-2xl text-black font-shizuru capitalize mb-8
    }
    .partner {
        @apply my-2 first:mt-0 last:mb-0 px-4 py-2
    }
    .partner-image {
        @apply w-20
    }
</style>