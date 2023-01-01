import axios from "axios";

/**
 * axios
 */
const request = axios.create({
	// baseURL: 'http://localhost:8080/api',
	timeout: 3000,
	withCredentials: true,
	headers: {
		get: {
			'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
		},
		post: {
			'Content-Type': 'application/json;charset=utf-8'
		}
	}
})

/**
 * 请求拦截器
 */
request.interceptors.request.use(config => {
	const token = localStorage.getItem('token')
	if (token) {
		config.headers = {
			"token": token
		}

	}
	return config;
})

/**
 * 返回拦截
 */
request.interceptors.response.use((response) => {
	// 获取接口返回结果
	let { data } = response
	return data
}, (err) => {
	console.error(err)
});

export default request