import React from 'react';
import Menu from '../pages/Main';
import Catalog from '../pages/Catalog';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StackHeader from './util/StackHeader';

const Stack = createStackNavigator();

const AppRoute: React.FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					header: ({scene, navigation}) => (
						<StackHeader scene={scene} navigation={navigation} />
					),
				}}>
				<Stack.Screen
					name="Menu"
					component={Menu}
					options={{headerTitle: 'Menu'}}
				/>
				<Stack.Screen
					name="Catalog"
					component={Catalog}
					options={{headerTitle: 'Catálogo'}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppRoute;
