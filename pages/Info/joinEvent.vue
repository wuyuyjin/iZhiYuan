<template>
  <n-button @click="showModal = true" type="warning" class="mt-3">
    参加活动
  </n-button>
  <n-modal
      v-model:show="showModal"
      preset="dialog"
      title="参加活动"
      content="你确认参加该活动?"
      positive-text="确认"
      negative-text="算了"
      @positive-click="submitForm"
      @negative-click="cancelCallback"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useMessage } from 'naive-ui'
import { useSquareStore } from "~/stores/squareStore";
import axios from "axios";
import api from "~/api/api";

const message = useMessage()
const showModal = ref(false)
const id = useSquareStore().action.actionId

function submitForm() {
  const formData = new FormData();
  formData.append('id', id);

  axios({
    method: 'post',
    url: api + '/User/applyActivity',
    data: formData,
    headers: {
      token: sessionStorage.getItem('token'),
      'Content-Type': 'multipart/form-data'
    }
  })
      .then(response => {
        console.log(response.data);
        const Boolean = true;
        useSquareStore().Boolean = Boolean;
        message.success('参加成功！666');
      })
      .catch(errors => {
        console.log(errors);
        message.error('未参加成功，请重新点击！');
      });
}

function cancelCallback() {
  message.success('111111')
}

</script>

<style scoped>

</style>
