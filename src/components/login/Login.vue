<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import LoginMobile from './LoginMobile.vue';
import LoginDesktop from './LoginDesktop.vue'

const screenWidth = ref<number>(window.innerWidth)

const updateSize = () => {
    screenWidth.value = window.innerWidth
}

onMounted(() => {
    window.addEventListener('resize', updateSize)
})

</script>

<template>
    <section class="section">
        <LoginMobile
            v-if="screenWidth < 920"
        />
        <LoginDesktop
            v-if="screenWidth >= 920"
        />
    </section>
</template>

<style scoped>
.section {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgb(62, 17, 73);
    background: linear-gradient(0deg, rgba(40, 6, 48, 1) 18%, rgba(214, 65, 250, 1) 100%);
}
</style>

