import api from '../../services/api';
import { Menu } from 'react-native-paper';
import React, {useEffect, useState} from 'react';
import {useAppContext} from '../../util/context';
import BannerFrame from '../../components/BannerFrame';
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
	name: string;
	status: string;
}

const Configs: React.FC = () => {
	//All constants declarations
	const {_logout} = useAppContext();
	const [tables, setTables] = useState<Array<Data>>([]);
	const [actualTable, setActualTable] = useState<String>('');
	const [actualStatus, setActualStatus] = useState<String>('');
	const [visibleMenuTable, setVisibleMenuTable] = useState<boolean>(false);
	const [visibleMenuStatus, setVisibleMenuStatus] = useState<boolean>(false);
	
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
						<Menu
							visible={visibleMenuTable}
							onDismiss={()=>setVisibleMenuTable(false)}
							anchor={
								<ActionButton onPress={()=>setVisibleMenuTable(true)}>
									<TextButton>{'Alterar mesa'}</TextButton>
									<Icon name="pencil" style={styles.icon} />
								</ActionButton>}>
								{tables.map((item)=>
									<Menu.Item onPress={() => {setActualTable(item.name),()=>setVisibleMenuTable(false)}} title={'Mesa '+ item.name} />
								)}
						</Menu>
						<Menu
							visible={visibleMenuStatus}
							onDismiss={()=>setVisibleMenuStatus(false)}
							anchor={
								<ActionButton onPress={()=>setVisibleMenuStatus(true)}>
										<TextButton>{'Alterar mesa'}</TextButton>
										<Icon name="pencil" style={styles.icon} />
									</ActionButton>}>
								<Menu.Item onPress={() => {setActualStatus('DISPONÍVEL'),setVisibleMenuStatus(false)}} title={'DISPONÍVEL'} />
								<Menu.Item onPress={() => {setActualStatus('OCUPADA'),setVisibleMenuStatus(false)}} title={'OCUPADA'} />
						</Menu>
					</RightContainer>
				</Informations>
				<ConfirmButton
					onPress={() => {
						_logout();
					}}>
					<TextButton>{'Confirmar alterações'}</TextButton>
					<Icon name="content-save" style={styles.icon} />
				</ConfirmButton>
			</Container>
		</>
	);
};

export default Configs;
