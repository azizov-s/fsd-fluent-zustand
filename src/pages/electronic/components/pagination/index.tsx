import { makeStyles, shorthands, tokens } from '@fluentui/react-components'
import { useEffect, useState } from 'react'
import { createData, findFirstType, middleData } from './data'

const useStyles = makeStyles({
	root: {
		minWidth: '50px',
		height: '50px',
		display: 'flex',
		...shorthands.gap('5px'),

		...shorthands.margin('30px', '0px'),
	},
	btn: {
		width: '50px',
		height: '50px',
		transitionDuration: '300ms',

		...shorthands.border('0px'),
		...shorthands.borderRadius('5px'),
	},
	activeBtn: {
		width: '50px',
		height: '50px',
		transitionDuration: '300ms',
		color: tokens.colorNeutralForegroundInverted,
		backgroundColor: tokens.colorBrandBackground,

		...shorthands.border('0px'),
		...shorthands.borderRadius('5px'),
		'&:hover': {
			backgroundColor: tokens.colorBrandBackgroundHover,
		},
	},
})

type TData = {
	value: number
	status: boolean
}

interface IProps {
	pages: number
	activePage: number
	setActivePage: (e: number) => void
	isDisable?: boolean
}

const Pagination = ({
	pages,
	activePage,
	setActivePage,
	isDisable,
}: IProps) => {
	const styles = useStyles()
	const [data, setData] = useState<TData[] | null | any>([])
	const [type, setType] = useState<string>('')

	function calculateTheType(index: number) {
		if (type !== 'default') {
			if (index >= 1 && index < 5 && type !== 'increment') {
				setType('increment')
			} else if (index > pages - 4 && index <= pages && type !== 'decrement') {
				setType('decrement')
			} else if (index >= 5 && index <= pages - 4) {
				setType('middle')
				middleData(data, index)
			}
		}
		setActivePage(index)
	}

	function click(index: string | number | any) {
		const nextIndex = activePage + 5 >= pages ? pages : activePage + 5
		const backIndex = activePage - 5 <= 1 ? 1 : activePage - 5
		if (index === 'jumpNext') {
			calculateTheType(nextIndex)
		} else if (index === 'jumpBack') {
			calculateTheType(backIndex)
		} else {
			calculateTheType(index)
		}
	}

	useEffect(() => {
		setType(findFirstType(pages))
	}, [])

	useEffect(() => {
		setData(createData(type, pages, activePage))
		console.log(1)
	}, [type, activePage])

	return (
		data && (
			<div className={styles.root}>
				<button
					key={'left'}
					className={styles.btn}
					onClick={() => calculateTheType(activePage - 1)}
					disabled={isDisable || activePage === 1}
				>
					{'left'}
				</button>
				{data?.map((e: any, i: number) => {
					return (
						<button
							key={i}
							className={activePage === e ? styles.activeBtn : styles.btn}
							onClick={() => click(e)}
							disabled={isDisable}
						>
							{typeof e === 'string' ? '...' : e}
						</button>
					)
				})}
				<button
					key={'right'}
					className={styles.btn}
					onClick={() => calculateTheType(activePage + 1)}
					disabled={isDisable || activePage === pages}
				>
					{'right'}
				</button>
			</div>
		)
	)
}

export default Pagination
