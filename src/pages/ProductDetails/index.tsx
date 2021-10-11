import React from 'react';
import {Container} from './styled';
import FloatingCart from '../../components/FloatingCart';
import MessageFrame from '../../components/MessageFrame';

const ProductDetails: React.FC = () => {
	return (
		<Container>
			<MessageFrame message={'Detalhes do produto'} />
			<FloatingCart />
		</Container>
	);
};

export default ProductDetails;
