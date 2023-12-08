import React from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import { formulaData } from './formula.data'
import FormulaItem from './formula-item/FormulaItem'
import { useNavigation } from '@react-navigation/native'
import Layout from '../../layout/Layout'

const Main = () => {

	const navigation = useNavigation()

	return (
		<Layout>
			<ScrollView>
				<View style={{flex: 1}}>
					{formulaData.map((formula, index) => (
						<TouchableOpacity
							onPress={() => navigation.navigate('FormulaPage' as never)}
							key={index}>
							<FormulaItem {...formula}/>
						</TouchableOpacity>
					))}
				</View>
			</ScrollView>
		</Layout>
	)
}

export default Main
