import Home from '../pages/Home';
import Login from '../pages/Login';
import OwnInfo from '../pages/Account/OwnInfo';
import Page404 from '../pages/Page404';

/**
 * 路由配置
 */
const routes = [
	{
		path: '/login',
		element: <Login />
	},
	{	
		path: '/',
		element: <Home />,
		children: [
			{
				path: '/account/ownInfo',
				element: <OwnInfo />
			},
			{
				path: '*',
				element: <Page404 />
			}
		]
	},
]

export {
	routes
};
