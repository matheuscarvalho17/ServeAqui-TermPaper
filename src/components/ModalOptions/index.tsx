import React from 'react';
import {Modal} from 'react-native-paper';
import {Title, Button, Container, TextButton} from './styled';

interface IModalOptions {
	text?: string;
	title?: String;
	visible: boolean;
	OkOnPress: Function;
	setVisible?: Function;
}

const ModalOptions: React.FC<IModalOptions> = ({
	title,
	visible,
	OkOnPress,
	setVisible,
}) => {
	return (
		<Modal visible={visible}>
			<Container>
				<Title>{title}</Title>
				<Button
					onPress={() => {
						OkOnPress();
						setVisible(false);
					}}>
					<TextButton>{'Ok'}</TextButton>
				</Button>
			</Container>
		</Modal>
	);
};

export default ModalOptions;
