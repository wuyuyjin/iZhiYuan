<template>

  <NButton @click="personal" type="info">获取信息</NButton>
  <n-data-table
      pagination-behavior-on-filter="first"
      :columns="columns"
      :pagination="pagination"
      :data="viewReleaseEventInfo().useViewReleaseEventInfo"
  />
  <!--  data是用来获取当前vue文件的数据-->
  <!--  {{data}}-->
  <!--  data.value是用来获取ts文件里的数据-->
  <!--  {{ data.value }}-->
</template>

<script lang="ts" setup>
import {DataTableColumns} from 'naive-ui'
import axios from "axios";
import api from "~/api/api";
import {viewReleaseEventInfo} from "~/stores/viewReleaseEventInfo";
import {useType} from "~/stores/type";

type RowData = {
  beginTime: null,
  belongingAdimit: string,
  id: string,
  lateTime: null,
  location: string,
  maxpeople: string,
  name: string,
  time: string
}

const columns: DataTableColumns<RowData> = [
  {
    title: '开始时间',
    key: 'beginTime'
  },
  {
    title: '结束时间',
    key: 'lateTime',
  },
  {
    title: '举办方',
    key: 'belongingAdimit'
  },
  {
    title: 'id',
    key: 'id'
  },
  {
    title: '活动地点',
    key: 'location',
  },
  {
    title: '人数',
    key: 'maxpeople',
  },
  {
    title: '活动名称',
    key: 'name',
  },
  {
    title: '志愿时长',
    key: 'time'
  }
]



const data: RowData[] = [
  {
    beginTime: null,
    belongingAdimit: '',
    id: '',
    lateTime: null,
    location: '',
    maxpeople: '',
    name: '',
    time: ''
  },
]



// data.value = viewReleaseEventInfo().useViewReleaseEventInfo

const personal = (row: RowData) => {
  if (sessionStorage.getItem('type') == 'admit') {
    axios.get(api + '/Admin/findMyActivity', {
      headers: {token: sessionStorage.getItem('token')}
    })
        .then(response => {
          // console.log(row)
          viewReleaseEventInfo().useViewReleaseEventInfo = response.data.data
          console.log(viewReleaseEventInfo().useViewReleaseEventInfo)
          // console.log(viewReleaseEventInfo().useViewReleaseEventInfo)
          console.log(22222)
          // data.value = response.data.data

          console.log(data.value)
        }).catch(errors => {
      console.log(1111)
      console.log(errors)

    })
  } else {
    axios.get(api + '/User/findMyAllActivity', {
      headers: {token: sessionStorage.getItem('token')}
    })
        .then(response => {
          // console.log(row)
          viewReleaseEventInfo().useViewReleaseEventInfo = response.data.data
          // console.log(viewReleaseEventInfo().useViewReleaseEventInfo)
          console.log(22222)
          // data.value = response.data.data
          console.log(data.value)
        }).catch(errors => {
      console.log(1111)
      console.log(errors)
    })
  }

}

</script>