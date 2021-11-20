import React from 'react';
import api from '../../services/api';
import BannerFrame from '../../components/BannerFrame';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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

const SignIn: React.FC = () => {
	const navigation = useNavigation();
	const [text, setText] = React.useState('');
	const [password, setPassword] = React.useState('');

	//functions
	async function sendForm(credential: string, password: string) {
		try {
			const data = {
				credential: credential,
				password: password,
			};
			console.log(data);
			const response = await api.post('/users/login', data);
		} catch (err) {
			console.log('sendForm', err);
		}
	}

	return (
		<Container>
			<BannerFrame
				icon={<Icon name="lock-alert" style={styles.bannerIcon} />}
				message={'Tela de login restrita aos funcionários do estabelecimento!'}
			/>
			<Title>{'Preencha os campos abaixo para realizar o login'}</Title>
			<InputContainer>
				<TextInput
					value={text}
					placeholder={'Digite sua credencial'}
					onChangeText={text => setText(text)}
				/>
				<TextInput
					secureTextEntry={true}
					label={'Senha'}
					value={password}
					placeholder={'Digite sua senha'}
					onChangeText={password => setPassword(password)}
				/>
			</InputContainer>
			<ButtonContainer>
				<Button onPress={() => navigation.goBack()}>
					<TextButton>{'Voltar'}</TextButton>
				</Button>
				<Button onPress={() => sendForm(text, password)}>
					<TextButton>{'Entrar'}</TextButton>
				</Button>
			</ButtonContainer>
		</Container>
	);
};

export default SignIn;
