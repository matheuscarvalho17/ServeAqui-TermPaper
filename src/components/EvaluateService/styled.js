import styled from 'styled-components';
import colors from '../../customs/colors';
import {
	setWidthValue,
	setHeightValue,
	setFontSizeValue,
} from '../../util/ajustScreen';

export const Container = styled.View`
	align-self: center;
	background-color: white;
	width: ${setWidthValue(105)}px;
	border-color: ${colors.primary};
	min-height: ${setHeightValue(40)}px;
	border-radius: ${setWidthValue(4)}px;
	border-width: ${setWidthValue(0.5)}px;
	padding: ${setHeightValue(4)}px ${setWidthValue(5)}px;
`;
export const Icon = styled.View`
	align-self: center;
	padding: ${setHeightValue(3)}px;
`;
export const Text = styled.Text`
	font-weight: bold;
	text-align: center;
	color: ${colors.text_dark};
	margin-top: ${setHeightValue(5)}px;
	font-size: ${setFontSizeValue(5)}px;
`;
