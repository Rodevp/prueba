<script lang="ts" setup>
import { ref } from 'vue'
import BaseInput from './common/BaseInput.vue';

const email = ref<string>('')
const password = ref<string>('')

const handleEmail = (value: string) => {
    email.value = value;
}

const handlePasword = (value: string) => {
    password.value = value
}

</script>

<template>
    <section class="section">

        <img src="../assets/kimetsu_logo_login.png" alt="logo" width="300" height="150" loading="lazy" />

        <h1 class="title">
            ひさしぶり!
        </h1>

        <h3 class="subtitle">
            ¡Hola, te extrañamos!
        </h3>

        <form>
            <BaseInput
                type="email"
                placeholder="Email"
                label="Email"
                :update="handleEmail"
                :text="email"
            />
            <BaseInput
                type="password"
                placeholder="Contraseña"
                label="Contraseña"
                :update="handlePasword"
                :text="password"
            />

        </form>
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
    padding: 1rem;
    background: rgb(62, 17, 73);
    background: linear-gradient(0deg, rgba(40, 6, 48, 1) 18%, rgba(214, 65, 250, 1) 100%);
}

.title {
    font-weight: 900;
    font-size: 36px;
    line-height: 55px;
    text-align: center;
    color: #FFFFFF;
}

.subtitle {
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.065em;
    color: #FFFFFF;
}
</style>

