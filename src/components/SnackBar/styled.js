import styled from 'styled-components';
import colors from '../../customs/colors';
import {
	setWidthValue,
	setHeightValue,
	setFontSizeValue,
} from '../../util/ajustScreen';

export const Container = styled.View`
	flex-direction: row;
	background-color: white;
	height: ${setHeightValue(15)}px;
	margin-top: ${setHeightValue(4)}px;
	margin-left: ${setWidthValue(5)}px;
	margin-right: ${setWidthValue(5)}px;
	border-radius: ${setHeightValue(2)}px;
`;

export const Frame = styled.View`
	width: 85%;
	justify-content: center;
	padding-left: ${setWidthValue(5)}px;
`;

export const Text = styled.Text`
	color: ${colors.text_dark};
	font-size: ${setFontSizeValue(4.8)}px;
`;

export const ButtonContainer = styled.TouchableOpacity`
	width: 15%;
	justify-content: center;
`;

export const ButtonText = styled.Text`
	text-align: center;
	font-weight: bold;
	color: ${colors.secondary};
	font-size: ${setFontSizeValue(5)}px;
`;
