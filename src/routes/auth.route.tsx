import React from 'react';
import Configs from '../pages/Configs';
import StackHeaderAuth from '../util/stackHeaderAuth';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const AuthRoute: React.FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					header: ({scene}) => <StackHeaderAuth scene={scene} />,
				}}>
				<Stack.Screen
					name="Configs"
					component={Configs}
					options={{headerTitle: 'Configurações da Mesa'}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AuthRoute;
