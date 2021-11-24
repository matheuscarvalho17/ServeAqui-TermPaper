//Requests
export function addOrderRequest(id: number, amountOrder: number) {
	return {
		type: '@order/ADD_REQUEST',
		id,
		amountOrder,
	};
}

//Success
export function addOrderSuccess(product: any) {
	return {
		type: '@order/ADD_SUCCESS',
		product,
	};
}
