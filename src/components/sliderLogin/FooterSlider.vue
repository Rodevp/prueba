<script lang="ts" setup>

interface Props {
    title: string
    description: string
}

const props = defineProps<Props>()

</script>

<template>
    <h2>
        anime<span>{{ props.title }}</span>
    </h2>
    <p>
        {{ props.description }}
    </p>
</template>

<style scoped>
h2 {
    font-style: normal;
    font-weight: 900;
    font-size: 50px;
    line-height: 94px;
    text-align: center;
    letter-spacing: 0.065em;
    color: #FFFFFF;
}

h2>span {
    color: #CA38ED;
}

p {
    width: 100%;
    font-weight: 400;
    font-size: 12px;
    line-height: 21px;
    text-align: center;
    color: #FFFFFF;
    align-self: center;
}
</style>