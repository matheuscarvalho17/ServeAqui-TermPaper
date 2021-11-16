import styled from 'styled-components';
import {StyleSheet} from 'react-native';
import colors from '../../customs/colors';
import {setFontSizeValue, setHeightValue} from '../../util/ajustScreen';

export const Container = styled.SafeAreaView`
	flex: 1;
	align-items: center;
	background: ${colors.background_initial};
`;
export const InputContainer = styled.View`
	width: 100%;
	align-items: center;
	flex-direction: column;
	height: ${setHeightValue(60)}px;
	background: ${colors.primary};
`;
export const Title = styled.Text`
	font-weight: bold;
	color: ${colors.text_dark};
	font-size: ${setFontSizeValue(5.5)}px;
`;

export const styles = StyleSheet.create({
	textInput: {
		width: '100%',
	},
});
