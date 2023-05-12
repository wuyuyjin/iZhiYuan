import {defineStore} from "pinia";

export const useSearchStore = defineStore('searchStore',() => {
    const searchStore = ref(
        [{
            beginTime: null,
            belongingAdimit: '',
            id: '',
            lateTime: null,
            location: '',
            maxpeople: '',
            name: '',
            time: ''
        }]
    )
    return {
        searchStore
    }
})