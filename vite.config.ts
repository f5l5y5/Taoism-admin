// import { defineConfig } from 'vite'
import { UserConfig, ConfigEnv, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
	// 获取 .env 环境配置文件
	const env = loadEnv(mode, process.cwd())
	return {
		plugins: [
			vue(),
			createSvgIconsPlugin({
				// 指定需要缓存的图标文件夹
				iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
				// 指定symbolId格式
				symbolId: 'icon-[dir]-[name]'
			})
		],
		server: {
			host: 'localhost',
			port: Number(env.VITE_APP_PORT),
			open: true,
			proxy: {
				[env.VITE_APP_BASE_API]: {
					// target: 'https://api.youlai.tech',
					target: 'http://localhost:8000',
					changeOrigin: true,
					rewrite: path => path.replace(new RegExp('^' + env.VITE_APP_BASE_API), '')
				}
			}
		},

		resolve: {
			alias: {
				'@': path.resolve('./src') // 相对路径别名配置，使用 @ 代替 src
			}
		}
	}
}
