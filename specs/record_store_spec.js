var assert = require('assert');
var RecordStore = require('../record_store');
var Record = require('../record');

describe( "Record Store", function(){

  var emptyStore = null;
  var stockedStore = null;  
  var mariahRecord = null;
  var beachBoysRecord = null;
  var frankRecord = null;
  var bieberRecord = null;

  beforeEach( function(){
    emptyStore = new RecordStore("Rockin' Reindeer", "Rovaniemi", 1000);
    populatedStore = new RecordStore("Rockin' Reindeer", "Rovaniemi", 1000);

    mariahRecord = new Record( "Mariah Carey", "Merry Christmas", 10.00 );
    beachBoysRecord = new Record( "The Beach Boys", "The Beach Boys Christmas Album", 12.50);
    frankRecord = new Record( "Frank Sinatra", "A Jolly Christmas From Frank Sinatra", 9.00);
    bieberRecord = new Record( "Justin Bieber", "Under The Mistletoe", 6.66);

    populatedStore.addRecord( mariahRecord );
    populatedStore.addRecord( beachBoysRecord );
    populatedStore.addRecord( frankRecord );
    populatedStore.addRecord( bieberRecord );

  });

  it( "should have record store name passed in constructor", function(){
    assert.equal( "Rockin' Reindeer", emptyStore.name );
  });

  it( "should have record store city passed in constructor", function(){
    assert.equal("Rovaniemi", populatedStore.city );
  })

  it( "should have no records if empty store", function(){
    assert.equal( 0, emptyStore.numberOfRecords());
  });

  it("should add 4 records", function(){
    assert.equal( 4, populatedStore.numberOfRecords());
  })

});

