var assert = require( 'assert' );
var Record = require( '../record' );

describe( "Record", function(){

  var mariahRecord = null;
  var beachBoysRecord = null;
  var frankRecord = null;
  var bieberRecord = null;

  beforeEach( function(){
    mariahRecord = new Record( "Mariah Carey", "Merry Christmas", 10.00 );
    beachBoysRecord = new Record( "The Beach Boys", "The Beach Boys Christmas Album", 12.50);
    frankRecord = new Record( "Frank Sinatra", "A Jolly Christmas From Frank Sinatra", 9.00);
    bieberRecord = new Record( "Justin Bieber", "Under The Mistletoe", 6.66);
  });

  it( "should have artist passed in constructor", function(){
    assert.equal( "Mariah Carey", mariahRecord.artist );
  });

  it( "should have title passed in constructor", function(){
    assert.equal( "The Beach Boys Christmas Album", beachBoysRecord.title );
  });

  it( "should have price passed in constructor", function(){
    assert.equal( 6.66, bieberRecord.price );
  });

  

});