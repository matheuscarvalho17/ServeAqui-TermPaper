import styled from 'styled-components';
import colors from '../../customs/colors';
import {StyleSheet, FlatList} from 'react-native';
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
//Product
export const ProductContainer = styled.View`
	flex: 1;
	width: 100%;
	background-color: ${colors.secondary};
`;
export const CleanContainer = styled.View`
	flex: 0.04;
	align-items: flex-end;
	justify-content: flex-end;
	padding-right: ${setWidthValue(5)}px;
`;
export const CleanButton = styled.TouchableOpacity`
	padding: ${setWidthValue(0.3)}px;
`;
export const CleanText = styled.Text`
	color: ${colors.text_light};
	margin-top: ${setHeightValue(2)}px;
	font-size: ${setFontSizeValue(4)}px;
`;
export const ProductList = styled(FlatList)`
	flex: 0.96;
	width: 100%;
	padding: ${setHeightValue(5)}px ${setWidthValue(3)}px;
`;
export const Product = styled.View`
	width: 100%;
	background: white;
	flex-direction: row;
	margin-top: ${setHeightValue(1)}px;
	min-height: ${setHeightValue(30)}px;
	margin-bottom: ${setHeightValue(1)}px;
	border-radius: ${setHeightValue(4)}px;
	padding: ${setHeightValue(3)}px ${setWidthValue(3)}px;
	height: ${setHeightValue(30)}px; //mudar para 50
`;
export const ProductImage = styled.Image`
	width: ${setWidthValue(36)}px;
	height: ${setHeightValue(24)}px;
`;
export const ProductTitleContainer = styled.View`
	margin-left: ${setWidthValue(3)}px;
	margin-top: ${setHeightValue(2)}px;
`;
export const ProductTitle = styled.Text`
	font-weight: bold;
	font-size: ${setFontSizeValue(3.5)}px;
	letter-spacing: ${setWidthValue(0.3)}px;
`;
export const ProductPriceContainer = styled.View`
	flex-direction: column;
	margin-top: ${setHeightValue(1)}px;
`;
export const ProductSinglePrice = styled.Text`
	color: ${colors.text_dark};
	margin-top: ${setHeightValue(2)}px;
	font-size: ${setFontSizeValue(3.1)}px;
`;
export const TotalContainer = styled.View`
	flex-direction: row;
	margin-top: ${setHeightValue(1)}px;
`;
export const ProductQuantity = styled.Text`
	font-weight: bold;
	color: ${colors.price};
	margin-right: ${setWidthValue(2)}px;
	font-size: ${setFontSizeValue(4)}px;
`;
export const ProductPrice = styled.Text`
	font-weight: bold;
	color: ${colors.price};
	font-size: ${setFontSizeValue(4)}px;
`;
export const ActionContainer = styled.View`
	margin-left: auto;
	align-self: center;
	align-items: center;
	justify-content: space-between;
	margin-top: ${setHeightValue(2)}px;
`;
export const ActionButton = styled.TouchableOpacity`
	padding: ${setWidthValue(3)}px;
	border-radius: ${setHeightValue(2)}px;
	margin-bottom: ${setHeightValue(2)}px;
	background: ${colors.opacity_primary};
`;

//FloatingCart
export const TotalProductsContainer = styled.View`
	bottom: 0;
	width: 100%;
	position: absolute;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	height: ${setHeightValue(17)}px;
	background: ${colors.secondary};
	border-color: ${colors.primary};
	border-top-width: ${setHeightValue(0.4)}px;
	padding: ${setHeightValue(3)}px ${setWidthValue(8)}px;
`;
export const TotalProductsText = styled.Text`
	flex: 1;
	font-weight: bold;
	color: ${colors.text_light};
	margin-left: ${setWidthValue(4)}px;
	font-size: ${setFontSizeValue(4)}px;
`;
export const SubTotalValue = styled.Text`
	font-weight: bold;
	color: ${colors.text_light};
	font-size: ${setFontSizeValue(4)}px;
	margin-right: ${setWidthValue(5)}px;
`;
export const FinishButton = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
	width: ${setWidthValue(40)}px;
	background: ${colors.tertiary};
	padding: ${setHeightValue(2.5)}px;
	border-radius: ${setHeightValue(4)}px;
`;
export const FinishButtonText = styled.Text`
	font-weight: bold;
	color: ${colors.text_dark};
	font-size: ${setFontSizeValue(4)}px;
`;

export const styles = StyleSheet.create({
	snackBar: {
		height: setHeightValue(15),
		marginBottom: setHeightValue(20),
	},
});
