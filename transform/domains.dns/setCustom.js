"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function args(domain, customname) {
    let d = domain.split('.');
    return Object.assign({}, { SLD: d.shift(), TLD: d.join('.') }, { Nameservers: customname });
}
exports.args = args;
function default_1(CommandResponse) {
    return CommandResponse.DomainDNSSetCustomResult;
}
exports.default = default_1;
