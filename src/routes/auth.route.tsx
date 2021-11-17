import React from 'react';
import Configs from '../pages/Configs';
import StackHeader from '../util/stackHeader';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const AuthRoute: React.FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					header: ({scene, navigation}) => (
						<StackHeader scene={scene} navigation={navigation} />
					),
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
