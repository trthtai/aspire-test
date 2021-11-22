import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';

import images from 'app/src/res/images';
import colors from 'app/src/res/colors';

import { NavigationService } from 'app/src/services';

interface BaseScreenProps {
	style?: object;
	title?: string;
	children?: object;
	backButtonShown?: boolean;
}

const BaseScreen = (props: BaseScreenProps) => {
	const onBackButtonPress = () => {
		NavigationService.navigationRef.goBack();
	};

	return (
		<View style={{ flex: 1, ...props.style }}>
			<View style={{ position: 'absolute', right: 20, top: 54 }}>
				<Image source={images.iconSmallLogo} />
			</View>
			{props.backButtonShown ? (
				<TouchableOpacity onPress={onBackButtonPress}>
					<View style={{ marginLeft: 20, marginTop: 54 }}>
						<Image source={images.iconBack} />
					</View>
				</TouchableOpacity>
			) : null}
			<Text
				style={{
					marginLeft: 20,
					marginTop: props.backButtonShown ? 20 : 54,
					fontSize: 30,
					fontWeight: 'bold',
					color: colors.text.white,
				}}
			>
				{props.title}
			</Text>
			{props.children}
		</View>
	);
};

export default BaseScreen;
