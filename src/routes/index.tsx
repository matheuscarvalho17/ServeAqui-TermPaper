import App from './app.route';
import Auth from './auth.route';
import React, {useEffect} from 'react';
import {useAppContext} from '../util/context';

const Routes: React.FC = () => {
	//All constants declarations
	const {login, _logout} = useAppContext();

	//All useEffects
	useEffect(() => {
		_logout();
	}, []);

	return login ? <Auth /> : <App />;
};

export default Routes;
