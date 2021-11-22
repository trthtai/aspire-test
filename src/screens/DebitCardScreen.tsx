import React, { Component } from 'react';
import { View, Text, Animated, PanResponder } from 'react-native';

import { BaseScreen } from 'app/src/components/screens';
import { BalanceView } from 'app/src/components/views';

import colors from 'app/src/res/colors';
import images from 'app/src/res/images';

import { MenuView, CardView } from 'app/src/components/views';
import { MenuItem } from 'app/src/components/views/MenuView';
import { NavigationService } from 'app/src/services';

export default class DebitCardScreen extends Component {
	pan = new Animated.ValueXY();

	panResponder = PanResponder.create({
		onMoveShouldSetPanResponder: () => true,
		onPanResponderGrant: () => {
			this.pan.setOffset({
				x: 0,
				y: 0,
			});
		},
		onPanResponderMove: (e, gestureState) => {
			// custom logic here
			console.log(this.pan.y._value);
			Animated.event(
				[
					null,
					{
						dx: this.pan.x,
						dy: this.pan.y,
					},
				],
				{ useNativeDriver: false }
			)(e, gestureState);
		},
		onPanResponderRelease: () => {
			this.pan.flattenOffset();
		},
	});

	menuItems: MenuItem[] = [
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
			onPress: () => {
				NavigationService.navigationRef.navigate('SpendingLimit');
			},
			onSwitchChange: (value) => {
				console.log(value);
				if (value) {
					NavigationService.navigationRef.navigate('SpendingLimit');
				}
			},
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

	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<BaseScreen
				title="Debit Card"
				style={{ backgroundColor: '#0D365A' }}
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
									inputRange: [-80, 0],
									outputRange: [-80, 0],
									extrapolate: 'clamp',
								}),
							},
						],
						bottom: -80,
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
						data={this.menuItems}
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
