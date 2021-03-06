import React from 'react';
import LottieView from 'lottie-react-native';
import {Container, CartContainer, Text} from './styled';
import EmptyCart from '../../customs/animations/EmptyCart.json';

const EmpytCart: React.FC = () => {
	return (
		<Container>
			<CartContainer>
				<LottieView source={EmptyCart} resizeMode="contain" autoPlay />
			</CartContainer>
			<Text>{'Seu carrinho tá sem nada!\nCompra algo ai!'}</Text>
		</Container>
	);
};

export default EmpytCart;
