var RecordStore = function( name, city, balance ){
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.records = [];
  this.customers = [];
};

RecordStore.prototype = {
  numberOfRecords: function(){
    return this.records.length;
  },
  addRecord: function( record ){
    this.records.push( record );
  },
  welcomeCustomer: function( customer ){
    this.customers.push(customer);
  },
  countCustomers: function(){
    return this.customers.length;
  },
  checkCustomers: function(){
    return this.customers;
  },
  returnInventoryList: function(){
    return this.records;
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
  for ( var record of this.records ){
    if ( title === record.title){
      this.records.splice((this.returnIndex(title)), 1);
      this.balance += record.price;
    }
  }
},
// sellRecordToCustomer: function( title, customerName ){
//   this.sellRecord( title);

//   for ( var customer of this.customers ){
//     if ( customerName === customer.name ){
//       for (var record of this.records){
//         if (title === record.title)
//           customer.buyRecord(record);
//       }
//     }
//   }
// },

sellRecordToCustomer: function( title, record, customerName ){
  this.sellRecord( title );

  for (var customer in this.customers){
    if (customerName === customer.name){
      customer.buyRecord(record);
    }
  }
},

inventoryValue: function(){
  var prices = this.records.map( function( record ){
    return record.price;
  });
  return prices.reduce( function( a, b ){
    return a + b}, 0);
},
reportFinancials: function(){
  var financialsString = 
  "Inventory Value: £" + (this.inventoryValue().toFixed(2)).toString() + ", " + "Bank Balance: £" + (this.balance.toFixed(2)).toString();
  return financialsString; 
}

};

module.exports = RecordStore;