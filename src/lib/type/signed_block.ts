import {signed_block} from "../../prototype/transaction_pb";
import {block_id} from "./block_id";
import {createHash} from "crypto";
import {uint642bytes} from "../crypto/util";

// @ts-ignore
signed_block.prototype.id = function () {
    let ret = new block_id();
    let prev = new block_id();
    if(this.hasSignedHeader() && this.getSignedHeader().hasHeader() && this.getSignedHeader().getHeader().hasPrevious()
    && this.getSignedHeader().getHeader().getPrevious().getHash().length >0 ){
        let prev_data = this.getSignedHeader().getHeader().getPrevious().getHash().slice(0, 32);
        prev.setData(prev_data)
    }
    let proto = this.getSignedHeader().serializeBinary();
    const hash = createHash('sha256');
    hash.update(proto);
    let data = hash.digest();
    let block_num = prev.blockNum() + 1;
    let uint64data = uint642bytes(block_num);
    ret.setData(uint64data);
    return ret;
};

export {signed_block}
