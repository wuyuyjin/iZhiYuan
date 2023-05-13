<!--后端暂时没写-->
<template>
  <n-button @click="showModal = true" type="info" class="mt-4">
    修改活动
  </n-button>
  <n-modal
      v-model:show="showModal"
      preset="dialog"
      title="确认"
      content="你确认?"
      positive-text="确认"
      negative-text="算了"
      @positive-click="submitCallback"
      @negative-click="cancelCallback"
  >
    <n-card title="发布活动">
      <n-form
          ref="formRef"
          :model="model.value"
          :rules="rules"
          label-placement="left"
          label-width="auto"
          require-mark-placement="right-hanging"
          :size="'medium'"
          :style="{
      maxWidth: '640px'
    }"
      >
        <n-form-item label="活动名称" path="name">
          <n-input :span="12" v-model:value="model.name" placeholder="输入活动名称"/>
        </n-form-item>
        <n-form-item label="Input Number" path="time">
          <n-input-number :span="12" v-model:value="model.time" placeholder="输入志愿时长"/>
        </n-form-item>
        <n-form-item label="开始时间" path="beginTime">
          <n-date-picker :span="12" v-model:value="model.beginTime" type="datetime"/>
        </n-form-item>
        <n-form-item label="结束时间" path="lateTime">
          <n-date-picker :span="12" v-model:value="model.lateTime" type="datetime"/>
        </n-form-item>
        <n-form-item label="活动地点" path="location">
          <n-input :span="12" v-model:value="model.location" placeholder="输入活动名称"/>
        </n-form-item>
        <n-form-item label="最多参与人数" path="maxpeople">
          <n-input :span="12" v-model:value="model.maxpeople" placeholder="输入活动名称"/>
        </n-form-item>
      </n-form>
    </n-card>
  </n-modal>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {FormInst, useMessage} from 'naive-ui'
import {useSquareStore} from "~/stores/squareStore";
import {storeToRefs} from "pinia";
import axios from "axios";
import api from "~/api/api";




const formRef = ref<FormInst | null>(null)
const model = ref({
  name: '',
  time: '',
  beginTime: null,
  lateTime: null,
  location: '',
  maxpeople: ''
})

const rules = ref({
  name: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入活动名称'
  },
  time: {
    type: 'number',
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入志愿时长'
  },
  beginTime: {
    type: 'number',
    required: true,
    trigger: ['blur', 'change'],
    message: '请输入 datetimeValue'
  },
  lateTime: {
    type: 'number',
    required: true,
    trigger: ['blur', 'change'],
    message: '请输入 datetimeValue'
  },
  location: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入活动地点'
  },
  maxpeople: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入人数'
  },
})

const message = useMessage()
const showModal = ref(false)

function submitCallback() {
  const date1 = model.value.beginTime
  const date2 = model.value.lateTime
  const beginTime = new Date(date1)
  const lateTime = new Date(date2)
  console.log(JSON.stringify(beginTime.toLocaleString()))

  const data = {
    name: model.value.name,
    time: model.value.time,
    beginTime: beginTime.toLocaleString(),
    lateTime: lateTime.toLocaleString(),
    location: model.value.location,
    maxpeople: model.value.maxpeople
  }
  axios.post(api+'/Admin/releaseActivity',data)
      .then((response) => {
        useSquareStore().squareStore = model.value
        console.log(response.data)
        message.success('发布成功')
      })
      .catch((errors) => {
        console.log(errors)
        message.error('发布失败')
      })
  // useSquareStore().squareStore = model.value
  // message.success('成功')

}


function cancelCallback() {
  message.warning('111111')
}

</script>

<style scoped>

</style>