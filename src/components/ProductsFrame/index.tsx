import React from 'react';
import EmptyFrame from '../EmptyFrame';
import {useDispatch} from 'react-redux';
import colors from '../../customs/colors';
import formatValues from '../../util/formatValues';
import {useNavigation} from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import * as CartActions from '../../store/modules/cart/actions';
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
	productsType: string;
	productsList: Array<Data>;
	onPressContainer: Function;
}

const ProductsFrame: React.FC<IProductsFrame> = ({
	productsType,
	productsList,
	onPressContainer,
}) => {
	//All constants declarations
	const dispatch = useDispatch();
	const navigation = useNavigation();

	//All functions
	function handlerAddToCart(id: number) {
		dispatch(CartActions.addToCartRequest(id));
	}

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
				ListEmptyComponent={<EmptyFrame />}
				showsHorizontalScrollIndicator={false}
				ListFooterComponentStyle={{
					height: 80,
				}}
				renderItem={({item}) => (
					<Product
						onPress={() => navigation.navigate('ProductDetails', item.id)}>
						<ProductImage source={{uri: item.image_url}} />
						<ProductButton onPress={() => handlerAddToCart(item.id)}>
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
