dstructs
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Data structures.


## Installation

``` bash
$ npm install dstructs
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var dstructs = require( 'dstructs' );
```

#### dstructs.matrix

[Matrix](https://github.com/dstructs/matrix) data structure.


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

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

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


[npm-image]: http://img.shields.io/npm/v/dstructs.svg
[npm-url]: https://npmjs.org/package/dstructs

[travis-image]: http://img.shields.io/travis/dstructs/dstructs/master.svg
[travis-url]: https://travis-ci.org/dstructs/dstructs

[coveralls-image]: https://img.shields.io/coveralls/dstructs/dstructs/master.svg
[coveralls-url]: https://coveralls.io/r/dstructs/dstructs?branch=master

[dependencies-image]: http://img.shields.io/david/dstructs/dstructs.svg
[dependencies-url]: https://david-dm.org/dstructs/dstructs

[dev-dependencies-image]: http://img.shields.io/david/dev/dstructs/dstructs.svg
[dev-dependencies-url]: https://david-dm.org/dev/dstructs/dstructs

[github-issues-image]: http://img.shields.io/github/issues/dstructs/dstructs.svg
[github-issues-url]: https://github.com/dstructs/dstructs/issues
