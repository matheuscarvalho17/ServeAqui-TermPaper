import styled from 'styled-components';
import {StyleSheet} from 'react-native';
import colors from '../../customs/colors';
import {
	setWidthValue,
	setHeightValue,
	setFontSizeValue,
} from '../../util/ajustScreen';

export const Container = styled.View`
	position: absolute;
	right: ${setWidthValue(30)}px;
	bottom: ${setHeightValue(2)}px;
	padding: ${setHeightValue(4)}px;
	background-color: ${colors.primary};
	border-radius: ${setHeightValue(50)}px;
`;
export const Button = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
	width: ${setWidthValue(12)}px;
	height: ${setHeightValue(12)}px;
`;
export const styles = StyleSheet.create({
	icon: {
		color: colors.text_light,
		fontSize: setFontSizeValue(11),
	},
});
