define(["require", "exports", "../Sourcescripts/Validate"], function (require, exports, validate) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Validate mobile number', () => {
        beforeEach(function () {
        });
        it("should return true for valid mobile number", () => {
            $('#mobnum').val('9566207313').change();
            var bool = validate.Validate.prototype.mobnumvalidate();
            expect(bool).toBe(true);
        });
        it("should return false for valid mobile number", () => {
            $('#mobnum').val('9566207').change();
            var bool = validate.Validate.prototype.mobnumvalidate();
            expect(bool).toBe(false);
        });
        it("should return false for valid mobile number", () => {
            $('#mobnum').val('123@456789').change();
            var bool = validate.Validate.prototype.mobnumvalidate();
            expect(bool).toBe(false);
        });
    });
});
//# sourceMappingURL=Jasminetest.js.map