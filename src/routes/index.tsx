import App from './app.route';
import Auth from './auth.route';
import React, {useState} from 'react';

const Routes: React.FC = () => {
	const [signIn, setSignIn] = useState<boolean>(true);

	return signIn ? <App /> : <Auth />;
};

export default Routes;
