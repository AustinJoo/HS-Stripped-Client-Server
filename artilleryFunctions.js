'use strict';


var randomizer = (context, events, done) => {
    let id = parseInt(Math.random()*10000000);
    context.vars.listingID = id;
    return done();
}

module.exports = {
    randomizer
};