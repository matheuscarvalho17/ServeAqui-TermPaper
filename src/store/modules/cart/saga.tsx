import api from '../../../services/api';
import formatValues from '../../../util/formatValues';
import {addToCartSuccess, updateAmountSuccess} from './actions';
import {all, takeLatest, select, call, put} from 'redux-saga/effects';

function* addToCart({id}: {type: string; id: number}) {
	const productExist = yield select(state =>
		state.cart.find(product => product.id == id),
	);
	const currentAmount = productExist ? productExist.amountCart : 0;
	const amount = currentAmount + 1;
	if (productExist) {
		yield put(updateAmountSuccess(id, amount));
	} else {
		const response = yield call(api.get, `/product?id=${id}`);
		const data = {
			...response.data,
			amountCart: 1,
			priceFormatted: formatValues(response.data.price),
		};
		yield put(addToCartSuccess(data));
	}
}

function* updateAmount({
	id,
	amountCart,
}: {
	id: number;
	type: string;
	amountCart: number;
}) {
	if (amountCart <= 0) return;
	yield put(updateAmountSuccess(id, amountCart));
}

export default all([
	takeLatest('@cart/ADD_REQUEST', addToCart),
	takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
