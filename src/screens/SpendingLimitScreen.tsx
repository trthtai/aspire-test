import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	KeyboardAvoidingView,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';

import { BaseScreen } from 'app/src/components/screens';
import { MoneyIcon, MoneyShortcutView } from 'app/src/components/views';
import type { MoneyShortcutItem } from 'app/src/components/views/MoneyShortcutView';

import { ApplicationState } from 'app/src/types';
import { UpdateBalance } from 'app/src/store/actions';

import { ApiBalance } from 'app/src/networking/apis';
import { Balance } from 'app/src/networking/apis/ApiBalance';
import { NavigationService } from 'app/src/services';

import colors from 'app/src/res/colors';

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {};

const mapStateToProps = (state: ApplicationState) => ({
	balance: state.balance,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	updateBalance: (balance: Balance) => dispatch(UpdateBalance(balance)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

interface State {
	spendingLimit: number;
}

class SpendingLimitScreen extends Component<Props, State> {
	constructor(props: any) {
		super(props);

		const { balance } = this.props;
		this.state = {
			spendingLimit: balance.spendingLimit,
		};
	}

	onInputChangeText = (text: string) => {
		this.setState({
			spendingLimit:
				text == '' ? 0 : parseInt(text.split(',').join(''), 10),
		});
	};

	onSavePress = () => {
		const { spendingLimit } = this.state;
		const balance =
			ApiBalance.getInstance().setSpendingLimit(spendingLimit);
		const { updateBalance } = this.props;
		updateBalance(balance);
		NavigationService.navigationRef.goBack();
	};

	moneyShortcuts: MoneyShortcutItem[] = [
		{
			currency: 'S$',
			value: 5000,
		},
		{
			currency: 'S$',
			value: 10000,
		},
		{
			currency: 'S$',
			value: 20000,
		},
		{
			currency: 'S$',
			value: 30000,
		},
		{
			currency: 'S$',
			value: 40000,
		},
		{
			currency: 'S$',
			value: 50000,
		},
	];

	render() {
		const { spendingLimit } = this.state;
		return (
			<BaseScreen
				title="Spending Limit"
				backButtonShown
				style={{ backgroundColor: '#0D365A' }}
			>
				<KeyboardAvoidingView
					behavior="height"
					style={{
						marginTop: 40,
						flex: 1,
						backgroundColor: colors.background.white,
						borderTopLeftRadius: 30,
						borderTopRightRadius: 30,
						padding: 20,
					}}
				>
					<TouchableWithoutFeedback
						onPress={() => {
							Keyboard.dismiss();
						}}
					>
						<View style={{ flex: 1 }}>
							<Text
								style={{
									marginTop: 10,
									color: colors.text.title,
								}}
							>
								Set a weekly debit card spendling limit
							</Text>
							<View
								style={{
									marginTop: 10,
									flexDirection: 'row',
									alignItems: 'center',
								}}
							>
								<MoneyIcon name="S$" />
								<TextInput
									keyboardType="number-pad"
									style={{
										marginLeft: 10,
										fontSize: 30,
										fontWeight: 'bold',
									}}
									value={spendingLimit
										.toString()
										.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
									onChangeText={this.onInputChangeText}
								/>
							</View>
							<View
								style={{
									marginTop: 8,
									backgroundColor: colors.text.subtitle,
									width: '100%',
									height: 1,
								}}
							/>
							<Text
								style={{
									marginTop: 10,
									color: colors.text.subtitle,
								}}
							>
								Here weekly means the last 7 days - not the
								calendar week
							</Text>
							<MoneyShortcutView
								style={{ flex: 1, marginTop: 20 }}
								data={this.moneyShortcuts}
								onPress={(item) => {
									this.setState({
										spendingLimit: item.value,
									});
								}}
							/>
						</View>
					</TouchableWithoutFeedback>
					<TouchableOpacity onPress={this.onSavePress}>
						<View
							style={{
								alignSelf: 'center',
								width: '80%',
								height: 50,
								backgroundColor: colors.background.green,
								alignItems: 'center',
								justifyContent: 'center',
								borderRadius: 25,
								marginBottom: 20,
							}}
						>
							<Text
								style={{
									color: colors.text.white,
									fontSize: 20,
									fontWeight: 'bold',
								}}
							>
								Save
							</Text>
						</View>
					</TouchableOpacity>
				</KeyboardAvoidingView>
			</BaseScreen>
		);
	}
}

export default connector(SpendingLimitScreen);
