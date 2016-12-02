var assert = require( 'assert' );
var Record = require( '../record' );

describe( "Record", function(){

  var mariahRecord = null;

  beforeEach( function(){
    mariahRecord = new Account( "Mariah Carey", "Merry Christmas", 10.00 );
  });

  it( "should have artist passed in constructor", function(){
    assert.equal( "Mariah Carey", mariahRecord.artist );
  });

});