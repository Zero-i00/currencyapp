import {api} from "./api";
import { ICurrency, ICurrencyQuery } from '../../types/currency.interface'


export const currencyApi = api.injectEndpoints({
	endpoints: build => ({
		getCurrency: build.query<ICurrency[], ICurrencyQuery>({
			query: props => `${props.char_code}/?step=1`
		}),
	})
})

export const { useGetCurrencyQuery } = currencyApi
