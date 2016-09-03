define("main", [ "./drag", "./scale" ], function(require, exports, module) {
    var a = require("./drag");
    var b = require("./scale");
    var oInput = document.getElementById("input1");
    var oDiv1 = document.getElementById("div1");
    var oDiv2 = document.getElementById("div2");
    var oDiv3 = document.getElementById("div3");
    a.drag(oDiv3);
    b.scale(oDiv1, oDiv2);
    oInput.onclick = function() {
        oDiv1.style.display = "block";
    };
    function show() {
        alert(1);
    }
    exports.show = show;
});

define("drag", [], function(require, exports, module) {
    function drag(obj) {
        var disX = 0;
        var disY = 0;
        obj.onmousedown = function(ev) {
            var ev = ev || window.event;
            disX = ev.clientX - obj.offsetLeft;
            disY = ev.clientY - obj.offsetTop;
            document.onmousemove = function(ev) {
                var ev = ev || window.event;
                obj.style.left = ev.clientX - disX + "px";
                obj.style.top = ev.clientY - disY + "px";
            };
            document.onmouseup = function() {
                document.onmousemove = null;
                document.onmouseup = null;
            };
            return false;
        };
    }
    exports.drag = drag;
});

define("scale", [], function(require, exports, module) {
    function scale(obj1, obj2) {
        var downX = 0;
        var downY = 0;
        var downW = 0;
        var downH = 0;
        obj2.onmousedown = function(e) {
            var e = e || window.event;
            downX = e.clientX;
            downY = e.clientY;
            downW = obj1.offsetWidth;
            downH = obj1.offsetHeight;
            document.onmousemove = function(e) {
                var e = e || window.event;
                obj1.style.width = e.clientX - downX + downW + "px";
                obj1.style.height = e.clientY - downY + downH + "px";
            };
            document.onmouseup = function() {
                document.onmousemove = null;
                document.onmouseup = null;
            };
            return false;
        };
    }
    exports.scale = scale;
});
