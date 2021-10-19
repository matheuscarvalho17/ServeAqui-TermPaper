import styled from 'styled-components';
import colors from '../../customs/colors';
import {
	setWidthValue,
	setHeightValue,
	setFontSizeValue,
} from '../../util/ajustScreen';

export const Container = styled.View`
	width: 100%;
	background-color: white;
	padding: ${setHeightValue(2)}px ${setWidthValue(4)}px;
`;

export const Title = styled.Text`
	font-weight: bold;
	color: ${colors.text_dark};
	font-size: ${setFontSizeValue(5)}px;
	margin-bottom: ${setHeightValue(2)}px;
`;

export const Frame = styled.View`
	align-items: center;
	flex-direction: row;
	padding: ${setWidthValue(1)}px ${setWidthValue(1)}px;
`;

export const Label = styled.Text`
	font-weight: bold;
	color: ${colors.text_dark};
	font-size: ${setFontSizeValue(4)}px;
`;
