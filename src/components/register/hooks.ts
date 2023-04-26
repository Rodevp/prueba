import { ref } from "vue"

export function useLogin() {
    
    const email = ref<string>('')
    const password = ref<string>('')

    const handleEmail = (value: string) => {
        email.value = value
    }
    
    const handlePasword = (value: string) => { 
        password.value = value
    }

    return {
        email,
        password,
        handleEmail,
        handlePasword
    }

}