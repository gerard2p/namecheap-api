"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const support_1 = require("./support");
const configuration_1 = require("./support/configuration");
const axios_1 = require("axios");
const namecheap = axios_1.default.create({
    responseType: 'text',
    proxy: configuration_1.default.Proxy,
    method: 'get'
});
// import data from './transform';
// console.log(Object.keys(data));
let defaultProfile = {
    OrganizationName: 'Bitsun',
    JobTitle: 'CEO',
    FirstName: 'Gerardo',
    LastName: 'Perez Perez',
    Address1: 'Rey Felipe II 701',
    Address2: 'Los Reyes',
    City: 'Irapuato',
    StateProvince: 'Guanajuato',
    // StateProvinceChoice	String	50	No	StateProvinceChoice of the  user
    PostalCode: '36570',
    Country: 'MX',
    Phone: '52.4621484140',
    PhoneExt: undefined,
    Fax: undefined,
    EmailAddress: 'gerard2perez@bitsun.com.mx'
};
const NAMECHEAP_API = {
    users: ['getPricing', 'getBalances', 'changePassword', 'update', 'createaddfundsrequest', 'getAddFundsStatus', 'create', 'login', 'resetPassword'],
    domains: ['getList', 'getContacts', 'create', 'getTldList', 'setContacts', 'check', 'reactivate', 'renew', 'getRegistrarLock', 'setRegistrarLock', 'getInfo'],
    'domains.dns': ['setHosts', 'getHosts', 'setCustom'],
    'users.address': ['getList', 'getInfo']
};
async function ManageApiRequest(namespace, command, ...args) {
    let query = args[0];
    let argtransform;
    try {
        argtransform = require(`./transform/${namespace}/${command}`).args;
    }
    catch (ex) {
    }
    if (argtransform) {
        query = argtransform(...args);
    }
    let url = support_1.urlFormater(namespace, command, query);
    let { ApiResponse: { Status, Errors, Warnings, CommandResponse } } = support_1.toJSON((await namecheap.get(url)).data);
    if (Status === 'OK') {
        console.log(CommandResponse);
        try {
            // return Object.assign({}, {success: true}, CommandResponse);
            let transform = require(`./transform/${namespace}/${command}`).default;
            return Object.assign({}, { success: true }, transform(CommandResponse));
        }
        catch (e) {
            return CommandResponse;
        }
    }
    else {
        return {
            success: false,
            errors: support_1.ERROR(Errors),
            warnings: support_1.ERROR(Warnings)
        };
    }
}
//@ts-ignore
let API = {};
for (const namespace in NAMECHEAP_API) {
    let area = {};
    if (namespace.indexOf('.') > -1) {
        let [TLD, SLD] = namespace.split('.');
        API[TLD] = API[TLD] || {};
        API[TLD][SLD] = API[TLD][SLD] || {};
        area = API[TLD][SLD];
    }
    else {
        API[namespace] = API[namespace] || {};
        area = API[namespace];
    }
    for (const command of NAMECHEAP_API[namespace]) {
        area[command] = ManageApiRequest.bind(null, namespace, command);
    }
}
function profile(id, profile = {}) {
    let final = {};
    for (const key in defaultProfile) {
        final[`${id}${key}`] = profile[key] ? profile[key] : defaultProfile[key];
    }
    // let final = Object.assign({}, defaultProfile, profile);
    // let object = {};
    // for(const key in final) {
    // 	object[`${id}${key}`] = final[key];
    // }
    console.log(JSON.stringify(final, null, 2));
    return final;
}
exports.profile = profile;
;
exports.default = API;
