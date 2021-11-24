import React from 'react';
import LottieView from 'lottie-react-native';
import {Container, OrderContainer, Text} from './styled';
import EmptyCart from '../../customs/animations/EmptyCart.json';

const EmptyOrder: React.FC = () => {
	return (
		<Container>
			<OrderContainer>
				<LottieView source={EmptyCart} resizeMode="contain" autoPlay />
			</OrderContainer>
			<Text>{'Tem muito espaço sobrando aqui!\nPede algo ai!'}</Text>
		</Container>
	);
};

export default EmptyOrder;
