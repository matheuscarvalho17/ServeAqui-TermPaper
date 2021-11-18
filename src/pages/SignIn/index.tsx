import React from 'react';
import colors from '../../customs/colors';
import BannerFrame from '../../components/BannerFrame';
import {useNavigation} from '@react-navigation/native';
import {setFontSizeValue} from '../../util/ajustScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
	Title,
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

	return (
		<Container>
			<BannerFrame
				icon={
					<MaterialCommunityIcons
						name="lock-alert"
						color={colors.text_light}
						size={setFontSizeValue(12)}
					/>
				}
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
				<Button onPress={() => console.log('Validar Login')}>
					<TextButton>{'Entrar'}</TextButton>
				</Button>
			</ButtonContainer>
		</Container>
	);
};

export default SignIn;
