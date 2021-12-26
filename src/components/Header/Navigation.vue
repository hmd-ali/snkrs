<script setup lang="ts">
    import { computed } from 'vue'
    import { gsap } from 'gsap'

    interface Props {
        modelValue: boolean
    }

    const props = defineProps<Props>()

    const showModal = computed({
        get(){
            return props.modelValue
        },
        set(){
            update()
        }
    })

    const emit = defineEmits(['update:modelValue'])
    const update = () => {
        emit('update:modelValue', false)
    }

    const beforeEnter = (el: Element) => {
        gsap.set(el, {
            y: '-100%',
        })
    }
    const enter = (el: Element,done: GSAPCallback) => {
        gsap.to(el, {
            transformOrigin: 'top',
            y: 0,
            duration: .5,
            ease: 'Power2.in',
            onComplete: done
        })
    }
    const leave = (el: Element,done: GSAPCallback) => {
        gsap.to(el, {
            transformOrigin: 'top',
            y: '-100%',
            duration: .5,
            ease: 'Power2.out',
            onComplete: done
        })
    }
</script>

<template>
    <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
        :css="false"
    >
        <div v-if="showModal" class="navigation-container">
            <a @click="update" href="#">Home</a>
            <a @click="update" href="#">Home</a>
            <a @click="update" href="#">Home</a>
            <a @click="update" href="#">Home</a>
            <a @click="update" href="#">Home</a>
            <a @click="update" href="#">Home</a>
        </div>
    </transition>
</template>

<style scoped>
    .navigation-container {
        @apply absolute pt-14 top-0 left-0 h-screen w-full bg-black-141414 text-white px-5 py-4 divide-y-2 divide-zinc-500 flex flex-col
    }
    .navigation-container a {
        @apply py-4
    }
</style>