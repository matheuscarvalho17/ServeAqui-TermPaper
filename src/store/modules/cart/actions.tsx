//Requests
export function addToCartRequest(id: number) {
	return {
		type: '@cart/ADD_REQUEST',
		id,
	};
}
export function updateAmountRequest(id: number, amountCart: number) {
	return {
		type: '@cart/UPDATE_AMOUNT_REQUEST',
		id,
		amountCart,
	};
}

//Success
export function addToCartSuccess(product: any) {
	return {
		type: '@cart/ADD_SUCCESS',
		product,
	};
}
export function updateAmountSuccess(id: number, amountCart: number) {
	return {
		type: '@cart/UPDATE_AMOUNT_SUCCESS',
		id,
		amountCart,
	};
}
export function removeFromCart(id: number) {
	return {
		type: '@cart/REMOVE',
		id,
	};
}
