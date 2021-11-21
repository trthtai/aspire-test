import React, { Component } from 'react';
import { View, Text, Image, Animated, PanResponder } from 'react-native';

import { BaseScreen } from 'app/src/components/screens';
import { BalanceView } from 'app/src/components/views';

import colors from 'app/src/res/colors';
import images from 'app/src/res/images';

import { MenuView, CardView } from 'app/src/components/views';

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
	pan = new Animated.ValueXY();

	panResponder = PanResponder.create({
		onMoveShouldSetPanResponder: () => true,
		onPanResponderGrant: () => {
			this.pan.setOffset({
				x: this.pan.x._value,
				y: this.pan.y._value,
			});
		},
		onPanResponderMove: (e, gestureState) => {
			// custom logic here
			console.log(this.pan.y._value);
			Animated.event([
				null,
				{
					dx: this.pan.x,
					dy: this.pan.y,
				},
			])(e, gestureState);
		},
		onPanResponderRelease: () => {
			this.pan.flattenOffset();
		},
	});

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
				<Animated.View
					style={{
						width: '100%',
						position: 'absolute',
						left: 0,
						transform: [
							{ translateX: 0 },
							{
								translateY: this.pan.y.interpolate({
									inputRange: [-50, 0],
									outputRange: [-50, 0],
									extrapolate: 'clamp',
								}),
							},
						],
						bottom: -50,
						backgroundColor: colors.background.white,
						borderTopLeftRadius: 30,
						borderTopRightRadius: 30,
						paddingHorizontal: 20,
					}}
					{...this.panResponder.panHandlers}
				>
					<MenuView
						style={{
							overflow: 'visible',
						}}
						data={menuItems}
						headerView={
							<CardView
								logo={images.iconFullLogo}
								number={'1234 4567 1234 4352'}
								name={'Mark Henry'}
								expDate={new Date('11/11/1992')}
								cardTypeLogo={images.iconVisa}
								cvv={'123'}
							/>
						}
					/>
				</Animated.View>
			</BaseScreen>
		);
	}
}
