import {View} from 'react-native';
import React, {useMemo} from 'react';
import colors from '../../customs/colors';
import EmptyCart from '../../components/EmptyCart';
import formatValues from '../../util/formatValues';
import {useSelector, useDispatch} from 'react-redux';
import {setFontSizeValue} from '../../util/ajustScreen';
import FeatherIcon from 'react-native-vector-icons/Feather';
import * as CartActions from '../../store/modules/cart/actions';
import {
	Product,
	Container,
	ProductList,
	ProductImage,
	ProductTitle,
	ProductPrice,
	ActionButton,
	SubTotalValue,
	TotalContainer,
	ProductQuantity,
	ActionContainer,
	ProductContainer,
	TotalProductsText,
	ProductSinglePrice,
	ProductPriceContainer,
	ProductTitleContainer,
	TotalProductsContainer,
} from './styled';

const Cart: React.FC = () => {
	//All constants declarations
	const dispatch = useDispatch();
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

	//All functions
	function removeFromCart(id: number) {
		dispatch(CartActions.removeFromCart(id));
	}
	function increment(product: any) {
		dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
	}
	function decrement(product: any) {
		dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
	}

	return (
		<Container>
			{/* Cart */}
			<ProductContainer>
				<ProductList
					data={products}
					keyExtractor={item => item.id}
					ListEmptyComponent={<EmptyCart />}
					ListFooterComponentStyle={{
						height: 80,
					}}
					renderItem={({item}) => (
						<Product>
							<ProductImage source={{uri: item.image_url}} />
							<ProductTitleContainer>
								<ProductTitle>{item.title}</ProductTitle>
								<ProductPriceContainer>
									<ProductSinglePrice>
										{formatValues(item.price)}
									</ProductSinglePrice>
									<TotalContainer>
										<ProductQuantity>{`${item.amount}x`}</ProductQuantity>
										<ProductPrice>
											{formatValues(item.price * item.amount)}
										</ProductPrice>
									</TotalContainer>
								</ProductPriceContainer>
							</ProductTitleContainer>
							<ActionContainer>
								<ActionButton
									onPress={() => {
										increment(item);
									}}>
									<FeatherIcon name="plus" color={colors.secondary} size={16} />
								</ActionButton>
								<ActionButton
									onPress={() =>
										item.amount > 1 ? decrement(item) : removeFromCart(item.id)
									}>
									<FeatherIcon
										name="minus"
										color={colors.secondary}
										size={16}
									/>
								</ActionButton>
							</ActionContainer>
						</Product>
					)}
				/>
			</ProductContainer>
			{/* Information Cart */}
			<TotalProductsContainer>
				<FeatherIcon
					name="shopping-cart"
					color={colors.text_light}
					size={setFontSizeValue(6)}
				/>
				<TotalProductsText>
					{cartSize} {cartSize == 1 ? 'item' : 'itens'}
				</TotalProductsText>
				<SubTotalValue>{cartTotal}</SubTotalValue>
			</TotalProductsContainer>
		</Container>
	);
};

export default Cart;
