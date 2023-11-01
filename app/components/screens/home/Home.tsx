import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import Layout from '../../layout/Layout'
import { useGetCurrencyQuery } from '../../../store/api/currency.api'
import { ICurrency, ICurrencyState } from '../../../types/currency.interface'
import DataLoader from '../../layout/data-loader/DataLoader'
import TextInputField from '../../ui/text-input-field/TextInputField'
import PrimaryButton from '../../ui/buttons/PrimaryButton'
import ErrorContainer from '../../ui/containers/ErrorContainer'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import Button from '../../ui/buttons/Button'
import CurrencyItem from './currency-item/CurrencyItem'

const Home = () => {

	const [code, setCode] = useState('')

	const [error, setError] = useState('')
	const [amount, setAmount] = useState('')
	const [result, setResult] = useState(0)

	const currencies = useTypedSelector(state => state.currency)
	const {toggleCurrency, clearCurrency} = useActions()

	const {data = [] as ICurrency[], ...options} = useGetCurrencyQuery({
		char_code: code
	}, {
		skip: code.length !== 3 && Number(amount) === 0,
		refetchOnMountOrArgChange: true
	})

	const handleSubmit = () => {
		if (code.length !== 3 || amount.length === 0) {
			setError('Заполните данные')
		}
		if (!options.isLoading && options.isSuccess) {

			const total = data[0].values[0].rate * Number(amount)
			setResult(Number(total.toFixed(2)))

			const currency: ICurrencyState = {
				...data[0],
				value: data[0].values[0],
				result: Number(total.toFixed(2))
			}
			toggleCurrency(currency)

			setError('')
		}
	}

	useEffect(() => {
		setResult(0)
	}, [options.isLoading, options.isFetching])

	return (
		<Layout>
			<ScrollView className={`px-6 bg-gray/5 py-4`}>
				<View className={`flex-1 justify-center`}>
					{error && (
						<ErrorContainer className={`my-2`}>
							<Text>{error}</Text>
						</ErrorContainer>
					)}
					<View className={`flex flex-row items-center`}>
						<TextInputField
							hint={`Код валюты`}
							value={code}
							onChange={(e) => setCode(e.nativeEvent.text)}
							maxLength={3}
							autoCapitalize={"characters"}
						/>
						<TextInputField
							hint={`Количество`}
							value={amount}
							keyboardType={`numeric`}
							onChange={(e) => setAmount(e.nativeEvent.text)}
						/>
					</View>
					{code.length === 3 && (
						<DataLoader  {...options}>
							{data.length > 0 && data[0].values.length > 0 && !options.isError ? (
								<View className={`my-1`}>
									<Text className={`text-gray text-sm font-medium`}>
										Перевод произойдет по курсу {data[0].values[0].rate.toFixed(2)}
									</Text>
									{result > 0 && (
										<Text className={`text-xl text-black font-semibold my-2`}>
											Итого: {result} ₽
										</Text>
									)}
								</View>
							) : (
								<ErrorContainer>
									<Text>Не удалось найти валютную пару</Text>
								</ErrorContainer>
							)}
						</DataLoader>
					)}
					<PrimaryButton
						className={`my-2`}
						onPress={handleSubmit}
						isLoading={options.isLoading}>
						{data.length > 0 && result !== 0 ? 'Обновить' : 'Вычислить'}
					</PrimaryButton>
				</View>
				{currencies.length > 0 && (
					<View className={`my-4`}>
						<Button onPress={() => clearCurrency()}>
							<Text className={`text-primary text-sm font-semibold my-2`}>Очистить историю</Text>
						</Button>
						{currencies.map(currency => (
							<Button
								onPress={() => {
									setCode(currency.char_code)
									setAmount((currency.result / currency.value.rate).toFixed(0))
								}}
								key={`currency-item-${currency.id}`}>
								<CurrencyItem currency={currency}/>
							</Button>
						))}
					</View>
				)}
			</ScrollView>
		</Layout>
	)
}

export default Home
