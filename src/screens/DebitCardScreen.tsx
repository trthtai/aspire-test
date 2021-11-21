import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { BaseScreen } from 'app/src/components/screens';
import { BalanceView, MenuItemView } from 'app/src/components/views';

import colors from 'app/src/res/colors';
import images from 'app/src/res/images';

import { MenuView } from 'app/src/components/views';

const menuItems: MenuItem[] = [
	{
		title: 'Top-up account',
		subTitle: 'Deposit money to your account to use with card',
		icon: images.iconBack,
	},
	{
		title: 'Weekly spending limit',
		subTitle: "You haven't set any spending limit on card",
		icon: images.iconBack,
		switchShown: true,
	},
	{
		title: 'Freeze card',
		subTitle: 'Your debit card is currently active',
		icon: images.iconBack,
		switchShown: true,
	},
	{
		title: 'Get a new card',
		subTitle: 'This deactives your current debit card',
		icon: images.iconBack,
	},
	{
		title: 'Freeze card',
		subTitle: 'Your previously deactived cards',
		icon: images.iconBack,
	},
];

export default class DebitCardScreen extends Component {
	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<BaseScreen
				title="Debit Card"
				style={{ backgroundColor: '#0D365A' }}
				logo={<Image source={images.iconSmallLogo} />}
			>
				<BalanceView style={{ marginLeft: 20 }} amount="3,000" />
				<View
					style={{
						width: '100%',
						position: 'absolute',
						left: 0,
						bottom: 0,
						backgroundColor: colors.background.white,
						borderTopLeftRadius: 30,
						borderTopRightRadius: 30,
						paddingHorizontal: 20,
					}}
				>
					<MenuView data={menuItems} />
				</View>
			</BaseScreen>
		);
	}
}
