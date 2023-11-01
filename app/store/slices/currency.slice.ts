import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICurrencyState } from '../../types/currency.interface'


export const initialState: ICurrencyState[] = []

export const currencySlice = createSlice({
	name: 'currency',
	initialState,
	reducers: {
		toggleCurrency: (state, action: PayloadAction<ICurrencyState>) => {
			const isExist = state.some(item => item.id === action.payload.id)

			if (isExist) {
				state = state.filter(item => item.id !== action.payload.id)
				state.push(action.payload)
				return state
			} else state.push(action.payload)
			return state
		},
		removeCurrency: (state, action: PayloadAction<ICurrencyState>) => {
			return state.filter(item => item.id !== action.payload.id)
		},
		clearCurrency: state => {
			state = [] as ICurrencyState[]
			return state
		}
	}
})

export const currencyReducer = currencySlice.reducer
export const currencyActions = currencySlice.actions
