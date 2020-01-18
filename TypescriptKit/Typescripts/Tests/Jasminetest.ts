/// <reference path="../../scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="../../scripts/typings/requirejs/require.d.ts" />



import validate = require('../Sourcescripts/Validate');




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

