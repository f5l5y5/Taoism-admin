import { defineStore } from 'pinia'
import type { UserState } from './types'

import { getUserInfo } from '@/api/system/user'

const useUserStore = defineStore({
	id: 'user',
	state: (): UserState => ({
		token: '',
		nickname: ''
	}),
	actions: {
		getUser() {
			// getUserInfo({}).then(res => const {} = data)
			// return new Promise((resolve, reject) => {
			// 	resolve({ token: '24234', nickname: 'jack' })
			// 	this.token = '123'
			// 	this.nickname = 'jack'
			// })
		}
	}
})

export default useUserStore
