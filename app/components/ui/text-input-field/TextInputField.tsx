import React, { FC } from 'react'
import { Text, TextInput, View } from 'react-native'
import cn from 'classnames'
import { ITextInputField } from './text-input-field.interface'

const TextInputField: FC<ITextInputField> = ({hint, className, ...rest}) => {
	return (
		<View className={`mx-1 w-[48%]`}>
			{hint && (
				<Text className={`text-black text-base font-semibold`}>{hint}</Text>
			)}
			<TextInput
				{...rest}
				className={cn(`bg-gray/5 border-gray/10 border-[1px] px-2 my-2 text-black text-sm font-medium rounded-lg`, className)}
				multiline={false}
				placeholderTextColor={`#999999`}
				style={{
					minHeight: 35,
				}}
			/>
		</View>
	)
}

export default TextInputField;
