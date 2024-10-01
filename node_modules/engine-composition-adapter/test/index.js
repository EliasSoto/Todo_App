const tester = require("tester")
    , Adapter = require("../lib")
    ;

tester.describe("run all the adapter functions", test => {
    var crud = new Adapter()
      , handler = c => {
            var name = c[0]
              , args = c[1]
              ;

            return cb => {
                args.push(err => {
                    test.expect(err).toBeAn(Error);
                    test.expect(err.code).toBe("METHOD_NOT_IMPLEMENTED");
                    test.expect(err.message).toBe(`Method ${name} not implement. Override the ${name} method in your adapter to implement this.`);
                    cb();
                });
                crud[name].apply(crud, args);
            };
        }
      , data = [
            ["exists", ["layout"]]
          , ["list", []]
          , ["readAll", []]
          , ["create", ["layout", { module: "foo" }]]
          , ["read", ["layout"]]
          , ["read", ["layout"]]
          , ["update", ["layout", { module: "foo" }]]
          , ["remove", ["layout"]]
          , ["rename", ["layout", "another_layout"]]
          , ["upsert", ["layout", { module: "foo" }]]
        ]
      ;

    data.forEach(c => {
        test.it(`${c[0]}: should send NOT_IMPLEMENTED_ERR in the response`, handler(c));
    });
});
