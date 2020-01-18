define(["require", "exports", "jquery", "../Sourcescripts/UpdateStatus"], function (require, exports, $, upd) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe("Update status of validation", () => {
        jasmine.getFixtures().fixturesPath = 'Views/Home';
        loadFixtures('Index.cshtml');
        it("Should say Valid mobile number for input 9566207313", () => {
            $('#mobnum').val("9566207313").change();
            upd.UpdateStatus.prototype.update();
            expect($('#message').html()).toBe("Valid mobile number");
        });
    });
});
//# sourceMappingURL=Updatestatustest.js.map