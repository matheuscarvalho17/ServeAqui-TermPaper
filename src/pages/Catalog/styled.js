import styled from 'styled-components';
import {StyleSheet} from 'react-native';
import colors from '../../customs/colors';
import {ScrollView} from 'react-native-gesture-handler';
import {setFontSizeValue} from '../../util/ajustScreen';

export const Container = styled.SafeAreaView`
	flex: 1;
	align-items: center;
	background-color: ${colors.background_initial};
`;
export const ScrollContainer = styled(ScrollView).attrs({})`
	flex: 1;
`;

export const styles = StyleSheet.create({
	icon: {
		color: colors.text_dark,
		fontSize: setFontSizeValue(15),
	},
	bannerIcon: {
		color: colors.text_light,
		fontSize: setFontSizeValue(12),
	},
});
