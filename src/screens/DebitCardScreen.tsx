import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export default class DebitCardScreen extends Component {
	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
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
			</SafeAreaView>
		);
	}
}
