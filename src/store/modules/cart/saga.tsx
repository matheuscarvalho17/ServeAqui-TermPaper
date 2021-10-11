import api from '../../../services/api';
import formatValues from '../../../util/formatValues';
import {addToCartSuccess, updateAmountSuccess} from './actions';
import {all, takeLatest, select, call, put} from 'redux-saga/effects';

function* addToCart({id}: {type: string; id: number}) {
	const productExist = yield select(state =>
		state.cart.find(product => product.id == id),
	);
	const currentAmount = productExist ? productExist.amount : 0;
	const amount = currentAmount + 1;
	if (productExist) {
		yield put(updateAmountSuccess(id, amount));
	} else {
		const response = yield call(api.get, `/products/${id}`);
		const data = {
			...response.data,
			amount: 1,
			priceFormatted: formatValues(response.data.price),
		};
		yield put(addToCartSuccess(data));
	}
}

function* updateAmount({
	id,
	amount,
}: {
	id: number;
	type: string;
	amount: number;
}) {
	if (amount <= 0) return;
	yield put(updateAmountSuccess(id, amount));
}

export default all([
	takeLatest('@cart/ADD_REQUEST', addToCart),
	takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
