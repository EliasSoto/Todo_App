# engine-composition-adapter [![Version](https://img.shields.io/npm/v/engine-composition-adapter.svg)](https://www.npmjs.com/package/engine-composition-adapter) [![Downloads](https://img.shields.io/npm/dt/engine-composition-adapter.svg)](https://www.npmjs.com/package/engine-composition-adapter)

> The base composition adapter class.

Use this module to create custom adapters for Engine composition.

## Installation

```sh
$ npm i --save engine-composition-adapter
```

## Example

```js
"use strict";

// Include the CompositionAdapter class
const CompositionAdapter = require("engine-composition-adapter");

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
```

## Documentation

### `exists(name, cb)`
Checks if an instance exists.

#### Params
- **String** `name`: The instance name.
- **Function** `cb`: The callback function.

### `list(cb)`
List the instances.

#### Params
- **Function** `cb`: The callback function.

### `readAll(cb)`
Read all the instances.

#### Params
- **Function** `cb`: The callback function.

### `create(name, data, cb)`
Creates a new instance.

#### Params
- **String** `name`: The instance name.
- **Object** `data`: The instance content.
- **Function** `cb`: The callback function.

### `read(name, cb)`
Reads the instance content.

#### Params
- **String** `name`: The instance name.
- **Function** `cb`: The callback function.

### `update(name, data, cb)`
Updates the instance content.

#### Params
- **String** `name`: The instance name.
- **Object** `data`: The instance content.
- **Function** `cb`: The callback function.

### `remove(name, cb)`
Removes the instance.

#### Params
- **String** `name`: The instance name.
- **Function** `cb`: The callback function.

### `remove(oldName, newName, cb)`
rename
Renames the instance.

#### Params
- **String** `oldName`: The old instance name.
- **String** `newName`: The new instance name.
- **Function** `cb`: The callback function.

### `upsert(name, data, cb)`
Creates or updates the specified instance.

#### Params
- **String** `name`: The instance name.
- **Object** `data`: The instance content.
- **Function** `cb`: The callback function.

### `readFile(path, cb)`
Reads a file from app folder.

#### Params
- **String** `path`: The file path (relative to the app directory).
- **Function** `cb`: The callback function.

### `readFile(name, content, cb)`
Writes a file from app folder.

#### Params
- **String** `name`: The file path (relative to the app directory).
- **String** `content`: The content to write in the file.
- **Function** `cb`: The callback function.

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