import api from '../../services/api';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import formatValues from '../../util/formatValues';
import {RouteProp} from '@react-navigation/native';
import ModalIcon from '../../components/ModalIcon';
import {Data} from '../../components/ProductsFrame';
import EmptyFrame from '../../components/EmptyFrame';
import {useSelector, useDispatch} from 'react-redux';
import CallWaiter from '../../components/CallWaiter';
import CloseOrder from '../../components/CloseOrder';
import {useNavigation} from '@react-navigation/native';
import CustomFrame from '../../components/CustomFrame';
import FloatingCart from '../../components/FloatingCart';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import * as CartActions from '../../store/modules/cart/actions';
import {
	styles,
	Container,
	TextButton,
	ProductImage,
	ProductTitle,
	ProductPrice,
	ActionButton,
	Informations,
	AddNewButton,
	ButtonContainer,
	ActionContainer,
	AddNewButtonText,
	ProductDescription,
} from './styled';

const ProductDetails: React.FC = () => {
	//All constants declarations
	const dispatch = useDispatch();
	const navigation = useNavigation();
	const route: RouteProp<{params: {idProduct: number}}, 'params'> = useRoute();
	const {idProduct} = route.params;
	const [product, setProduct] = useState<Data>();
	const [openModal, setOpenModal] = useState<boolean>(false);
	const products = useSelector(({cart}: {cart: any}) => cart);

	//All functions
	async function loadProduct() {
		try {
			const response = await api.get(`/product?id=${idProduct}`);
			setProduct(response.data);
		} catch (err) {
			console.log('product', err);
		}
	}

	//All functions
	function handlerAddToCart(id: number) {
		dispatch(CartActions.addToCartRequest(id));
	}
	function removeFromCart(id: number) {
		dispatch(CartActions.removeFromCart(id));
	}
	function increment(product: Data) {
		dispatch(
			CartActions.updateAmountRequest(product.id, product.amountCart + 1),
		);
	}
	function decrement(product: Data) {
		dispatch(
			CartActions.updateAmountRequest(product.id, product.amountCart - 1),
		);
	}

	//All useEffects
	useEffect(() => {
		loadProduct();
	}, []);

	return (
		<>
			<Container>
				{product ? (
					<>
						<ProductImage source={{uri: product.image_url}} />
						<Informations>
							<ProductTitle>{product.title}</ProductTitle>
							<ProductDescription>{product.description}</ProductDescription>
							<ProductPrice>{formatValues(product.price)}</ProductPrice>
						</Informations>
						{product.editable && (
							<CustomFrame
								title={'Gostaria de personalizar seu pedido?'}
								label1={'Não'}
								label2={'Sim'}
							/>
						)}
						{products.filter(products => products.id == idProduct).length >
						0 ? (
							products
								.filter(products => products.id == idProduct)
								.map((item, index) => (
									<ButtonContainer key={index}>
										<ActionContainer>
											<ActionButton
												onPress={() =>
													item.amountCart > 1
														? decrement(item)
														: removeFromCart(item.id)
												}>
												<FeatherIcon name="minus" style={styles.icon} />
											</ActionButton>
											<TextButton>{item.amountCart}</TextButton>
											<ActionButton
												onPress={() => {
													increment(item);
												}}>
												<FeatherIcon name="plus" style={styles.icon} />
											</ActionButton>
										</ActionContainer>
									</ButtonContainer>
								))
						) : (
							<ButtonContainer>
								<AddNewButton
									onPress={() => {
										handlerAddToCart(idProduct);
									}}>
									<AddNewButtonText>{'ADICIONAR'}</AddNewButtonText>
								</AddNewButton>
							</ButtonContainer>
						)}
					</>
				) : (
					<EmptyFrame />
				)}
				<CallWaiter
					onPress={() => {
						setOpenModal(true);
					}}
				/>
				<CloseOrder onPress={() => navigation.navigate('Order')} />
				<FloatingCart />
			</Container>
			<ModalIcon
				visible={openModal}
				OkOnPress={() => {}}
				setVisible={setOpenModal}
				text={'Aguarde um instante. Um garçom foi chamado à sua mesa!'}
				icon={<FontistoIcon name="person" style={styles.bannerIcon} />}
			/>
		</>
	);
};

export default ProductDetails;
