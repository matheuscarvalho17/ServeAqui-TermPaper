import React from 'react';
import colors from '../../customs/colors';
import {Container, Button} from './styled';
import {setFontSizeValue} from '../../util/ajustScreen';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

const CallWaiter: React.FC = () => {
	return (
		<Container>
			<Button
				onPress={() => {
					console.log('Chamando garçom à mesa!');
				}}>
				<FontistoIcon
					name="person"
					color={colors.text_light}
					size={setFontSizeValue(11)}
				/>
			</Button>
		</Container>
	);
};

export default CallWaiter;
