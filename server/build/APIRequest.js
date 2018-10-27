"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var https = require("https");
var APIRequest = /** @class */ (function () {
    function APIRequest() {
    }
    APIRequest.request = function (method, hostname, path, port) {
        if (port === void 0) { port = 443; }
        return new Promise(function (resolve, reject) {
            var options = {
                port: port,
                path: path,
                hostname: hostname,
                method: method
            };
            var req = https.request(options, function (res) {
                var data = "";
                res.on("data", function (chunk) { return data += chunk; });
                res.on("end", function () { return resolve(JSON.parse(data)); });
            });
            req.on("error", function (err) { return reject(err); });
        });
    };
    APIRequest.get = function (hostname, path) {
        return APIRequest.request("GET", hostname, path);
    };
    APIRequest.PORTS = {
        "http": 80, "https": 443
    };
    return APIRequest;
}());
exports.APIRequest = APIRequest;
