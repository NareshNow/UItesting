import $ = require('jquery');
 export class Validate
{
    mobnumvalidate(): boolean {

        var number = $('#mobnum').val();
        
        if (number.match(/^(\+\d{1,3}[- ]?)?\d{10}$/) && !(number.match(/0{5,}/))) {
            return true;
        }
        else {
            return false;
        }
    }
}
