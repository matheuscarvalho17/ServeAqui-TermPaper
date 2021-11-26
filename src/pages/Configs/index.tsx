import api from '../../services/api';
import {Menu} from 'react-native-paper';
import React, {useEffect, useState} from 'react';
import BannerFrame from '../../components/BannerFrame';
import {ITable, useAppContext} from '../../util/context';
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

const Configs: React.FC = () => {
	//All constants declarations
	const {_logout, actualTable, _setActualTable} = useAppContext();
	const [tables, setTables] = useState<Array<ITable>>([]);
	const [actualTable2, setActualTable] = useState<string>();
	const [actualTableId, setActualTableId] = useState<number>();
	const [actualStatus, setActualStatus] = useState<string>();
	const [visibleMenuTable, setVisibleMenuTable] = useState<boolean>(false);
	const [visibleMenuStatus, setVisibleMenuStatus] = useState<boolean>(false);

	//All functions
	async function loadTables() {
		if (actualTable != null) {
			setActualTable(actualTable.name);
			setActualTableId(actualTable.id);
			setActualStatus(actualTable.status);
		}
		try {
			const responseTables = await api.get('/tables');
			setTables(responseTables.data);
		} catch (err) {
			console.log('responseTables', err);
		}
	}

	async function confirmChanges() {
		if (actualTable2 != '' && actualTable2 != null) {
			const data: ITable = {
				id: actualTableId,
				name: actualTable2,
				status: actualStatus,
			};
			_setActualTable(data);
			console.log(data);
			try {
				await api.put('/table/status', data);
			} catch (err) {
				console.log('confirmChanges ', err);
			}
			_logout();
		} else {
			console.log('faltando informações');
		}
	}

	//All useEffects
	useEffect(() => {
		loadTables();
	}, []);

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
							<Avaliable>{actualTable2}</Avaliable>
						</StatusContainer>
						<StatusContainer>
							<Title>{`Status da mesa:`}</Title>
							{actualStatus == 'DISPONÍVEL' ? (
								<Avaliable>{'DISPONÍVEL'}</Avaliable>
							) : actualStatus == 'OCUPADA' ? (
								<NotAvaliable>{'OCUPADA'}</NotAvaliable>
							) : (
								<></>
							)}
						</StatusContainer>
					</LeftContainer>
					<RightContainer>
						<Menu
							visible={visibleMenuTable}
							onDismiss={() => setVisibleMenuTable(false)}
							anchor={
								<ActionButton onPress={() => setVisibleMenuTable(true)}>
									<TextButton>{'Alterar mesa'}</TextButton>
									<Icon name="pencil" style={styles.icon} />
								</ActionButton>
							}>
							{tables.map((item, index) => (
								<Menu.Item
									key={index}
									onPress={() => {
										setActualTable(item.name),
											setActualTableId(item.id),
											setVisibleMenuTable(false);
									}}
									title={'Mesa ' + item.name}
								/>
							))}
						</Menu>
						<Menu
							visible={visibleMenuStatus}
							onDismiss={() => setVisibleMenuStatus(false)}
							anchor={
								<ActionButton onPress={() => setVisibleMenuStatus(true)}>
									<TextButton>{'Alterar status'}</TextButton>
									<Icon name="pencil" style={styles.icon} />
								</ActionButton>
							}>
							<Menu.Item
								onPress={() => {
									setActualStatus('DISPONÍVEL'), setVisibleMenuStatus(false);
								}}
								title={'DISPONÍVEL'}
							/>
							<Menu.Item
								onPress={() => {
									setActualStatus('OCUPADA'), setVisibleMenuStatus(false);
								}}
								title={'OCUPADA'}
							/>
						</Menu>
					</RightContainer>
				</Informations>
				<ConfirmButton
					onPress={() => {
						confirmChanges();
					}}>
					<TextButton>{'Confirmar alterações'}</TextButton>
					<Icon name="content-save" style={styles.icon} />
				</ConfirmButton>
			</Container>
		</>
	);
};

export default Configs;
