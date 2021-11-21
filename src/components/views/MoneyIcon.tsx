import React from 'react';
import { View, Text } from 'react-native';

import colors from 'app/src/res/colors';

interface MoneyIconProps {
	style?: object;
	name: string;
}

const MoneyIcon = (props: MoneyIconProps) => {
	return (
		<View
			style={{
				height: 30,
				paddingHorizontal: 16,
				backgroundColor: '#04D167',
				borderRadius: 4,
				alignItems: 'center',
				justifyContent: 'center',
				...props.style,
			}}
		>
			<Text style={{ color: colors.text.white, fontWeight: 'bold' }}>
				{props.name}
			</Text>
		</View>
	);
};

export default MoneyIcon;
