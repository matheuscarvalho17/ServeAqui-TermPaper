import api from '../../services/api';
import colors from '../../customs/colors';
import React, {useState, useEffect} from 'react';
import ModalIcon from '../../components/ModalIcon';
import {Container, ScrollContainer} from './styled';
import CallWaiter from '../../components/CallWaiter';
import BannerFrame from '../../components/BannerFrame';
import {setFontSizeValue} from '../../util/ajustScreen';
import FloatingCart from '../../components/FloatingCart';
import MessageFrame from '../../components/MessageFrame';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import {ProductsFrame, Data} from '../../components/ProductsFrame';
import SignIn from '../../components/SignIn';

const Catalog: React.FC = () => {
	//All constants declarations
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [products, setProducts] = useState<Array<Data>>([]);
	const [prodIceds, setProdIceds] = useState<Array<Data>>([]);
	const [prodMeals, setProdMeals] = useState<Array<Data>>([]);
	const [prodDrinks, setProdDrinks] = useState<Array<Data>>([]);
	const [openModalLogin, setOpenModalLogin] = useState<boolean>(true);

	//All functions
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
	}, []);

	return (
		<>
			<Container>
				<ScrollContainer showsVerticalScrollIndicator={false}>
					<BannerFrame
						icon={
							<FontistoIcon
								name="person"
								color={colors.text_light}
								size={setFontSizeValue(12)}
							/>
						}
						message={
							'Com dúvidas no que pedir? Chame o garçom! Ele poderá te ajudar nesta dúvida cruel.'
						}
					/>
					<ProductsFrame
						productsList={products}
						productsType={'Feitos para você!'}
						onPressContainer={() => {}}
					/>
					<ProductsFrame
						productsList={prodMeals}
						productsType={'Refeições'}
						onPressContainer={() => {}}
					/>
					<ProductsFrame
						productsList={prodDrinks}
						productsType={'Bebidas'}
						onPressContainer={() => {}}
					/>
					<ProductsFrame
						productsList={prodIceds}
						productsType={'Gelados'}
						onPressContainer={() => {}}
					/>
					<MessageFrame
						message={'Parece que já te mostramos todas as comidinhas!'}
					/>
				</ScrollContainer>
				<CallWaiter
					onPress={() => {
						setOpenModal(true);
					}}
				/>
				<FloatingCart />
			</Container>
			<ModalIcon
				visible={openModal}
				setVisible={setOpenModal}
				OkOnPress={() => console.log('Chamar garçom')}
				text={'Aguarde um instante. Um garçom foi chamado à sua mesa!'}
				icon={
					<FontistoIcon
						name="person"
						style={{color: colors.text_dark, fontSize: setFontSizeValue(14)}}
					/>
				}
			/>
			<SignIn
				visible={openModalLogin}
				onPressBack={() => {
					setOpenModalLogin(false);
				}}
			/>
		</>
	);
};

export default Catalog;
