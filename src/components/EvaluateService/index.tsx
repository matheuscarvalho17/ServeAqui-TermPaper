import React from 'react';
import {Modal} from 'react-native-paper';
import {Text, Container} from './styled';
import {Rating} from 'react-native-ratings';
import {setFontSizeValue} from '../../util/ajustScreen';

interface IEvaluateService {
	visible: boolean;
	onPress: Function;
	setVisible: Function;
}

const EvaluateService: React.FC<IEvaluateService> = ({
	visible,
	onPress,
	setVisible,
}) => {
	return (
		<Modal visible={visible}>
			<Container>
				<Rating
					type="star"
					ratingCount={5}
					imageSize={setFontSizeValue(12)}
					onFinishRating={() => {
						onPress();
						setVisible(false);
					}}
				/>
				<Text>{'Avalie nosso atendimento'}</Text>
			</Container>
		</Modal>
	);
};

export default EvaluateService;
