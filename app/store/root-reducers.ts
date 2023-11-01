import { combineReducers } from '@reduxjs/toolkit'
import { api } from './api/api'
import { currencyReducer } from './slices/currency.slice'
import { userReducer } from './slices/users.slice'
import { authReducer } from './slices/auth.slice'


export const rootReducer = combineReducers({
	[api.reducerPath]: api.reducer,
	currency: currencyReducer,
	users: userReducer,
	auth: authReducer
})
