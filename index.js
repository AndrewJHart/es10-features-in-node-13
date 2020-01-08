// const max = require('./utils').maxValue;

import { maxValue, random } from './utils.js';
import { readFile } from 'fs';

const nums = [1,2,4];

console.log(maxValue(...nums));

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


