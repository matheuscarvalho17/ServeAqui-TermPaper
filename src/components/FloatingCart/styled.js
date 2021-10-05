import styled from 'styled-components';
import colors from '../../customs/colors';

export const Container = styled.View`
	bottom: 0;
	position: absolute;
	padding: 0px 22px;
	border-radius: 10px;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	background: ${colors.secondary};
`;

export const CartPricing = styled.Text`
	padding: 1px;
`;

export const CartTotalPrice = styled.Text`
	font-size: 16px;
	font-weight: bold;
	color: ${colors.text_light};
`;

export const CartButton = styled.TouchableOpacity`
	flex: 1;
	padding: 20px 20px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const CartButtonText = styled.Text`
	flex: 1;
	font-weight: bold;
	margin-left: 15px;
	margin-right: auto;
	color: ${colors.text_light};
`;
