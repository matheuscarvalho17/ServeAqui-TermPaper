import {FlatList, Touchable} from 'react-native';
import {red100} from 'react-native-paper/lib/typescript/styles/colors';
import styled from 'styled-components';
import colors from '../../customs/colors';
import {
	setWidthValue,
	setHeightValue,
	setFontSizeValue,
} from '../../util/ajustScreen';

export const Container = styled.SafeAreaView`
	flex: 1;
	align-items: center;
	background: ${colors.background_initial};
`;

export const ProductContainer = styled.View`
	width: 95%;
	height: 33%;
	background: white;
	border-radius: 15px;
	margin-top: 3%; //tirar depois
`;

export const ProductHeader = styled.TouchableOpacity`
	width: 100%;
	height: 12%;
	flex-direction: row;
	align-items: center;
	border-bottom-width: 1px;
	justify-content: space-between;
	border-color: ${colors.background_initial};
`;

export const ProductHeaderTitle = styled.Text`
	font-weight: bold;
	color: ${colors.text_dark};
	margin-left: ${setWidthValue(4)}px;
	font-size: ${setFontSizeValue(5)}px;
`;

export const ProductList = styled(FlatList).attrs({})`
	flex: 1;
	padding: ${setHeightValue(3.5)}px ${setWidthValue(2)}px;
`;

export const Product = styled.TouchableOpacity`
	background: white;
	border-radius: 25px;
	border-width: 1.5px;
	width: ${setWidthValue(45)}px;
	height: ${setHeightValue(56)}px;
	border-color: ${colors.primary};
	margin-left: ${setWidthValue(2)}px;
	margin-right: ${setWidthValue(2)}px;
	padding: ${setHeightValue(3)}px ${setWidthValue(2.5)}px;
`;

export const ProductImage = styled.Image`
	align-self: center;
	width: ${setWidthValue(40)}px;
	height: ${setHeightValue(25)}px;
`;

export const ProductPrice = styled.Text`
	font-weight: bold;
	color: ${colors.price};
	margin-top: ${setHeightValue(2)}px;
	margin-left: ${setWidthValue(3)}px;
	font-size: ${setFontSizeValue(4)}px;
`;

export const ProductTitle = styled.Text`
	color: ${colors.text_dark};
	margin-left: ${setWidthValue(3)}px;
	margin-top: ${setHeightValue(2)}px;
	line-height: ${setHeightValue(5)}px;
	font-size: ${setFontSizeValue(3.3)}px;
	letter-spacing: ${setWidthValue(0.3)}px;
	background-color: transparent; //retirar depois
`;

export const PriceContainer = styled.View`
	position: relative;
	padding: 10px 20px 10px;
	flex-direction: row-reverse;
	justify-content: space-between;
`;

export const ProductButton = styled.TouchableOpacity`
	padding: 4px 8px;
	background: lightgreen; //transparent;
`;
