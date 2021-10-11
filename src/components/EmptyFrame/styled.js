import styled from 'styled-components';
import {setWidthValue, setHeightValue} from '../../util/ajustScreen';

export const Container = styled.View`
	align-items: center;
	justify-content: center;
	width: ${setWidthValue(168)}px;
`;

export const FrameContainer = styled.View`
	width: ${setWidthValue(55)}px;
	height: ${setHeightValue(55)}px;
`;
