import React from 'react';
import {Container, Button, styles} from './styled';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

interface ICallWaiter {
	onPress: Function;
}

const CallWaiter: React.FC<ICallWaiter> = ({onPress}) => {
	return (
		<Container>
			<Button onPress={onPress}>
				<FontistoIcon name="person" style={styles.icon} />
			</Button>
		</Container>
	);
};

export default CallWaiter;
