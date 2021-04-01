(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./ung"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var ung_1 = require("./ung");
    module.exports = ung_1["default"];
});
