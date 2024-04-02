import { makeStyles, shorthands } from '@fluentui/react-components'

export const useStyles = makeStyles({
	root: {
		width: '100%',
		minHeight: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	box: {
		width: '300px',
		backgroundColor: '#fff',
		boxShadow: '0px 0px  15px 2px #efefef',
		textAlign: 'center',
		...shorthands.padding('30px', '50px'),
		...shorthands.borderRadius('10px'),
	},
	boxElement: {
		width: '100%',
		height: '36px',
		...shorthands.marginBlock('6px'),
		...shorthands.borderRadius('6px'),
		...shorthands.border('2px solid transparent'),
		'&:last-child': {
			marginTop: '15px',
		},
	},
	title2: {
		marginBottom: '20px',
	},
})
