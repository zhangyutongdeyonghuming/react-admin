/**
 * 菜单请求
 */
import request from "."

/**
 * 获取菜单列表
 * @param params 
 */
export const menuList = () => request({
	url: 'menuList',
	method: 'get'
})