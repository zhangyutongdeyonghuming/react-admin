import Mock from 'mockjs';
import menu from './menu';
import user from './user';

const mockList = [
	...user,
	...menu
]

mockList.forEach(({ url, type, response }) => {
	Mock.mock(url, type, response)
})