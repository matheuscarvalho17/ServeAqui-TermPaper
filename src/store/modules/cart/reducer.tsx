import produce from 'immer';

export default function cart(state = [], action: any) {
	switch (action.type) {
		case '@cart/ADD_SUCESS':
			return produce(state, draft => {
				const {product} = action;
				draft.push(product);
			});
		default:
			return state;
	}
}
