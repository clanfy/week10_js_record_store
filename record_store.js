var RecordStore = function( name, city, balance ){
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.records = [];
};

RecordStore.prototype = {
  numberOfRecords: function(){
    return this.records.length;
  },
  addRecord: function( record ){
    this.records.push( record );
  },
  returnInventoryList: function(){
    return this.records.map(function( record ){
      return record;
    });
  },
  returnInventoryListTitles: function(){
   return this.records.map(function( record ){
    return record.title;
  });
 },
 returnIndex: function( title ){
  var foundRecord = this.records.find( function( record ){
    var found = record.title === title;
    return found;
  });
  return this.records.indexOf(foundRecord);
},
sellRecord: function( title ){
  for ( record of this.records ){
    if ( title === record.title){
      this.records.splice((this.returnIndex(title)), 1);
      this.balance += record.price;
    };
  }
},
inventoryValue: function(){
  var prices = this.records.map( function( record ){
    return record.price;
  });
  return prices.reduce( function( a, b ){
    return a + b}, 0)
}

};

module.exports = RecordStore;