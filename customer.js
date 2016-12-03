var Customer = function( name, wallet ){
  this.name = name;
  this.wallet = wallet;
  this.collection = [];
};

Customer.prototype = {
  numberOfRecords: function(){
    return this.collection.length;
  },
  buyRecord: function( record ){
    this.collection.push( record );
    this.wallet -= record.price;
  }

};

module.exports = Customer;