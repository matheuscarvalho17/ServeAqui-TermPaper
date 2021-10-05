import styled from 'styled-components';
import colors from '../../customs/colors';
import {setWidthValue, setHeightValue} from '../../util/ajustScreen';

export const Container = styled.View`
	height: 100%;
	align-items: center;
	justify-content: center;
`;

export const EmptyCartContainer = styled.View`
	width: ${setWidthValue(60)}px;
	height: ${setHeightValue(60)}px;
`;

export const EmptyCartText = styled.Text`
	font-size: 30px;
	margin-top: 28px;
	line-height: 40px;
	text-align: center;
	letter-spacing: 3px;
	color: ${colors.text_dark};
`;
