import React from 'react';
import App from './app.route';
import Auth from './auth.route';
import {useAppContext} from '../util/context';

const Routes: React.FC = () => {
	const {login} = useAppContext();

	return login ? <Auth /> : <App />;
};

export default Routes;
