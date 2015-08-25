Weibull Random Variables
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Creates a [matrix](https://github.com/dstructs/matrix) or array filled with draws from a [Weibull distribution](https://en.wikipedia.org/wiki/Weibull_distribution).


## Installation

``` bash
$ npm install rand-weibull
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var random = require( 'rand-weibull' );
```

#### random( dims[, opts] )

Creates a [`matrix`](https://github.com/dstructs/matrix) or [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) filled with draws from a [Weibull distribution](https://en.wikipedia.org/wiki/Weibull_distribution). The `dims` argument may either be a positive `integer` specifying a `length` or an `array` of positive `integers` specifying dimensions. A positive-integer seed for the underlying uniform number generator can be supplied by setting the seed property of the exported function.

``` javascript
var out;

// Set seed
random.seed = 2;

out = random( 5 );
// returns [ ~0.278, ~0.324, ~2.248, ~0.403, ~0.143 ]

out = random( [2,1,2] );
// returns [ [ [~0.564,~0.864] ], [ [~0.131,~0.495] ] ]

```

The function accepts the following `options`:

*	__lambda__: shape parameter. Default: `1`.
*	__k__: scale parameter. Default: `1`.
*	__dtype__: output data type (see [`matrix`](https://github.com/dstructs/matrix) for a list of acceptable data types). Default: `generic`.

A [Weibull](https://en.wikipedia.org/wiki/Weibull_distribution) distribution is a function of two parameters: `lambda`(shape parameter) and `k`(scale parameter). By default, `lambda` is equal to `1` and `k` is equal to `1`. To adjust either parameter, set the corresponding option.

``` javascript
var out = random( 5, {
	'lambda': 3,
	'k': 6,
});
// returns [ ~3.565, ~2.429, ~1.974, ~2.161, ~2.775 ]

```

By default, the output data structure is a generic [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). To output a [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) or [`matrix`](https://github.com/dstructs/matrix), set the `dtype` option.

``` javascript
var out;

out = random( 5, {
	'dtype': 'float32'
});
// returns Float32Array( [~1.118,~4.757,~0.864,~0.074,~1.105] )

out = random( [3,2], {
	'dtype': 'float64'
});
/*
	[ 0.72   ~0.527
	  ~0.376 ~1.243
	  1.26   ~1.132 ]
*/

```

__Notes__:
*	Currently, for more than `2` dimensions, the function outputs a __generic__ `array` and ignores any specified `dtype`.

	``` javascript
	var out = random( [2,1,3], {
		'dtype': 'float32'
	});
	// returns [ [ [ ~0.174, ~0.256, ~2.298 ], [ [ ~1.445, ~0.552, ~0.852 ] ] ]
	```

## Examples

``` javascript
var random = require( 'rand-weibull' ),
	out;

// Set seed
random.seed = 23;

// Plain arrays...

// 1x10:
out = random( 10 );

// 2x1x3:
out = random( [2,1,3] );

// 5x5x5:
out = random( [5,5,5] );

// Typed arrays...
out = random( 10, {
	'dtype': 'float32'
});

// Matrices...
out = random( [3,2], {
	'dtype': 'float64'
});
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The [Compute.io](https://github.com/compute-io) Authors.


[npm-image]: http://img.shields.io/npm/v/rand-weibull.svg
[npm-url]: https://npmjs.org/package/rand-weibull

[travis-image]: http://img.shields.io/travis/rand-io/weibull/master.svg
[travis-url]: https://travis-ci.org/rand-io/weibull

[codecov-image]: https://img.shields.io/codecov/c/githubrand-io/weibull/master.svg
[codecov-url]: https://codecov.io/github/rand-io/weibull?branch=master

[dependencies-image]: http://img.shields.io/david/rand-io/weibull.svg
[dependencies-url]: https://david-dm.org/rand-io/weibull

[dev-dependencies-image]: http://img.shields.io/david/dev/rand-io/weibull.svg
[dev-dependencies-url]: https://david-dm.org/dev/rand-io/weibull

[github-issues-image]: http://img.shields.io/github/issues/rand-io/weibull.svg
[github-issues-url]: https://github.com/rand-io/weibull/issues
