import styled from 'styled-components';
import colors from '../../customs/colors';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
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

export const ProductHeader = styled(FlatList).attrs({})`
	width: 100%;
`;
export const Header = styled.View`
	width: 100%;
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
