import { createBrowserRouter } from 'react-router-dom'
import Layout from '../widgets/layout'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				path: '/electronic',
				element: <>electronic</>,
			},
			{
				path: '/plastic',
				element: <>plastic</>,
			},
			{
				path: '/paper',
				element: <>paper</>,
			},
		],
	},
	{
		path: '/login',
		element: <>Login</>,
	},
])
