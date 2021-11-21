import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { BaseScreen } from 'app/src/components/screens';
import { MoneyIcon } from 'app/src/components/views';

import colors from 'app/src/res/colors';

export default class DebitCardScreen extends Component {
	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<BaseScreen
				title="Debit Card"
				style={{ backgroundColor: '#0D365A' }}
				logo={<Text style={{ color: colors.text.white }}>Logo</Text>}
			>
				<View style={{ marginLeft: 20 }}>
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
							3,000
						</Text>
					</View>
				</View>
			</BaseScreen>
		);
	}
}
