import React from 'react';
import {Container} from './styled';
import FloatingCart from '../../components/FloatingCart';
import MessageFrame from '../../components/MessageFrame';

const SignIn: React.FC = () => {
	return (
		<Container>
			<MessageFrame message={'Tela de login'} />
			<FloatingCart />
		</Container>
	);
};

export default SignIn;
