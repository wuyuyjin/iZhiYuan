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
          <n-message-provider>
          <ChangePasswordComponent />
          </n-message-provider>
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
import axios from "axios";
import api from "~/api/api";
import {useMyInfo} from "~/stores/myInfo";
import {kebabCase} from "unplugin-vue-components";
import {useType} from "~/stores/type";

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
          rel: "noopenner noreferrer"
        },
        // sessionStorage.getItem('type') ==='admit'?'已发布的活动':'查看我参加的活动'
        // useType().type.type === 'admit'?'已发布的活动':'查看我参加的活动'
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

</script>

<style scoped>

</style>