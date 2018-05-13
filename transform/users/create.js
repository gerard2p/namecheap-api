"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const support_1 = require("../../support");
function default_1(CommandResponse) {
    return {
        user: support_1.objectKeysToLowerCase(CommandResponse.UserCreateResult)
    };
}
exports.default = default_1;
