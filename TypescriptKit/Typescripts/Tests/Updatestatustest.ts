/// <reference path="../../scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="../../scripts/typings/jasmine-jquery/jasmine-jquery.d.ts" />
/// <reference path="../../scripts/typings/requirejs/require.d.ts" />

import $ = require('jquery');
import upd = require('../Sourcescripts/UpdateStatus');

describe("Update status of validation", () => {
    jasmine.getFixtures().fixturesPath = 'Views/Home';
    loadFixtures('Index.cshtml');

    it("Should say Valid mobile number for input 9566207313", () => {
        $('#mobnum').val("9566207313").change();
        upd.UpdateStatus.prototype.update();
        expect($('#message').html()).toBe("Valid mobile number");
    });
});