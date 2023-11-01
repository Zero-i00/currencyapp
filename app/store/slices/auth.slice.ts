import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { IUser, TypeUserState } from '../../types/user.interface'


export const initialState: {auth: TypeUserState} = {
	auth: null
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<IUser>) => {
			state.auth = action.payload
			return state
		},
		logout: (state) => {
			state.auth = null
			return state
		}
	}
})

export const authReducer = authSlice.reducer
export const authActions = authSlice.actions
