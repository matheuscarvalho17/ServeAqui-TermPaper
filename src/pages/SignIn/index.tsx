import React from 'react';
import colors from '../../customs/colors';
import {TextInput} from 'react-native-paper';
import BannerFrame from '../../components/BannerFrame';
import {setFontSizeValue} from '../../util/ajustScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Title, Container, InputContainer, styles} from './styled';

const SignIn: React.FC = () => {
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
			<Title>{'Login'}</Title>
			<InputContainer>
				<TextInput
					style={styles.textInput}
					label="Credencial"
					value={text}
					onChangeText={text => setText(text)}
				/>
				<TextInput
					style={styles.textInput}
					label="Senha"
					value={password}
					onChangeText={password => setPassword(password)}
				/>
			</InputContainer>
		</Container>
	);
};

export default SignIn;
