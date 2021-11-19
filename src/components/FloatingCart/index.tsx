import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';
import formatValues from '../../util/formatValues';
import {useNavigation} from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {
	styles,
	Container,
	CartButton,
	CartTotalPrice,
	CartButtonText,
} from './styled';

const FloatingCart: React.FC = () => {
	//All constants declarations
	const navigation = useNavigation();
	const products = useSelector(({cart}: {cart: any}) => cart);
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
				<FeatherIcon name="shopping-cart" style={styles.icon} />
				<CartButtonText>
					{cartSize} {cartSize == 1 ? 'item' : 'itens'}
				</CartButtonText>
				<CartTotalPrice>{cartTotal}</CartTotalPrice>
				<FeatherIcon name="chevron-right" style={styles.icon} />
			</CartButton>
		</Container>
	);
};

export default FloatingCart;
