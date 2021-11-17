import React from 'react';
import Cart from '../pages/Cart';
import Catalog from '../pages/Catalog';
import StackHeader from '../util/stackHeader';
import ProductDetails from '../pages/ProductDetails';
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
					component={Cart}
					options={{headerTitle: 'Carrinho'}}
				/>
				<Stack.Screen
					name="ProductDetails"
					component={ProductDetails}
					options={{headerTitle: 'Detalhes do produto'}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppRoute;
