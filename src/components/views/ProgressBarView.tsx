import React from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';

import colors from 'app/src/res/colors';

interface ProgressBarViewProps {
	value: number;
	totalValue: number;
	title: string;
	style?: StyleProp<ViewStyle>;
}

const ProgressBarView = (props: ProgressBarViewProps) => {
	return (
		<View style={props.style}>
			<View style={{ flexDirection: 'row' }}>
				<Text style={{ flex: 1 }}>{props.title}</Text>
				<Text
					style={{ color: colors.background.green }}
				>{`$${props.value}`}</Text>
				<Text style={{ marginHorizontal: 4 }}>|</Text>
				<Text
					style={{ color: colors.text.subtitle }}
				>{`$${props.totalValue}`}</Text>
			</View>
			<View style={{ marginTop: 10 }}>
				<View
					style={{
						width: '100%',
						height: 20,
						borderRadius: 10,
						backgroundColor: '#E5FAF0',
					}}
				/>
				<View
					style={{
						position: 'absolute',
						left: 0,
						top: 0,
						width: `${
							(props.value / props.totalValue) * 100 > 100
								? 100
								: (props.value / props.totalValue) * 100
						}%`,
						height: 20,
						backgroundColor: colors.background.green,
						borderRadius: 10,
					}}
				/>
			</View>
		</View>
	);
};

export default ProgressBarView;
