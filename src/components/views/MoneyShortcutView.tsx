import React from 'react';
import { FlatList, StyleProp, ViewStyle, ListRenderItem } from 'react-native';

import { MoneyShortcutItemView } from 'app/src/components/views';

export type MoneyShortcutItem = {
	currency: string;
	value: number;
};

interface MoneyShortcutViewProps {
	data: MoneyShortcutItem[];
	style?: StyleProp<ViewStyle>;
	onPress?: (item: MoneyShortcutItem) => void;
}

const MoneyShortcutView = (props: MoneyShortcutViewProps) => {
	const renderItem: ListRenderItem<MoneyShortcutItem> = ({ item, index }) => {
		return (
			<MoneyShortcutItemView
				value={item.value}
				currency={item.currency}
				onPress={() => {
					if (props.onPress) {
						props.onPress(item);
					}
				}}
			/>
		);
	};

	const keyExtractor = (item: MoneyShortcutItem, index: number) => index + '';

	return (
		<FlatList
			style={props.style}
			data={props.data}
			renderItem={renderItem}
			keyExtractor={keyExtractor}
			scrollEnabled={false}
			contentContainerStyle={{
				flex: 1,
				flexDirection: 'row',
				flexWrap: 'wrap',
				justifyContent: 'space-between',
			}}
		/>
	);
};

export default MoneyShortcutView;
