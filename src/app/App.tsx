import { FluentProvider, tokens } from '@fluentui/react-components'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { router } from './routing/router'
import { store } from './store/store'
import { lightTheme } from './styles/theme/theme'

function App() {
	return (
		<Provider store={store}>
			<FluentProvider
				theme={lightTheme}
				style={{ backgroundColor: tokens.colorBrandBackground2 }}
			>
				<RouterProvider router={router} fallbackElement={'Loader'} />
			</FluentProvider>
		</Provider>
	)
}

export default App
