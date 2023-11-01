import React, { FC } from 'react'
import { ILoader } from './loader.interface'
import { ActivityIndicator } from 'react-native'

const Loader: FC<ILoader> = ({ color = '#1ba332', ...rest }) => {
	return (
		<ActivityIndicator {...rest} size='large' color={color} />
	)
}

export default Loader
