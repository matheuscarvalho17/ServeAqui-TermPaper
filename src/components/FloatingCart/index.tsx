import React from 'react';
import colors from '../../customs/colors';
import formatValues from '../../util/formatValues';
import {useNavigation} from '@react-navigation/native';
import {setFontSizeValue} from '../../util/ajustScreen';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {Container, CartButton, CartTotalPrice, CartButtonText} from './styled';

export default function FloatingCart() {
	const navigation = useNavigation();
	return (
		<Container>
			<CartButton onPress={() => navigation.navigate('Cart')}>
				<FeatherIcon
					name="shopping-cart"
					size={setFontSizeValue(6)}
					color={colors.text_light}
				/>
				<CartButtonText>0 itens</CartButtonText>
				<CartTotalPrice>{formatValues(0)}</CartTotalPrice>
				<FeatherIcon
					name="chevron-right"
					size={setFontSizeValue(6)}
					color={colors.text_light}
				/>
			</CartButton>
		</Container>
	);
}
