<template>
	<el-config-provider :locale="locale">
		<router-view />
	</el-config-provider>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { ElConfigProvider } from 'element-plus'
// 导入 Element Plus 语言包
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'

import useStore from '@/store'

// 获取系统语言
// const { app } = useStore()
// const language = computed(() => app.language)

const locale = ref(en)

// watch(
// 	language,
// 	value => {
// 		if (value == 'en') {
// 			locale.value = en
// 		} else {
// 			// 默认中文
// 			locale.value = zhCn
// 		}
// 	},
// 	{
// 		// 初始化立即执行
// 		immediate: true
// 	}
// )
</script>

<style scoped></style>
