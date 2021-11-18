import styled from 'styled-components';
import colors from '../../customs/colors';
import {FlatList, StyleSheet} from 'react-native';
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
	background: white;
	border-color: #cccccc;
	width: ${setWidthValue(170)}px;
	height: ${setHeightValue(75)}px;
	margin-top: ${setHeightValue(3)}px;
	border-radius: ${setHeightValue(4)}px;
	margin-bottom: ${setHeightValue(3)}px;
	border-bottom-width: ${setHeightValue(0.5)}px;
`;

export const ProductHeader = styled.View`
	width: 100%;
	height: 12%;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	border-color: ${colors.background_initial};
	border-bottom-width: ${setHeightValue(0.5)}px;
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
	width: ${setWidthValue(45)}px;
	height: ${setHeightValue(56)}px;
	border-color: ${colors.primary};
	margin-left: ${setWidthValue(2)}px;
	margin-right: ${setWidthValue(2)}px;
	border-radius: ${setHeightValue(4)}px;
	border-width: ${setHeightValue(0.4)}px;
	padding: ${setHeightValue(3)}px ${setWidthValue(2)}px;
`;

export const ProductImage = styled.Image`
	align-self: center;
	width: ${setWidthValue(40)}px;
	height: ${setHeightValue(25)}px;
`;

export const ProductButton = styled.TouchableOpacity`
	background: white;
	position: absolute;
	margin-top: ${setHeightValue(22)}px;
	margin-left: ${setHeightValue(30)}px;
	border-radius: ${setHeightValue(100)}px;
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
`;

export const styles = StyleSheet.create({
	headerIcon: {
		color: colors.text_dark,
		fontSize: setFontSizeValue(7),
		marginRight: setWidthValue(2),
	},
	icon: {
		color: colors.text_dark,
		fontSize: setFontSizeValue(10),
	},
});
