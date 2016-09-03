define(function(require, exports, module){

    var m2 = require('js/module2.js');

    function show(obj){
        alert(m2.a);
    }

    exports.show = show;
});
