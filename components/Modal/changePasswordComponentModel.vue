<template>
  <n-button @click="showModal = true" type="info">
    修改密码
  </n-button>
  <n-modal
      v-model:show="showModal"
      :mask-closable="false"
      preset="dialog"
      title="确认"
      content="你确认"
      positive-text="确认"
      negative-text="算了"
      @positive-click="onPositiveClick"
      @negative-click="onNegativeClick"
  >
    <n-card title="修改密码">
      <n-form
          ref="formRef"
          :model="model"
          :rules="rules"
          label-placement="left"
          label-width="auto"
          require-mark-placement="right-hanging"
          :size="'medium'"
          :style="{
      maxWidth: '640px'
    }"
      >
        <n-form-item label="Email" path="email">
          <n-input :span="12" v-model:value="model.email" placeholder="输入Email"/>
        </n-form-item>
        <n-form-item label="新密码" path="location">
          <n-input :span="12" v-model:value="model.newPassword" placeholder="输入新密码"/>
        </n-form-item>
      </n-form>
    </n-card>
  </n-modal>

</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {FormInst, useMessage} from 'naive-ui'
import axios from "axios";
import api from "~/api/api";

const message = useMessage()
const showModalRef = ref(false)

const showModal = showModalRef

const formRef = ref<FormInst | null>(null)
const model = ref({
  email: '',
  newPassword: ''
})

const rules = ref({
  email: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入活动名称'
  },
  password: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入活动地点'
  },
})

function onNegativeClick() {
  showModalRef.value = false
  message.error('修改失败')
}

function onPositiveClick() {
  message.success('修改成功')
  showModalRef.value = false

  const config = {
    email: model.value.email,
    newPassword: model.value.newPassword
  }

  axios.put(api + '/Admin/updataPassword', config)
      .then(response => {
        console.log(response)
        message.success('修改成功')
      }).catch(errors => {
    console.log(errors)
    message.error('修改失败')
  })
}


</script>