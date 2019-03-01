import { createHash } from 'crypto';
import {int2bytes} from "./util";

// @ts-ignore
export function trxHash(cid, buf) {
    const hash = createHash('sha256');
    const cidBuf = int2bytes(cid);
    // @ts-ignore
    hash.update(cidBuf);
    hash.update(buf);
    return hash.digest();
}
