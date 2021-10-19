import api from '../../services/api';
import colors from '../../customs/colors';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import formatValues from '../../util/formatValues';
import {RouteProp} from '@react-navigation/native';
import ModalIcon from '../../components/ModalIcon';
import {Data} from '../../components/ProductsFrame';
import EmptyFrame from '../../components/EmptyFrame';
import CallWaiter from '../../components/CallWaiter';
import CustomFrame from '../../components/CustomFrame';
import {setFontSizeValue} from '../../util/ajustScreen';
import FloatingCart from '../../components/FloatingCart';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import {
	Container,
	ProductImage,
	ProductTitle,
	ProductPrice,
	Informations,
	ProductDescription,
} from './styled';

const ProductDetails: React.FC = () => {
	//All constants declarations
	const route: RouteProp<{params: {idProduct: number}}, 'params'> = useRoute();
	const {idProduct} = route.params;
	const [product, setProduct] = useState<Data>();
	const [openModal, setOpenModal] = useState<boolean>(false);

	//All functions
	async function loadProduct() {
		try {
			const response = await api.get(`/products?id=${idProduct}`);
			setProduct(response.data[0]);
		} catch (err) {
			console.log('product', err);
		}
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
					</>
				) : (
					<EmptyFrame />
				)}
				<FloatingCart />
				<CallWaiter
					onPress={() => {
						setOpenModal(true);
					}}
				/>
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
		</>
	);
};

export default ProductDetails;
