import { IContainer } from '../container.interface'

export interface IEmptyValueContainer extends IContainer {
	title: string
	isLoading: boolean
	refetch: () => void
}
