<template>

  <n-card title="i志愿用户登录" class="container mx-auto box-border h-96 w-96 login rounded-lg">
    <n-space vertical>
      <n-form
          ref="formRef"
          label-placement="left"
          :label-width="50"
          @submit="onSubmit"
      >
        <n-form-item label="email" path="email">
          <NInput
              v-model:value="email"
              type="email"
              placeholder="Email"
              name="email"
          />
        </n-form-item>
        <div class="text-xs text-red-700">{{ errors.email }}</div>
        <n-form-item label="密码" path="password">
          <NInput
              v-model:value="password"
              placeholder="password"
              type="password"
              name="password"
          />

        </n-form-item>
        <div class="text-xs text-red-700">{{ errors.password }}</div>
        <br/>
        <button class="bg-green-500/100 rounded-lg w-1/4 h-10 text-white">
          登录
        </button>
      </n-form>
    </n-space>
    <template #action>
      <n-space justify="space-between">
        <NuxtLink to="/Login/register">用户注册</NuxtLink>
        <NuxtLink to="/Login/admitRegister">管理员注册</NuxtLink>
        <NuxtLink to="/Login/admitLogin">管理员登录</NuxtLink>
        <NuxtLink to="/Login/forgetPass">忘记密码？</NuxtLink>
      </n-space>
    </template>
  </n-card>
</template>

<script setup lang="ts">
import {toTypedSchema} from "@vee-validate/zod";
import {useField, useForm} from 'vee-validate';
import * as zod from 'zod'
import api from "~/api/api";
import axios from "axios";
import {useSquareStore} from "~/stores/squareStore";
import {useType} from "~/stores/type";

const formRef = ref(null)
const validationSchema = toTypedSchema(
    zod.object({
      email: zod.string().nonempty('This is required').email({message: '请输入正确的邮箱格式'}),
      password: zod.string().nonempty('This is required').min(6, {message: '密码至少需要6位'}),
    })
)


const {handleSubmit, errors} = useForm({
  validationSchema,
});

const {value: email} = useField('email');
const {value: password} = useField('password');
const router = useRouter()

const onSubmit = handleSubmit(values => {
  // alert(JSON.stringify(values, null, 2));
  // alert("email="+email.value)

  // 登录
  const config = {
    email: email.value,
    password: password.value
  }
  axios.post(api + '/User/login', config)
      .then(response => {
        console.log(111111)
        // console.log(response.data)
        sessionStorage.setItem('token',response.data.data.token)
        sessionStorage.setItem('type',response.data.data.type)
        useType().type.type = response.data.data.type
        // console.log(sessionStorage.getItem('type'))
        // console.log(sessionStorage.getItem('token'))
        // console.log(response)
        router.push({path: '/FunctionalArea/square'})
        // alert(12121212112121)
      })
      .catch(errors => {
        console.log(errors)
        console.log(121212)
      })
  // router.push({path: '/FunctionalArea/square'})

  // 获取首页信息
  axios.get(api+'/Activity/search')
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
});

</script>

<style scoped>
.login {
  margin-top: 100px;
  text-align: center;
}
</style>