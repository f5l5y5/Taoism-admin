import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const Layout = () => import('@/layout/index.vue')

// 参数说明: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
// 静态路由
export const constantRoutes: Array<RouteRecordRaw> = [
	{
		path: '/redirect',
		component: Layout,
		meta: { hidden: true },
		children: [
			{
				path: '/redirect/:path(.*)',
				component: () => import('@/views/redirect/index.vue')
			}
		]
	},
	{
		path: '/',
		component: Layout,
		redirect: '/dashboard',
		children: [
			{
				path: 'dashboard',
				component: () => import('@/views/dashboard/index.vue'),
				name: 'Dashboard',
				meta: { title: 'dashboard', icon: 'homepage', affix: true }
			},
			{
				path: '401',
				component: () => import('@/views/error-page/401.vue'),
				meta: { hidden: true }
			}
		]
	}
]

// 创建路由
const router = createRouter({
	history: createWebHistory(),
	routes: constantRoutes,
	// 刷新时，滚动条位置还原
	scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router
