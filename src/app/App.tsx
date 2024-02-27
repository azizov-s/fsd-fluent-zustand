import {
	FluentProvider,
	teamsLightTheme,
	tokens,
} from '@fluentui/react-components'
import { RouterProvider } from 'react-router-dom'
import { router } from '../routing/router'

function App() {
	return (
		<FluentProvider
			theme={teamsLightTheme}
			style={{ backgroundColor: tokens.colorBrandBackground2 }}
		>
			<RouterProvider router={router} fallbackElement={'Loader'} />
		</FluentProvider>
	)
}

export default App
