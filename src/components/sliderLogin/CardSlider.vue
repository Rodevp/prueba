<script lang="ts" setup>
import FooterSlider from './FooterSlider.vue';

interface Props {
    title: string
    description: string
    img: string
}

const props = defineProps<Props>()

</script>

<template>
    <div>
        <div class="content_character">
            <div class="circle">

            </div>
            <div class="content_img">
                <img width="360" height="360" :src="props.img" loading="lazy" />
            </div>
        </div>
        <FooterSlider :title="props.title" :description="props.description" />
    </div>
</template>

<style scoped>
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
    height: 380px;
    border-radius: 9999%;
    background-color: #E487FB;
}

.content_img {
    position: absolute;
    top: 100px;
}
</style>