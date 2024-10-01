const errors = require("../lib");

console.log(errors.INSTANCE_EXISTS_ALREADY("layout"));
// => {
//  [Error: The layout instance exists already.]
//  code: 'INSTANCE_EXISTS_ALREADY',
//  instance_name: 'layout'
// }

console.log(errors.INSTANCE_DOES_NOT_EXIST("layout"));
// => {
//  [Error: The layout instance does not exist.]
//  code: 'INSTANCE_DOES_NOT_EXIST',
//  instance_name: 'layout'
// }
