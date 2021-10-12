import styled from 'styled-components';
import colors from '../../customs/colors';
import {
	setWidthValue,
	setHeightValue,
	setFontSizeValue,
} from '../../util/ajustScreen';

export const Container = styled.View`
	width: ${setWidthValue(170)}px;
	height: ${setHeightValue(30)}px;
	background-color: ${colors.primary};
	border-radius: ${setHeightValue(4)}px;
	margin-bottom: ${setHeightValue(2)}px;
`;

export const Frame = styled.View`
	flex: 1;
	align-items: center;
	flex-direction: row;
	justify-content: space-around;
	margin: ${setWidthValue(4)}px;
`;

export const Text = styled.Text`
	width: 70%;
	text-align: center;
	color: ${colors.text_light};
	font-size: ${setFontSizeValue(4.8)}px;
	letter-spacing: ${setWidthValue(0.3)}px;
`;
