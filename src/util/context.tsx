import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect, useContext, createContext} from 'react';

interface ILogin {
	id: number;
}
interface ITable {
	id: number;
	name: string;
	status: string;
}
interface IAppContextData {
	login: ILogin;
	_logout: Function;
	actualTable: ITable;
	_setLogin: (data: ILogin) => void;
	_setActualTable: (data: ITable) => void;
}

const AppContext = createContext<IAppContextData>({} as IAppContextData);

const Context: React.FC<{children: any}> = ({children}) => {
	//All contants declaration
	const [login, setLogin] = useState<ILogin | undefined>(undefined);
	const [actualTable, setActualTable] = useState<ITable | undefined>(undefined);

	//All functions
	//Login and Logout
	async function _setLogin(data: ILogin) {
		await AsyncStorage.setItem('@login', JSON.stringify(data));
		setLogin(data);
	}
	async function _getLogin() {
		const data = await AsyncStorage.getItem('@login');
		if (data !== null) {
			setLogin(JSON.parse(data));
		}
	}
	async function _logout() {
		await AsyncStorage.removeItem('@login');
		setLogin(undefined);
	}

	//Actual Table
	async function _setActualTable(data: ITable) {
		await AsyncStorage.setItem('@actualTable', JSON.stringify(data));
		setActualTable(data);
	}
	async function _getActualTable() {
		const data = await AsyncStorage.getItem('@actualTable');
		if (data !== null) {
			setActualTable(JSON.parse(data));
		} else {
			const firstTimeOpen: ITable = {
				id: 1,
				name: '[SEM ATRIBUIÇÃO]',
				status: 'OCUPADA',
			};
			setActualTable(firstTimeOpen);
		}
	}

	//All useEffects
	useEffect(() => {
		_getLogin();
		_getActualTable();
	}, []);

	return (
		<AppContext.Provider
			value={{
				login,
				_logout,
				_setLogin,
				actualTable,
				_setActualTable,
			}}>
			{children}
		</AppContext.Provider>
	);
};

function useAppContext(): IAppContextData {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error('useContextApp precisa ser usado com um provider');
	}
	return context;
}

export {Context, useAppContext, ITable};
