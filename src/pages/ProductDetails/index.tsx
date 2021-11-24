import api from '../../services/api';
import colors from '../../customs/colors';
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
import {setFontSizeValue} from '../../util/ajustScreen';
import FloatingCart from '../../components/FloatingCart';
import React, {useEffect, useState, useMemo} from 'react';
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
	ButtonContainer,
	ActionContainer,
	ProductDescription,
	ProductList,
} from './styled';

const ProductDetails: React.FC = () => {
	//All constants declarations
	const navigation = useNavigation();
	const route: RouteProp<{params: {idProduct: number}}, 'params'> = useRoute();
	const {idProduct} = route.params;
	const dispatch = useDispatch();
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
								title={'Gostaria de tomates?'}
								label1={'Sim'}
								label2={'Não'}
							/>
						)}
						<ProductList
							data={products}
							keyExtractor={(item: Data) => String(item.id)}
							ListFooterComponentStyle={{
								height: 80,
							}}
							renderItem={({item}: {item: Data}) => (
								<ButtonContainer>
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
							)}
						/>
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
				setVisible={setOpenModal}
				OkOnPress={() => console.log('Chamar garçom')}
				text={'Aguarde um instante. Um garçom foi chamado à sua mesa!'}
				icon={<FontistoIcon name="person" style={styles.bannerIcon} />}
			/>
		</>
	);
};

export default ProductDetails;
