import produce from 'immer';

export default function order(state = [], action: any) {
	switch (action.type) {
		case '@order/ADD_SUCCESS':
			return produce(state, draft => {
				const {product} = action;
				draft.push(product);
			});
		case '@order/REMOVE':
			return produce(state, draft => {
				const productIndex = draft.findIndex(p => p.id == action.id);
				if (productIndex >= 0) draft.splice(productIndex, 1);
			});
		default:
			return state;
	}
}
