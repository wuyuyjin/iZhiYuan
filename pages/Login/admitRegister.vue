<template>
  <n-card title="i志愿管理员注册" class="container mx-auto box-border h-96 w-96 login rounded-lg">
    <n-space vertical>
      <n-form
          ref="formRef"
          label-placement="left"
          :label-width="70"
          @submit="onSubmit"
      >
        <n-form-item label="email" path="email">
          <NInput
              v-model:value="email"
              placeholder="Email"
              type="email"
              name="email"
          />
        </n-form-item>
        <div class="text-sm text-red-700">{{ errors.email }}</div>
        <n-form-item label="密码" path="password">
          <NInput
              v-model:value="password"
              placeholder="password"
              type="password"
              name="password"
          />
        </n-form-item>
        <div class="text-sm text-red-700">{{ errors.password }}</div>
        <n-form-item label="确认密码" path="password">
          <NInput
              v-model:value="confirmPassword"
              placeholder="confirmPassword"
              type="password"
              name="confirmPassword"
          />
        </n-form-item>
        <div class="text-sm text-red-700">{{ errors.confirmPassword }}</div>
        <n-form-item path="Code" label="验证码">
          <NInput
              v-model:value="Code"
              placeholder="请输入4位验证码"
              type="text"
              name="Code"
          />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <NButton type="info" @click="sendCode" class="rounded-lg">发送验证码</NButton>
        </n-form-item>

        <div class="text-sm text-red-700">{{ errors.Code }}</div>
        <button class="bg-green-500/100 rounded-lg w-1/4 h-10 text-white">
          注册
        </button>
      </n-form>
    </n-space>
    <template #action>
      <n-space justify="space-between">
        <NuxtLink to="/Login/login">用户登录</NuxtLink>
        <NuxtLink to="/Login/admitLogin">管理员登录</NuxtLink>
        <NuxtLink to="/Login/register">用户注册</NuxtLink>
        <NuxtLink to="/Login/forgetPass">忘记密码？</NuxtLink>
      </n-space>
    </template>
  </n-card>
  <slot/>
</template>

<script setup>
import  {toTypedSchema} from "@vee-validate/zod";
import {useField, useForm} from 'vee-validate';
import * as zod from 'zod'
import axios from "axios";
import api from "~/api/api";
// import {useMessage} from "naive-ui";

const formRef = ref(null)
const validationSchema = toTypedSchema(
    zod.object({
      email: zod.string().nonempty('This is required').email({message: 'Must be a valid email'}),
      password: zod.string().nonempty('This is required').min(6, {message: 'Too short'}),
      confirmPassword: zod.string().nonempty('This is required').min(6, {message: 'Too short'}),
      Code: zod.string().nonempty('This is required').min(4, {message: '请输入四位验证码'})
    })
)


const {handleSubmit, errors} = useForm({
  validationSchema,
});
const router = useRouter()

const {value: email} = useField('email');
const {value: password} = useField('password');
const {value: confirmPassword} = useField('confirmPassword');
const {value: Code} = useField('Code')

function sendCode() {
  const config = {
    email: email.value
  }
  if (email.value === '') {
    alert("请先输入邮箱！")
  } else {
    axios.get(api+'/captcha?email='+email.value)
        .then(response => {
          console.log(response)
          alert('发送成功')
        })
        .catch(errors => {
          console.log(errors)
          alert('发送失败')
        })
  }

  alert('email='+email.value)
}

const onSubmit = handleSubmit(values => {
  if (password.value === confirmPassword.value) {
    // alert(JSON.stringify(values, null, 4));
    axios.post(api+'/Admin/register',{
      email: email.value,
      password: password.value,
      Code: Code.value
    }).then(response => {
      console.log(response)
      alert('注册成功')
      router.push({path: '/Login/login'})
    }).catch(errors => {
      console.log(errors)
      alert('注册失败')
    })
  } else {
    alert("两次输入的密码不一样，请重新输入密码")
  }
});


</script>

<style scoped>
.login {
  margin-top: 100px;
  text-align: center;
}
</style>