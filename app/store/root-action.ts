import { currencyActions } from './slices/currency.slice'
import { userActions } from './slices/users.slice'
import { authActions } from './slices/auth.slice'


export const rootActions = {
	...authActions,
	...userActions,
	...currencyActions
}
