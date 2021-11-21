import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';

import images from 'app/src/res/images';

interface BaseScreenProps {
	style?: object;
	title?: string;
	children?: object;
	backButtonShown?: boolean;
	logo?: object;
}

const BaseScreen = (props: BaseScreenProps) => {
	return (
		<View style={{ flex: 1, ...props.style }}>
			<View style={{ position: 'absolute', right: 20, top: 54 }}>
				{props.logo}
			</View>
			{props.backButtonShown ? (
				<TouchableOpacity>
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
					color: '#fff',
				}}
			>
				{props.title}
			</Text>
			{props.children}
		</View>
	);
};

export default BaseScreen;
