import * as React from 'react';
import colors from '../customs/colors';
import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';
import {setFontSizeValue, setHeightValue} from './ajustScreen';

const StackHeader = ({scene, navigation}) => {
	const {options} = scene.descriptor;
	const title = options.headerTitle;

	return (
		<Appbar.Header style={styles.header}>
			{navigation.canGoBack() ? (
				<Appbar.BackAction onPress={() => navigation.pop()} />
			) : (
				<Appbar.Action
					icon="information-outline"
					size={setFontSizeValue(6)}
					onPress={() => console.log('Notification pressed1')}
				/>
			)}
			<Appbar.Content title={title} titleStyle={styles.title} />
			<Appbar.Action
				icon="magnify"
				size={setFontSizeValue(6)}
				onPress={() => console.log('Notification pressed2')}
			/>
			<Appbar.Action
				icon="dots-vertical"
				size={setFontSizeValue(6)}
				onPress={() => console.log('Notification pressed3')}
			/>
		</Appbar.Header>
	);
};

const styles = StyleSheet.create({
	header: {
		marginHorizontal: '2%',
		height: setHeightValue(15),
		backgroundColor: colors.primary,
	},
	title: {
		color: 'white',
		fontSize: setFontSizeValue(5),
	},
});

export default StackHeader;
