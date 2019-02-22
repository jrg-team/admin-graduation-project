import axios from 'axios'
import apiPrefix from './api-prefix'
/* tslint:disable:no-string-literal */

const instance = axios.create({
	baseURL: `${apiPrefix}/`,
	timeout: 10000,
	headers: {'X-REQUESTED-WITH': 'XMLHttpRequest'}
});

const signIn = () => {
	window.location.href = ('/login')
}

instance.interceptors.request.use(
	async (config) => {
		config.params = config.params || {}
		config.params['_'] = Math.random()
		const xToken = localStorage.getItem('x-token')
		if (xToken) { config.headers['Authorization'] = `Bearer ${xToken}` }
		return config
	},
	(error) => {
		throw new Error(error)
	}
)

instance.interceptors.response.use((response) => {
	if (response.headers['x-token']) {
		localStorage.setItem('x-token', response.headers['x-token'])
	}
	return response
}, (error) => {
	const {response} = error
	if (response && response.status === 401 && response.data && response.data.reason === 'expired') {
		if (window.confirm('登录超时，需要重新登录')) { signIn() }
	}

	if (response) {
		switch (response.status) {
			case 401:
				signIn()
				break
			case 403:
				window.alert('权限不足')
				break
			case 404:
				window.alert('没有找到对应的内容')
				break
		}
	}
	return Promise.reject(error)
})
/* tslint:enable:no-string-literal */

export default instance
