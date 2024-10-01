const Err = require("err");

module.exports = {
    /**
     * INSTANCE_EXISTS_ALREADY
     *
     * @name INSTANCE_EXISTS_ALREADY
     * @function
     * @param {String} name The instance name.
     * @return {Error} The error object.
     */
    INSTANCE_EXISTS_ALREADY: function (name) {
        return new Err(`The ${name} instance exists already.`, {
            code: "INSTANCE_EXISTS_ALREADY"
          , instance_name: name
        });
    }

    /**
     * INSTANCE_DOES_NOT_EXIST
     *
     * @name INSTANCE_DOES_NOT_EXIST
     * @function
     * @param {String} name The instance name.
     * @return {Error} The error object.
     */
  , INSTANCE_DOES_NOT_EXIST: function (name) {
        return new Err(`The ${name} instance does not exist.`, {
            code: "INSTANCE_DOES_NOT_EXIST"
          , instance_name: name
        });
    }
};
