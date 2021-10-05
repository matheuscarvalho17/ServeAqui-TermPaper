import styled from 'styled-components';
import colors from '../../customs/colors';
import {
	setWidthValue,
	setHeightValue,
	setFontSizeValue,
} from '../../util/ajustScreen';

export const MessageContainer = styled.View`
	width: ${setWidthValue(170)}px;
	height: ${setHeightValue(40)}px;
	margin-bottom: ${setHeightValue(20)}px;
	background-color: orange;
`;

export const MessageText = styled.Text`
	color: ${colors.text_dark};
	margin-left: ${setWidthValue(3)}px;
	margin-top: ${setHeightValue(2)}px;
	line-height: ${setHeightValue(5)}px;
	font-size: ${setFontSizeValue(3.3)}px;
	letter-spacing: ${setWidthValue(0.3)}px;
`;
