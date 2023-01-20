"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = parseInt(process.argv[2]) || 8080;

app.get("/", function (req, res) {
    for (var i = 0; i < 1e8; i++) {}
    res.send("respuesta desde el proceso " + process.pid);
});

app.listen(PORT, function () {
    return console.log("Server listening on port " + PORT + " on process " + process.pid);
});
