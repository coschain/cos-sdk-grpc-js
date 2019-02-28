import {signed_transaction}  from "../../prototype/transaction_pb"
import {trxHash} from "../crypto/trx_hash";
import {PrivKey} from "../crypto/crypto";


// @ts-ignore
signed_transaction.prototype.sign = function(priv: PrivKey){
    const trx = this.getTrx();
    if (trx) {
        const trxBuf = trx.serializeBinary();
        const buf = trxHash(0, trxBuf);
        const s = priv.sign(buf);
        let signature = new Uint8Array(65);
        signature.set(s.signature, 0);
        let recovery = new Uint8Array(s.recovery);
        signature.set(recovery, s.signature.length);
        return signature;
    } else {
        return ''
    }
};

export {signed_transaction};
