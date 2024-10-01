# engine-paths [![Version](https://img.shields.io/npm/v/engine-paths.svg)](https://www.npmjs.com/package/engine-paths) [![Downloads](https://img.shields.io/npm/dt/engine-paths.svg)](https://www.npmjs.com/package/engine-paths)

> Keeping the Engine paths in one place.

## Installation

```sh
$ npm i --save engine-paths
```

## Example

```js
const EnginePaths = require("engine-paths");

var paths = new EnginePaths("path/to/your/app");

console.log(paths.root);
// => /home/.../path/to/your/app

console.log(paths.composition);
// => /home/.../path/to/your/app/composition

console.log(paths.package);
// => /home/.../path/to/your/app/package.json

console.log(paths.service);
// => /home/.../path/to/your/app/.service.json

console.log(paths.instance("some-instance"));
// => /home/.../path/to/your/app/composition/some-instance.json
```

## Documentation

### `EnginePaths(appPath)`
Creates a new instance of `EnginePaths`.

#### Params
- **String** `appPath`: The path to the Engine app.

### `instance(name)`
Gets the absolute path to the JSON file.

#### Params
- **String** `name`: The instance name (without the `.json` suffix).

#### Return
- **String** The absolute path to the instance file.

### `modulePack(name)`
Gets the `package.json` file path of a module.

#### Params
- **String** `name`: The module name.

#### Return
- **String** The absolute path to the package.json of the module.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`engine-app`](https://github.com/jillix/engine-app#readme) by jillix

 - [`engine-composition-crud`](https://github.com/jillix/engine-composition-crud#readme) by jillix

## License

[MIT][license] © [jillix][website]

[license]: http://showalicense.com/?fullname=jillix%20%3Ccontact%40jillix.com%3E%20(http%3A%2F%2Fjillix.com)&year=2015#license-mit
[website]: http://jillix.com
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md