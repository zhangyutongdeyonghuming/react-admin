import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, message as Message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { login } from '../../http/user';
import { loginSelector } from '../../store';
import './index.css';

const LoginPage = () => {

	const navigate = useNavigate()

	const [token, setToken] = useRecoilState(loginSelector)

	/**
	 * 表单提交
	 * @param values 
	 */
	const onFinish = async (values) => {
		const { data } = await login(values)
		Message.success('登陆成功!')
		setToken(data)
		navigate('/')
	}

	return (
		<Card className='loginFormCard'
			hoverable={true}
			bordered={true}
			title="后台管理系统登录"
		>
			<Form name="basic"

				onFinish={onFinish}
				autoComplete='off'
			>
				<Form.Item
					name="username"
					rules={[
						{
							required: true,
							message: '请输入用户名!',
						},
					]}
				>
					<Input
						placeholder="请输入用户名"
						prefix={<UserOutlined />} />
				</Form.Item>

				<Form.Item
					name="password"
					rules={[
						{
							required: true,
							message: '请输入密码!',
						},
					]}
				>
					<Input.Password
						placeholder="请输入密码"
						prefix={<LockOutlined />}
					/>
				</Form.Item>

				<Button block type="primary" htmlType="submit">
					登录
				</Button>
			</Form>
		</Card>
	)
}

export default LoginPage