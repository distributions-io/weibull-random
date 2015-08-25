'use strict';

// MODULES //

var partial = require( './partial.js' ),
	recurse = require( './recurse.js' );


// RANDOM //

/**
* FUNCTION: random( dims, lambda, k[, rand] )
*	Creates a multidimensional array of Weibull distributed random variates.
*
* @param {Number[]} dims - dimensions
* @param {Number} lambda - shape parameter
* @param {Number} k - scale parameter
* @param {Function} [rand=Math.random] - random number generator
* @returns {Array} multidimensional array filled with Weibull random variates
*/
function random( dims, lambda, k, rand ) {
	var draw = partial( lambda, k, rand );
	return recurse( dims, 0, draw );
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
