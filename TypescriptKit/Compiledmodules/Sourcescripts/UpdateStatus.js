define(["require", "exports", "../Sourcescripts/Validate", "jquery"], function (require, exports, validate, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class UpdateStatus {
        update() {
            if (validate.Validate.prototype.mobnumvalidate()) {
                $('#message').html("Valid mobile number");
                $('#mobnum').removeClass("invalid");
            }
            else {
                $('#message').empty();
                $('#mobnum').addClass("invalid");
            }
        }
    }
    exports.UpdateStatus = UpdateStatus;
});
//# sourceMappingURL=UpdateStatus.js.map