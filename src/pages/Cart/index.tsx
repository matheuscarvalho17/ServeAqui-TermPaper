import {View} from 'react-native';
import api from '../../services/api';
import colors from '../../customs/colors';
import React, {useState, useEffect} from 'react';
import EmptyCart from '../../components/EmptyCart';
import formatValues from '../../util/formatValues';
import {setFontSizeValue} from '../../util/ajustScreen';
import FeatherIcon from 'react-native-vector-icons/Feather';
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

export default function Cart() {
	//All constants declarations
	const [products, setProducts] = useState([]);
	const [amount, setAmount] = useState<number>(1);
	const [cartSize, setCartSize] = useState<number>(2);
	const [cartTotal, setCartTotal] = useState<string>('R$350.00');

	//All Functions
	async function loadProducts() {
		try {
			const {data} = await api.get('/products');
			setProducts(data);
		} catch (err) {
			console.log(err);
		}
	}

	//All useEffects
	useEffect(() => {
		loadProducts();
	}, []);

	return (
		<Container>
			{/* Cart */}
			<ProductContainer>
				<ProductList
					data={products}
					keyExtractor={item => item.id}
					ListEmptyComponent={<EmptyCart />}
					ListFooterComponent={<View />}
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
										<ProductQuantity>{`${amount}x`}</ProductQuantity>
										<ProductPrice>
											{formatValues(item.price * amount)}
										</ProductPrice>
									</TotalContainer>
								</ProductPriceContainer>
							</ProductTitleContainer>
							<ActionContainer>
								<ActionButton
									onPress={() => {
										console.log('increment(item)');
									}}>
									<FeatherIcon name="plus" color={colors.secondary} size={16} />
								</ActionButton>
								<ActionButton
									onPress={() =>
										item.amount > 1
											? console.log('decrement(item)')
											: console.log('removeFromCart(item.id)')
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
}
