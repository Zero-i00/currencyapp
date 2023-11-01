import React, { FC, useEffect } from 'react'
import { Text, TextInput, View } from 'react-native'
import { IField } from './field.interface'
import cn from 'classnames'

const Field: FC<IField> = ({field, state, hint, className, defaultValue, ...rest}) => {

	useEffect(() => {
		defaultValue && field.value === undefined && field.onChange(defaultValue)
	})

	const onEndEditing = (text: string) => {
		field.onChange(text.trim())
	}

	return (
		<View className={`my-2`}>
			{!!state.error && (
				<Text className={`z-10 text-red_light text-xs font-medium`}>
					{state.error.message}
				</Text>
			)}
			<TextInput
				{...rest}
				className={cn(`bg-gray/5 border-gray/10 border-[1px] px-2 text-black text-sm font-medium rounded-lg`, className)}
				value={field.value}
				defaultValue={defaultValue}
				onEndEditing={(e) => onEndEditing(e.nativeEvent.text)}
				onBlur={field.onBlur}
				onChangeText={field.onChange}
				multiline={false}
				autoCapitalize={"none"}
				placeholderTextColor={`#999999`}
				style={{
					minHeight: 40,
					borderColor:
						!field.value && !state.error
							? 'rgba(88, 88, 92, 0.05)'
							: state.error
								? '#F23C30'
								: '#5FA957'
				}}
			/>
			{hint && (
				<Text className={`text-gray/50 text-xs font-medium`}>{hint}</Text>
			)}
		</View>
	)
}

export default Field
