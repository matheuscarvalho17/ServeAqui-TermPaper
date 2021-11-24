import cart from './cart/saga';
import orders from './orders/saga';
import {all} from 'redux-saga/effects';

export default function* rootSaga() {
	return yield all([cart, orders]);
}
