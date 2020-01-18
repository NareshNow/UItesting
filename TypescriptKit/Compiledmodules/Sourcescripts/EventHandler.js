define(["require", "exports", "jquery", "../Sourcescripts/UpdateStatus"], function (require, exports, $, upd) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function Main() {
        $('#submit').on('click', function () {
            upd.UpdateStatus.prototype.update();
        });
    }
    exports.Main = Main;
});
//# sourceMappingURL=EventHandler.js.map