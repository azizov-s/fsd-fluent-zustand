import { makeStyles, shorthands, tokens } from '@fluentui/react-components'

export const useStyles = makeStyles({
	header: {},
	whiteContainer: {
		width: '250px',
		minHeight: '0px',
		alignItems: 'start',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		backgroundColor: tokens.colorNeutralForegroundInverted,
		...shorthands.borderRadius('10px'),
		...shorthands.padding('10px'),
		// ...shorthands.gap('5px'),
		'&:first-child': {
			marginBottom: '30px',
		},
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
