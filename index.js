// const max = require('./utils').maxValue;

const nums = [1,2,4];
const _math = './utils.js';

// must use --experimental-modules to use async import
import(_math)
    .then(module => {
        console.log(module.random());
        return module;
    })
    .then(module =>
        console.log(module.maxValue(...nums))
    )
    .catch(err => console.log(err));


