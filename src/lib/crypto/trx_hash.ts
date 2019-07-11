import { createHash } from 'crypto';
import {int2bytes} from "./util";
import {chain_id} from "../../prototype/type_pb";

// @ts-ignore
export function trxHash(cid: chain_id, buf:Uint8Array) {
    const hash = createHash('sha256');
    const cidBuf = int2bytes(cid.getValue());
    // @ts-ignore
    hash.update(cidBuf);
    hash.update(buf);
    return hash.digest();
}
