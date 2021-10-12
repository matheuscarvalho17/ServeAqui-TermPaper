import styled from 'styled-components';
import colors from '../../customs/colors';
import {
	setHeightValue,
	setWidthValue,
	setFontSizeValue,
} from '../../util/ajustScreen';

export const Container = styled.View`
	position: absolute;
	align-items: center;
	flex-direction: row;
	left: ${setWidthValue(5)}px;
	width: ${setWidthValue(135)}px;
	justify-content: space-between;
	background: ${colors.secondary};
	bottom: ${setHeightValue(3.5)}px;
	border-radius: ${setHeightValue(3)}px;
	padding: ${setHeightValue(5)}px ${setWidthValue(6)}px;
`;

export const CartButton = styled.TouchableOpacity`
	flex: 1;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
`;

export const CartTotalPrice = styled.Text`
	font-weight: bold;
	color: ${colors.text_light};
	font-size: ${setFontSizeValue(4)}px;
	letter-spacing: ${setWidthValue(0.2)}px;
`;

export const CartButtonText = styled.Text`
	font-weight: bold;
	margin-right: auto;
	color: ${colors.text_light};
	margin-left: ${setWidthValue(3)}px;
	font-size: ${setFontSizeValue(4)}px;
`;
