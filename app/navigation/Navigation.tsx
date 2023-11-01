import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import React from 'react'
import PrivateNavigation from './PrivateNavigation'

const Navigation = () => {

	const navRef = useNavigationContainerRef()

	return (
		<>
			<NavigationContainer ref={navRef}>
				<PrivateNavigation />
			</NavigationContainer>
		</>
	)
}

export default Navigation
