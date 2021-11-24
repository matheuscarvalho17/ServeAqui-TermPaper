import produce from 'immer';

export default function order(state = [], action: any) {
	switch (action.type) {
		case '@order/ADD_SUCCESS':
			return produce(state, draft => {
				const {product} = action;
				draft.push(product);
			});
		default:
			return state;
	}
}
