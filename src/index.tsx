import React from 'react';
//import store from './store';
import Routes from './routes';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import colors from './customs/colors';

const App = () => (
	<>
		{/* <Provider store={store}> */}
		<StatusBar barStyle="light-content" backgroundColor={colors.primary} />
		<Routes />
		{/* </Provider> */}
	</>
);

export default App;
