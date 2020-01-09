// const max = require('./utils').maxValue;
import CoffeeMachine from "./utils/private-class-members.js";
import settlePromises from "./utils/async-promises.js";
import fetch from "node-fetch";

const nums = [1,2,4];
const math = './utils/math.js';

/*
 * Testing private props and methods in classes using #
 */
let coffeeMachine = new CoffeeMachine();

// can't access privates from outside of the class
// Gives silent error as prop is not accessible
coffeeMachine.waterLimit = 1000;

// updates the private method #checkWater(value)
// using the class properly with setter method
// and checks if the value is within limit
coffeeMachine.waterAmount = 100;
// coffeeMachine.waterAmount = 1000;


const promises = [
    fetch('http://jservice.io/api/clues?category=1'),
    fetch('http://jservice.io/api/clues?category=25'),
    fetch('http://jservice.io/api/clues?category=4')
];

// must use --experimental-modules to use async import
import(math)
    .then(module => {
        module.random();
        return module;
    })
    .then(module =>
        module.maxValue(...nums)
    )
    .then(() => settlePromises(promises))
    .catch(err => console.log(err));

// only coffee machine output shows up before this
console.log('Proving that the async import and settlePromises are truly concurrent');