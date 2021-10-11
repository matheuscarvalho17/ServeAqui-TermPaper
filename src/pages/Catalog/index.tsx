import api from '../../services/api';
import React, {useState, useEffect} from 'react';
import {Container, FlatListContainer} from './styled';
import FloatingCart from '../../components/FloatingCart';
import MessageFrame from '../../components/MessageFrame';
import {ProductsFrame, Data} from '../../components/ProductsFrame';

export default function Catalog() {
	//All constants declarations
	const [products, setProducts] = useState<Array<Data>>([]);

	//All functions
	async function loadProducts() {
		try {
			const {data} = await api.get('/products/');
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
			<FlatListContainer showsVerticalScrollIndicator={false}>
				<ProductsFrame
					productsList={products}
					productsType={'Refeições'}
					onPressProduct={() => {}}
					onPressContainer={() => {}}
				/>
				{/* <ProductsFrame
					productsList={products}
					productsType={'Bebidas'}
					onPressProduct={() => {}}
					onPressContainer={() => {}}
				/>
				<ProductsFrame
					productsList={products}
					productsType={'Gelados'}
					onPressProduct={() => {}}
					onPressContainer={() => {}}
				/> */}
				<MessageFrame
					message={'Parece que já te mostramos todas as comidinhas!'}
				/>
			</FlatListContainer>
			<FloatingCart />
		</Container>
	);
}
