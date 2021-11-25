import api from '../../services/api';
import {useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';
import ModalIcon from '../../components/ModalIcon';
import CloseOrder from '../../components/CloseOrder';
import CallWaiter from '../../components/CallWaiter';
import BannerFrame from '../../components/BannerFrame';
import {useNavigation} from '@react-navigation/native';
import FloatingCart from '../../components/FloatingCart';
import MessageFrame from '../../components/MessageFrame';
import React, {useState, useEffect, useMemo} from 'react';
import {Container, ScrollContainer, styles} from './styled';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import EmptyFrame from '../../customs/animations/EmptyFrame.json';
import {ProductsFrame, Data} from '../../components/ProductsFrame';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Catalog: React.FC = () => {
	//All constants declarations
	const navigation = useNavigation();
	const [visible, setVisible] = useState<boolean>(true);
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [products, setProducts] = useState<Array<Data>>([]);
	const [prodIceds, setProdIceds] = useState<Array<Data>>([]);
	const [prodMeals, setProdMeals] = useState<Array<Data>>([]);
	const [prodDrinks, setProdDrinks] = useState<Array<Data>>([]);
	const [personProduct, setPersonProduct] = useState<string>('');
	const order = useSelector(({orders}: {orders: any}) => orders);

	//All functions
	const orderSize = useMemo(() => {
		return order.length || 0;
	}, [order]);

	// async function getPersonProduct() {
	// 	try {
	// 		const value = await AsyncStorage.getItem('@person_product');
	// 		if (value !== null) {
	// 			setPersonProduct(value);
	// 			console.log('getPersonProduct ', value);
	// 		}
	// 	} catch (err) {
	// 		console.log('getPersonProduct', err);
	// 	}
	// }

	// async function loadPersonProducts(name) {
	// 	if (name != '') {
	// 		try {
	// 			const response = await api.get(`/products/name?title=${name}`);
	// 			setProducts(response.data);
	// 			setVisible(false);
	// 			console.log('loadPersonProducts');
	// 		} catch (err) {
	// 			console.log('loadPersonProducts', err);
	// 		}
	// 	}
	// }

	async function loadProducts() {
		try {
			const responseProducts = await api.get('/products');
			setProducts(responseProducts.data);
		} catch (err) {
			console.log('responseProducts', err);
		}
		try {
			const responseMeals = await api.get('/products?type=food');
			setProdMeals(responseMeals.data);
		} catch (err) {
			console.log('responseMeals', err);
		}
		try {
			const responseDrinks = await api.get('/products?type=drink');
			setProdDrinks(responseDrinks.data);
		} catch (err) {
			console.log('responseDrinks', err);
		}
		try {
			const responseIceds = await api.get('/products?type=iced');
			setProdIceds(responseIceds.data);
		} catch (err) {
			console.log('responseIceds', err);
		}
	}

	//All useEffects
	useEffect(() => {
		loadProducts();
	}, [orderSize]);

	// useEffect(() => {
	// 	if (personProduct != '') {
	// 		loadPersonProducts(personProduct);
	// 		getPersonProduct();
	// 	}
	// }, [personProduct]);

	return (
		<>
			<Container>
				<ScrollContainer showsVerticalScrollIndicator={false}>
					<BannerFrame
						icon={<FontistoIcon name="person" style={styles.bannerIcon} />}
						message={
							'Com dúvidas no que pedir? Chame o garçom! Ele poderá te ajudar nesta dúvida cruel.'
						}
					/>
					<ProductsFrame
						productsList={products}
						productsType={'Feitos para você!'}
					/>
					{visible && (
						<>
							<ProductsFrame
								productsList={prodMeals}
								productsType={'Refeições'}
							/>
							<ProductsFrame
								productsList={prodDrinks}
								productsType={'Bebidas'}
							/>
							<ProductsFrame
								productsList={prodIceds}
								productsType={'Gelados'}
							/>
						</>
					)}
					<MessageFrame
						animation={
							<LottieView source={EmptyFrame} resizeMode="contain" autoPlay />
						}
						message={'Parece que já te mostramos tudo as disponível...'}
					/>
				</ScrollContainer>
				<CallWaiter
					idTable={1}
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
				icon={<FontistoIcon name="person" style={styles.icon} />}
			/>
		</>
	);
};

export default Catalog;
