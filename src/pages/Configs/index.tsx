import api from '../../services/api';
import React, {useEffect, useState} from 'react';
import BannerFrame from '../../components/BannerFrame';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
	styles,
	Title,
	Container,
	Avaliable,
	TextButton,
	NotAvaliable,
	ActionButton,
	Informations,
	LeftContainer,
	RightContainer,
	BannerContainer,
	StatusContainer,
} from './styled';

interface Data {
	id: string;
	status: string;
}

const Configs: React.FC = () => {
	//All constants declarations
	const [tables, setTables] = useState<Array<Data>>([]);
	const [actualTable, setActualTable] = useState<String>('');
	const [actualStatus, setActualStatus] = useState<String>('');

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

	async function alterActualTable() {
		setActualTable(tables[0].id);
		setActualStatus(tables[0].status);
	}
	//All useEffects
	useEffect(() => {
		loadTables();
	}, []);
	useEffect(() => {
		alterActualTable();
	}, [tables]);

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
				<LeftContainer>
					<StatusContainer>
						<Title>{'Mesa selecionada:'}</Title>
						<Avaliable>{actualTable}</Avaliable>
					</StatusContainer>
					<StatusContainer>
						<Title>{`Status da Mesa:`}</Title>
						{actualStatus == 'DISPONÍVEL' ? (
							<Avaliable>{'DISPONÍVEL'}</Avaliable>
						) : (
							<NotAvaliable>{'OCUPADA'}</NotAvaliable>
						)}
					</StatusContainer>
				</LeftContainer>
				<RightContainer>
					<ActionButton onPress={() => setActualTable(tables[3].id)}>
						<TextButton>{'Alterar mesa'}</TextButton>
						<Icon name="pencil" style={styles.icon} />
					</ActionButton>
					<ActionButton onPress={() => setActualStatus(tables[3].status)}>
						<TextButton>{'Alterar status'}</TextButton>
						<Icon name="pencil" style={styles.icon} />
					</ActionButton>
				</RightContainer>
			</Informations>
		</Container>
	);
};

export default Configs;
