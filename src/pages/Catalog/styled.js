import styled from 'styled-components';
import colors from '../../customs/colors';
import {ScrollView} from 'react-native-gesture-handler';
import {setWidthValue, setHeightValue} from '../../util/ajustScreen';

export const Container = styled.SafeAreaView`
	flex: 1;
	align-items: center;
	background: ${colors.background_initial};
`;

export const FlatListContainer = styled(ScrollView).attrs({})`
	flex: 1;
	padding-top: ${setHeightValue(4)}px;
`;

export const MessageContainer = styled.View`
	width: ${setWidthValue(170)}px;
	height: ${setHeightValue(40)}px;
	margin-bottom: ${setHeightValue(20)}px;
	background-color: orange;
`;
