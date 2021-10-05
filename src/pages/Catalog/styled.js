import styled from 'styled-components';
import colors from '../../customs/colors';
import {ScrollView} from 'react-native-gesture-handler';
import {
	setWidthValue,
	setHeightValue,
	setFontSizeValue,
} from '../../util/ajustScreen';

export const Container = styled.SafeAreaView`
	flex: 1;
	align-items: center;
	background: ${colors.background_initial};
`;

export const FlatListContainer = styled(ScrollView).attrs({})`
	flex: 1;
	padding-top: ${setHeightValue(4)}px;
`;
