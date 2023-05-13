<template>
  <n-button @click="showModal = true" type="error" class="mt-3">
    签退活动
  </n-button>
  <n-modal
      v-model:show="showModal"
      preset="dialog"
      title="签退"
      content="你确认签退?"
      positive-text="确认"
      negative-text="取消"
      @positive-click="submitCallback"
      @negative-click="cancelCallback"
  >
    请让管理员给你签退验证码：<NInput v-model:value="SingOutCode"></NInput>
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
const SingOutCode = ref(null)
function submitCallback() {
  const formData = new FormData()
  formData.append('SingOutCode', SingOutCode.value)
  formData.append('id', id)

  axios.post(api+'/User/singoutActivity', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'token': sessionStorage.getItem('token')
    }
  }).then(response => {
    console.log(response)
    const Boolean = true
    useSquareStore().Boolean = Boolean
    message.success('签退成功！666')
  }).catch(errors => {
    console.log(errors)
    message.error('签退失败，请联系管理员！')
  })
}

function cancelCallback() {
  message.success('111111')
}

</script>

<style scoped>

</style>