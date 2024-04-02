import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface TypeState {
	phone: string
	password: string
}

const initialState: TypeState = {
	phone: '',
	password: '',
}

export const authorizationSlice = createSlice({
	name: 'authorization',
	initialState,
	reducers: {
		setPhone: (state, action: PayloadAction<string>) => {
			state.phone = action.payload
		},
		setPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload
		},
	},
})

export const { setPhone, setPassword } = authorizationSlice.actions
