import React from 'react';
import { View, Text } from 'react-native';

import { MoneyIcon } from 'app/src/components/views';
import colors from 'app/src/res/colors';

interface BalanceViewProps {
	style?: object;
	amount: string;
}

const BalanceView = (props: BalanceViewProps) => {
	return (
		<View style={{ ...props.style }}>
			<Text
				style={{
					marginTop: 20,
					fontWeight: '600',
					color: colors.text.white,
				}}
			>
				Available Balance
			</Text>
			<View
				style={{
					flexDirection: 'row',
					marginTop: 10,
					alignItems: 'center',
				}}
			>
				<MoneyIcon name="S$" />
				<Text
					style={{
						marginHorizontal: 16,
						fontSize: 30,
						fontWeight: 'bold',
						color: colors.text.white,
					}}
				>
					{props.amount}
				</Text>
			</View>
		</View>
	);
};

export default BalanceView;
