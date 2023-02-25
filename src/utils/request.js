import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'
import { localStore } from '@vueuse/core'
import useStore from '@/store'


const service = axios.create({
	baseURL: import.meta.env.VITE_APP_BASE_API,
	timeout: 5000,
	headers: {
		"Content-Type":
	}
})