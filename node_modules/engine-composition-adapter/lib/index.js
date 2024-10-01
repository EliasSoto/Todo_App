"use strict";

// Dependencies
const Err = require("err");

// Constants
const NOT_IMPLEMENTED_ERR = function (method) {
    return new Err(`Method ${method} not implement. Override the ${method} method in your adapter to implement this.`, "METHOD_NOT_IMPLEMENTED");
};

class CompositionAdapter {
    /**
     * exists
     * Checks if an instance exists.
     *
     * @name exists
     * @function
     * @param {String} name The instance name.
     * @param {Function} cb The callback function.
     */
    exists (name, cb) {
        cb(NOT_IMPLEMENTED_ERR("exists"));
    }

    /**
     * list
     * List the instances.
     *
     * @name list
     * @function
     * @param {Function} cb The callback function.
     */
    list (cb) {
        cb(NOT_IMPLEMENTED_ERR("list"));
    }

    /**
     * readAll
     * Read all the instances.
     *
     * @name readAll
     * @function
     * @param {Function} cb The callback function.
     */
    readAll (cb) {
        cb(NOT_IMPLEMENTED_ERR("readAll"));
    }

    /**
     * create
     * Creates a new instance.
     *
     * @name create
     * @function
     * @param {String} name The instance name.
     * @param {Object} data The instance content.
     * @param {Function} cb The callback function.
     */
    create (name, data, cb) {
        cb(NOT_IMPLEMENTED_ERR("create"));
    }

    /**
     * read
     * Reads the instance content.
     *
     * @name read
     * @function
     * @param {String} name The instance name.
     * @param {Function} cb The callback function.
     */
    read (name, cb) {
        cb(NOT_IMPLEMENTED_ERR("read"));
    }

    /**
     * update
     * Updates the instance content.
     *
     * @name update
     * @function
     * @param {String} name The instance name.
     * @param {Object} data The instance content.
     * @param {Function} cb The callback function.
     */
    update (name, data, cb) {
        cb(NOT_IMPLEMENTED_ERR("update"));
    }

    /**
     * remove
     * Removes the instance.
     *
     * @name remove
     * @function
     * @param {String} name The instance name.
     * @param {Function} cb The callback function.
     */
    remove (name, cb) {
        cb(NOT_IMPLEMENTED_ERR("remove"));
    }

    /**
     * rename
     * Renames the instance.
     *
     * @name remove
     * @function
     * @param {String} oldName The old instance name.
     * @param {String} newName The new instance name.
     * @param {Function} cb The callback function.
     */
    rename (oldName, newName, cb) {
        cb(NOT_IMPLEMENTED_ERR("rename"));
    }

    /**
     * upsert
     * Creates or updates the specified instance.
     *
     * @name upsert
     * @function
     * @param {String} name The instance name.
     * @param {Object} data The instance content.
     * @param {Function} cb The callback function.
     */
    upsert (name, data, cb) {
        cb(NOT_IMPLEMENTED_ERR("upsert"));
    }

    /**
     * readFile
     * Reads a file from app folder.
     *
     * @name readFile
     * @function
     * @param {String} path The file path (relative to the app directory).
     * @param {Function} cb The callback function.
     */
    readFile (path, cb) {
        cb(NOT_IMPLEMENTED_ERR("readFile"));
    }

    /**
     * readFile
     * Writes a file from app folder.
     *
     * @name readFile
     * @function
     * @param {String} name The file path (relative to the app directory).
     * @param {String} content The content to write in the file.
     * @param {Function} cb The callback function.
     */
    writeFile (path, content, cb) {
        cb(NOT_IMPLEMENTED_ERR("writeFile"));
    }
}

module.exports = CompositionAdapter;
