/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import store from 'app/src/store';
import images from 'app/src/res/images';
import colors from 'app/src/res/colors';

import {
	CreditScreen,
	DebitCardScreen,
	HomeScreen,
	PaymentScreen,
	ProfileScreen,
	SpendingLimitScreen,
} from 'app/src/screens';

import { NavigationService } from 'app/src/services';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeTab = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					headerShown: false,
					tabBarActiveTintColor: colors.background.green,
					tabBarIcon: () => {
						return <Image source={images.iconTabbar1} />;
					},
				}}
			/>
			<Tab.Screen
				name="Debit"
				component={DebitCardScreen}
				options={{
					headerShown: false,
					title: 'Debit Card',
					headerPressColor: colors.background.green,
					tabBarIcon: () => {
						return <Image source={images.iconTabbar2} />;
					},
				}}
			/>
			<Tab.Screen
				name="Payment"
				component={PaymentScreen}
				options={{
					headerShown: false,
					tabBarActiveTintColor: colors.background.green,
					tabBarIcon: () => {
						return <Image source={images.iconTabbar3} />;
					},
				}}
			/>
			<Tab.Screen
				name="Credit"
				component={CreditScreen}
				options={{
					headerShown: false,
					tabBarActiveTintColor: colors.background.green,
					tabBarIcon: () => {
						return <Image source={images.iconTabbar4} />;
					},
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					headerShown: false,
					tabBarActiveTintColor: colors.background.green,
					tabBarIcon: () => {
						return <Image source={images.iconTabbar5} />;
					},
				}}
			/>
		</Tab.Navigator>
	);
};

const App = () => {
	return (
		<Provider store={store}>
			<NavigationContainer ref={NavigationService.navigationRef}>
				<Stack.Navigator>
					<Stack.Screen
						name="HomeTab"
						component={HomeTab}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="SpendingLimit"
						component={SpendingLimitScreen}
						options={{
							headerShown: false,
							title: 'Spending Limit',
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
};

export default App;
