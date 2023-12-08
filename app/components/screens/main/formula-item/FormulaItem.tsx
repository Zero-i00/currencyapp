import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { IFormulaItem } from './formula-item.interface'

const FormulaItem: FC<IFormulaItem> = ({formula}) => {
	return (
		<View>
			<Text>{formula}</Text>
		</View>
	)
}

export default FormulaItem
