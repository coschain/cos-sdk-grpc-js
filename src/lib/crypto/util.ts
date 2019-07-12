
// @ts-ignore
import {Buffer} from "buffer";
import {arith} from "google-protobuf";


// @ts-ignore
export function int2bytes(int) {
    let buffer = new ArrayBuffer(4);
    let byteArray = new Uint8Array(buffer);

    for ( let index = 0; index < byteArray.length; index ++ ) {
        let byte = int & 0xff;
        byteArray [ index ] = byte;
        int = (int - byte) / 256 ;
    }
    byteArray.reverse();
    return byteArray;
}

// @ts-ignore
export function uint642bytes(uint64) {
    let buffer = new ArrayBuffer(8);
    let uint8Array = new Uint8Array(buffer);
    for (let index = 0; index < 8; index ++) {
        let byte = uint64 & 0xff;
        uint8Array[index] = byte;
        uint64 = (uint64 - byte) >> 8;
    }
    return uint8Array;
}

export function bytes2uint64(byteArray:Uint8Array) {
    let value = 0;
    for ( let i = byteArray.length - 1; i >= 0; i--) {
        value = (value << 8 ) + byteArray[i];
    }

    return value;
}
