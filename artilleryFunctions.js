'use strict';

let randomizer = () => {
    return parseInt(Math.random()*10000000)
}

// console.log(randomizer());

module.exports.randomizer = randomizer;

