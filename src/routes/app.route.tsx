import React from 'react';
import Main from '../pages/Cart';
import Catalog from '../pages/Catalog';
import StackHeader from '../util/stackHeader';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

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
					name="Catalog"
					component={Catalog}
					options={{headerTitle: 'Catálogo'}}
				/>
				<Stack.Screen
					name="Cart"
					component={Main}
					options={{headerTitle: 'Carrinho'}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppRoute;
