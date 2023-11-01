import React, { FC, PropsWithChildren } from 'react'
import { Platform, Text, View } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { ILayout } from './layout.interface'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import Button from '../ui/buttons/Button'

const Layout: FC<PropsWithChildren<ILayout>> = ({children, withLogo=true}) => {

	const {top} = useSafeAreaInsets()
	const {logout} = useActions()
	const {auth} = useTypedSelector(state => state.auth)

	return (
		<>
			<SafeAreaView>
				<View
					className={`flex flex-row px-6 justify-between items-center bg-white rounded-b-xl`}
					style={{
						paddingTop: Platform.OS === 'ios' ? top / 5 : top / 5
					}}>
					{withLogo && (
						<Text className={`text-2xl text-black font-bold py-4`}>Currency App</Text>
					)}
					{auth && (
						<Button onPress={() => logout()}>
							<Text className={`text-base text-primary font-medium`}>Выйти</Text>
						</Button>
					)}
				</View>
			</SafeAreaView>
			<View style={{flex: 1}}>{children}</View>
		</>
	)
}

export default Layout
