import React from 'react';
import {
	FlatList,
	StyleProp,
	ViewStyle,
	ImageSourcePropType,
	ListRenderItem,
} from 'react-native';

import { MenuItemView } from 'app/src/components/views';

export type MenuItem = {
	icon: ImageSourcePropType;
	title: string;
	subTitle: string;
	switchShown?: boolean;
	onSwitchChange?: () => void;
};

interface MenuViewProps {
	data: MenuItem[];
	headerView?:
		| React.ComponentType<any>
		| React.ReactElement
		| null
		| undefined;
	style?: StyleProp<ViewStyle>;
}

const MenuView = (props: MenuViewProps) => {
	const renderItem: ListRenderItem<MenuItem> = ({ item, index }) => {
		return (
			<MenuItemView
				style={{ marginVertical: 10 }}
				title={item.title}
				subTitle={item.subTitle}
				icon={item.icon}
				switchShown={item.switchShown}
				onSwitchChange={item.onSwitchChange}
			/>
		);
	};

	const keyExtractor = (item: MenuItem, index: number) => index + '';

	return (
		<FlatList
			ListHeaderComponent={props.headerView}
			ListHeaderComponentStyle={{ zIndex: 0 }}
			style={props.style}
			data={props.data}
			renderItem={renderItem}
			keyExtractor={keyExtractor}
			scrollEnabled={false}
		/>
	);
};

export default MenuView;
