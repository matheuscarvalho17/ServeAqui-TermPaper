import api from '../../services/api';
import React, {useEffect, useState} from 'react';
import BannerFrame from '../../components/BannerFrame';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
	styles,
	Container,
	BannerContainer,
	Title,
	Status,
	TextButton,
	Avaliable,
	NotAvaliable,
	ActionButton,
	Informations,
	ButtonContainer,
	ActionContainer,
	StatusContainer,
} from './styled';

interface Data {
	id: number;
	status: string;
}

const Configs: React.FC = () => {
	//All constants declarations
	const [tables, setTables] = useState<Array<Data>>([]);

	//All functions
	async function loadTables() {
		try {
			const responseTables = await api.get('/tables');
			setTables(responseTables.data);
			console.log(responseTables.data);
		} catch (err) {
			console.log('responseTables', err);
		}
	}

	//All useEffects
	useEffect(() => {
		loadTables();
	}, []);

	return (
		<Container>
			<BannerContainer>
				<BannerFrame
					icon={<Icon name="tablet-android" style={styles.bannerIcon} />}
					message={
						'Aqui você pode configurar a mesa onde o dispositivo se encontra'
					}
				/>
			</BannerContainer>
			<Informations>
				<Title>{`Mesa Atual: ` + 0}</Title>
				<StatusContainer>
					<Status>{`Status da Mesa:`}</Status>
					{true ? (
						<Avaliable>{'DISPONÍVEL'}</Avaliable>
					) : (
						<NotAvaliable>{'OCUPADA'}</NotAvaliable>
					)}
				</StatusContainer>
			</Informations>
		</Container>
	);
};

export default Configs;
