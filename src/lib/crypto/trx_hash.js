"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const util_1 = require("./util");
function trxHash(cid, buf) {
    const hash = crypto_1.createHash('sha256');
    const cidBuf = util_1.int2bytes(cid);
    hash.update(cidBuf);
    hash.update(buf);
    return hash.digest();
}
exports.trxHash = trxHash;
//# sourceMappingURL=trx_hash.js.map