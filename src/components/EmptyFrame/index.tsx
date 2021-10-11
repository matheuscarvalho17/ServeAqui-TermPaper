import React from 'react';
import LottieView from 'lottie-react-native';
import {Container, FrameContainer} from './styled';
import EmptyFrame from '../../customs/animations/EmptyFrame.json';

const EmpytFrame: React.FC = () => {
	return (
		<Container>
			<FrameContainer>
				<LottieView source={EmptyFrame} resizeMode="contain" autoPlay />
			</FrameContainer>
		</Container>
	);
};

export default EmpytFrame;
