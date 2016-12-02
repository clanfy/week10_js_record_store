var assert = require( 'assert' );
var Record = require( '../record' );

describe( "Record", function(){

  var mariahRecord = null;

  beforeEach( function(){
    mariahRecord = new Record( "Mariah Carey", "Merry Christmas", 10.00 );
  });

  it( "should have artist passed in constructor", function(){
    assert.equal( "Mariah Carey", mariahRecord.artist );
  });

  it( "should have title passed in constructor", function(){
    assert.equal( "Merry Christmas", mariahRecord.title );
  });

  it( "should have price passed in constructor", function(){
    assert.equal( 10.00, mariahRecord.price );
  });

});