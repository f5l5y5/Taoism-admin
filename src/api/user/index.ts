import { request } from '@/service'
import type { IP } from './types'

export const getList = (data: IP) =>
	request<IP, number>({
		url: '/getList',
		method: 'get',
		data,
		desc: '获取列表成功',
		interceptors: {
			requestInterceptors: config => {
				config.headers.single = 'outer'
				console.log('打印***单个接口请求拦截', config)
				return config
			},
			responseInterceptors: res => {
				if (res.data) {
					console.log('打印***单个接口响应拦截', res)
				}
				return res
			}
		}
	})
