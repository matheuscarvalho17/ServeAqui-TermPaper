import React from 'react';
import api from '../../services/api';
import {Container, Button, styles} from './styled';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

interface IData {
	idTable: number;
	callWaiter: number;
}

interface ICallWaiter {
	idTable: number;
	onPress: Function;
}

const CallWaiter: React.FC<ICallWaiter> = ({onPress, idTable}) => {
	async function callWaiter() {
		const data: IData = {callWaiter: 1, idTable: idTable};
		try {
			await api.put('/table/callwaiter', data);
		} catch (err) {
			console.log('callWaiter', err);
		}
	}
	return (
		<Container>
			<Button
				onPress={() => {
					callWaiter(), onPress();
				}}>
				<FontistoIcon name="person" style={styles.icon} />
			</Button>
		</Container>
	);
};

export default CallWaiter;
