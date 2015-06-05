/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	dstructs = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// FUNCTIONS //

/**
* FUNCTION: testProperty( name )
*	Tests that the dstructs library has a property and that the property value is a function.
*
* @param {string} name - property name
*/
function testProperty( name ) {
	it( 'should have a `'+ name + '` property that is a function', function test() {
		expect( dstructs ).to.have.property( name ).that.is.a( 'function' );
	});
} // end FUNCTION testProperty()


// TESTS //

describe( 'dstructs', function tests() {

	var properties = [
		'matrix'
	];

	it( 'should export an object', function test() {
		expect( dstructs ).to.be.an( 'object' );
	});

	// Run the property tests...
	for ( var i = 0; i < properties.length; i++ ) {
		testProperty( properties[ i ] );
	}

});
