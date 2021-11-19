import React from 'react';
import {Container, Button, styles} from './styled';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface ICloseOrder {
	onPress: Function;
}

const CloseOrder: React.FC<ICloseOrder> = ({onPress}) => {
	return (
		<Container>
			<Button onPress={onPress}>
				<FontAwesome5 name="clipboard-list" style={styles.icon} />
			</Button>
		</Container>
	);
};

export default CloseOrder;
