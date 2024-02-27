import {
	Button,
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
	Question24Regular,
	SignOut24Regular,
	TasksApp28Regular,
} from '@fluentui/react-icons'

const useStyles = makeStyles({
	whiteContainer: {
		width: '280px',
		minHeight: '0px',
		// height: '100%',
		alignItems: 'start',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		backgroundColor: tokens.colorNeutralForegroundInverted,
		...shorthands.borderRadius('10px'),
		...shorthands.padding('10px'),
		...shorthands.gap('5px'),
	},
	button: {
		width: '100%',
		height: '40px',
		display: 'flex',
		justifyContent: 'start',
		'&:last-child': {
			'&:hover': {
				color: 'red',
			},
		},
	},
})

export default function SideBar() {
	const styles = useStyles()
	return (
		<>
			<div className={styles.whiteContainer}>
				<Title2>Lorem</Title2>
			</div>
			<div className={styles.whiteContainer}>
				<Table>
					<TabList
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
							Plastic
						</Tab>
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
			<div className={styles.whiteContainer}>
				<Button
					icon={<Question24Regular />}
					appearance='transparent'
					className={styles.button}
				>
					Help
				</Button>
				<Button
					icon={<SignOut24Regular />}
					appearance='transparent'
					className={styles.button}
				>
					Log Out
				</Button>
			</div>
		</>
	)
}
