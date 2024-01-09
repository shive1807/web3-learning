const assert = require('assert');
const ganache = require('ganache');
const { Web3 } = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');
// contract test code will go here
//if we want to change the network we can change is ganache, as a provider to differnt block chain.
// beforeEach(() => {
//     //Get a list of all accounts;
//     web3.eth.getAccounts().then(fetchedAccounts => {
//         console.log(fetchedAccounts);
//     });//async funtion in nature will return a promise.
// });

let accounts;
let inbox;

beforeEach(async() => {
    //Get a list of all accounts;
    accounts = await web3.eth.getAccounts();

    //use of of those accounts to deploy
    // the contract

    inbox = await new web3.eth.Contract(JSON.parse(interface)).deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({from: accounts[0], gas: '1000000'})
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log(inbox);
     });
});



//mocha is a test running frame work.
//has small set of function 
//
// class Car{
//     park() {
//         return 'stopped';
//     }

//     drive() {
//         return 'vroom';
//     }
// }

// let car;

// beforeEach(() => {
//     car = new Car();
//  });

// describe('Car Class', () => {
//     it('can park', () => {
//         assert.equal(car.park(), 'stopped');
//     });
//     it('can drive', () => {
//         assert.equal(car.drive(), 'vroom');
//      });

// });