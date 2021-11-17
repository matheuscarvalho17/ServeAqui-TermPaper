import styled from 'styled-components';
import {FlatList, StyleSheet} from 'react-native';
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
export const BannerContainer = styled.View`
	width: 90%;
	height: ${setHeightValue(40)}px;
`;
export const Informations = styled.View`
	width: 100%;
	border-color: lightgrey;
	background-color: white;
	justify-content: center;
	height: ${setHeightValue(40)}px;
	padding-top: ${setHeightValue(1)}px;
	padding-left: ${setWidthValue(4)}px;
	padding-right: ${setWidthValue(4)}px;
	padding-bottom: ${setHeightValue(1)}px;
	border-bottom-width: ${setHeightValue(0.5)}px;
`;
export const Title = styled.Text`
	font-weight: bold;
	color: ${colors.text_dark};
	font-size: ${setFontSizeValue(5.5)}px;
`;
export const StatusContainer = styled.View`
	flex-direction: row;
	margin-top: ${setHeightValue(2)}px;
`;
export const Status = styled.Text`
	color: ${colors.text_dark};
	line-height: ${setHeightValue(5)}px;
	font-size: ${setFontSizeValue(4)}px;
	margin-right: ${setHeightValue(2)}px;
	letter-spacing: ${setWidthValue(0.2)}px;
`;
export const Avaliable = styled.Text`
	font-weight: bold;
	color: ${colors.avaliable};
	font-size: ${setFontSizeValue(4)}px;
	letter-spacing: ${setWidthValue(0.2)}px;
`;
export const NotAvaliable = styled.Text`
	font-weight: bold;
	color: ${colors.notAvaliable};
	font-size: ${setFontSizeValue(4)}px;
	letter-spacing: ${setWidthValue(0.2)}px;
`;

//Buttons
export const ButtonContainer = styled.View`
	width: 100%;
	justify-content: center;
	height: ${setHeightValue(30)}px;
`;
export const ActionContainer = styled.View`
	align-self: center;
	align-items: center;
	flex-direction: row;
	background-color: white;
	width: ${setWidthValue(80)}px;
	justify-content: space-between;
	height: ${setHeightValue(15)}px;
	border-radius: ${setHeightValue(2)}px;
`;
export const ActionButton = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
	background: ${colors.primary};
	width: ${setWidthValue(15)}px;
	padding: ${setWidthValue(3)}px;
	height: ${setHeightValue(15)}px;
	border-radius: ${setHeightValue(2)}px;
`;
export const TextButton = styled.Text`
	font-weight: bold;
	color: ${colors.text_dark};
	font-size: ${setFontSizeValue(4.5)}px;
	letter-spacing: ${setWidthValue(0.2)}px;
`;

export const styles = StyleSheet.create({
	icon: {
		color: colors.text_light,
		fontSize: setFontSizeValue(5),
	},
	bannerIcon: {
		color: colors.text_light,
		fontSize: setFontSizeValue(12),
	},
});
