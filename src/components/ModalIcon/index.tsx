import React from 'react';
import {Modal} from 'react-native-paper';
import {
	Text,
	Icon,
	Title,
	Button,
	Container,
	TextButton,
	ButtonContainer,
} from './styled';

interface IModalIcon {
	text: string;
	title?: String;
	visible: boolean;
	OkCancel?: boolean;
	OkOnPress: Function;
	setVisible: Function;
	icon: React.ReactNode;
}

const ModalIcon: React.FC<IModalIcon> = ({
	text,
	icon,
	title,
	visible,
	OkCancel,
	OkOnPress,
	setVisible,
}) => {
	return (
		<Modal visible={visible}>
			<Container>
				{title && <Title>{title}</Title>}
				<Icon>{icon}</Icon>
				<Text>{text}</Text>
				{!OkCancel ? (
					<ButtonContainer>
						<Button
							onPress={() => {
								OkOnPress();
								setVisible(false);
							}}>
							<TextButton>{'Ok'}</TextButton>
						</Button>
					</ButtonContainer>
				) : (
					<ButtonContainer>
						<Button
							onPress={() => {
								setVisible(false);
							}}>
							<TextButton>{'Cancelar'}</TextButton>
						</Button>
						<Button
							onPress={() => {
								OkOnPress();
								setVisible(false);
							}}>
							<TextButton>{'Ok'}</TextButton>
						</Button>
					</ButtonContainer>
				)}
			</Container>
		</Modal>
	);
};

export default ModalIcon;
