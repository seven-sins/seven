define(function(require, exports, module){

    var a = require('./drag');
    var b = require('./scale');

    var oInput = document.getElementById('input1');
    var oDiv1 = document.getElementById('div1');
    var oDiv2 = document.getElementById('div2');
    var oDiv3 = document.getElementById('div3');

    a.drag(oDiv3);

    b.scale(oDiv1, oDiv2);

    oInput.onclick = function(){
        oDiv1.style.display = 'block';

    };

    function show(){
        alert(1);
    }

    exports.show = show;
});