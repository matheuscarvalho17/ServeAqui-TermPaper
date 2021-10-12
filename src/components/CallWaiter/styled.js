import styled from 'styled-components';
import colors from '../../customs/colors';
import {setHeightValue, setWidthValue} from '../../util/ajustScreen';

export const Container = styled.View`
	bottom: 0;
	position: absolute;
	border-color: red;
	padding: ${setHeightValue(4)}px;
	background-color: ${colors.primary};
	border-width: ${setWidthValue(0.3)}px;
	border-radius: ${setHeightValue(50)}px;
	margin-bottom: ${setHeightValue(1.5)}px;
`;

export const Button = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
	width: ${setWidthValue(12)}px;
	height: ${setHeightValue(12)}px;
`;
