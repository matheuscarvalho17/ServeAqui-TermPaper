import React from 'react';
import {View} from 'react-native';
import colors from '../../customs/colors';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {setFontSizeValue, setWidthValue} from '../../util/ajustScreen';
import {
	Product,
	Container,
	ProductList,
	ProductImage,
	ProductTitle,
	ProductPrice,
	ProductButton,
	ProductHeader,
	PriceContainer,
	ProductContainer,
	ProductHeaderTitle,
} from './styled';

interface Data {
	id: number;
	title: string;
	price: number;
	editable: boolean;
	image_url: string;
}

interface IProductsFrame {
	productsType: string;
	productsList: Array<Data>;
}

const ProductsFrame: React.FC<IProductsFrame> = ({
	productsType,
	productsList,
}) => {
	return (
		<ProductContainer>
			<ProductHeader
				onPress={() => {
					console.log('Entrando em Refeições');
				}}>
				<ProductHeaderTitle>{productsType}</ProductHeaderTitle>
				<FeatherIcon
					name="chevron-right"
					size={setFontSizeValue(7)}
					color={colors.text_dark}
					style={{marginRight: setWidthValue(2)}}
				/>
			</ProductHeader>
			<ProductList
				data={productsList}
				horizontal={true}
				keyExtractor={item => item.id}
				ListFooterComponent={<View />}
				ListFooterComponentStyle={{
					height: 80,
				}}
				renderItem={({item}) => (
					<Product
						onPress={() => {
							console.log('Adicionar', item.title);
						}}>
						<ProductImage source={{uri: item.image_url}} />
						<ProductPrice>R$ {item.price},00</ProductPrice>
						<ProductTitle>{item.title}</ProductTitle>
						{/* <PriceContainer>
									<ProductButton
										onPress={() => {
											console.log('Pressionei2');
										}}>
										<FeatherIcon
											size={30}
											name="plus-circle"
											color={colors.text_dark}
										/>
									</ProductButton>
									{!!item.editable && (
										<ProductButton
											onPress={() => {
												console.log('Pressionei');
											}}>
											<FeatherIcon
												size={30}
												name="edit-3"
												color={colors.text_dark}
											/>
										</ProductButton>
									)}
								</PriceContainer> */}
					</Product>
				)}
			/>
		</ProductContainer>
	);
};

export default ProductsFrame;
