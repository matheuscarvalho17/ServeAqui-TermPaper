import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect, useContext, createContext} from 'react';

interface Login {
	id: number;
}
interface AppContextData {
	login: Login;
	_logout: Function;
	_setLogin: (login: Login) => void;
}

const AppContext = createContext<AppContextData>({} as AppContextData);

const Context: React.FC<{children: any}> = ({children}) => {
	//All contants declaration
	const [login, setLogin] = useState<Login | undefined>(undefined);

	//All functions
	async function _setLogin(login: Login) {
		await AsyncStorage.setItem('@login', JSON.stringify(login));
		setLogin(login);
	}
	async function _getLogin() {
		const login = await AsyncStorage.getItem('@login');
		if (login !== null) {
			setLogin(JSON.parse(login));
		}
	}
	async function _logout() {
		await AsyncStorage.removeItem('@login');
		setLogin(undefined);
	}

	//All useEffects
	useEffect(() => {
		_getLogin();
	}, []);

	return (
		<AppContext.Provider
			value={{
				login,
				_logout,
				_setLogin,
			}}>
			{children}
		</AppContext.Provider>
	);
};

function useAppContext(): AppContextData {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error('useContextApp precisa ser usado com um provider');
	}
	return context;
}

export {Context, useAppContext};
