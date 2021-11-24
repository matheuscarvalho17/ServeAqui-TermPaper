import styled from 'styled-components';
import colors from '../../customs/colors';
import {
	setWidthValue,
	setHeightValue,
	setFontSizeValue,
} from '../../util/ajustScreen';

export const Container = styled.View`
	align-items: center;
	justify-content: center;
	margin-top: ${setHeightValue(15)}px;
`;

export const OrderContainer = styled.View`
	width: ${setWidthValue(60)}px;
	height: ${setHeightValue(60)}px;
	margin-top: ${setHeightValue(15)}px;
`;

export const Text = styled.Text`
	text-align: center;
	color: ${colors.text_dark};
	margin-top: ${setHeightValue(5)}px;
	font-size: ${setFontSizeValue(6)}px;
	letter-spacing: ${setWidthValue(1.5)}px;
`;
