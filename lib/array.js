'use strict';

// MODULES //

var partial = require( './partial.js' );


// RANDOM //

/**
* FUNCTION: random( len, lambda, k [, rand] )
*	Creates an array of Weibull distributed random variates.
*
* @param {Number} len - array length
* @param {Number} lambda - shape parameter
* @param {Number} k - scale parameter
* @param {Function} [rand=Math.random] - random number generator
* @returns {Number[]} array filled with Weibull random variates
*/
function random( len, lambda, k, rand ) {
	var out,
		draw,
		i;

	draw = partial( lambda, k, rand );
	// Ensure fast elements...
	if ( len < 64000 ) {
		out = new Array( len );
		for ( i = 0; i < len; i++ ) {
			out[ i ] = draw();
		}
	} else {
		out = [];
		for ( i = 0; i < len; i++ ) {
			out.push( draw() );
		}
	}
	return out;
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
