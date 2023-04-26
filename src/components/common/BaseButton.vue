<script lang="ts" setup>

interface Props {
    text: string
    handleClick?: Function
    width?: number | string
    height?: number | string
}

const props = defineProps<Props>()

</script>

<template>
    <button :style="{ height: props.height, width: props.width  }" @click="props.handleClick">{{ props.text }}</button>
</template>

<style scoped>
button {
    width: 300px;
    height: 60px;
    border-radius: 10px;
    background: #E487FB;
    color: #3E1149;
}
</style>