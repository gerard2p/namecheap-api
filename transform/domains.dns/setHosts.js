"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const support_1 = require("../../support");
const hostrecord_1 = require("../../support/hostrecord");
function args(domain, rawhosts) {
    let d = domain.split('.');
    return Object.assign({}, { SLD: d.shift(), TLD: d.join('.') }, hostrecord_1.default(rawhosts));
}
exports.args = args;
function default_1(CommandResponse) {
    return {
        domain: support_1.objectKeysToLowerCase(CommandResponse.DomainDNSSetHostsResult)
    };
}
exports.default = default_1;
