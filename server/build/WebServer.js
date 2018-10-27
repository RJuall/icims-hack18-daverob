"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var express = require("express");
var WebServer = /** @class */ (function () {
    function WebServer() {
        this._app = express().use(express.static(__dirname + "/../../web/build"));
        this._httpServer = http.createServer(this._app);
        this.createRoutes();
        this.init();
    }
    WebServer.prototype.createRoutes = function () {
        this._app.get("", function (req, res) { return res.sendFile("index.html"); });
    };
    WebServer.prototype.init = function () {
        var port = parseInt(process.env.PORT) || 8080;
        this._httpServer.listen(port, function () {
            console.log("Http server listening on port " + port + ".");
        });
    };
    return WebServer;
}());
exports.WebServer = WebServer;
if (require.main === module) {
    new WebServer();
}
