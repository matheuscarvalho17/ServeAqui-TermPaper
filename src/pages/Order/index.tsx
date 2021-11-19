import React from 'react';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
	Title,
	styles,
	Button,
	Container,
	TextInput,
	TextButton,
	InputContainer,
	ButtonContainer,
} from './styled';

const Order: React.FC = () => {
	const navigation = useNavigation();
	const [text, setText] = React.useState('');
	const [password, setPassword] = React.useState('');

	return <Container></Container>;
};

export default Order;
