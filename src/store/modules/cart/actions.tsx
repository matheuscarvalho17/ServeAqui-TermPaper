//Requests
export function addToCartRequest(id: number) {
	return {
		type: '@cart/ADD_REQUEST',
		id,
	};
}
export function updateAmountRequest(id: number, amount: number) {
	return {
		type: '@cart/UPDATE_AMOUNT_REQUEST',
		id,
		amount,
	};
}

//Success
export function addToCartSuccess(product: any) {
	return {
		type: '@cart/ADD_SUCCESS',
		product,
	};
}
export function updateAmountSuccess(id: number, amount: number) {
	return {
		type: '@cart/UPDATE_AMOUNT_SUCCESS',
		id,
		amount,
	};
}
export function removeFromCart(id: number) {
	return {
		type: '@cart/REMOVE',
		id,
	};
}
