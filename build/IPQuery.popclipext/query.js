"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.action = void 0;
const axios_1 = require("axios");
const action = async (input) => {
    let ipAddress = input.text.trim();
    let url = `https://www.ip.cn/api/index?ip=${ipAddress}&type=1`;
    try {
        let response = await axios_1.default.get(url);
        popclip.showText(response.data.address);
    }
    catch (e) {
        popclip.showText(e.message);
    }
};
exports.action = action;
