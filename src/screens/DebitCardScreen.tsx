import React, { Component } from 'react';
import { View, Animated, PanResponder } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';

import { BaseScreen } from 'app/src/components/screens';
import { BalanceView } from 'app/src/components/views';

import { ApplicationState } from 'app/src/types';
import { UpdateBalance } from 'app/src/store/actions';

import colors from 'app/src/res/colors';
import images from 'app/src/res/images';

import { MenuView, CardView, ProgressBarView } from 'app/src/components/views';
import { NavigationService, CardService } from 'app/src/services';
import { NumberHelper } from 'app/src/helpers';

import { ApiBalance } from 'app/src/networking/apis';
import { Balance } from 'app/src/networking/apis/ApiBalance';

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {};

interface State {}

const mapStateToProps = (state: ApplicationState) => ({
	balance: state.balance,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	updateBalance: (balance: Balance) => dispatch(UpdateBalance(balance)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

class DebitCardScreen extends Component<Props, State> {
	constructor(props: any) {
		super(props);
	}

	componentDidMount() {
		const balance = ApiBalance.getInstance().getBalance();
		// eslint-disable-next-line react/no-did-mount-set-state
		const { updateBalance } = this.props;
		updateBalance(balance);
	}

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

	getMenuItems = (spendingLimit: number) => {
		return [
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
				switchValue: spendingLimit > 0,
				onPress: () => {
					NavigationService.navigationRef.navigate('SpendingLimit');
				},
				onSwitchChange: (value: boolean) => {
					if (value) {
						NavigationService.navigationRef.navigate(
							'SpendingLimit'
						);
					} else {
						const balance =
							ApiBalance.getInstance().setSpendingLimit(0);
						this.props.updateBalance(balance);
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
	};

	render() {
		const { balance } = this.props;
		return (
			<BaseScreen
				title="Debit Card"
				style={{ backgroundColor: '#0D365A' }}
			>
				<BalanceView
					style={{ marginLeft: 20 }}
					amount={NumberHelper.formatNumber(
						balance.balance.toString()
					)}
				/>
				<Animated.View
					style={{
						width: '100%',
						position: 'absolute',
						left: 0,
						transform: [
							{ translateX: 0 },
							{
								translateY: this.pan.y.interpolate({
									inputRange: [-150, 0],
									outputRange: [-150, 0],
									extrapolate: 'clamp',
								}),
							},
						],
						bottom: -150,
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
							zIndex: -1,
							elevation: 10,
						}}
						data={this.getMenuItems(balance.spendingLimit)}
						headerView={
							<View>
								<CardView
									logo={images.iconFullLogo}
									number={balance.card.number}
									name={balance.card.name}
									expDate={new Date(balance.card.date)}
									cardTypeLogo={CardService.getCardType(
										balance.card.type
									)}
									cvv={balance.card.cvv}
								/>
								{balance.spendingLimit > 0 ? (
									<ProgressBarView
										style={{ marginTop: 10 }}
										title="Weekly spending limit"
										value={balance.spending}
										totalValue={balance.spendingLimit}
									/>
								) : null}
							</View>
						}
					/>
				</Animated.View>
			</BaseScreen>
		);
	}
}

export default connector(DebitCardScreen);
