import {sha256}  from "../../prototype/type_pb"

// @ts-ignore
// blockId should have data field and getData accessor and the value type should be Uint8Array
sha256.prototype.fromBlockId = function (blockId) {
    let data:Uint8Array = blockId.getData();
    this.setHash(data);
};

export {sha256}
