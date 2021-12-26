<script setup lang="ts">
    import { onMounted } from 'vue';
    import { gsap } from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    gsap.registerPlugin(ScrollTrigger)

    import { Swiper, SwiperSlide } from 'swiper/vue'
    import SwiperCore, { Navigation } from 'swiper'
    SwiperCore.use([Navigation])
    import 'swiper/css'
    import 'swiper/css/navigation'

    const onSwiper = (swiper: any) => {
        console.log(swiper)
    }
    const onSlideChange = () => {
        console.log('slide change')
    }


    import { useReviewsStore } from '@/stores/review'
    import { storeToRefs } from 'pinia'
    const reviewsStore = useReviewsStore()
    const { reviews } = storeToRefs(reviewsStore)


    import { useProductsStore } from '@/stores/products'
    const productsStore = useProductsStore()
    const { products } = storeToRefs(productsStore)

    const getImageUrl = (url: string) => new URL(`/src/assets/products/${url}`, import.meta.url).href

    onMounted(() => {
        gsap.from('#hero-text', {
            opacity: 0,
            delay: 1,
            duration: 1,
            ease: 'Power2.in'
        })
        gsap.to('#hero-image', {
            y: 400,
            scrollTrigger: {
                trigger: '#hero-content',
                start: 'top bottom',
                end: 'top -20%',
                scrub: true,
            }
        })        
        gsap.fromTo('#gsap-text-left',{
            x: -200,
            ease:'Power2.in',
            opacity: 0,
            
        }, {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '#hero-content',
                start: 'top 80%',
                end: 'top 60%',
                scrub: true,
            }
        })
        gsap.fromTo('#gsap-text-right',{
            x: 200,
            ease:'Power2.in',
            opacity: 0,
            
        }, {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '#hero-content',
                start: 'top 80%',
                end: 'top 60%',
                scrub: true,
            }
        })


    })
</script>

<template>
    <section class="home">
        <div class="hero-image">
            <img id="hero-image" src="@/assets/images/hero-background.jpg" alt="Shoes Background Image">
            <div id="hero-text" class="hero-text">
                <p>
                    Don't just fit in,
                    <br>
                    find your own perfect fit
                </p>
                <div class="cta-container">
                    <button>
                        shop for men
                    </button>
                    <button>
                        shop for women
                    </button>
                </div>
            </div>
        </div>
        <div id="hero-content" class="content">
            <div id="gsap-text" class="content-description">
                <h2 id="gsap-text-left">
                    &OpenCurlyDoubleQuote;when the feet are confortable, so it the mind, body, and soul.&CloseCurlyDoubleQuote;
                </h2>
                <span id="gsap-text-right">- donald j pliner</span>
            </div>
            <div class="reviews">
                <h2 class="reviews-header">
                    reviews
                </h2>
                <div v-for="(review,index) in reviews" :key="index" class="review">
                    <div class="review-body">
                        <span>
                            &OpenCurlyDoubleQuote;{{ review.body }}&CloseCurlyDoubleQuote;
                        </span>
                    </div>
                    <div class="review-author">
                        <span>
                           - {{ review.author }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="featured">
            <h2 class="featured-header">
                featured products
            </h2>
            <div class="products">
                <!-- <div class="product" v-for="(product, index) in products">
                    <div class="product-image">
                        <img :src="getImageUrl(product.url)" alt="">
                    </div>
                    <div class="product-details">
                        <p>
                            {{ product.name }}
                        </p>
                        <div class="add">
                            <span :title="`${product.price}`">
                                ${{product.price}}
                            </span>
                            <button>
                                more details
                            </button>
                        </div>
                    </div>
                </div> -->
                <swiper
                    :navigation="true"
                    :slides-per-view="1.2"
                    :space-between="20"
                    @swiper="onSwiper"
                    @slideChange="onSlideChange"
                >
                    <swiper-slide v-for="(product, index) in products" :key="index">
                        <div class="product">
                            <div class="product-image">
                                <img :src="getImageUrl(product.url)" alt="">
                            </div>
                            <div class="product-details">
                                <p>
                                    {{ product.name }}
                                </p>
                                <div class="add">
                                    <span :title="`${product.price}`">
                                        ${{product.price}}
                                    </span>
                                    <button>
                                        more details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .home {
        @apply relative w-full
    }
    .hero-image {
        @apply relative pt-14 left-0 w-full h-screen overflow-hidden
    }
    .hero-image img {
        @apply w-full object-cover h-full brightness-50
    }
    .hero-image .hero-text {
        @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    }
    .hero-text p {
        @apply text-cyan-500 font-sans text-2xl text-center capitalize
    }
    .hero-text .cta-container {
        @apply relative flex mt-8
    }
    .hero-text .cta-container button {
        @apply w-40 py-2 flex items-center justify-center bg-cyan-500 rounded text-white mx-2 first:ml-0 last:mr-0 capitalize
    }
    .home .content {
        @apply bg-white pt-4 px-3
    }
    .content-description {
        @apply relative w-full flex flex-col items-center after:absolute after:w-full after:top-full after:left-0 after:h-px after:bg-zinc-500 hidden
    }
    .content-description h2 {
        @apply max-w-xs text-center text-black text-lg uppercase overflow-x-hidden
    }
    .content-description span {
        @apply text-zinc-600 mt-4 text-center text-lg uppercase font-poppins
    }
    .reviews {
        @apply w-full relative px-6 py-8 flex flex-col items-center
    }
    .reviews .reviews-header {
        @apply text-2xl font-shizuru capitalize mb-8
    }
    .review {
        @apply w-full max-w-xs py-2 px-4 border-2 rounded-lg my-2 first:mt-0 last:mb-0
    }
    .review-body {
        @apply text-zinc-600 text-sm text-justify
    }
    .review-author {
        @apply text-xs w-full flex justify-end mt-4
    }
    .featured {
        @apply relative w-full py-8 px-6 text-black flex flex-col items-center
    }
    .featured-header {
        @apply text-2xl font-shizuru capitalize mb-8
    }
    .products {
        @apply relative w-full
    }
    /* .products {
        @apply relative w-full flex flex-col
    } */
    .product {
        @apply relative flex flex-col justify-between h-80 border-2 border-zinc-100 rounded my-2 first:mt-0 last:mb-0 px-2 py-2
    }
    .product-image {
        @apply w-full mb-4 h-32 rounded overflow-hidden
    }
    .product-image img {
        @apply relative w-full h-full object-contain
    }
    .product-details {
        @apply relative w-full px-1
    }
    .product-details .add {
        @apply relative w-full flex items-center justify-between mt-4
    }
    .product-details .add span {
        @apply font-shizuru
    }
    .product-details .add button {
        @apply px-4 py-2 bg-emerald-400 rounded-lg text-white capitalize
    }
</style>