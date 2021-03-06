import React from 'react';
import colors from '../customs/colors';
import {StyleSheet} from 'react-native';
import {useAppContext} from './context';
import {Appbar} from 'react-native-paper';
import {setFontSizeValue, setHeightValue} from './ajustScreen';

const StackHeader = ({scene, navigation}) => {
	const {options} = scene.descriptor;
	const title = options.headerTitle;
	const {actualTable} = useAppContext();

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
					{actualTable && (
						<Appbar.Content
							titleStyle={styles.title}
							title={'Mesa ' + actualTable.name}
						/>
					)}
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
});

export default StackHeader;
