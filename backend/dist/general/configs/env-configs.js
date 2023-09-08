"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envConfig = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.envConfig = {
    port: Number(process.env.PORT),
    databse_url: process.env.MONGO_URL,
};
//# sourceMappingURL=env-configs.js.map