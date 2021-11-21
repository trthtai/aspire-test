import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';

import colors from 'app/src/res/colors';

interface CardViewProps {
	logo: ImageSourcePropType;
	name: string;
	number: string;
	expDate: string;
	cvv: string;
	cardTypeLogo: ImageSourcePropType;
}

const CardView = (props: CardViewProps) => {
	return (
		<View style={{ backgroundColor: colors.background.green }}>
			<Image style={{ alignSelf: 'flex-end' }} source={props.logo} />
		</View>
	);
};

export default CardView;
