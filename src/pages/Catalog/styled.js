import styled from 'styled-components';
import colors from '../../customs/colors';
import {ScrollView} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
	flex: 1;
	align-items: center;
	background-color: ${colors.background_initial};
`;
export const ScrollContainer = styled(ScrollView).attrs({})`
	flex: 1;
`;
