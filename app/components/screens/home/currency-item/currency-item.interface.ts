import { ViewProps } from 'react-native'
import { ICurrencyState } from '../../../../types/currency.interface'


export interface ICurrencyItem extends ViewProps {
	currency: ICurrencyState
}
