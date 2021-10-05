import App from './src';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

export default function Main() {
	return <App />;
}

AppRegistry.registerComponent(appName, () => App);
