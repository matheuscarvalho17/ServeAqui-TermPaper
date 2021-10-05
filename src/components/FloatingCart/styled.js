import styled from 'styled-components';
import colors from '../../customs/colors';
import {
	setHeightValue,
	setWidthValue,
	setFontSizeValue,
} from '../../util/ajustScreen';

export const Container = styled.View`
	bottom: 0;
	padding: 0px 22px;
	position: absolute;
	align-items: center;
	flex-direction: row;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	justify-content: space-between;
	background: ${colors.secondary};
`;

export const CartButton = styled.TouchableOpacity`
	flex: 1;
	padding: 20px 20px;
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
	margin-left: 15px;
	margin-right: auto;
	color: ${colors.text_light};
	font-size: ${setFontSizeValue(4)}px;
`;
