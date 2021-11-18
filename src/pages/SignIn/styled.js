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
	background-color: white;
	padding: ${setWidthValue(3)}px;
	background-color: ${colors.background_initial};
`;
export const Title = styled.Text`
	font-weight: bold;
	margin-top: ${setHeightValue(10)}px;
	margin-bottom: ${setHeightValue(10)}px;
	color: ${colors.text_dark};
	font-size: ${setFontSizeValue(5.5)}px;
`;
export const InputContainer = styled.View`
	width: 100%;
	align-items: center;
	justify-content: center;
	height: ${setHeightValue(50)}px;
`;
export const TextInput = styled.TextInput`
	width: 90%;
	background-color: white;
	color: ${colors.primary};
	height: ${setHeightValue(15)}px;
	border-color: ${colors.secondary};
	margin-top: ${setHeightValue(3)}px;
	font-size: ${setFontSizeValue(5)}px;
	margin-bottom: ${setHeightValue(3)}px;
	border-bottom-width: ${setHeightValue(0.4)}px;
	border-top-left-radius: ${setWidthValue(2.5)}px;
	border-top-right-radius: ${setWidthValue(2.5)}px;
	border-bottom-left-radius: ${setWidthValue(1)}px;
	border-bottom-right-radius: ${setWidthValue(1)}px;
	padding: ${setHeightValue(0)}px ${setWidthValue(5)}px;
`;
export const ButtonContainer = styled.View`
	width: 90%;
	align-items: center;
	flex-direction: row;
	position: absolute;
	justify-content: space-around;
	bottom: ${setHeightValue(5)}px;
	height: ${setHeightValue(25)}px;
`;
export const Button = styled.TouchableOpacity`
	align-items: center;
	flex-direction: row;
	justify-content: center;
	width: ${setWidthValue(50)}px;
	height: ${setHeightValue(15)}px;
	background-color: ${colors.secondary};
	border-radius: ${setWidthValue(2.5)}px;
`;
export const TextButton = styled.Text`
	font-weight: bold;
	color: ${colors.text_light};
	font-size: ${setFontSizeValue(4.5)}px;
	letter-spacing: ${setWidthValue(0.2)}px;
`;
