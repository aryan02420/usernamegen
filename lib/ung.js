(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./words", "seedrandom"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var words_1 = require("./words");
    var seedrandom = require("seedrandom");
    function clamp(value, min, max) {
        return Math.min(Math.max(min, Number(value)), max);
        ;
    }
    ;
    function map(value, fromMin, fromMax, toMin, toMax, clamping) {
        if (clamping === void 0) { clamping = false; }
        if (clamping)
            value = clamp(value, fromMin, fromMax);
        return (value - fromMin) * (toMax - toMin) / (fromMax - fromMin) + toMin;
    }
    ;
    var Username = /** @class */ (function () {
        function Username(p, fn, seq) {
            var _this = this;
            this.toString = function (format) {
                if (format === void 0) { format = _this.parent.formattor; }
                return format.apply(void 0, _this.fullName);
            };
            this.parent = p;
            this.fullName = fn;
            this.sequence = seq;
        }
        ;
        return Username;
    }());
    ;
    var UNG = /** @class */ (function () {
        function UNG() {
            var _this = this;
            this.rng = seedrandom;
            this.words = words_1["default"];
            this.formattor = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return args.join('');
            };
            this.generateUsername = function (seed) {
                if (seed === void 0) { seed = undefined; }
                var rng = _this.rng(seed);
                var adjectiveIndex = Math.floor(map(rng(), 0, 1, 0, _this.words.adjectives.length, true));
                var nounIndex = Math.floor(map(rng(), 0, 1, 0, _this.words.nouns.length, true));
                var numDigits = Math.floor(map(rng(), 0, 1, 1, 6));
                var firstName = _this.words.adjectives.list[adjectiveIndex];
                var lastName = _this.words.nouns.list[nounIndex];
                var num = "";
                for (var i = 0; i < numDigits; i++) {
                    var digit = Math.floor(map(rng(), 0, 1, 0, 10));
                    num += digit.toString();
                }
                return new Username(_this, [firstName, lastName, num], rng);
            };
        }
        ;
        return UNG;
    }());
    exports["default"] = UNG;
});
