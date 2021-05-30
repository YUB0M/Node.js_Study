const dep1 = require('./dep1');
const dep2 = require('./dep2');

dep1();
dep2();

// require dep1 {}
// require dep2 [Function (anonymous)]
// dep2 [Function (anonymous)]
// dep1 {}
