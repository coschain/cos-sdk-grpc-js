import { signed_transaction as signedTransaction } from "../../prototype/transaction_pb";
import { PrivKey } from "../crypto/crypto";
export declare class signed_transaction extends signedTransaction {
    sign: (priv: PrivKey) => Uint8Array | "";
}
