import {signed_block_header}  from "../../prototype/transaction_pb"
import {block_id} from "./block_id";

// @ts-ignore
signed_block_header.prototype.number= function () {
    let prev = new block_id();
    let hash = this.getHeader().getPrevious().getHash().slice(0, 32);
    prev.setData(hash);
    return prev.blockNum() + 1;
};

export {signed_block_header}
