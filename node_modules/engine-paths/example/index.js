const EnginePaths = require("../lib");

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
