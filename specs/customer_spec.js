var Customer = require( '../customer' );
var assert = require( 'assert' );

describe( "Customer", function(){

  var santa = null;

  beforeEach( function(){
    santa = new Customer("Santa Claus", 100.00);
  });

  it( "should have customer name passed to constructor", function(){
    assert.equal( "Santa Claus", santa.name );
  });

  it( "should have customer wallet passed to constructor", function(){
    assert.equal( 100.00, santa.wallet );
  });

  it( "should have no records in collection at start", function(){
    assert.equal( 0, santa.numberOfRecords() );
  });

});