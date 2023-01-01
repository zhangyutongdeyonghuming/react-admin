import * as Icon from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { menuList } from '../../http/menu';
import { loginSelector } from "../../store";
const { Header, Content, Sider } = Layout;

const HomePage = () => {

	const navigate = useNavigate()
	const location = useLocation()

	const [token] = useRecoilState(loginSelector)
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	const [menu, setMenu] = useState([])

	const [selectedKeys, setSelectedKeys] = useState([])

	useEffect(() => {
		// 未登录跳转
		if (!token) {
			navigate('/login')
		}
		setSelectedKeys([location.pathname])
		// menus
		menuList().then(({ data }) => {
			if (!data) return
			const menus = data.map(({ name, icon, path, children }) => {
				return {
					key: path,
					icon: React.createElement(Icon[icon]),
					label: name,
					children: children && children.map(child => {
						let { name, path } = child
						return {
							key: path,
							label: name
						}
					})
				}
			})
			// set state
			setMenu(menus)
		})
	}, [token, navigate])

	const menuClick = (m) => {
		const { key } = m
		navigate(key)
	}
	return (

		<Layout>
			<Header className="header">
				<div className="logo" />
				{/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
			</Header>
			<Layout>
				<Sider
					width={200}
					style={{
						background: colorBgContainer,
					}}
				>
					<Menu
						mode="inline"
						defaultSelectedKeys={['/']}
						selectedKeys={selectedKeys}
						style={{
							height: '100%',
							borderRight: 0,
						}}
						items={menu}
						onClick={menuClick}
					/>
				</Sider>
				<Layout
					style={{
						padding: '0 24px 24px',
					}}
				>
					<Breadcrumb
						style={{
							margin: '16px 0',
						}}
					>
						<Breadcrumb.Item>Home</Breadcrumb.Item>
						<Breadcrumb.Item>List</Breadcrumb.Item>
						<Breadcrumb.Item>App</Breadcrumb.Item>
					</Breadcrumb>
					<Content
						style={{
							padding: 24,
							margin: 0,
							minHeight: 280,
							background: colorBgContainer,
						}}
					>
						{location.pathname === '/' ? 'Content' : <Outlet />}

					</Content>
				</Layout>
			</Layout>
		</Layout>
	)
}

export default HomePage