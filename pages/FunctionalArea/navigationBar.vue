<template>
  <Disclosure as="nav" class="bg-gray-800 " v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          Mobile menu button
          <DisclosureButton
              class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true"/>
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true"/>
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="hidden sm:ml-10 sm:block">
            <div class="flex space-x-10">
              <NuxtLink to="/FunctionalArea/square"
                        class="bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                <div @click="square">square</div>
              </NuxtLink>
              <n-input placeholder="搜索" type="text" @keyup.enter="search" v-model:value="searchText">
                <template #prefix>
                  <n-icon :component="FlashOutline"/>
                </template>
              </n-input>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button type="button"
                  class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" @click="dianji">
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true"/>
          </button>

          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-3">
            <div>
              <MenuButton
                  class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full"
                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                     alt=""/>
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100"
                        enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                        leave-active-class="transition ease-in duration-75"
                        leave-from-class="transform opacity-100 scale-100"
                        leave-to-class="transform opacity-0 scale-95">
              <MenuItems
                  class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem v-slot="{ active }">
                  <NuxtLink to="/adminInfo/personalInformation"
                            :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">
                    <div @click="myInfo">我的</div>
                  </NuxtLink>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <NuxtLink to="/Login/register"
                            :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">注册
                  </NuxtLink>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <NuxtLink href="#"
                            :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">
                    <div @click="logout">退出登录</div>
                  </NuxtLink>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
                          :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']"
                          :aria-current="item.current ? 'page' : undefined">{{ item.name }}
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup lang="ts">
import {Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue'
import {Bars3Icon, BellIcon, XMarkIcon} from '@heroicons/vue/24/outline'
import api from "~/api/api";
import axios from "axios";
import {ref, computed} from 'vue';
import {useMyInfo} from "~/stores/myInfo";
import {useSquareStore} from "~/stores/squareStore";
import {viewReleaseEventInfo} from "~/stores/viewReleaseEventInfo";
import {selectOne} from "css-select";
import {useType} from "~/stores/type";
import {useSearchStore} from "~/stores/searchStore";

const searchText = ref('')
const FlashOutline = ref()
// const message = useMessage()
const router = useRouter()

const search = () => {
  axios.get(api + `/Activity/searchLike?nameLike=${searchText.value}`).then(response => {
    console.log(response.data.data)
    useSearchStore().searchStore = response.data.data
    console.log(useSearchStore().searchStore)
    console.log(11111111)
  }).catch(errors => {
    console.log(errors)
    console.log(22222222)
  })
}

function myInfo() {

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
  } else {
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

const square = () => {
  axios.get(api + '/Activity/search')
      .then(response => {
        console.log(1111)
        console.log(response)
        useSquareStore().squareStore = response.data.data
        console.log(useSquareStore().squareStore)
      })
      .catch(errors => {
        console.log(3333)
        console.log(errors)
      })
}


const logout = () => {
  axios.get(api + '/Admin/logout')
      .then(response => {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('type')
        console.log(response)
        router.push({path: '/Login/login'})
      }).catch(errors => {
    console.log(errors)
    alert('退出失败')
  })
  router.push({path: '/Login/login'})
}

const dianji = () => {
  alert('111111111')
}

</script>