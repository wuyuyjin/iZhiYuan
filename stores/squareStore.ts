import {defineStore} from "pinia";

export const useSquareStore = defineStore("squareStore", () => {
    const squareStore = ref(
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
    const action = ref({
        actionId: ''
    })

    const Boolean = ref()
    return {
        squareStore,
        action,
        Boolean
    }
})