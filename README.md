dstructs
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Data structures.


## Installation

``` bash
$ npm install dstructs
```

For use in the browser, use [browserify][browserify].


## Usage

``` javascript
var dstructs = require( 'dstructs' );
```

#### dstructs.array( x[, dtype] )

[Array][array] data structure.

``` javascript
var arr = dstructs.array( 5, 'int8' );
// returns Int8Array([0,0,0,0,0])
```


#### dstructs.matrix( [data,] shape[, dtype] )

[Matrix][matrix] data structure.

``` javascript
var mat = dstructs.matrix( [5,2], 'float64' );
/*
    [ 0 0 
      0 0
      0 0
      0 0
      0 0 ]
*/
```


## Examples

``` javascript
var dstructs = require( 'dstructs' );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha][mocha] test framework with [Chai][chai] assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

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


[npm-image]: http://img.shields.io/npm/v/dstructs.svg
[npm-url]: https://npmjs.org/package/dstructs

[travis-image]: http://img.shields.io/travis/dstructs/dstructs/master.svg
[travis-url]: https://travis-ci.org/dstructs/dstructs

[codecov-image]: https://img.shields.io/codecov/c/github/dstructs/dstructs/master.svg
[codecov-url]: https://codecov.io/github/dstructs/dstructs?branch=master

[dependencies-image]: http://img.shields.io/david/dstructs/dstructs.svg
[dependencies-url]: https://david-dm.org/dstructs/dstructs

[dev-dependencies-image]: http://img.shields.io/david/dev/dstructs/dstructs.svg
[dev-dependencies-url]: https://david-dm.org/dev/dstructs/dstructs

[github-issues-image]: http://img.shields.io/github/issues/dstructs/dstructs.svg
[github-issues-url]: https://github.com/dstructs/dstructs/issues

[mocha]: http://mochajs.org/
[chai]: http://chaijs.com
[istanbul]: https://github.com/gotwarlost/istanbul

[browserify]: https://github.com/substack/node-browserify

[array]: https://github.com/dstructs/array
[matrix]: https://github.com/dstructs/matrix
