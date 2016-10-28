/**
 * @module //modul1
 */
var Montage = require("montage/core/core").Montage;
/**
 * @class Modul1
 * @extends Montage
 */
exports.Modul1 = Montage.specialize(/** @lends Modul1# */ {
    constructor: {
        value: function Modul1() {
            this.super();
        }
    }
});
