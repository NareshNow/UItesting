define(["require", "exports", "jquery"], function (require, exports, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Validate {
        mobnumvalidate() {
            var number = $('#mobnum').val();
            if (number.match(/^(\+\d{1,3}[- ]?)?\d{10}$/) && !(number.match(/0{5,}/))) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    exports.Validate = Validate;
});
//# sourceMappingURL=validate.js.map