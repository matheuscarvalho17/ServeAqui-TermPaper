import styled from 'styled-components';
import {StyleSheet} from 'react-native';
import colors from '../../customs/colors';
import {ScrollView} from 'react-native-gesture-handler';
import {
	setWidthValue,
	setHeightValue,
	setFontSizeValue,
} from '../../util/ajustScreen';

export const Container = styled.SafeAreaView`
	flex: 1;
	align-items: center;
	background-color: ${colors.background_initial};
`;
export const ScrollContainer = styled(ScrollView).attrs({})`
	flex: 1;
`;
export const SearchView = styled.View`
	align-items: center;
	flex-direction: row;
	justify-content: space-around;
	margin-top: ${setHeightValue(3)}px;
	margin-bottom: ${setHeightValue(3)}px;
`;
export const TextInput = styled.TextInput`
	width: 87%;
	background-color: white;
	color: ${colors.text_dark};
	height: ${setHeightValue(13)}px;
	border-color: ${colors.secondary};
	font-size: ${setFontSizeValue(5)}px;
	border-bottom-width: ${setHeightValue(0.4)}px;
	border-top-left-radius: ${setWidthValue(2.5)}px;
	border-top-right-radius: ${setWidthValue(2.5)}px;
	border-bottom-left-radius: ${setWidthValue(1)}px;
	border-bottom-right-radius: ${setWidthValue(1)}px;
	padding: ${setHeightValue(0)}px ${setWidthValue(5)}px;
`;
export const SearchButton = styled.TouchableOpacity``;

export const styles = StyleSheet.create({
	icon: {
		color: colors.text_dark,
		fontSize: setFontSizeValue(15),
	},
	bannerIcon: {
		color: colors.text_light,
		fontSize: setFontSizeValue(12),
	},
	TextInputIcon: {
		color: colors.secondary,
		fontSize: setFontSizeValue(11),
	},
});
