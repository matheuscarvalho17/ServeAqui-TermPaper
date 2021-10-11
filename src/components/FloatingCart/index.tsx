import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';
import colors from '../../customs/colors';
import formatValues from '../../util/formatValues';
import {useNavigation} from '@react-navigation/native';
import {setFontSizeValue} from '../../util/ajustScreen';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {Container, CartButton, CartTotalPrice, CartButtonText} from './styled';

export default function FloatingCart() {
	//All constants declarations
	const navigation = useNavigation();
	const products = useSelector(({cart}: {cart: any}) => cart);

	//All 'Functions' used by Redux
	const cartSize = useMemo(() => {
		return products.length || 0;
	}, [products]);

	const cartTotal = useMemo(() => {
		const cartAmount = products.reduce((accumulator, product) => {
			const totalPrice = accumulator + product.price * product.amount;
			return totalPrice;
		}, 0);
		return formatValues(cartAmount);
	}, [products]);

	return (
		<Container>
			<CartButton onPress={() => navigation.navigate('Cart')}>
				<FeatherIcon
					name="shopping-cart"
					size={setFontSizeValue(6)}
					color={colors.text_light}
				/>
				<CartButtonText>
					{cartSize} {cartSize == 1 ? 'item' : 'itens'}
				</CartButtonText>
				<CartTotalPrice>{cartTotal}</CartTotalPrice>
				<FeatherIcon
					name="chevron-right"
					size={setFontSizeValue(6)}
					color={colors.text_light}
				/>
			</CartButton>
		</Container>
	);
}
