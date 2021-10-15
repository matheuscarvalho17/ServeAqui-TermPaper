import React, {useState} from 'react';
import {RadioButton} from 'react-native-paper';
import {Container, Title, Frame, Label} from './styled';

interface ICustomFrame {
	title: string;
	label1: string;
	label2: string;
}

const CustomFrame: React.FC<ICustomFrame> = ({title, label1, label2}) => {
	const [value, setValue] = useState<string>('first');

	return (
		<Container>
			<Title>{title}</Title>
			<RadioButton.Group
				onValueChange={newValue => setValue(newValue)}
				value={value}>
				<Frame>
					<RadioButton value="first" />
					<Label>{label1}</Label>
				</Frame>
				<Frame>
					<RadioButton value="second" />
					<Label>{label2}</Label>
				</Frame>
			</RadioButton.Group>
		</Container>
	);
};

export default CustomFrame;
