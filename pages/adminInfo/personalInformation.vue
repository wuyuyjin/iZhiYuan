<template>
  <div class="container mx-auto w-3/4 mt-5">
    <NavigationBar />
    <n-space vertical class="mt-5">
      <n-layout has-sider>
        <n-layout-sider
            bordered
            collapse-mode="width"
            :collapsed-width="64"
            :width="240"
            show-trigger
            :inverted="inverted"
        >
          <n-menu
              :inverted="inverted"
              :collapsed-width="64"
              :collapsed-icon-size="22"
              :options="menuOptions"
          />
        </n-layout-sider>
        <n-layout>
          <n-space vertical class="app">
            <n-card title="小帅小美的个人信息" size="huge">
              <NButton @click="personal" type="info">获取信息</NButton><br>
              <n-radio-group
                  v-model:value="size"
                  name="left-size"
                  style="margin-bottom: 12px"
              >
              </n-radio-group>
              <n-form
                  ref="formRef"
                  :model="model"
                  label-placement="left"
                  label-width="auto"
                  require-mark-placement="right-hanging"
                  :size="size"
                  :style="{
      maxWidth: '800px'
    }"
              >
                <n-form-item label="email" path="email">
                  <n-input v-model:value="model.email" :disabled="true"/>
                </n-form-item>
                <n-form-item label="password" path="password">
                  <n-input v-model:value="model.password" :disabled="true"/>
                </n-form-item>
              </n-form>
            </n-card>
          </n-space>
        </n-layout>
      </n-layout>
    </n-space>
  </div>
</template>


<script setup lang="ts">
import NavigationBar from "~/pages/FunctionalArea/navigationBar.vue";
import {h, Component} from 'vue'
import {NIcon} from 'naive-ui'
import {
  BookOutline as BookIcon,
} from '@vicons/ionicons5'

import {useMyInfo} from "~/stores/myInfo";
import axios from "axios";
import api from "~/api/api";
import {useType} from "~/stores/type";

const model = ref({
  email: '',
  password: '',
})

model.value = useMyInfo().myInfo

function renderIcon(icon: Component) {
  return () => h(NIcon, null, {default: () => h(icon)})
}

const menuOptions = [
  {
    label: () => h(
        "a",
        {
          href: "/adminInfo/personalInformation",
          target: "_self",
          rel: "noopenner noreferrer",

        },
        "个人信息"
    ),
    key: "hear-the-wind-sing",
    icon: renderIcon(BookIcon)
  },
  {
    label: () => h(
        "a",
        {
          href: "/adminInfo/viewReleaseEvent",
          target: "_self",
          rel: "noopenner noreferrer",
        },
        '查看活动'
    ),
    key: 'pinball-1973',
    icon: renderIcon(BookIcon),
  },
  {
    label: () => h(
        "a",
        {
          href: "/adminInfo/changePassword",
          target: "_self",
          rel: "noopenner noreferrer"

        },
        "修改密码"
    ),
    key: 'a-wild-sheep-chase',
    disabled: true,
    icon: renderIcon(BookIcon)
  },
  {
    label: '暂时没有想好',
    key: 'dance-dance-dance',
    icon: renderIcon(BookIcon),
    disabled: true
  }
]

function personal(){
  if (sessionStorage.getItem('type') === 'admit') {
    axios.get(api + '/Admin/showMyMessage', {
      headers: {token: sessionStorage.getItem('token')}
    })
        .then(response => {
          console.log(response)
          useMyInfo().myInfo.email = response.data.data.email
          useMyInfo().myInfo.password = response.data.data.password
          // useMyInfo().myInfo = response.data.data
          console.log('useMyInfo().myInfo=' + useMyInfo().myInfo.email)
        }).catch(errors => {
      console.log(errors)
    })
  }
  else {
    axios.get(api + '/User/showMyMessage', {
      headers: {token: sessionStorage.getItem('token')}
    })
        .then(response => {
          console.log(response)
          useMyInfo().myInfo.email = response.data.data.email
          useMyInfo().myInfo.password = response.data.data.password
          // useMyInfo().myInfo = response.data.data
          console.log('useMyInfo().myInfo=' + useMyInfo().myInfo.email)
        }).catch(errors => {
      console.log(errors)
    })
  }
}



</script>

<style scoped>
.app {
  margin-top: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
}

n-card {
  margin: auto;
}
</style>