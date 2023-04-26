<script lang="ts" setup>
import BaseInput from '../common/BaseInput.vue'
import BaseButton from '../common/BaseButton.vue'

import { useLogin } from './hooks'

const { email, handleEmail, password, handlePasword } = useLogin()

</script>

<template>
    <div class="wrapper">
        <section class="login">
            <form>
                <img src="../../assets/kimetsu_logo_login.png" alt="logo" width="250" height="120" loading="lazy" />

                <h1 class="title">
                    ひさしぶり!
                </h1>

                <h3 class="subtitle">
                    ¡Hola, te extrañamos!
                </h3>

                <form>
                    <BaseInput type="email" placeholder="Email" label="Email" :update="handleEmail" :text="email" />
                    <BaseInput type="password" placeholder="Contraseña" label="Contraseña" :update="handlePasword"
                        :text="password" />
                    <div class="restarMsg">
                        <p class="restartPassword">¿Olvido la contraseña?</p>
                    </div>
                    <BaseButton height="50px" text="Acceder" />
                </form>
                <div class="socials">
                    <div></div>
                    <h3>Logueate con RRSS</h3>
                    <div></div>
                </div>
                <div class="socials_logo">
                    <img src="../../assets/instragram.png" alt="instragram logo" width="51" height="51" />
                    <img src="../../assets/twitter.png" alt="twitter logo" width="51" height="51" />
                    <img src="../../assets/fb.png" alt="facebook logo" width="51" height="51" />
                </div>
                <p class="register">
                    Quieres registrarte? <span>Registrate</span>
                </p>
            </form>
        </section>
        <section class="content_slider">

        </section>
    </div>
</template>

<style scoped>

.wrapper {
    display: flex;
    width: 100%;
    height: 100%;
}

.login {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    background-color: #000000;
}

.login > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.title {
    font-weight: 900;
    font-size: 30px;
    line-height: 55px;
    text-align: center;
    color: #FFFFFF;
}

.subtitle {
    font-style: italic;
    font-weight: 400;
    font-size: 12px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.065em;
    color: #FFFFFF;
}

.restartPassword {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: #E487FB;
}

.restarMsg {
    display: flex;
    justify-content: end;
    margin-bottom: 0.5rem;
}

.socials {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    margin: 1rem 0;
}

.socials>div {
    width: 100px;
    height: 2px;
    margin: 0 0.5rem;
    background-color: #FFFFFF;
}

.socials>h3 {
    width: 110px;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: #FFFFFF;
}

.socials_logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
}

.socials_logo img {
    margin: 0 1rem;
    cursor: pointer;
}

.register {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.065em;
    color: #FFFFFF;
}

.register>span {
    color: #E487FB;
}
</style>