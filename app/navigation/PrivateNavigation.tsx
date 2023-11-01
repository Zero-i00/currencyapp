import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'


import { routes } from './routes'
import { TypeRootStackParamList } from './navigation.types'
import Auth from '../components/screens/auth/Auth'
import { useTypedSelector } from '../hooks/useTypedSelector'


const Stack = createNativeStackNavigator<TypeRootStackParamList>()


const PrivateNavigation = () => {

	const {auth} = useTypedSelector(state => state.auth)

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				contentStyle: {
					backgroundColor: '#FFFFFF'
				}
			}}
		>
			{auth ? (
				<>
					{routes.map(route => (
						<Stack.Screen key={route.name} {...route} />
					))}
				</>
			) : (
				<Stack.Screen key={`Auth`} {...{ name: 'Auth', component: Auth }} />
			)}
		</Stack.Navigator>
	)
}

export default PrivateNavigation
