import React, { FC, PropsWithChildren } from 'react'
import { TouchableOpacity } from 'react-native'
import { IButton } from './button.interface'
import { DEFAULT_BUTTON_ACTIVE_OPACITY } from '../../../constants/base.constants'

const Button: FC<PropsWithChildren<IButton>> = ({isLoading=false, children, ...rest}) => {
	return (
		<TouchableOpacity
		{...rest}
		activeOpacity={DEFAULT_BUTTON_ACTIVE_OPACITY}>
			{children}
		</TouchableOpacity>
	)
}

export default Button
