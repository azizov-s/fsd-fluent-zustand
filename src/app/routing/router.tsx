import { createBrowserRouter } from 'react-router-dom'
import AuthorizationView from '../../pages/login'
import Layout from '../../widgets/layout'
import { Electronic, Plastic } from './router.list'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				path: '/',
				element: <Electronic />,
			},
			{
				path: '/plastic',
				element: <Plastic />,
			},
			{
				path: '/paper',
				element: <>paper</>,
			},
		],
	},
	{
		path: '/login',
		element: <AuthorizationView />,
	},
])
