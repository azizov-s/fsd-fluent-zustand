import { makeStyles, shorthands } from '@fluentui/react-components'
import SideBar from './components/sidebar.content'

const useStyles = makeStyles({
	main: {
		width: '100%',
		minHeight: '100vh',
		height: '95%',
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'start',
		...shorthands.padding('50px, 50px'),
	},
	page: {
		maxWidth: '1440px',
		width: '90%',
		height: '85vh',
		// backgroundColor: 'red',
		alignItems: 'start',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		rowGap: '20px',
		...shorthands.marginBlock('50px'),
	},
})

export default function Layout() {
	const styles = useStyles()
	return (
		<div className={styles.main}>
			<div className={styles.page}>
				<SideBar />
			</div>
		</div>
	)
}
