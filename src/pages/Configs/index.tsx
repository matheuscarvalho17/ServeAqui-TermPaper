import api from '../../services/api';
import React, {useEffect, useState} from 'react';
import BannerFrame from '../../components/BannerFrame';
import ModalOptions from '../../components/ModalOptions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
	Title,
	styles,
	Container,
	Avaliable,
	TextButton,
	NotAvaliable,
	ActionButton,
	Informations,
	LeftContainer,
	ConfirmButton,
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
	const [openModalTable, setOpenModalTable] = useState<boolean>(false);
	const [openModalStatus, setOpenModalStatus] = useState<boolean>(false);

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
		<>
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
							<Title>{`Status da mesa:`}</Title>
							{actualStatus == 'DISPONÍVEL' ? (
								<Avaliable>{'DISPONÍVEL'}</Avaliable>
							) : (
								<NotAvaliable>{'OCUPADA'}</NotAvaliable>
							)}
						</StatusContainer>
					</LeftContainer>
					<RightContainer>
						<ActionButton onPress={() => setOpenModalTable(true)}>
							<TextButton>{'Alterar mesa'}</TextButton>
							<Icon name="pencil" style={styles.icon} />
						</ActionButton>
						<ActionButton onPress={() => setOpenModalStatus(true)}>
							<TextButton>{'Alterar status'}</TextButton>
							<Icon name="pencil" style={styles.icon} />
						</ActionButton>
					</RightContainer>
				</Informations>
				<ConfirmButton onPress={() => console.log('Confirmar')}>
					<TextButton>{'Confirmar alterações'}</TextButton>
					<Icon name="content-save" style={styles.icon} />
				</ConfirmButton>
			</Container>
			<ModalOptions
				title={'Alterar status'}
				visible={openModalStatus}
				setVisible={setOpenModalStatus}
				OkOnPress={() => {
					setActualStatus(tables[3].status), console.log('Alterado status');
				}}
			/>
			<ModalOptions
				title={'Alterado mesa'}
				visible={openModalTable}
				setVisible={setOpenModalTable}
				OkOnPress={() => {
					setActualTable(tables[3].id), console.log('Alterada mesa');
				}}
			/>
		</>
	);
};

export default Configs;
