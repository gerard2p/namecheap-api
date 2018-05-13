"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const support_1 = require("../../support");
function args(domain) {
    let d = domain.split('.');
    return { SLD: d.shift(), TLD: d.join('.') };
}
exports.args = args;
function default_1(CommandResponse) {
    CommandResponse.DomainDNSGetHostsResult.Host = CommandResponse.DomainDNSGetHostsResult.Host || CommandResponse.DomainDNSGetHostsResult.host;
    return {
        emailtype: CommandResponse.DomainDNSGetHostsResult.EmailType,
        hosts: support_1.fixArray(CommandResponse.DomainDNSGetHostsResult.Host).map(support_1.objectKeysToLowerCase)
    };
}
exports.default = default_1;
