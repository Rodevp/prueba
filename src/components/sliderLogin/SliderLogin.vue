<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import CardSlider from './CardSlider.vue'
import Tanjiro from '../../assets/tanjiro.png'
import Kyo from '../../assets/kyoyuro.png'
import Inosuke from '../../assets/inosuke.png'

const idTm = ref<number>(0)

const items = [
    {
        id: 0,
        title: "yabu.",
        description: "Ver anime en línea en HD, subtitulado o doblado, en tu celular o computadora. ¡Animeyabu, tu portal de anime en línea!",
        img: Tanjiro
    },
    {
        id: 1,
        title: "Kyojuro.",
        description: "Ver anime en línea en HD, subtitulado o doblado, en tu celular o computadora. ¡Animeyabu, tu portal de anime en línea!",
        img: Kyo
    },
    {
        id: 2,
        title: "Inosuke.",
        description: "Ver anime en línea en HD, subtitulado o doblado, en tu celular o computadora. ¡Animeyabu, tu portal de anime en línea!",
        img: Inosuke
    }
]

onMounted(() => {
    
    const track: Element | null  = document.querySelector('.carousel_track')
    const slides = Array.from(track?.children!)

    //dots
    const dotsNav = document.querySelector('.carousel_nav')
    const dots = Array.from(dotsNav?.children!)

    const slideWidth = slides[0].getBoundingClientRect().width
    
    const setSlidePosition = (slide:any, index: number) => {
        slide.style.left = slideWidth * index + 'px'
    }

    const moveSlide = (track: any, currentSlide: any, targetSlide: any) => {
        
        const amountToMove = targetSlide?.style.left

        track.style.transform = `translateX(-${amountToMove})`
        currentSlide?.classList.remove('current-slide')
        targetSlide?.classList.add('current-slide')

    }

    const updateDots = (current: any, next: any) => {
        current?.classList.remove('.current-slide')
        next?.classList.add('current-slide')
    }

    slides.forEach(setSlidePosition)

    idTm.value = setInterval(() => {
        
        let currentSlide: HTMLElement | null | undefined = track?.querySelector('.current-slide')

        if (currentSlide === null ) {
            track?.children[0].classList.add('current-slide')
            moveSlide(track, track?.children[1], track?.children[1].previousElementSibling)
        }

        const nextSlide: Element | null | undefined = currentSlide?.nextElementSibling

        const currentSlideDot = dotsNav?.querySelector('.current-slide')
        const nextDot = currentSlideDot?.nextElementSibling
        
        moveSlide(track, currentSlide, nextSlide)
        updateDots(currentSlideDot, nextDot)

    }, 2000)


    dotsNav?.addEventListener('click', (e: any) => {
        
        const targetDot = e.target.closest()

        if (!targetDot) return

        const currentSlide = track?.querySelector('.current-slide')
        const currentSlideDot = dotsNav.querySelector('.current-slide')
        const targetIndex = dots.findIndex(dot => dot === targetDot)
        
        const targetSlide = slides[targetIndex]

        moveSlide(track, currentSlide, targetSlide)
        updateDots(currentSlideDot, targetDot)

    })

})

onUnmounted(() => {
    clearInterval(idTm.value)
})


</script>

<template>
    <section class="wrapper">
        <div class="carousel">
            <div class="carousel_track-cointainer">
                <ul class="carousel_track">
                    <li :class="'slide slide_item' + ` ${item.id === 0 && 'current-slide'}  `" v-for="item in items" :key="item.id">
                        <CardSlider
                            :title="item.title"
                            :img="item.img"
                            :description="item.description"
                        />
                    </li>
                </ul>
            </div>
            <div class="carousel_nav">
                <button class="carousel_indicator current-slide"></button>
                <button class="carousel_indicator"></button>
                <button class="carousel_indicator"></button>
            </div>
        </div>
    </section>
</template>

<style scoped>
.wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-top: 4rem;
    overflow: hidden;
}

.carousel {
    position: relative;
    width: 90%;
    height: 90%;
    margin: 0 auto;

}

.carousel_track-cointainer {
    height: 100%;
    position: relative;
    overflow: hidden;
}
.carousel_track {
    margin: 0;
    padding: 0;
    list-style: none;
    position: relative;
    height: 100%;
    transition: transform 250ms ease-in;
}

.slide_item {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
}

.carousel_nav {
    display: flex;
    justify-content: center;
    padding: 10px 0;
}

.carousel_indicator {
    border: 0;
    width: 30px;
    height: 10px;
    background-color: rgba(0, 0, 0, 0.3);
    margin: 0 3px;
    cursor: pointer;
}
.carousel_indicator.current_slide {
    background-color: rgba(0, 0, 0, 0.75);
}

</style>