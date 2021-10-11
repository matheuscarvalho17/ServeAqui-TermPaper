import React from 'react';
import store from './store';
import Routes from './routes';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import colors from './customs/colors';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => (
	<Provider store={store}>
		<PaperProvider>
			<StatusBar barStyle="light-content" backgroundColor={colors.primary} />
			<Routes />
		</PaperProvider>
	</Provider>
);

export default App;
