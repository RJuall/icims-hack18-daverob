"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var twitter_api_ts_1 = require("twitter-api-ts");
var TwitterRoute = /** @class */ (function () {
    function TwitterRoute() {
    }
    TwitterRoute.get = function (req, res) {
        twitter_api_ts_1.fetchFromTwitter();
    };
    return TwitterRoute;
}());
exports.TwitterRoute = TwitterRoute;
