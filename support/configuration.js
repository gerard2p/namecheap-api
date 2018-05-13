"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
let file = process.env.NODE_ENV === 'production' ? '.namecheap.json' : '.namecheap.dev.json';
let configuration = require(path_1.join(process.cwd(), file));
configuration.Host = process.env.NODE_ENV === 'production' ? 'api.namecheap.com' : 'api.sandbox.namecheap.com';
delete configuration.env;
exports.default = configuration;
