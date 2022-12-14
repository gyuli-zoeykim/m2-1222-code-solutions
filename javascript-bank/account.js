/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}


Account.prototype.deposit = function(amount) {
  var newDeposit = new Transaction('deposit', amount);
  if (newDeposit.amount > 0 && newDeposit.amount % 1 === 0) {
    this.transactions.push(newDeposit);
    return true;
  } else {
    return false;
  }
};
Account.prototype.withdraw = function(amount) {
  var newWithdraw = new Transaction ('withdrawal', amount);
  if (Math.sign(newWithdraw.amount) === 1 && newWithdraw.amount % 1 === 0) {
    this.transactions.push(newWithdraw);
    return true;
  } else {
    return false;
  }
};


Account.prototype.getBalance = function() {
  if (this.transactions.length === 0) {
    return 0;
  } else {
    var depositSum = 0;
    var withdrawSum = 0;
    for (var i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === 'deposit') {
        depositSum += this.transactions[i].amount;
      } else {
        withdrawSum += this.transactions[i].amount;
      }
      var balance = depositSum - withdrawSum;
    }
    return balance;
  }
};
