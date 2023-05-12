<template>
  <n-button @click="showModal = true" type="info" class="mt-3">
    签到活动
  </n-button>
  <n-modal
      v-model:show="showModal"
      preset="dialog"
      title="签到"
      content="你确认签到?"
      positive-text="确认"
      negative-text="取消"
      @positive-click="submitCallback"
      @negative-click="cancelCallback"
  >
   请让管理员给你签到验证码：<NInput v-model:value="SinginCode"></NInput>
  </n-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useMessage } from 'naive-ui'
import {useSquareStore} from "~/stores/squareStore";
import axios from "axios";
import api from "~/api/api";

const message = useMessage()
const showModal = ref(false)
const id = useSquareStore().action.actionId
const SinginCode = ref(null)
function submitCallback() {
  const formData = new FormData()
  formData.append('SinginCode', SinginCode.value)
  formData.append('id', id)

  axios.post(api+'/User/singinActivity', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'token': sessionStorage.getItem('token')
    }
  }).then(response => {
    console.log(response)
    const Boolean = true
    useSquareStore().Boolean = Boolean
    message.success('签到成功！666')
  }).catch(errors => {
    console.log(errors)
    message.error('签到失败，请联系管理员！')
  })
  // alert(SinginCode.value)
  // alert(useSquareStore().action)
}

function cancelCallback() {
  message.success('111111')
}

</script>

<style scoped>

</style>