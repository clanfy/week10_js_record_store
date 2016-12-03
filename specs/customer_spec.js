var Customer = require( '../customer' );
var Record = require( '../record' );
var assert = require( 'assert' );

describe( "Customer", function(){

  var santa = null;
  var mariahRecord = null;
  var beachBoysRecord = null;
  var frankRecord = null;
  var bieberRecord = null;

  beforeEach( function(){
    santa = new Customer("Santa Claus", 100.00);

    mariahRecord = new Record( "Mariah Carey", "Merry Christmas", 10.00 );
    beachBoysRecord = new Record( "The Beach Boys", "The Beach Boys Christmas Album", 12.50);
    frankRecord = new Record( "Frank Sinatra", "A Jolly Christmas From Frank Sinatra", 9.00);
    bieberRecord = new Record( "Justin Bieber", "Under The Mistletoe", 6.66);
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

  it( "should be able to buy record", function(){
    santa.buyRecord(frankRecord);
    assert.equal( 1, santa.numberOfRecords() );
  });

  it( "should reduce wallet balance when record bought", function(){
    santa.buyRecord(mariahRecord);
    assert.equal( 90.00, santa.wallet );
  });

});




