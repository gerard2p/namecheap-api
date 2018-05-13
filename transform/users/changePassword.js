"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const support_1 = require("../../support");
function default_1(CommandResponse) {
    return {
        password: support_1.objectKeysToLowerCase(CommandResponse.UserChangePasswordResult)
    };
}
exports.default = default_1;
