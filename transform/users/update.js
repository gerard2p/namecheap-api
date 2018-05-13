"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const support_1 = require("../../support");
function default_1(CommandResponse) {
    return {
        user: support_1.objectKeysToLowerCase(CommandResponse.UserUpdateResult)
    };
}
exports.default = default_1;
