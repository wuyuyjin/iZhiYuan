import {defineStore} from "pinia";

export const viewReleaseEventInfo = defineStore('useViewReleaseEventInfo',()=>{

    const useViewReleaseEventInfo =[
        {
            beginTime: null,
            belongingAdimit: '',
            id: '',
            lateTime: null,
            location: '',
            maxpeople: '',
            name: '',
            time: ''
        }]

    return {
        useViewReleaseEventInfo
    }
})