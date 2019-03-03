import {bytes2uint64} from "../crypto/util";


export class block_id{
    public data: Uint8Array;
    // constructor(data: Uint8Array){
    //     this.data = data
    // }
    public setData(data:Uint8Array){
        this.data = data
    }

    public setDataSlice(data:Uint8Array, start:number) {
        this.data.set(data, start);
    }

    public getData() {
        return this.data
    }

    // about to write an unit test
    // and overflow case?
    public blockNum() {
        let buffer = new ArrayBuffer(8);
        let uint8buffer = new Uint8Array(buffer);
        uint8buffer.set(this.data.slice(0, 8));
        return bytes2uint64(uint8buffer);
    }
}
