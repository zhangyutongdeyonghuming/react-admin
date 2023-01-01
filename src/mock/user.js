import Mock from 'mockjs'

const Random = Mock.Random

export default [
	/**
	 * 登录
	 */
	{
		url: 'login',
		type: 'post',
		response: () => {
			return {
				successful: true,
				message: '登录成功!',
				data: 'random-token'
			}
		}
	},
	{
		url: 'user/info',
		type: 'get',
		response: () => {
			return {
				successful: true,
				message: null,
				data: {
					id: Random.natural(1, 100),
					nickname: Random.cname(),
					avatar: 'https://p3-passport.byteimg.com/img/user-avatar/91cdea559783d73168410d491d1e89aa~100x100.awebp'
				}
			}
		}
	}
]