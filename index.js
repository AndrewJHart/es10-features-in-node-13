// const max = require('./utils').maxValue;
import CoffeeMachine from "./utils/private-class-members.js";
import settlePromises from "./utils/async-promises.js";
import axios from "axios";

const nums = [1,2,4];
const math = './utils/math.js';

/*
 * Testing private props and methods in classes using #
 */
let coffeeMachine = new CoffeeMachine();

// can't access privates from outside of the class
// Gives silent error as prop is not accessible
// uncomment to see error - not caught in try/catch
// coffeeMachine.#waterLimit = 1000;

// updates private property via setter
coffeeMachine.waterAmount = 100;

console.log(coffeeMachine.waterAmount = 100);

// Asynchronously import our local math module
import(math)
    .then(module => {
        module.random();
        return module;
    })
    .then(module =>
        module.maxValue(...nums)
    )
    .then(() => {
        return settlePromises([
          axios.get('http://jservice.io/api/clues?category=1'),
          axios.get('http://jservice.io/api/clues?category=25'),
          axios.get('http://jservice.io/api/clues?category=4')
        ]);
    })
    .catch(err => console.log(err));

// only coffee machine output shows up before this
console.log('Proves that the async import and settlePromises are truly concurrent');