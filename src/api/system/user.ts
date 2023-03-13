import { request } from '@/service'
// import type { IP } from './types'

export const getUserInfo = (data: any) =>
	request<any, number>({
		url: '/youlai-admin/api/v1/users/me',
		method: 'get',
		data,
		desc: '获取列表成功'
	})
