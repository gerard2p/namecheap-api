"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser = require("xml2json");
const configuration_1 = require("./configuration");
let { ApiUser, UserName, ApiKey, Host } = configuration_1.default;
function objectKeysToLowerCase(origObj) {
    return Object.keys(origObj).reduce(function (newObj, key) {
        let val = origObj[key];
        let newVal = (typeof val === 'object') ? objectKeysToLowerCase(val) : val;
        newObj[key.toLowerCase()] = newVal;
        return newObj;
    }, {});
}
exports.objectKeysToLowerCase = objectKeysToLowerCase;
function fixArray(data = []) {
    if (data instanceof Array) {
        return data;
    }
    return [data];
}
exports.fixArray = fixArray;
/**
 * Gets the url which is used to make the request to namecheap api.
 */
function urlFormater(namespace, command, query = {}) {
    let username = query.UserName ? query.UserName : UserName;
    if (query.UserName) {
        delete query.UserName;
    }
    let url = `https://${Host}/xml.response?ApiUser=${ApiUser}&UserName=${username}&ApiKey=${ApiKey}&Command=namecheap.${namespace}.${command}&ClientIp=127.0.0.1`;
    for (const key in query) {
        if (query[key]) {
            url += `&${key}=${query[key]}`;
        }
    }
    return url;
}
exports.urlFormater = urlFormater;
function toJSON(xml) {
    // console.log(xml);
    return parser.toJson(xml, {
        object: true,
        // reversible: false,
        // coerce: true,
        sanitize: true,
        trim: true,
        arrayNotation: false
        // alternateTextNode: false
    });
}
exports.toJSON = toJSON;
function ERROR({ Error }) {
    if (Error) {
        return `${Error.Number}: ${Error.$t}`;
    }
}
exports.ERROR = ERROR;
