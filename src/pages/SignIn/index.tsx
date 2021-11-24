import api from '../../services/api';
import React, {useState} from 'react';
import BannerFrame from '../../components/BannerFrame';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
	Title,
	styles,
	Button,
	TextWarm,
	Container,
	TextInput,
	TextButton,
	InputContainer,
	ButtonContainer,
} from './styled';

const SignIn: React.FC = () => {
	const navigation = useNavigation();
	const [text, setText] = useState<string>('');
	const [warm, setWarm] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [visible, setVisible] = useState<boolean>(false);

	//functions
	async function sendForm(credential: string, password: string) {
		setVisible(false);
		if (credential == '' || password == '') {
			setWarm('Forneca todos os dados necessários');
			setVisible(true);
		} else {
			try {
				const data = {
					password: password,
					credential: credential,
				};
				const response = await api.post('/users/login', data);
				if (response.data.warm != null) {
					setWarm(response.data.warm);
					setVisible(true);
				} else {
					console.log(response.data.id);
				}
			} catch (err) {
				console.log('sendForm', err);
			}
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
			{visible && <TextWarm>{warm}</TextWarm>}
		</Container>
	);
};

export default SignIn;
