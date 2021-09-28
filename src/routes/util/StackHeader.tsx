import React from 'react';
import {Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const StackHeader = ({scene, navigation}) => {
	const {options} = scene.descriptor;
	const title = options.headerTitle;

	return (
		<Appbar.Header>
			{navigation.canGoBack() ? (
				<Appbar.BackAction onPress={() => navigation.pop()} />
			) : (
				<Icon name="instagram" size={24} color="white" />
			)}
			<Appbar.Content title={title} />
			<Appbar.Action
				icon="bell"
				onPress={() => console.log('Notification pressed')}
			/>
		</Appbar.Header>
	);
};

export default StackHeader;
