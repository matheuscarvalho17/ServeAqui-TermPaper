import React from 'react';
import colors from '../../customs/colors';
import {Container, Button} from './styled';
import {setFontSizeValue} from '../../util/ajustScreen';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

interface ICallWaiter {
	onPress: Function;
}

const CallWaiter: React.FC<ICallWaiter> = ({onPress}) => {
	return (
		<Container>
			<Button onPress={onPress}>
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
