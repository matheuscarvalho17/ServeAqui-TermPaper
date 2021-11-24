import colors from '../customs/colors';
import React, {useState} from 'react';
import {Appbar} from 'react-native-paper';
import {StyleSheet, TextInput} from 'react-native';
import {setFontSizeValue, setWidthValue, setHeightValue} from './ajustScreen';

const StackHeader = ({scene, navigation}) => {
	const {options} = scene.descriptor;
	const title = options.headerTitle;
	const [text, setText] = useState<string>('');

	return (
		<Appbar.Header style={styles.header}>
			{navigation.canGoBack() && (
				<Appbar.BackAction
					color={colors.text_light}
					size={setFontSizeValue(6)}
					onPress={() => navigation.pop()}
				/>
			)}
			<Appbar.Content title={title} titleStyle={styles.title} />
			{!navigation.canGoBack() && (
				<>
					<TextInput
						value={text}
						style={styles.textInput}
						onChangeText={text => setText(text)}
					/>
					<Appbar.Action
						icon="magnify"
						color={colors.text_light}
						size={setFontSizeValue(6)}
						onPress={() => {
							// setSearch(true);
						}}
					/>
					<Appbar.Action
						onPress={() => {}}
						icon="dots-vertical"
						color={colors.text_light}
						size={setFontSizeValue(6)}
						onLongPress={() => navigation.navigate('SignIn')}
					/>
				</>
			)}
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
		color: colors.text_light,
		fontSize: setFontSizeValue(5),
	},
	textInput: {
		width: setWidthValue(100),
		marginRight: setWidthValue(10),
		borderRadius: setWidthValue(1),
		paddingHorizontal: setWidthValue(4),
		backgroundColor: colors.background_initial,
	},
});

export default StackHeader;
