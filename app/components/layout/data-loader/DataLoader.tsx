import React, { FC, PropsWithChildren } from 'react'
import { View } from "react-native";
import { IDataLoader } from './data-loader.interface'
import Loader from '../../ui/loader/Loader'

const DataLoader: FC<PropsWithChildren<IDataLoader>> = ({
	children,
	isLoading,
	isFetching,
}) => {

	return (
		isLoading || isFetching ? (
			<View className={`bg-transparent w-full flex justify-center items-center my-2`}>
				<Loader />
			</View>
		) : (
			<View style={{flex: 1}}>{children}</View>
		)
	)
}

export default DataLoader
