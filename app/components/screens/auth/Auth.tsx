import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Layout from '../../layout/Layout'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { IUser } from '../../../types/user.interface'
import Field from '../../ui/field/Field'
import PrimaryButton from '../../ui/buttons/PrimaryButton'
import Button from '../../ui/buttons/Button'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

const Auth = () => {

	const {addUser, setUser} = useActions()
	const [isReg, setIsReg] = useState(false)
	const users = useTypedSelector(state => state.users)
	const [error, setError] = useState('')

	const {control, handleSubmit} = useForm<IUser>({
		mode: 'onChange'
	})


	const onSubmit: SubmitHandler<IUser> = data => {
		const user = users.find(item => item.username === data.username && item.password === data.password)
		if (isReg && !user) {
			addUser(data)
			setUser(data)
		} else if (!isReg && !user) {
				setError('Пользователь не найден')
		} else setUser(data)

	}

	return (
		<Layout withLogo={false}>
			<View className={`flex-1 justify-center px-4`}>
				<Text className={`text-4xl text-black font-semibold text-center my-2`}>
					{isReg ? 'Регистрация' : 'Авторизация'}
				</Text>
				<View className={`w-full`}>
					<Controller
						control={control}
						name='username'
						rules={{
							required: 'Заполните поле'
						}}
						render={({ field: field, fieldState: state }) => (
							<Field
								placeholder={'ФИО'}
								field={field}
								state={state}
								textContentType={'username'}
							/>
						)}
					/>

					<Controller
						control={control}
						name='password'
						rules={{
							required: 'Заполните поле',
							minLength: {
								value: 6,
								message: 'Пароль должен содержать минимум 6 символов'
							}
						}}
						render={({ field: field, fieldState: state }) => (
							<Field
								textContentType={`password`}
								placeholder={'Пароль'}
								field={field}
								state={state}
								hint={`Длина пароля не менее 6 символов`}
							/>
						)}
					/>
				</View>
				<Button className={`py-2`} onPress={() => setIsReg(!isReg)}>
					<Text className={`text-sm text-primary mr-0`}>
						{isReg ? 'У меня есть аккаунт' : 'У меня нет аккуанта'}
					</Text>
				</Button>
				{error && (
					<Text className={`text-sm text-danger font-medium`}>{error}</Text>
				)}
				<PrimaryButton className={`my-2`} onPress={handleSubmit(onSubmit)}>
					{isReg ? 'Создать аккаунт' : 'Войти'}
				</PrimaryButton>
			</View>
		</Layout>
	)
}

export default Auth
