import React from 'react';
import SignIn from '../pages/SignIn';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const AuthRoute: React.FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}>
				<Stack.Screen name="SignIn" component={SignIn} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AuthRoute;
