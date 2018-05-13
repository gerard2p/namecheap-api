"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs_1 = require("fs");
let APIUSER = process.env.NAMECHEAP_APIUSER || '';
let USERNAME = process.env.NAMECHEAP_USERNAME || '';
let KEY = process.env.NAMECHEAP_KEY || '';
let PROXY = JSON.parse(process.env.NAMECHEAP_PROXY || 'null') || undefined;
let HOST = process.env.NODE_ENV === 'production' ? 'api.namecheap.com' : 'api.sandbox.namecheap.com';
if (!APIUSER || !USERNAME || !KEY || !PROXY) {
    let file = process.env.NODE_ENV === 'production' ? '.namecheap.json' : '.namecheap.dev.json';
    if (fs_1.existsSync(file)) {
        let file_def = require(path_1.join(process.cwd(), file));
        APIUSER = APIUSER || file_def.ApiUser;
        USERNAME = USERNAME || file_def.UserName;
        KEY = KEY || file_def.ApiKey;
        PROXY = PROXY || file_def.Proxy;
    }
}
let configuration = {
    ApiUser: APIUSER,
    UserName: USERNAME,
    ApiKey: KEY,
    Host: HOST,
    Proxy: PROXY
};
exports.default = configuration;
