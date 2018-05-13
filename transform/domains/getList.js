"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const support_1 = require("../../support");
function default_1(CommandResponse) {
    return {
        domains: support_1.fixArray(CommandResponse.DomainGetListResult.Domain).map(support_1.objectKeysToLowerCase)
    };
}
exports.default = default_1;
