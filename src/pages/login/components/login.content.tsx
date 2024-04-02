import { Button, Input, Title2 } from '@fluentui/react-components'
import { ChangeEvent, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import { setPassword, setPhone } from '../store'
import { useLazyGetPinPongQuery } from '../store/api/api'
import { useStyles } from './login.styles'

export default function Login() {
	const styles = useStyles()
	const { phone, password } = useAppSelector(state => state.authorization)
	const dispatch = useAppDispatch()

	const handleChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(setPhone(e.target.value))
	}
	const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(setPassword(e.target.value))
	}
	// const [lll, { isLoading }] = useAuthUserMutation()

	const [toggle, { data }] = useLazyGetPinPongQuery()
	useEffect(() => {
		console.log(data)
	}, [password])

	return (
		<div className={styles.root}>
			<div className={styles.box}>
				<div className={styles.title2}>
					<Title2>Login</Title2>
				</div>
				<Input
					value={phone}
					className={styles.boxElement}
					placeholder='Логин'
					maxLength={9}
					type='tel'
					onChange={handleChangePhone}
				/>
				<Input
					value={password}
					className={styles.boxElement}
					placeholder='Пароль'
					onChange={handleChangePassword}
				/>
				<Button
					disabled={phone.length < 9 || password.length < 5}
					className={styles.boxElement}
					onClick={() => toggle()}
				>
					Логин
				</Button>
			</div>
		</div>
	)
}
