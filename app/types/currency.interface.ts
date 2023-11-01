

export interface ICurrency {
	id: number
	char_code: string
	nom: string
	nominal: number
	gen: string
	genitive_singular: string
	nominative_singular: string
	accusative_singular: string
	nominal_accusative: string
	gender: string
	genitive_singular_correct: string
	genitive_plural: string
	prepositional_plural: string
	values: ICurrencyValue[]
}

export interface ICurrencyValue {
	rate: number
	date: Date
}

export interface ICurrencyQuery extends Pick<ICurrency, 'char_code'> {}

export interface ICurrencyState extends Pick<ICurrency, 'id' | 'char_code' | 'gen'> {
	value: ICurrencyValue
	result: number
}
