import api from '../../../services/api';
import {addToCartSucess} from './actions';
import formatValues from '../../../util/formatValues';
import {all, takeLatest, select, call, put} from 'redux-saga/effects';

function* addToCart({id}: {type: string; id: number}) {
	const productExist: boolean = yield select(state =>
		state.cart.find(product => product.id == id),
	);
	if (productExist) {
		//dispara quantidade
	} else {
		const response = yield call(api.get, `/products/${id}`);
		const data = {
			...response.data,
			amount: 1,
			priceFormatted: formatValues(response.data.price),
		};
		yield put(addToCartSucess(data));
	}
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
