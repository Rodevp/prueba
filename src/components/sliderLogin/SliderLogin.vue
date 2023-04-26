<script setup lang="ts">
import FooterSlider from './FooterSlider.vue';

</script>

<template>
    <section class="wrapper">
        <div class="content_character">
            <div class="circle">

            </div>
            <div class="content_img">
                <img width="360" height="360" src="../../assets/tanjiro.png" loading="lazy" />
            </div>
        </div>
        <FooterSlider
            title="yabu."
            description="Ver anime en línea en HD, subtitulado o doblado,
            en tu celular o computadora.
            ¡Animeyabu, tu portal de anime en línea!"
        />
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
}

.content_character {
    align-self: center;
    margin-bottom: 7.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.circle {
    width: 370px;
    height: 370px;
    border-radius: 9999%;
    background-color: #E487FB;
}

.content_img {
    position: absolute;
    top: 160px;
}
</style>