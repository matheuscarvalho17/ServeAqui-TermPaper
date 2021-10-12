import api from '../../services/api';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import formatValues from '../../util/formatValues';
import {Data} from '../../components/ProductsFrame';
import EmptyFrame from '../../components/EmptyFrame';
import CallWaiter from '../../components/CallWaiter';
import FloatingCart from '../../components/FloatingCart';
import {
	Container,
	ProductImage,
	ProductTitle,
	ProductPrice,
	Informations,
	ProductHeader,
	ProductDescription,
} from './styled';

const ProductDetails: React.FC = () => {
	//All constants declarations
	const route = useRoute();
	const idProduct = route.params;
	const [product, setProduct] = useState<Array<Data>>([]);

	//All functions
	async function loadProduct() {
		try {
			const response = await api.get(`/products?id=${idProduct}`);
			setProduct(response.data);
		} catch (err) {
			console.log('product', err);
		}
	}

	//All useEffects
	useEffect(() => {
		loadProduct();
	}, []);

	return (
		<Container>
			<ProductHeader
				data={product}
				keyExtractor={item => item.id}
				ListEmptyComponent={<EmptyFrame />}
				ListFooterComponentStyle={{
					height: 80,
				}}
				renderItem={({item}) => (
					<>
						<ProductImage source={{uri: item.image_url}} />
						<Informations>
							<ProductTitle>{item.title}</ProductTitle>
							<ProductDescription>{item.description}</ProductDescription>
							<ProductPrice>{formatValues(item.price)}</ProductPrice>
						</Informations>
					</>
				)}
			/>
			<FloatingCart />
			<CallWaiter />
		</Container>
	);
};

export default ProductDetails;
