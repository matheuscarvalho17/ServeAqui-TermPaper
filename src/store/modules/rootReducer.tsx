import cart from './cart/reducer';
import orders from './orders/reducer';
import {combineReducers} from 'redux';

export default combineReducers({cart, orders});
