const mongoose = require('mongoose');
const Schema = require('./index.js');
const db = mongoose.connection;

// get current date and time string
function getDateAndTime(){
    // get current date
    var date = new Date();
    // set date to string
    var dateStr = date.toDateString();
    // get current time as string
    var time = date.toLocaleTimeString();
    // return full string
    return dateStr + ' ' + time;
  }

  // define transaction schema
let transactionSchema = new mongoose.Schema({
    stockName: {
      type: String,
      required: [true, 'stockName field is required']
    },
    stockTicker: {
      type: String,
      required: [true, 'stockTicker field is required']
    },
    currentPrice: {
      type: Number,
      required: [true, 'currentPrice field is required']
    },
    orderType: {
      type: String,
      required: [true, 'orderType field is required']
    },
    timeInForce: {
      type: String,
      required: [true, 'timeInForce field is required']
    },
    date: {
      type: String,
      required: [true, 'date field is required']
    },
    quantity: {
      type: Number,
      required: [true, 'quantity field is required']
    },
    status: {
      type: String,
      required: [true, 'status field is required']
    },
    filled: {
      type: String
    },
    filledQuantity: {
      type: String
    },
    totalCost: {
      type: Number
    }
  });

  // methods
  let newTransaction = (transaction, cb) => {
    var newTransaction = {
      stockName: transaction.stockName,
      stockTicker: transaction.stockTicker,
      currentPrice: transaction.currentPrice,
      orderType: 'market',
      timeInForce: 'GFD',
      date: getDateAndTime(),
      quantity: transaction.quantity,
      status: 'pending',
      filled: 'TBD',
      filledQuantity: 0,
      totalCost: 0.00
    }
    console.log(newTransaction);
    Transaction.update({'stockTicker': transaction.stockTicker}, newTransaction,
      {upsert: true}).then((tx) => {
        cb(null, tx);
    })
  };

  // define Transaction model
  var Transaction = mongoose.model('Transaction', transactionSchema);

  // export
  module.exports = Transaction;
  module.exports.newTransaction = newTransaction;