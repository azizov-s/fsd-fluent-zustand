import {
	FluentProvider,
	teamsLightTheme,
	tokens,
} from '@fluentui/react-components'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<>
		<FluentProvider
			theme={teamsLightTheme}
			style={{ backgroundColor: tokens.colorBrandBackground2 }}
		>
			<App />
		</FluentProvider>
	</>
)
