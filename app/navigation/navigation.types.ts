import { ComponentType } from 'react'

export type TypeRootStackParamList = {
	Auth: undefined
	Home: undefined
	Main: undefined
}

export interface IRoute {
	name: keyof TypeRootStackParamList
	component: ComponentType
}
