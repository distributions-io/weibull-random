'use strict';

// FUNCTIONS //

var ln = Math.log,
	pow = Math.pow;


// PARTIAL //

/**
* FUNCTION: partial( lambda, k[, rand] )
*	Partially applies rate parameter `lambda` and returns a function to generate random variables from the Weibull distribution.
*
* @param {Number} lambda - shape parameter
* @param {Number} k - scale parameter
* @param {Function} [rand=Math.random] - random number generator
* @returns {Function} function which generates random draws from the specified distribution
*/
function partial( lambda, k, rand ) {
	var random;
	if ( rand ) {
		random = rand;
	} else {
		random = Math.random;
	}
	/**
	* FUNCTION: draw( x )
	*	Generates a random draw from a Weibull distribution with shape parameter `lambda`
	*	and scale parameter `k`.
	*
	* @private
	* @returns {Number} random draw from the specified distribution
	*/
	return function draw() {
		var u = random();
		return lambda * pow( -ln( 1 - u ), 1/k );
	}; // end FUNCTION draw()
} // end FUNCTION partial()

module.exports = partial;
