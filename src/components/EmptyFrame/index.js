import React from 'react';
import LottieView from 'lottie-react-native';
import {Container, FrameContainer, Text} from './styled';
import EmptyFrame from '../../customs/animations/EmptyFrame.json';

export default function EmpytFrame() {
	return (
		<Container>
			<FrameContainer>
				<LottieView source={EmptyFrame} resizeMode="contain" autoPlay />
			</FrameContainer>
		</Container>
	);
}
