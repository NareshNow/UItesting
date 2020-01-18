
/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="validate.ts" />
import validate = require('../Sourcescripts/Validate')
import $ = require('jquery');
export class UpdateStatus {
     update(): void {
       
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
