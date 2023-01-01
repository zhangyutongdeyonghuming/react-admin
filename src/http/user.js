import request from "."

/**
 * 登录
 * @param {username, password} data 
 * @returns login res
 */
export const login = (data) => request({
	url: 'login',
	data,
	method: 'post'
})

/**
 * 获取登录人信息
 */
export const userInfo = () => request({
	url: 'user/info',
	method: 'get'
})