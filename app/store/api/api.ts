import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = 'https://finance.rambler.ru/api/sources/cbr/instruments/'

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: build => ({
		base: build.query({
			query: () => '/'
		})
	})
})
