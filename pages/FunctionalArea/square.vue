<template>
    <div class="container mx-auto w-3/4 mt-5">
      <NavigationBar/>
      <n-list v-for="(action, index) in useSearchStore().searchStore" :key='index'>
        <n-card title="志愿活动" hoverable class="mt-3 bg-slate-100 rounded-lg" title-placement="left">
          <n-list-item>
            <template #prefix>
<!--              <img src="../../assets/pictures/images.jpg" class="space-x-1" alt="啥也没有">-->
              <img :src='picture+action.name' class="space-x-1 h-28 w-28" alt="你把图片上传就可以看到了">
            </template>
            <template #suffix class="mt-9">
              <!--              参加活动-->
              <div @click="join({index : index})" v-show="useType().type.type === 'user'">
                <n-message-provider >
                  <JoinEvent/>
                </n-message-provider>
              </div>
              <!--              修改活动-->
              <!--              <n-message-provider>-->
              <!--                <AlterEvent/>-->
              <!--              </n-message-provider>-->

              <!--              因为组件之间数据没有传成功，所以先放这-->
              <!--              删除活动-->
              <!--              <n-message-provider>-->
              <!--                <DeleteEvent/>-->
              <!--              </n-message-provider>-->

              <div v-show="useType().type.type === 'admit'">
                <n-button @click="remove({index : index})" type="error" class="mt-4">
                  删除活动
                </n-button>
              </div>

              <div v-show="useType().type.type === 'user'">
                <div @click="sigIn(index)">
                <n-message-provider>
                  <SignIn />
                </n-message-provider>
                </div>
                <div @click="signOut(index)">
                <n-message-provider>
                  <SignOut />
                </n-message-provider>
                </div>
              </div>
            </template>


            <n-thing title="活动名称">
              {{ action.name }} <br>
              活动时长：{{ action.time }}<br>
              活动开始时间：{{ new Date(action.beginTime).toLocaleString() }} <br>
              活动结束时间：{{ new Date(action.lateTime).toLocaleString() }} <br>
              活动地点：{{ action.location }} <br>
              最多{{ action.maxpeople }}个人 <br>
              <!--              {{ useSquareStore().squareStore }}-->
            </n-thing>
          </n-list-item>
        </n-card>
      </n-list>

      <!--      添加活动-->
      <div v-if="useType().type.type === 'admit'">
      <n-message-provider>
        <AddEvent/>
      </n-message-provider>
      </div>
      <n-list v-for="(action, index) in useSquareStore().squareStore" :key='index'>
        <n-card title="志愿活动" hoverable class="mt-3 bg-slate-100 rounded-lg" title-placement="left">
          <n-list-item>
            <template #prefix>
              <img :src="picture+action.name" class="space-x-1 h-28 w-28" alt="你把图片上传就可以看到了">
            </template>
            <template #suffix class="mt-9">
              <!--              参加活动-->
              <div @click="join({index : index})" v-if="useType().type.type === 'user'">
              <n-message-provider >
                <JoinEvent/>
              </n-message-provider>
              </div>
              <!--              修改活动-->
<!--              <n-message-provider>-->
<!--                <AlterEvent/>-->
<!--              </n-message-provider>-->

<!--              因为组件之间数据没有传成功，所以先放这-->
              <!--              删除活动-->
<!--              <n-message-provider>-->
<!--                <DeleteEvent/>-->
<!--              </n-message-provider>-->

              <div v-if="useType().type.type === 'admit'">
              <n-button @click="remove({index : index})" type="error" class="mt-4">
                删除活动
              </n-button>
              </div>

              <div>
                <n-message-provider>
                  <SignIn />
                </n-message-provider>
                <n-message-provider>
                  <SignOut />
                </n-message-provider>
              </div>
            </template>
            <n-thing title="活动名称">
              {{ action.name }} <br>
              活动时长：{{ action.time }}<br>
              活动开始时间：{{ new Date(action.beginTime).toLocaleString() }} <br>
              活动结束时间：{{ new Date(action.lateTime).toLocaleString() }} <br>
              活动地点：{{ action.location }} <br>
              最多{{ action.maxpeople }}个人 <br>
<!--              {{ useSquareStore().squareStore }}-->
            </n-thing>
          </n-list-item>
        </n-card>
      </n-list>
    </div>

</template>

<script setup lang="ts">
import NavigationBar from "~/pages/FunctionalArea/navigationBar.vue";
import AddEvent from "~/pages/Info/addEvent.vue";
import JoinEvent from "~/pages/Info/joinEvent.vue";
import AlterEvent from "~/pages/Info/alterEvent.vue";
import DeleteEvent from "~/pages/Info/deleteEvent.vue";
import {useSquareStore} from "~/stores/squareStore";
import {storeToRefs} from "pinia";
import axios from "axios";
import api from "~/api/api";
import {useType} from "~/stores/type";
import {useSearchStore} from "~/stores/searchStore";
import SignIn from "~/pages/Info/signIn.vue";
import SignOut from "~/pages/Info/signOut.vue";

const picture = 'http://ru83u0iyp.hn-bkt.clouddn.com/'

const actions = ref([{
  name: "111",
  time: "",
  beginTime: null,
  lateTime: null,
  location: "",
  maxpeople: "",
  id: ""
}])


actions.value = useSquareStore().squareStore
const deletedActions = ref([]);

const join = ({index}: { index: any }) => {
  useSquareStore().action.actionId = actions.value[index].id;
}

function remove({index}: { index: any }){
  const deletedAction = actions.value.splice(index, 1)[0];
  // actions.value.splice(index,1)
  // console.log(actions.value)
  deletedActions.value.push(deletedAction);
  console.log(deletedActions.value)
  console.log(deletedAction.id)
  axios.delete(api+'/Admin/deleteActivity',{
    data:{
      id : deletedAction.id
    },
    headers: {token: sessionStorage.getItem('token')}
  }).then(response => {
    console.log(response)
    alert('删除成功')
  }).catch(errors => {
    console.log(errors)
    alert('删除失败')
  })
}

const sigIn = (index: any) => {
  useSquareStore().action.actionId = actions.value[index].id;
}

const signOut = (index: any) => {
  useSquareStore().action.actionId = actions.value[index].id;
}

</script>

<style scoped>
n-card {
  max-width: 600px;
}
</style>