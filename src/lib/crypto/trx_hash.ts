import { createHash } from 'crypto';
import {Buffer} from "buffer";

// @ts-ignore
function int2bytes(int) {
    const byteArray = [0, 0, 0, 0];

    for ( let index = 0; index < byteArray.length; index ++ ) {
        let byte = int & 0xff;
        byteArray [ index ] = byte;
        int = (int - byte) / 256 ;
    }
    return Buffer.from(byteArray);
}

// @ts-ignore
export function trxHash(cid, buf) {
    const hash = createHash('sha256');
    const cidBuf = int2bytes(cid);
    // @ts-ignore
    hash.update(cidBuf);
    hash.update(buf);
    return hash.digest();
}
