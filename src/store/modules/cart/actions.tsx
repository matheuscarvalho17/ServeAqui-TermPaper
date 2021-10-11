export function addToCartRequest(id: number) {
	return {
		type: '@cart/ADD_REQUEST',
		id,
	};
}

export function addToCartSucess(product: any) {
	return {
		type: '@cart/ADD_SUCESS',
		product,
	};
}
