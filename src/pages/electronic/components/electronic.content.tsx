import { makeStyles } from '@fluentui/react-components'
import { useState } from 'react'
import Pagination from './pagination'

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'start',
		alignItems: 'start',
	},
})

export default function Electronic() {
	const styles = useStyles()
	const [activePage, setActivePage] = useState(1)
	const [pages] = useState(2000)

	return (
		<div className={styles.root}>
			<h3>Active Page : {activePage}</h3>
			<Pagination
				pages={pages}
				activePage={activePage}
				setActivePage={setActivePage}
			/>
		</div>
	)
}
