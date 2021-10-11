import api from '../../services/api';
import {useDispatch} from 'react-redux';
import React, {useState, useEffect} from 'react';
import {Container, FlatListContainer} from './styled';
import FloatingCart from '../../components/FloatingCart';
import MessageFrame from '../../components/MessageFrame';
import * as CartActions from '../../store/modules/cart/actions';
import {ProductsFrame, Data} from '../../components/ProductsFrame';

export default function Catalog() {
	//All constants declarations
	const dispatch = useDispatch();
	const [products, setProducts] = useState<Array<Data>>([]);

	//All Functions
	function handlerAddToCart(id) {
		dispatch(CartActions.addToCartRequest(id));
	}

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
				<ProductsFrame
					productsList={products}
					productsType={'Refeições'}
					onPressAdd={() => console.log('id')}
					onPressProduct={() => {}}
					onPressContainer={() => {}}
				/>
				{/* <ProductsFrame
					productsList={products}
					productsType={'Bebidas'}
					onPressAdd={() => {}}
					onPressProduct={() => {}}
					onPressContainer={() => {}}
				/>
				<ProductsFrame
					productsList={products}
					productsType={'Gelados'}
					onPressAdd={() => {}}
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
