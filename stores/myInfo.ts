import {defineStore} from "pinia";

export const useMyInfo = defineStore('myInfo', () => {
    const myInfo = ref({
        email: '',
        password: ''
    })
    return{
        myInfo
    }
})