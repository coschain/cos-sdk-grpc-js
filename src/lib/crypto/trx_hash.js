const { createHash } = require('crypto');

function int2bytes(int) {
    const byteArray = [0, 0, 0, 0];

    for ( let index = 0; index < byteArray.length; index ++ ) {
        let byte = int & 0xff;
        byteArray [ index ] = byte;
        int = (int - byte) / 256 ;
    }
    return byteArray;
}

export function trxHash(cid, buf) {
    const hash = createHash('sha256');
    const cidBuf = int2bytes(cid);
    hash.update(cidBuf);
    hash.update(buf);
    return hash.digest();
}
