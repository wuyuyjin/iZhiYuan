import {defineStore} from "pinia";

export const useType = defineStore("type",() => {
    const type = ref({
        type : ''
    })
    return {
        type
    }
})