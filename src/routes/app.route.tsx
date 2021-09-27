import React from 'react';
import Menu from '../pages/Main';
import Catalog from '../pages/Catalog';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const AppRoute: React.FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}>
				<Stack.Screen name="Menu" component={Menu} />
				<Stack.Screen name="Catalog" component={Catalog} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppRoute;
