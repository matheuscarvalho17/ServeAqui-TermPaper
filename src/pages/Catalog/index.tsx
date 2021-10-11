import api from '../../services/api';
import React, {useState, useEffect} from 'react';
import {Container, FlatListContainer} from './styled';
import FloatingCart from '../../components/FloatingCart';
import MessageFrame from '../../components/MessageFrame';
import {ProductsFrame, Data} from '../../components/ProductsFrame';

const Catalog: React.FC = () => {
	//All constants declarations
	const [prodIceds, setProdIceds] = useState<Array<Data>>([]);
	const [prodMeals, setProdMeals] = useState<Array<Data>>([]);
	const [prodDrinks, setProdDrinks] = useState<Array<Data>>([]);

	//All functions
	async function loadProducts() {
		try {
			const responseIceds = await api.get('/products?type=iced');
			setProdIceds(responseIceds.data);
		} catch (err) {
			console.log('responseIceds', err);
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
	}

	//All useEffects
	useEffect(() => {
		loadProducts();
	}, []);

	return (
		<Container>
			<FlatListContainer showsVerticalScrollIndicator={false}>
				<ProductsFrame
					productsList={prodMeals}
					productsType={'Refeições'}
					onPressProduct={() => {}}
					onPressContainer={() => {}}
				/>
				<ProductsFrame
					productsList={prodDrinks}
					productsType={'Bebidas'}
					onPressProduct={() => {}}
					onPressContainer={() => {}}
				/>
				<ProductsFrame
					productsList={prodIceds}
					productsType={'Gelados'}
					onPressProduct={() => {}}
					onPressContainer={() => {}}
				/>
				<MessageFrame
					message={'Parece que já te mostramos todas as comidinhas!'}
				/>
			</FlatListContainer>
			<FloatingCart />
		</Container>
	);
};

export default Catalog;
