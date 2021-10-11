import React from 'react';
import LottieView from 'lottie-react-native';
import EmptyCart from '../../customs/animations/EmptyCart.json';
import {Container, CartContainer, Text} from './styled';

export default function EmpytCart() {
	return (
		<Container>
			<CartContainer>
				<LottieView source={EmptyCart} resizeMode="contain" autoPlay />
			</CartContainer>
			<Text>Seu carrinho tá sem nada! Compra algo ai!</Text>
		</Container>
	);
}
