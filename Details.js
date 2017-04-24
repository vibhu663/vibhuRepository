var storage = require('node-persist');
storage.initSync();
storage.setItemSync('accounts',[{
    username : 'Asert',
    balance:100
},{
    username : 'Asert',
    balance:100
}]);


var accounts = storage.getItemSync('accounts');
accounts.push({
    username:'vibh',
    balance:500
});

storage.setItemSync('accounts',accounts);
console.log(accounts);