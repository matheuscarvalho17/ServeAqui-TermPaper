import styled from 'styled-components';
import colors from '../../customs/colors';
import {
	setHeightValue,
	setWidthValue,
	setFontSizeValue,
} from '../../util/ajustScreen';

export const Container = styled.View`
	bottom: 0;
	position: absolute;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	background: ${colors.secondary};
	border-top-left-radius: ${setHeightValue(3)}px;
	border-top-right-radius: ${setHeightValue(3)}px;
	padding: ${setHeightValue(5)}px ${setWidthValue(8)}px;
`;

export const CartButton = styled.TouchableOpacity`
	flex: 1;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const CartTotalPrice = styled.Text`
	font-weight: bold;
	color: ${colors.text_light};
	font-size: ${setFontSizeValue(4)}px;
`;

export const CartButtonText = styled.Text`
	font-weight: bold;
	margin-right: auto;
	color: ${colors.text_light};
	margin-left: ${setWidthValue(3)}px;
	font-size: ${setFontSizeValue(4)}px;
`;
