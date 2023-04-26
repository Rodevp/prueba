<script setup lang="ts">

interface Props {
    label: string | boolean
    text: string
    update: Function
    width?: number | string
    height?: number | string
}

const props = defineProps<Props>();

const updateValue = (event: Event) => {
    const target = event.target as HTMLInputElement;
    props.update(target.value);
};

</script>

<template>
    <div class="input-wrap">
        <label v-if="props.label">{{ props.label }}</label>
        <input 
            type="text"
            :value="props.text"
            @input="updateValue"
            v-bind="$attrs" 
            :style="{ height: props.height, width: props.width  }"
        />
    </div>
</template>

<style scoped>
.input-wrap {
    display: flex;
    flex-direction: column;
}

input {
    width: 300px;
    height: 60px;
    margin-bottom: 1rem;
    background: rgba(255, 255, 255, 0.47);
    border: 2px solid #FFFFFF;
    border-radius: 10px;
    padding: 0 0.5rem;
}

label {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #FFFFFF;
    margin-bottom: 0.2rem;
}
</style>