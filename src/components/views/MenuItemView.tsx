import React, { useState } from 'react';
import { View, Text, Image, ImageSourcePropType, Switch } from 'react-native';

import colors from 'app/src/res/colors';

interface MenuItemViewProps {
	style?: object;
	icon: ImageSourcePropType;
	title: string;
	subTitle: string;
	switchShown?: boolean;
	onSwitchChange?: () => void;
}

const MenuItemView = (props: MenuItemViewProps) => {
	const [enabled, setEnabled] = useState(false);

	const onSwitchChange = (value: boolean) => {
		setEnabled(value);
		if (props.onSwitchChange) props.onSwitchChange();
	};

	return (
		<View
			style={{
				flexDirection: 'row',
				alignItems: 'center',
				width: '100%',
				height: 60,
				...props.style,
			}}
		>
			<View
				style={{
					width: 36,
					height: 36,
					borderRadius: 18,
					backgroundColor: '#325BAF',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Image source={props.icon} />
			</View>
			<View style={{ flex: 1, marginLeft: 10 }}>
				<Text
					style={{
						color: colors.text.title,
						fontSize: 16,
						fontWeight: '500',
					}}
					numberOfLines={1}
				>
					{props.title}
				</Text>
				<Text
					style={{
						color: colors.text.subtitle,
						fontSize: 15,
						fontWeight: '500',
					}}
					numberOfLines={1}
				>
					{props.subTitle}
				</Text>
			</View>
			{props.switchShown ? (
				<Switch
					style={{ marginLeft: 10 }}
					value={enabled}
					onValueChange={onSwitchChange}
				/>
			) : null}
		</View>
	);
};

export default MenuItemView;
