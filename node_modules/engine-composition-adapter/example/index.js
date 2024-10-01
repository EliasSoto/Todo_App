"use strict";

// Include the CompositionAdapter class
const CompositionAdapter = require("../lib");

// Extend a custom adapter from CompositionAdapter
class MyCustomAdapter extends CompositionAdapter {
    // And implement the exists method
    exists (name, cb) {
        cb(null, true);
    }
}

// Create a new adapter instance
var crud = new MyCustomAdapter();

// Call the `exists` method
crud.exists("layout", (err, exists) => {
    console.log(err || exists);
    // => true

    // Call other method (which is not implemented)
    crud.list((err, instances) => {
        console.log(err || instances);
        // => {
        //  [Error: Method list not implement. Override the list method in your adapter to implement this.]
        //  code: 'METHOD_NOT_IMPLEMENTED'
        // }
    });
});
