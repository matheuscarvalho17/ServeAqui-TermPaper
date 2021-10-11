import api from '../../services/api';
import React, {useState, useEffect} from 'react';
import {Container, FlatListContainer} from './styled';
import FloatingCart from '../../components/FloatingCart';
import MessageFrame from '../../components/MessageFrame';
import ProductsFrame from '../../components/ProductsFrame';

interface Data {
	id: number;
	title: string;
	price: number;
	type: string;
	editable: boolean;
	image_url: string;
	description: string;
}

export default function Catalog() {
	//All constants declarations
	const [products, setProducts] = useState([]);

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
			<FlatListContainer showsVerticalScrollIndicator={false}>
				<ProductsFrame productsList={products} productsType={'Refeições'} />
				<ProductsFrame productsList={products} productsType={'Bebidas'} />
				<ProductsFrame productsList={products} productsType={'Gelados'} />
				<MessageFrame
					message={'Parece que já te mostramos todas as comidinhas!'}
				/>
			</FlatListContainer>
			<FloatingCart />
		</Container>
	);
}
