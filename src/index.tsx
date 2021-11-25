import React from 'react';
import store from './store';
import Routes from './routes';
import {Provider} from 'react-redux';
import colors from './customs/colors';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {Context} from './util/context';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => (
	<Provider store={store}>
		<PaperProvider>
			<StatusBar barStyle="light-content" backgroundColor={colors.primary} />
			<Context>
				<Routes />
			</Context>
		</PaperProvider>
	</Provider>
);

export default App;
