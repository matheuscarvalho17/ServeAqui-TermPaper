import React from 'react';
import api from '../../services/api';
import {Container, Button, styles} from './styled';
import {useAppContext} from '../../util/context';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

interface IData {
	idTable: number;
	callWaiter: number;
}

interface ICallWaiter {
	onPress: Function;
}

const CallWaiter: React.FC<ICallWaiter> = ({onPress}) => {
	//All constants declarations
	const {actualTable} = useAppContext();

	//All Functions
	async function callWaiter() {
		const data: IData = {callWaiter: 1, idTable: actualTable.id};
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
