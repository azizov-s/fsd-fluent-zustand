import { makeStyles, shorthands, tokens } from '@fluentui/react-components'
import { Outlet } from 'react-router-dom'

const useStyles = makeStyles({
	main: {
		width: '100%',
		minHeight: '100vh',
		height: '100%',

		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	page: {
		width: '90%',
		height: '90%',

		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		// backgroundColor: 'blue',
	},
	sideBar: {
		minWidth: '250px',
		maxHeight: '100vh',
		height: '100%',

		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		// position: 'fixed',

		// ...shorthands.padding('10px', '0'),
		// backgroundColor: 'yellow',
	},
	outlet: {
		// marginLeft: '290px',
		width: '100%',
		minHeight: '0vh',
		backgroundColor: tokens.colorNeutralBackground1,
		...shorthands.borderRadius('10px'),
		...shorthands.padding('20px', '20px'),
	},
})

export default function Layout() {
	const styles = useStyles()
	return (
		<div className={styles.main}>
			<div className={styles.page}>
				{/* <div className={styles.sideBar}><SideBar /></div> */}
				<div className={styles.outlet}>
					<Outlet />
				</div>
			</div>
		</div>
	)
}
