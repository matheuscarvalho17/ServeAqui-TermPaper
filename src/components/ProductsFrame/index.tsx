import React from 'react';
import EmptyFrame from '../EmptyFrame';
import {useDispatch} from 'react-redux';
import formatValues from '../../util/formatValues';
import {useNavigation} from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import * as CartActions from '../../store/modules/cart/actions';
import {
	styles,
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
	id?: number;
	type?: string;
	title?: string;
	price?: number;
	amount?: number;
	editable?: boolean;
	image_url?: string;
	description?: string;
}
interface IProductsFrame {
	productsType: string;
	productsList: Array<Data>;
}

const ProductsFrame: React.FC<IProductsFrame> = ({
	productsType,
	productsList,
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
			<ProductHeader>
				<ProductHeaderTitle>{productsType}</ProductHeaderTitle>
				<FeatherIcon name="chevron-down" style={styles.headerIcon} />
			</ProductHeader>
			<ProductList
				horizontal={true}
				data={productsList}
				ListEmptyComponent={<EmptyFrame />}
				showsHorizontalScrollIndicator={false}
				keyExtractor={(item: Data) => String(item.id)}
				ListFooterComponentStyle={{
					height: 80,
				}}
				renderItem={({item}: {item: Data}) => (
					<Product
						onPress={() =>
							navigation.navigate('ProductDetails', {idProduct: item.id})
						}>
						<ProductImage source={{uri: item.image_url}} />
						<ProductButton onPress={() => handlerAddToCart(item.id)}>
							<FeatherIcon name="plus-circle" style={styles.icon} />
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
