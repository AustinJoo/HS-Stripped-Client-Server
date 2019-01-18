'use strict';

module.exports = {
    randomizer
};

var randomizer = (context, events, done) => {
    const id = parseInt(Math.random()*10000000);
    context.vars.id = id;
    return done();
}



