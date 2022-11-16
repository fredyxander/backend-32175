"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Color = function () {
    function Color() {
        _classCallCheck(this, Color);
    }

    _createClass(Color, [{
        key: "getRandom",
        value: function getRandom() {
            return parseInt(Math.random() * 256);
        }
    }, {
        key: "getRandomColor",
        value: function getRandomColor() {
            var red = this.getRandom();
            var green = this.getRandom();
            var blue = this.getRandom();
            console.log("rgb(" + red + ", " + green + ", " + blue + ")");
        }
    }]);

    return Color;
}();

var colorRandom = new Color();
colorRandom.getRandomColor();
