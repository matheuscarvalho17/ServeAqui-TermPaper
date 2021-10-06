import React from 'react';
import {View} from 'react-native';
import colors from '../../customs/colors';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {setWidthValue, setFontSizeValue} from '../../util/ajustScreen';
import {
	Product,
	ProductList,
	ProductImage,
	ProductTitle,
	ProductPrice,
	ProductButton,
	ProductHeader,
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
					console.log('Entrando em:', productsType);
				}}>
				<ProductHeaderTitle>{productsType}</ProductHeaderTitle>
				<FeatherIcon
					name="chevron-right"
					color={colors.text_dark}
					size={setFontSizeValue(7)}
					style={{marginRight: setWidthValue(2)}}
				/>
			</ProductHeader>
			<ProductList
				horizontal={true}
				data={productsList}
				keyExtractor={item => item.id}
				ListFooterComponent={<View />}
				showsHorizontalScrollIndicator={false}
				ListFooterComponentStyle={{
					height: 80,
				}}
				renderItem={({item}) => (
					<Product
						onPress={() => {
							console.log('Verificar', item.title);
						}}>
						<ProductImage source={{uri: item.image_url}} />
						<ProductButton
							onPress={() => {
								console.log('Adicionar', item.title);
							}}>
							<FeatherIcon
								name="plus-circle"
								color={colors.text_dark}
								size={setFontSizeValue(10)}
							/>
						</ProductButton>
						<ProductPrice>R$ {item.price},00</ProductPrice>
						<ProductTitle>{item.title}</ProductTitle>
					</Product>
				)}
			/>
		</ProductContainer>
	);
};

export default ProductsFrame;
