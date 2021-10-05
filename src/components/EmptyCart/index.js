import React from 'react';
import LottieView from 'lottie-react-native';
import EmptyCart from '../../customs/animations/EmptyCart.json';
import {Container, EmptyCartContainer, EmptyCartText} from './styled';

export default function EmpytCart() {
	return (
		<Container>
			<EmptyCartContainer>
				<LottieView source={EmptyCart} resizeMode="contain" autoPlay />
			</EmptyCartContainer>
			<EmptyCartText>Seu carrinho tá sem nada! Compra algo ai!</EmptyCartText>
		</Container>
	);
}
