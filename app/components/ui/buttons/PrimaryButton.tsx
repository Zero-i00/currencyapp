import React, { FC, PropsWithChildren } from 'react'
import Button from './Button'
import { IButton } from './button.interface'
import cn from 'classnames'
import { Text } from 'react-native'
import Loader from '../loader/Loader'

const PrimaryButton: FC<PropsWithChildren<IButton>> = ({isLoading, children, className, ...rest}) => {
	return (
		<Button
			{...rest}
			disabled={isLoading}
			className={cn(`bg-primary rounded-lg text-center items-center px-4 py-3 w-full`, className)}>
			{isLoading ? <Loader color={`#FFFFFF`} /> : <Text className={`text-white text-base font-medium`}>{children}</Text>}
		</Button>
	)
}

export default PrimaryButton
