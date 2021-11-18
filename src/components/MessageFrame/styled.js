import styled from 'styled-components';
import colors from '../../customs/colors';
import {
	setWidthValue,
	setHeightValue,
	setFontSizeValue,
} from '../../util/ajustScreen';

export const MessageContainer = styled.View`
	flex-direction: row;
	width: ${setWidthValue(170)}px;
	height: ${setHeightValue(40)}px;
	margin-bottom: ${setHeightValue(20)}px;
`;
export const LeftContainer = styled.View`
	width: 30%;
	height: 100%;
	align-items: center;
	justify-content: center;
`;
export const RightContainer = styled.View`
	width: 70%;
	height: 100%;
	align-items: center;
	justify-content: center;
`;
export const FrameContainer = styled.View`
	width: ${setWidthValue(35)}px;
	height: ${setHeightValue(35)}px;
`;
export const MessageText = styled.Text`
	text-align: center;
	color: ${colors.text_dark};
	font-size: ${setFontSizeValue(4.5)}px;
	letter-spacing: ${setWidthValue(0.3)}px;
`;
