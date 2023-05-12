<template>
  <ChangePasswordComponentModel />
  <n-data-table
      :columns="columns"
      :data="data"
      :pagination="pagination"
      :bordered="false"
  />

</template>

<script setup lang="ts">

import { useMessage } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'
import ChangePasswordComponentModel from "~/components/Modal/changePasswordComponentModel.vue";

type Song = {
  name: number
  password: string
}

const createColumns = ({
                         modify,
                       }: {
  modify: (row: Song) => void
}): DataTableColumns<Song> => {
  return [
    {
      title: 'name',
      key: 'name',
    },
    {
      title: 'password',
      key: 'password',
    },
  ]
}

const data: Song[] = [
  { name: 3, password: 'Wonderwall'},
]

const message = useMessage()

const columns = createColumns({
  modify(row: Song) {
    // message.info(`modify ${row.name}`)

  },
})


const pagination = false as const

</script>
