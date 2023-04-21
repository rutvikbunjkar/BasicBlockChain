const {Blockchain, Transaction} = require ('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('8f6573892aa6175fba8bfa6146af0e61d3e5ade398531ae84239c4bd3b478025');
const myWalletAddress = myKey.getPublic('hex');

//this is all for testing

let a = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
a.addTransaction(tx1);


// console.log('Mining block 1...');
// a.addBlock(new Block(1, "01/02/2017", {amount: 4}));

// console.log('Mining block 2...');
// a.addBlock(new Block(2, "01/03/2017", {amount: 10}));

// // console.log(JSON.stringify(a, null, 4));
// console.log('Is blockchain valid?' + a.isChainValid());

// a.chain[1].data = {amount: 100};
// a.chain[1].hash = a.chain[1].calculateHash();

// console.log('Is blockchain valid?' + a.isChainValid());



// a.createTransaction(new Transaction('address1', 'address2', 100));
// a.createTransaction(new Transaction('address2', 'address1', 50));

console.log('\n Starting the miner...');
a.minePendingTransactions(myWalletAddress);

console.log('\nBalance of xavier is ', a.getBalanceOfAddress(myWalletAddress));

//here we are tampering with chain
a.chain[1].transactions[0].amount = 1;

console.log('Is chain Valid?', a.isChainValid());
// console.log('\n starting the miner again...');
// a.minePendingTransactions('xaviers-address');

// console.log('\nBalance of xavier is ', a.getBalanceOfAddress('xaviers-address'));

