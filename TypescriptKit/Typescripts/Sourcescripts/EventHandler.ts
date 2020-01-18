import $ = require('jquery');
import upd = require('../Sourcescripts/UpdateStatus');
export function Main() {
    
    $('#submit').on('click', function () {
        upd.UpdateStatus.prototype.update();
    });
    }

