import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { IUser } from '../../types/user.interface'


export const initialState: IUser[] = []

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		addUser: (state, action: PayloadAction<IUser>) => {
			state.push(action.payload)
			return state
		},
		removeUser: (state, action: PayloadAction<IUser>) => {
			state.filter(user => user !== action.payload)
			return state
		}
	}
})

export const userReducer = usersSlice.reducer
export const userActions = usersSlice.actions
