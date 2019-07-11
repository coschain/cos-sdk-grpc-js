import {signed_transaction} from "../../prototype/transaction_pb"
import {chain_id} from "../../prototype/type_pb";
import {PrivKey} from "../crypto/crypto";
import {createHash} from "crypto";
import {int2bytes} from "../crypto/util";
import {sha256} from "./sha256";


// @ts-ignore
signed_transaction.prototype.sign = function(priv: PrivKey, cid: chain_id){
    let buf = this.getTrxHash(cid);
    const s = priv.sign(buf);
    let signature = new Uint8Array(65);
    signature.set(s.signature, 0);
    let recovery = new Uint8Array([s.recovery]);
    signature.set(recovery, s.signature.length);
    return signature;
};


// @ts-ignore
signed_transaction.prototype.getTrxHash = function(cid: chain_id) {
    const trx = this.getTrx();
    const trxBuf = trx.serializeBinary();
    const hash = createHash('sha256');
    const cidBuf = int2bytes(cid.getValue());
    // @ts-ignore
    hash.update(cidBuf);
    hash.update(trxBuf);
    return hash.digest();
};

// @ts-ignore
signed_transaction.prototype.id = function () {
    const trxBuf = this.serializeBinary();
    const hash = createHash('sha256');
    hash.update(trxBuf);
    const r = hash.digest();
    const s = new sha256();
    s.setHash(r);
    return s;
};

export {signed_transaction};
