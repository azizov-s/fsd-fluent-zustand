import { Button, Tab, TabList, Table, Title2 } from '@fluentui/react-components'
import {
	BuildingBank28Regular,
	MegaphoneCircle24Filled,
	People28Regular,
	Question24Regular,
	SignOut24Regular,
	TasksApp28Regular,
} from '@fluentui/react-icons'
import { useNavigate } from 'react-router-dom'
import { useStyles } from './sidebar.style'

export default function SideBar() {
	const styles = useStyles()
	const navigate = useNavigate()
	return (
		<>
			<div className={styles.header}>
				<div className={styles.whiteContainer}>
					<Title2>Lorem</Title2>
				</div>
				<div className={styles.whiteContainer}>
					<Table>
						<TabList
							// selectTabOnFocus={true}
							vertical
							// size='large'
							// defaultSelectedValue={'/'}
							// reserveSelectedTabSpace={true}
						>
							<Tab
								onClick={() => navigate('/')}
								icon={<People28Regular />}
								value='/'
							>
								Electronic
							</Tab>
							<Tab
								onClick={() => navigate('/plastic')}
								icon={<TasksApp28Regular />}
								value='/plastic'
							>
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
