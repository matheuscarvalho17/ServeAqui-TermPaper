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
`;

export const CartContainer = styled.View`
	width: ${setWidthValue(60)}px;
	height: ${setHeightValue(60)}px;
	margin-top: ${setHeightValue(15)}px;
`;

export const Text = styled.Text`
	text-align: center;
	color: ${colors.text_light};
	font-size: ${setFontSizeValue(6)}px;
	margin-top: ${setHeightValue(15)}px;
	letter-spacing: ${setWidthValue(1)}px;
`;
