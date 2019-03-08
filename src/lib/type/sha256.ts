import {sha256}  from "../../prototype/type_pb"

// @ts-ignore
// blockId should have data field and getData accessor and the value type should be Uint8Array
sha256.prototype.fromBlockId = function (blockId) {
    let data:Uint8Array = blockId.getData();
    this.setHash(data);
};

// @ts-ignore
sha256.prototype.getHexHash = function () {
    let data = this.getHash();
    return Buffer.from(data).toString('hex')
};

// @ts-ignore
sha256.prototype.setHexHash = function (hex : string) {
    let data = Buffer.from(hex, 'hex');
    this.setHash(data);
};

export {sha256}
