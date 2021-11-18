import React from 'react';
import colors from '../customs/colors';
import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';
import {setFontSizeValue, setHeightValue} from './ajustScreen';

const StackHeaderAuth = ({scene}) => {
	const {options} = scene.descriptor;
	const title = options.headerTitle;

	return (
		<Appbar.Header style={styles.header}>
			<Appbar.Content title={title} titleStyle={styles.title} />
		</Appbar.Header>
	);
};

const styles = StyleSheet.create({
	header: {
		height: setHeightValue(15),
		backgroundColor: colors.primary,
	},
	title: {
		alignSelf: 'center',
		color: colors.text_light,
		fontSize: setFontSizeValue(5),
	},
});

export default StackHeaderAuth;
