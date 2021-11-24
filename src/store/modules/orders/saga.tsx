import api from '../../../services/api';
import {addOrderSuccess} from './actions';
import formatValues from '../../../util/formatValues';
import {all, takeLatest, select, call, put} from 'redux-saga/effects';

function* addToOrder({
	id,
	amountOrder,
}: {
	id: number;
	type: string;
	amountOrder: number;
}) {
	const response = yield call(api.get, `/product?id=${id}`);
	const data = {
		...response.data,
		amountCart: amountOrder,
		priceFormatted: formatValues(response.data.price),
	};
	yield put(addOrderSuccess(data));
}

export default all([takeLatest('@order/ADD_REQUEST', addToOrder)]);
