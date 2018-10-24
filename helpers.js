//this fuction logs the value of the cart
function logCart (cart) {
	console.log('cart:')
	console.log(cart)
}

//this function calulates the final cost
//this expects the initial cart value and a discount to be passed
function calculateFinalCost (cart, discount) {
	if (cart > 250) {
		cart = cart - moreMoneyOff
	}

	else if (cart > 150) {
		cart = cart - moneyOff
	}

	else {
		cart = cart * (1 - discount)
	}


	return cart; 
}

module.exports = {
	logCart: logCart,
	something: calculateFinalCost 
}