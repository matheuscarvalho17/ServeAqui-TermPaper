import React from 'react';
import {
	MessageText,
	LeftContainer,
	FrameContainer,
	RightContainer,
	MessageContainer,
} from './styled';

interface IMessage {
	message: string;
	animation: React.ReactNode;
}

const MessageFrame: React.FC<IMessage> = ({animation, message}) => {
	return (
		<MessageContainer>
			<LeftContainer>
				<FrameContainer>{animation}</FrameContainer>
			</LeftContainer>
			<RightContainer>
				<MessageText>{message}</MessageText>
			</RightContainer>
		</MessageContainer>
	);
};

export default MessageFrame;
