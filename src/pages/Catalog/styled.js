import {FlatList} from 'react-native';
import styled from 'styled-components';
import colors from '../../customs/colors';
import {setWidthValue, setHeightValue} from '../../util/ajustScreen';

export const Container = styled.SafeAreaView`
	flex: 1;
	align-items: center;
	background: ${colors.background_initial};
`;

export const ProductContainer = styled.View`
	flex: 1;
	flex-direction: row;
	align-items: center;
	background: ${colors.background_initial};
`;

export const ProductList = styled(FlatList).attrs({
	numColumns: 1,
})`
	flex: 1;
	padding: 40px 20px;
`;

export const Product = styled.View`
	flex: 1;
	margin: 8px;
	background: white;
	padding: 32px 12px;
	border-radius: 25px;
	border-width: 1.5px;
	border-color: ${colors.primary};
`;

export const ProductImage = styled.Image`
	align-self: center;
	width: ${setWidthValue(35)}px;
	height: ${setHeightValue(25)}px;
`;

export const ProductTitle = styled.Text`
	color: ${colors.text_dark};
	font-size: 22px;
	font-weight: 400;
	line-height: 35px;
	letter-spacing: 3.5px;
	text-align: center;
`;

export const PriceContainer = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-top: auto;
	padding: 10px 20px 10px;
`;

export const ProductPrice = styled.Text`
	font-size: 22px;
	font-weight: bold;
	color: ${colors.text_dark};
`;

export const ProductButton = styled.TouchableOpacity`
	padding: 4px 8px;
	border-radius: 100px;
	align-items: center;
	flex-direction: row;
	background: ${colors.background_initial};
`;

export const ProductButtonText = styled.Text`
	font-weight: 800;
	padding: 0px 10px;
	font-size: 13px;
	text-transform: uppercase;
	color: ${colors.text_dark};
`;
