var assert = require('assert');
var RecordStore = require('../record_store');
var Record = require('../record');

describe( "Record Store", function(){

  var emptyStore = null;
  var stockedStore = null;

  beforeEach( function(){
    emptyStore = new RecordStore("Rockin' Reindeer", "Rovaniemi", 1000);
  });

  it( "should have record store name passed in constructor", function(){
    assert.equal( "Rockin' Reindeer", emptyStore.name );
  });

  it( "should have no records if empty store", function(){
    assert.equal( 0, emptyStore.records.length);
  });

});

