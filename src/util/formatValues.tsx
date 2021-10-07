import 'intl';
import 'intl/locale-data/jsonp/en';

const formatValues = value =>
	Intl.NumberFormat('pt-br', {
		style: 'currency',
		currency: 'BRL',
	}).format(value);

export default formatValues;
