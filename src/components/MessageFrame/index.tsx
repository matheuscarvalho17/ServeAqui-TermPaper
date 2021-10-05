import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {MessageText, MessageContainer} from './styled';

interface IMessage {
	icon?: string;
	message: string;
}

const MessageFrame: React.FC<IMessage> = ({icon, message}) => {
	return (
		<MessageContainer>
			<MessageText>{message}</MessageText>
		</MessageContainer>
	);
};

export default MessageFrame;
