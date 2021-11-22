import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import colors from 'app/src/res/colors';

interface MoneyShortcutItemViewProps {
	currency: string;
	value: number;
	onPress?: () => void;
}

const MoneyShortcutItemView = (props: MoneyShortcutItemViewProps) => {
	return (
		<TouchableOpacity onPress={props.onPress}>
			<View
				style={{
					paddingVertical: 10,
					paddingHorizontal: 20,
					borderRadius: 2,
					backgroundColor: '#EFFCF4',
					marginBottom: 20,
				}}
			>
				<Text style={{ color: colors.background.green }}>{`${
					props.currency
				} ${props.value.toString()}`}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default MoneyShortcutItemView;
