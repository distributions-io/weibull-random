'use strict';

// MODULES //

var matrix = require( 'dstructs-matrix' ),
	partial = require( './partial.js' );


// RANDOM //

/**
* FUNCTION: random( dims, dt, lambda, k[, rand] )
*	Creates a matrix of Weibull distributed random variates.
*
* @param {Number[]} dims - dimensions
* @param {String} dt - data type
* @param {Number} lambda - shape parameter
* @param {Number} k - scale parameter
* @param {Function} [rand=Math.random] - random number generator
* @returns {Matrix} matrix filled with Weibull random variates
*/
function random( dims, dt, lambda, k, rand ) {
	var out,
		draw,
		i;

	draw = partial( lambda, k, rand );
	out = matrix( dims, dt );
	for ( i = 0; i < out.length; i++ ) {
		out.data[ i ] = draw();
	}
	return out;
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
