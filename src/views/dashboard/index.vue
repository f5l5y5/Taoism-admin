<template>
	<div>主页 Taoism-Admin 无为电商平台欢迎您</div>
	<el-button @click="handleGetList">点击获取数据</el-button>
</template>
<script setup lang="ts">
import useStore from '@/store'
import { getList } from '@/api/user'

const handleGetList = async () => {
	const res = await getList({ name: 'jack', age: 18 })
	console.log(res)
}

const { user } = useStore()
// state
const token = user.token
// action
user.getUserInfo().then(data => {
	console.log(data)
})
</script>

<style scoped></style>
