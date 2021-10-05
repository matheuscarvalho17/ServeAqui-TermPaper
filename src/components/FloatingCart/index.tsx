import React from 'react';
import colors from '../../customs/colors';
import {useNavigation} from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {
	Container,
	CartPricing,
	CartButton,
	CartTotalPrice,
	CartButtonText,
} from './styled';

export default function FloatingCart() {
	const navigation = useNavigation();
	return (
		<Container>
			<CartButton onPress={() => navigation.navigate('Cart')}>
				<FeatherIcon name="shopping-cart" size={24} color={colors.text_light} />
				<CartButtonText>0 itens</CartButtonText>
				<CartPricing>
					<CartTotalPrice>R$ 00,00</CartTotalPrice>
				</CartPricing>
				<FeatherIcon name="chevron-right" size={24} color={colors.text_light} />
			</CartButton>
		</Container>
	);
}
