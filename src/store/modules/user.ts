import { defineStore } from 'pinia'
import type { UserState } from './types'

const useUserStore = defineStore({
	id: 'user',
	state: (): UserState => ({
		token: '',
		nickname: ''
	}),
	actions: {
		getUserInfo() {
			return new Promise((resolve, reject) => {
				resolve({ token: '24234', nickname: 'jack' })
				this.token = '123'
				this.nickname = 'jack'
			})
		}
	}
})

export default useUserStore
