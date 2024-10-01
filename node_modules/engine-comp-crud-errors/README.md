# engine-comp-crud-errors [![Version](https://img.shields.io/npm/v/engine-comp-crud-errors.svg)](https://www.npmjs.com/package/engine-comp-crud-errors) [![Downloads](https://img.shields.io/npm/dt/engine-comp-crud-errors.svg)](https://www.npmjs.com/package/engine-comp-crud-errors)

> Errors for the CRUD modules.

## Installation

```sh
$ npm i --save engine-comp-crud-errors
```

## Example

```js
const errors = require("engine-comp-crud-errors");

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
```

## Documentation

### `INSTANCE_EXISTS_ALREADY(name)`

#### Params
- **String** `name`: The instance name.

#### Return
- **Error** The error object.

### `INSTANCE_DOES_NOT_EXIST(name)`

#### Params
- **String** `name`: The instance name.

#### Return
- **Error** The error object.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`engine-composition-crud`](https://github.com/jillix/engine-composition-crud#readme) by jillix

## License

[MIT][license] © [jillix][website]

[license]: http://showalicense.com/?fullname=jillix%20%3Ccontact%40jillix.com%3E%20(http%3A%2F%2Fjillix.com)&year=2015#license-mit
[website]: http://jillix.com
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md