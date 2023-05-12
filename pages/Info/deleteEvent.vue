<template>
  <n-button @click="showModal = true" type="error" class="mt-3">
    删除活动
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
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useMessage } from 'naive-ui'

const message = useMessage()
const showModal = ref(false)

function submitCallback() {
  message.success('1212121')
}

function cancelCallback() {
  message.success('111111')
}

</script>

<style scoped>

</style>