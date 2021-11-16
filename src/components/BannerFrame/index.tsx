import React from 'react';
import {Text, Frame, Container} from './styled';

interface IBannerFrame {
	message: string;
	icon?: React.ReactNode;
}

const BannerFrame: React.FC<IBannerFrame> = ({icon, message}) => {
	return (
		<Container>
			<Frame>
				<Text>{message}</Text>
				{icon}
			</Frame>
		</Container>
	);
};

export default BannerFrame;
