import React, { FC, PropsWithChildren } from "react";
import { Text, View } from "react-native";
import cn from "classnames";
import { IEmptyValueContainer } from './empty-value-container.interface'
import ErrorContainer from '../ErrorContainer'
import PrimaryButton from '../../buttons/PrimaryButton'

const EmptyValueContainer: FC<PropsWithChildren<IEmptyValueContainer>> = ({children, refetch, isLoading, title, className, ...rest}) => {
	return (
		<View {...rest} style={{flex: 1}} className={cn(`bg-white w-full flex justify-center items-center rounded-t-xl`, className)}>
			<ErrorContainer>
				<Text className={`text-black text-base font-medium text-center`}>
					{title}
				</Text>
			</ErrorContainer>
			<PrimaryButton className={`w-2/3 my-4`} onPress={() => refetch()} isLoading={isLoading}>
				Обновить
			</PrimaryButton>
			<View className={`my-4`}>
				{children}
			</View>
		</View>
	);
};

export default EmptyValueContainer;
