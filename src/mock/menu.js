import Mock from 'mockjs'

const Random = Mock.Random

export default [
	{
		url: 'menuList',
		type: 'get',
		response: () => {
			return {
				successful: true,
				message: null,
				data: [{
					name: 'Dashboard',
					path: '/',
					icon: 'DashboardOutlined'
				}, {
					name: '用户管理',
					path: '/account',
					icon: 'UserOutlined',
					children: [{
						name: '个人中心',
						path: '/account/ownInfo'
					}]
				}]
			}
		}
	}
]