import React from 'react';
import {View} from 'react-native';
import colors from '../../customs/colors';
import formatValues from '../../util/formatValues';
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
	type: string;
	title: string;
	price: number;
	editable: boolean;
	image_url: string;
	description: string;
}
interface IProductsFrame {
	onPressAdd: Function;
	productsType: string;
	onPressProduct: Function;
	productsList: Array<Data>;
	onPressContainer: Function;
}

const ProductsFrame: React.FC<IProductsFrame> = ({
	onPressAdd,
	productsType,
	productsList,
	onPressProduct,
	onPressContainer,
}) => {
	return (
		<ProductContainer>
			<ProductHeader onPress={onPressContainer}>
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
					<Product onPress={onPressProduct}>
						<ProductImage source={{uri: item.image_url}} />
						<ProductButton onPress={onPressAdd}>
							<FeatherIcon
								name="plus-circle"
								color={colors.text_dark}
								size={setFontSizeValue(10)}
							/>
						</ProductButton>
						<ProductPrice>{formatValues(item.price)}</ProductPrice>
						<ProductTitle>{item.title}</ProductTitle>
					</Product>
				)}
			/>
		</ProductContainer>
	);
};

export {ProductsFrame, Data};
