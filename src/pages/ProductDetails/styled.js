import styled from 'styled-components';
import colors from '../../customs/colors';
import {ScrollView} from 'react-native-gesture-handler';
import {
	setWidthValue,
	setHeightValue,
	setFontSizeValue,
} from '../../util/ajustScreen';

export const Container = styled.SafeAreaView`
	align-items: center;
	background: ${colors.background_initial};
`;

export const ScrollContainer = styled(ScrollView).attrs({})`
	width: 100%;
	height: 100%;
`;

export const Header = styled.View`
	width: 100%;
	flex-direction: column;
`;

export const ProductImage = styled.Image`
	width: 100%;
	height: ${setHeightValue(70)}px;
`;

export const Informations = styled.View`
	width: 100%;
	background-color: white;
	justify-content: center;
	height: ${setHeightValue(40)}px;
	padding-top: ${setHeightValue(1)}px;
	padding-left: ${setWidthValue(4)}px;
	padding-right: ${setWidthValue(4)}px;
	padding-bottom: ${setHeightValue(1)}px;
	border-color: lightgrey;
	border-bottom-width: ${setHeightValue(0.5)}px;
`;

export const ProductTitle = styled.Text`
	font-weight: bold;
	color: ${colors.text_dark};
	font-size: ${setFontSizeValue(5.5)}px;
`;

export const ProductDescription = styled.Text`
	color: ${colors.text_dark};
	margin-top: ${setHeightValue(2)}px;
	line-height: ${setHeightValue(5)}px;
	font-size: ${setFontSizeValue(4)}px;
	letter-spacing: ${setWidthValue(0.2)}px;
`;

export const ProductPrice = styled.Text`
	font-weight: bold;
	color: ${colors.price};
	margin-top: ${setHeightValue(2)}px;
	font-size: ${setFontSizeValue(4)}px;
	letter-spacing: ${setWidthValue(0.2)}px;
`;
//
//
//
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

export const ProductButton = styled.TouchableOpacity`
	background: white;
	position: absolute;
	margin-top: ${setHeightValue(22)}px;
	margin-left: ${setHeightValue(30)}px;
	border-radius: ${setHeightValue(100)}px;
`;
