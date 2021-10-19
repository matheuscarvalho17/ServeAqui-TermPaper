import styled from 'styled-components';
import colors from '../../customs/colors';
import {
	setFontSizeValue,
	setHeightValue,
	setWidthValue,
} from '../../util/ajustScreen';

export const Container = styled.View`
	align-self: center;
	width: ${setWidthValue(105)}px;
	border-color: ${colors.primary};
	min-height: ${setHeightValue(50)}px;
	border-radius: ${setWidthValue(4)}px;
	border-width: ${setWidthValue(0.5)}px;
	background-color: ${colors.background_initial};
	padding: ${setHeightValue(4)}px ${setWidthValue(5)}px;
`;
export const Title = styled.Text`
	font-weight: bold;
	text-align: center;
	color: ${colors.text_dark};
	font-size: ${setFontSizeValue(7.5)}px;
`;
export const Icon = styled.View`
	align-self: center;
	padding: ${setHeightValue(3)}px;
`;
export const Text = styled.Text`
	font-weight: bold;
	text-align: justify;
	color: ${colors.text_dark};
	font-size: ${setFontSizeValue(5)}px;
`;
export const ButtonContainer = styled.View`
	flex-direction: row;
	justify-content: space-around;
	padding-top: ${setHeightValue(4)}px;
`;
export const Button = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
	width: ${setWidthValue(30)}px;
	height: ${setHeightValue(12)}px;
	border-radius: ${setWidthValue(4)}px;
	background-color: ${colors.secondary};
`;
export const TextButton = styled.Text`
	font-weight: bold;
	color: ${colors.text_light};
	font-size: ${setFontSizeValue(5)}px;
`;
