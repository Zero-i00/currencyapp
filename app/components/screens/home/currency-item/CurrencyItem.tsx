import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { ICurrencyItem } from './currency-item.interface'
import cn from 'classnames'
import { useActions } from '../../../../hooks/useActions'
import { AntDesign } from '@expo/vector-icons';
import Button from '../../../ui/buttons/Button'

const CurrencyItem: FC<ICurrencyItem> = ({currency, className, ...rest}) => {

	const {removeCurrency} = useActions()

	return (
		<View
		{...rest}
		className={cn(`shadow-4xl border-gray/10 rounded-lg bg-white my-2 py-2 px-4`, className)}>
			<View className={`flex flex-row justify-between items-center`}>
				<Text className={`text-gray/20 text-sm font-medium`}>{new Date(currency.value.date).toDateString()}</Text>
				<Button onPress={() => removeCurrency(currency)}>
					<AntDesign name="close" size={22} color="black" />
				</Button>
			</View>
			<Text className={`text-black text-lg font-bold my-1`}>{currency.char_code}</Text>
			<View className={`flex flex-row justify-between items-center`}>
				<Text className={`text-gray text-sm font-medium`}>{currency.gen}</Text>
				<Text className={`text-black text-lg font-bold`}>По: {currency.result} ₽</Text>
			</View>
		</View>
	)
}

export default CurrencyItem
