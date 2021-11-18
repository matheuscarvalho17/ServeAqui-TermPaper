import styled from 'styled-components';
import colors from '../../customs/colors';
import {
	setWidthValue,
	setHeightValue,
	setFontSizeValue,
} from '../../util/ajustScreen';

export const Container = styled.View`
	align-self: center;
	align-items: center;
	justify-content: space-around;
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
	font-size: ${setFontSizeValue(5)}px;
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
