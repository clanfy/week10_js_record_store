var assert = require('assert');
var RecordStore = require('../record_store');
var Record = require('../record');
var Customer = require('../customer');

describe( "Record Store", function(){

  var emptyStore = null;
  var stockedStore = null;  
  var mariahRecord = null;
  var beachBoysRecord = null;
  var frankRecord = null;
  var bieberRecord = null;
  var santa = null;

  beforeEach( function(){

    emptyStore = new RecordStore("Rockin' Reindeer", "Rovaniemi", 2500);
    populatedStore = new RecordStore("Rockin' Reindeer", "Rovaniemi", 1000);

    mariahRecord = new Record( "Mariah Carey", "Merry Christmas", 10.00 );
    beachBoysRecord = new Record( "The Beach Boys", "The Beach Boys Christmas Album", 12.50);
    frankRecord = new Record( "Frank Sinatra", "A Jolly Christmas From Frank Sinatra", 9.00);
    bieberRecord = new Record( "Justin Bieber", "Under The Mistletoe", 6.66);

    populatedStore.addRecord( mariahRecord );
    populatedStore.addRecord( beachBoysRecord );
    populatedStore.addRecord( frankRecord );
    populatedStore.addRecord( bieberRecord );
    populatedStore.welcomeCustomer( santa );

    santa = new Customer("Santa Claus", 100.00);

  });

  it( "should have record store name passed in constructor", function(){
    assert.equal( "Rockin' Reindeer", emptyStore.name );
  });

  it( "should have record store city passed in constructor", function(){
    assert.equal("Rovaniemi", populatedStore.city );
  });

  it( "should have balance passed in constructor", function(){
    assert.equal( 1000, populatedStore.balance);
  });

  it( "should have no records if empty store", function(){
    assert.equal( 0, emptyStore.numberOfRecords());
  });

  it("should add 4 records", function(){
    assert.equal( 4, populatedStore.numberOfRecords());
  });

  it("should list inventory", function(){
    assert.deepEqual( [mariahRecord, beachBoysRecord, frankRecord, bieberRecord], populatedStore.returnInventoryList() );
  });

  it("should list inventory titles", function(){
    assert.deepEqual( ["Merry Christmas", "The Beach Boys Christmas Album", "A Jolly Christmas From Frank Sinatra", "Under The Mistletoe"], populatedStore.returnInventoryListTitles() );
  });

  it( "should return index of record by title", function(){
    assert.equal( 2, populatedStore.returnIndex("A Jolly Christmas From Frank Sinatra") );
  });

  it( "should sell a record and have 3 records left", function(){
    populatedStore.sellRecord("Under The Mistletoe");
    assert.equal( 3, populatedStore.numberOfRecords() );
  });

  it( "should confirm that inventory no longer has sold stock", function(){
    populatedStore.sellRecord("Merry Christmas");
    assert.deepEqual( [beachBoysRecord, frankRecord, bieberRecord], populatedStore.returnInventoryList() );
  });

  it( "should increase store balance if sold stock", function(){
    populatedStore.sellRecord("A Jolly Christmas From Frank Sinatra");
    assert.equal( 1009.00, populatedStore.balance);
  });

  it( "should report value of inventory", function(){
    assert.equal( 38.16, populatedStore.inventoryValue() );
  });

  it(" should report the financials of the store", function(){
    populatedStore.sellRecord("The Beach Boys Christmas Album");
    assert.equal("Inventory Value: £25.66, Bank Balance: £1012.50", populatedStore.reportFinancials() );
  });

  it(" should allow customer to enter store", function(){
    assert.equal( 1, populatedStore.countCustomers());
  });

  it( "should check on customers", function(){
    assert.deepEqual([santa], populatedStore.checkCustomers());
  });
  
  it( "should be able to sell record to customer", function(){
    populatedStore.sellRecordToCustomer( mariahRecord, santa );
    assert.equal( 3, populatedStore.numberOfRecords() );
    assert.equal( 1, santa.numberOfRecords() );
  });

  it( "should sell correct record to customer", function(){
    populatedStore.sellRecordToCustomer( bieberRecord, santa );
    assert.deepEqual( [bieberRecord], santa.collection );
  });


});

