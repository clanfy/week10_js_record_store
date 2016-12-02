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
  sellRecord: function( title ){
    for ( record in this.records ){
      if ( title === record.title ){
        this.records.splice((this.records.indexOf(record)),1);
      }
    }
  }

};

module.exports = RecordStore;