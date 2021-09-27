import App from './src';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
// import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

// const theme = {
// 	...DefaultTheme,
// 	colors: {
// 		...DefaultTheme.colors,
// 		primary: 'tomato',
// 		accent: 'yellow',
// 	},
// };

export default function Main() {
	return (
		// <PaperProvider theme={theme}>
		<App />
		// </PaperProvider>
	);
}

AppRegistry.registerComponent(appName, () => App);
