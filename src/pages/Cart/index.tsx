import React, {useMemo} from 'react';
import colors from '../../customs/colors';
import EmptyCart from '../../components/EmptyCart';
import formatValues from '../../util/formatValues';
import {Data} from '../../components/ProductsFrame';
import {useSelector, useDispatch} from 'react-redux';
import {setFontSizeValue} from '../../util/ajustScreen';
import FeatherIcon from 'react-native-vector-icons/Feather';
import * as CartActions from '../../store/modules/cart/actions';
import * as OrdersActions from '../../store/modules/orders/actions';
import {
	Product,
	CleanText,
	Container,
	CleanButton,
	ProductList,
	FinishButton,
	ProductImage,
	ProductTitle,
	ProductPrice,
	ActionButton,
	SubTotalValue,
	CleanContainer,
	TotalContainer,
	ProductQuantity,
	ActionContainer,
	ProductContainer,
	FinishButtonText,
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

	//All Functions
	const cartSize = useMemo(() => {
		return products.length || 0;
	}, [products]);
	const cartTotal = useMemo(() => {
		const cartAmount = products.reduce((accumulator, product) => {
			const totalPrice = accumulator + product.price * product.amountCart;
			return totalPrice;
		}, 0);
		return formatValues(cartAmount);
	}, [products]);

	function removeFromCart(id: number) {
		dispatch(CartActions.removeFromCart(id));
	}
	function incrementCart(product: Data) {
		dispatch(
			CartActions.updateAmountRequest(product.id, product.amountCart + 1),
		);
	}
	function decrementCart(product: Data) {
		dispatch(
			CartActions.updateAmountRequest(product.id, product.amountCart - 1),
		);
	}
	function incrementOrder(product: Data) {
		dispatch(OrdersActions.addOrderRequest(product.id, product.amountCart));
	}

	function clearProducts() {
		for (let index = 0; index < products.length; index++) {
			removeFromCart(products[index].id);
		}
	}

	return (
		<Container>
			{/* Cart */}
			<ProductContainer>
				{cartSize > 0 && (
					<CleanContainer>
						<CleanButton onPress={() => clearProducts()}>
							<CleanText>{'Limpar carrinho'}</CleanText>
						</CleanButton>
					</CleanContainer>
				)}
				<ProductList
					data={products}
					keyExtractor={(item: Data) => String(item.id)}
					ListEmptyComponent={<EmptyCart />}
					ListFooterComponentStyle={{
						height: 80,
					}}
					renderItem={({item}: {item: Data}) => (
						<Product>
							<ProductImage source={{uri: item.image_url}} />
							<ProductTitleContainer>
								<ProductTitle>{item.title}</ProductTitle>
								<ProductPriceContainer>
									<ProductSinglePrice>
										{formatValues(item.price)}
									</ProductSinglePrice>
									<TotalContainer>
										<ProductQuantity>{`${item.amountCart}x`}</ProductQuantity>
										<ProductPrice>
											{formatValues(item.price * item.amountCart)}
										</ProductPrice>
									</TotalContainer>
								</ProductPriceContainer>
							</ProductTitleContainer>
							<ActionContainer>
								<ActionButton
									onPress={() => {
										incrementOrder(item);
										incrementCart(item);
									}}>
									<FeatherIcon name="plus" color={colors.secondary} size={16} />
								</ActionButton>
								<ActionButton
									onPress={() =>
										item.amountCart > 1
											? decrementCart(item)
											: removeFromCart(item.id)
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
					name={'shopping-cart'}
					color={colors.text_light}
					size={setFontSizeValue(6)}
				/>
				<TotalProductsText>
					{cartSize} {cartSize == 1 ? 'item' : 'itens'}
				</TotalProductsText>
				<SubTotalValue>{cartTotal}</SubTotalValue>
				{cartSize > 0 && (
					<FinishButton
						onPress={() => {
							console.log('Realizar pedido');
							// incrementOrder(item)
						}}>
						<FinishButtonText>{'Realizar pedido'}</FinishButtonText>
					</FinishButton>
				)}
			</TotalProductsContainer>
		</Container>
	);
};

export default Cart;
