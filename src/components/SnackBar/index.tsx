import React from 'react';
import {Modal} from 'react-native-paper';
import {Text, Frame, Container, ButtonContainer, ButtonText} from './styled';

interface ISnackBar {
	message: string;
	visible: boolean;
	setVisible: Function;
}

const SnackBar: React.FC<ISnackBar> = ({message, visible, setVisible}) => {
	return (
		<Modal visible={visible}>
			<Container>
				<Frame>
					<Text>{message}</Text>
				</Frame>
				<ButtonContainer onPress={() => setVisible(false)}>
					<ButtonText>{'OK'}</ButtonText>
				</ButtonContainer>
			</Container>
		</Modal>
	);
};

export default SnackBar;
