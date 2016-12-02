var Customer = require( '../customer' );
var assert = require( 'assert' );

describe( "Customer", function(){

  var santa = null;

  beforeEach( function(){
    santa = new Customer("Santa Claus", 100.00);
  });

  it( "should have customer named passed to constructor", function(){
    assert.equal( "Santa Claus", santa.name );
  })

});