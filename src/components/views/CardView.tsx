import React, { useState } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	ImageSourcePropType,
} from 'react-native';

import colors from 'app/src/res/colors';
import images from 'app/src/res/images';

interface CardViewProps {
	logo: ImageSourcePropType;
	name: string;
	number: string;
	expDate: Date;
	cvv: string;
	cardTypeLogo: ImageSourcePropType;
}

const CardView = (props: CardViewProps) => {
	const [showNumbers, setShowNumbers] = useState(false);

	const showNumberTitle = showNumbers
		? 'Hide card numbers'
		: 'Show card numbers';

	let formattedNumber = showNumbers
		? props.number
		: `●●●● ●●●● ●●●● ${props.number.split(' ')[3]}`;
	formattedNumber = formattedNumber.split(' ').join('   ');

	const convertToMonthDay = (time: Date) => {
		const date = new Date(time);
		const month = date.getMonth() + 1;
		const day = date.getDate();
		return `${month > 10 ? month : '0' + month}/${
			day > 10 ? day : '0' + day
		}`;
	};

	const onShowButtonTouch = () => {
		setShowNumbers(!showNumbers);
		console.log('clicked');
	};

	return (
		<View
			style={{
				height: 170,
				zIndex: 1,
			}}
		>
			<View
				style={{
					width: '100%',
					height: 220,
					backgroundColor: colors.background.green,
					borderRadius: 10,
					padding: 20,
					position: 'absolute',
					top: -50,
					zIndex: 1,
				}}
			>
				<Image style={{ alignSelf: 'flex-end' }} source={props.logo} />
				<Text
					style={{
						marginTop: 26,
						color: colors.text.white,
						fontSize: 24,
						fontWeight: 'bold',
					}}
				>
					{props.name}
				</Text>
				<Text
					style={{
						marginTop: 26,
						color: colors.text.white,
						fontSize: 14,
						fontWeight: '600',
						letterSpacing: 3,
					}}
				>
					{formattedNumber}
				</Text>
				<View style={{ marginTop: 10, flexDirection: 'row' }}>
					<Text
						style={{
							color: colors.text.white,
							fontSize: 16,
							fontWeight: '400',
						}}
					>
						{`Thru: ${convertToMonthDay(props.expDate)}`}
					</Text>
					<Text
						style={{
							marginLeft: 20,
							color: colors.text.white,
							fontSize: 16,
							fontWeight: '400',
						}}
					>
						{`CVV: ${showNumbers ? props.cvv : '★★★'}`}
					</Text>
				</View>
				<Image
					source={props.cardTypeLogo}
					style={{ alignSelf: 'flex-end' }}
				/>
			</View>
			<View
				style={{
					backgroundColor: colors.background.white,
					width: 180,
					height: 60,
					borderRadius: 10,
					alignItems: 'center',
					position: 'absolute',
					right: 0,
					top: -80,
				}}
			>
				<TouchableOpacity onPress={onShowButtonTouch}>
					<View
						style={{
							backgroundColor: colors.background.white,
							width: 180,
							height: 30,
							flexDirection: 'row',
							paddingHorizontal: 10,
							borderRadius: 10,
							alignItems: 'center',
							zIndex: 4,
						}}
					>
						<Image
							source={
								showNumbers ? images.iconHide : images.iconShow
							}
						/>
						<Text
							style={{
								color: colors.background.green,
								marginLeft: 10,
								fontWeight: '600',
							}}
						>
							{showNumberTitle}
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default CardView;
