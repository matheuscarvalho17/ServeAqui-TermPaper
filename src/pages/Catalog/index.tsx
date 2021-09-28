import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {setWidthValue, setHeightValue} from '../../util/ajustScreen';

export default function Catalog(props) {
	return (
		<>
			<View>
				<Text>Catálogo</Text>
				<TouchableOpacity
					onPress={() => {
						props.navigation.navigate('Main');
					}}>
					<View
						style={{
							height: setHeightValue(25),
							width: setWidthValue(25),
							backgroundColor: 'red',
						}}></View>
				</TouchableOpacity>
			</View>
		</>
	);
}
