// const max = require('./utils').maxValue;
import CoffeeMachine from "./private-class-members.js";

const nums = [1,2,4];
const math = './utils.js';

// must use --experimental-modules to use async import
import(math)
    .then(module => {
        console.log(module.random());
        return module;
    })
    .then(module =>
        console.log(module.maxValue(...nums))
    )
    .catch(err => console.log(err));

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
coffeeMachine.waterAmount = 1000;
