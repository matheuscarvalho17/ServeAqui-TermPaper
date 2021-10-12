import React from 'react';
import {Text, Frame, Container} from './styled';

interface IBannerFrame {
	text: string;
	icon?: React.ReactNode;
}

const BannerFrame: React.FC<IBannerFrame> = ({text, icon}) => {
	return (
		<Container>
			<Frame>
				<Text>{text}</Text>
				{icon}
			</Frame>
		</Container>
	);
};

export default BannerFrame;
