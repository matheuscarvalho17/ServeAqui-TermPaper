import api from '../../services/api';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {Data} from '../../components/ProductsFrame';
import FloatingCart from '../../components/FloatingCart';
import MessageFrame from '../../components/MessageFrame';
import {
	Container,
	ScrollContainer,
	Product,
	ProductImage,
	ProductTitle,
	ProductPrice,
	ProductButton,
	Header,
	Informations,
	ProductDescription,
} from './styled';

const ProductDetails: React.FC = () => {
	//All constants declarations
	const route = useRoute();
	const idProduct = route.params;
	const [product, setProduct] = useState<Array<Data>>([]);

	const price: string = 'R$20.00';
	const title: string = 'Bife suíno com salada';
	const description: string =
		'Bife suíno com salada de batata, tomate e alface';
	const image_url: string =
		'https://s1.1zoom.me/big0/233/Meat_products_Potato_Vegetables_White_background_535614_1280x853.jpg ';

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
			<ScrollContainer showsVerticalScrollIndicator={false}>
				<Header>
					<ProductImage source={{uri: image_url}} />
					<Informations>
						<ProductTitle>{title}</ProductTitle>
						<ProductDescription>{description}</ProductDescription>
						<ProductPrice>{price}</ProductPrice>
					</Informations>
				</Header>
				{/* <MessageFrame message={`Imagem id ${idProduct}`} /> */}
			</ScrollContainer>
			<FloatingCart />
		</Container>
	);
};

export default ProductDetails;
