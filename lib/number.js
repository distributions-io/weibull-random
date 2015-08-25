'use strict';

// FUNCTIONS //

var ln = Math.log,
	pow = Math.pow;


// GENERATE WEIBULL RANDOM VARIATES //

/**
* FUNCTION random( lambda, k[, rand] )
*	Generates a random draw from a Weibull distribution shape parameter `lambda`
*	and scale parameter `k`.
*
* @param {Number} lambda - shape parameter
* @param {Number} k - scale parameter
* @param {Function} [rand=Math.random] - random number generator
* @returns {Number} random draw from the specified distribution
*/
function random( lambda, k, rand ) {
	var u;
	u = rand ? rand() : Math.random();
	return lambda * pow( -ln( 1 - u ), 1/k );
}

module.exports = random;
