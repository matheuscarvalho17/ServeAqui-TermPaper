import {Dimensions} from 'react-native';
const WIDTH_REF = 180;
const HEIGHT_REF = 256;

function setWidthValue(width) {
	return Math.round((width / WIDTH_REF) * Dimensions.get('screen').width);
}
function setHeightValue(height) {
	return Math.round((height / HEIGHT_REF) * Dimensions.get('screen').height);
}
function setFontSizeValue(fontSize) {
	return Math.round((fontSize / HEIGHT_REF) * Dimensions.get('screen').height);
}

export {setHeightValue, setWidthValue, setFontSizeValue};
