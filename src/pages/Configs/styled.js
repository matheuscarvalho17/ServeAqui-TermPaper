import styled from 'styled-components';
import {StyleSheet} from 'react-native';
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
	flex-direction: row;
	border-color: lightgrey;
	background-color: white;
	justify-content: center;
	height: ${setHeightValue(45)}px;
	padding: ${setHeightValue(5)}px;
	border-bottom-width: ${setHeightValue(0.5)}px;
`;
export const LeftContainer = styled.View`
	width: 60%;
	height: 100%;
	justify-content: space-around;
`;
export const RightContainer = styled.View`
	width: 40%;
	height: 100%;
	align-items: center;
	justify-content: space-around;
`;
export const StatusContainer = styled.View`
	flex-direction: row;
`;
export const Title = styled.Text`
	font-weight: bold;
	color: ${colors.text_dark};
	margin-right: ${setHeightValue(3)}px;
	font-size: ${setFontSizeValue(4.5)}px;
`;
export const Avaliable = styled.Text`
	font-weight: bold;
	color: ${colors.avaliable};
	font-size: ${setFontSizeValue(4.5)}px;
	letter-spacing: ${setWidthValue(0.2)}px;
`;
export const NotAvaliable = styled.Text`
	font-weight: bold;
	color: ${colors.notAvaliable};
	font-size: ${setFontSizeValue(4.5)}px;
	letter-spacing: ${setWidthValue(0.2)}px;
`;
//Buttons
export const ActionButton = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background: ${colors.primary};
	width: ${setWidthValue(50)}px;
	padding: ${setWidthValue(3)}px;
	height: ${setHeightValue(13)}px;
	border-radius: ${setHeightValue(2)}px;
`;
export const ConfirmButton = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background: ${colors.primary};
	width: ${setWidthValue(70)}px;
	padding: ${setWidthValue(3)}px;
	height: ${setHeightValue(13)}px;
	margin-top: ${setHeightValue(13)}px;
	border-radius: ${setHeightValue(2)}px;
`;
export const TextButton = styled.Text`
	font-weight: bold;
	color: ${colors.text_light};
	font-size: ${setFontSizeValue(4.5)}px;
	letter-spacing: ${setWidthValue(0.2)}px;
`;

export const styles = StyleSheet.create({
	bannerIcon: {
		color: colors.text_light,
		fontSize: setFontSizeValue(12),
	},
	icon: {
		color: colors.text_light,
		marginLeft: setWidthValue(3),
		fontSize: setFontSizeValue(5.5),
	}
});
