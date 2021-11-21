import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { BaseScreen } from 'app/src/components/screens';

export default class DebitCardScreen extends Component {
	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<BaseScreen
				title="Debit Card"
				style={{ backgroundColor: '#0D365A' }}
				logo={<Text style={{ color: '#fff' }}>Logo</Text>}
			>
				<View
					style={{
						flex: 1,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Text style={{ fontSize: 40, fontWeight: 'bold' }}>
						Debit Card Screen
					</Text>
				</View>
			</BaseScreen>
		);
	}
}
