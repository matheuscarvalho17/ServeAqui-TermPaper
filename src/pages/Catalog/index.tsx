import React, {useState} from 'react';
import {View, Text} from 'react-native';
import colors from '../../customs/colors';
import {useNavigation} from '@react-navigation/native';
import FloatingCart from '../../components/FloatingCart';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {
	Product,
	Container,
	ProductList,
	ProductImage,
	ProductTitle,
	ProductPrice,
	ProductButton,
	PriceContainer,
	ProductContainer,
	ProductButtonText,
} from './styled';

export default function Catalog() {
	const navigation = useNavigation();
	const [enable, setEnable] = useState<boolean>(false);
	const products = [
		{
			id: '1',
			title: 'Bife suíno com batatas',
			image_url:
				'https://s1.1zoom.me/big0/233/Meat_products_Potato_Vegetables_White_background_535614_1280x853.jpg',
			price: 20,
			editable: false,
		},
		{
			id: '2',
			title: 'Bife suíno com batatas + tomates',
			image_url:
				'https://s1.1zoom.me/big0/233/Meat_products_Potato_Vegetables_White_background_535614_1280x853.jpg',
			price: 25,
			editable: true,
		},
		{
			id: '3',
			title: 'Bife bovino com batatas',
			image_url:
				'https://s1.1zoom.me/big0/233/Meat_products_Potato_Vegetables_White_background_535614_1280x853.jpg',
			price: 35,
			editable: false,
		},
		{
			id: '4',
			title: 'Bife bovino com batatas + tomates',
			image_url:
				'https://s1.1zoom.me/big0/233/Meat_products_Potato_Vegetables_White_background_535614_1280x853.jpg',
			price: 40,
			editable: true,
		},
	];

	return (
		<>
			<Container>
				<ProductContainer>
					<ProductList
						data={products}
						keyExtractor={item => item.id}
						ListFooterComponent={<View />}
						ListFooterComponentStyle={{
							height: 80,
						}}
						renderItem={({item}) => (
							<Product>
								<ProductImage source={{uri: item.image_url}} />
								<ProductTitle>{item.title}</ProductTitle>
								<PriceContainer>
									<ProductPrice>R$ {item.price},00</ProductPrice>
									{/* ocultar se tiver off */}
									<>
										<ProductButton
											onPress={() => {
												console.log('Pressionei');
											}}>
											<ProductButtonText>Personalizar</ProductButtonText>
											<FeatherIcon
												size={30}
												name="edit-3"
												color={colors.text_dark}
											/>
										</ProductButton>
									</>
									<ProductButton
										onPress={() => {
											console.log('Pressionei2');
										}}>
										<ProductButtonText>Adicionar</ProductButtonText>
										<FeatherIcon
											size={30}
											name="plus-circle"
											color={colors.text_dark}
										/>
									</ProductButton>
								</PriceContainer>
							</Product>
						)}
					/>
				</ProductContainer>
				<FloatingCart />
			</Container>
		</>
	);
}
