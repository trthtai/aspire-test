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
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
	CreditScreen,
	DebitCardScreen,
	HomeScreen,
	PaymentScreen,
	ProfileScreen,
} from 'app/src/screens';

const Tab = createBottomTabNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen
					name="Home"
					component={HomeScreen}
					options={{ headerShown: false }}
				/>
				<Tab.Screen
					name="Debit Card"
					component={DebitCardScreen}
					options={{ headerShown: false }}
				/>
				<Tab.Screen
					name="Payment"
					component={PaymentScreen}
					options={{ headerShown: false }}
				/>
				<Tab.Screen
					name="Credit"
					component={CreditScreen}
					options={{ headerShown: false }}
				/>
				<Tab.Screen
					name="Profile"
					component={ProfileScreen}
					options={{ headerShown: false }}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default App;
