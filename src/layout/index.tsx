import {
	Tab,
	TabList,
	Table,
	Title2,
	makeStyles,
	shorthands,
	tokens,
} from '@fluentui/react-components'
import {
	BuildingBank28Regular,
	MegaphoneCircle24Filled,
	People28Regular,
	TasksApp28Regular,
} from '@fluentui/react-icons'

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
		// backgroundColor: 'green',
	},
	page: {
		maxWidth: '1350px',
		width: '90%',
		alignItems: 'start',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		rowGap: '20px',
		...shorthands.marginBlock('50px'),
		// backgroundColor: 'red',
	},
	sideBar: {
		width: '280px',
		minHeight: '0px',
		height: '100%',
		alignItems: 'start',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		// rowGap: '20px',
		backgroundColor: tokens.colorNeutralForegroundInverted,
		...shorthands.borderRadius('10px'),
		...shorthands.padding('10px'),
	},
})

export default function Layout() {
	const styles = useStyles()
	return (
		<div className={styles.main}>
			<div className={styles.page}>
				<div className={styles.sideBar}>
					<Title2>Lorem</Title2>
				</div>
				<div className={styles.sideBar}>
					<Table>
						<TabList
							// onTabSelect={SelectTabEventHandler}
							selectTabOnFocus={true}
							vertical
							size='large'
							defaultSelectedValue={'/roles'}
							reserveSelectedTabSpace={true}
						>
							<Tab icon={<People28Regular />} value='/'>
								Electronic
							</Tab>
							<Tab icon={<TasksApp28Regular />} value='/roles'>
								s Plastic
							</Tab>
							s{' '}
							<Tab icon={<BuildingBank28Regular />} value='/departaments'>
								Paper
							</Tab>
							<Tab
								icon={<MegaphoneCircle24Filled />}
								disabled={true}
								value='tab4'
							>
								Metal (недоступен)
							</Tab>
						</TabList>
					</Table>
				</div>
			</div>
		</div>
	)
}
