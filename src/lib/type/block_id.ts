

export class block_id{
    public data: Uint8Array;
    // constructor(data: Uint8Array){
    //     this.data = data
    // }
    public setData(data:Uint8Array){
        this.data = data
    }
    public getData() {
        return this.data
    }

    // about to write an unit test
    // and overflow case?
    public blockNum() {
        let buffer = new Uint8Array(this.data.slice(0, 8));
        let dataview = new DataView(buffer);
        let lo = dataview.getUint32(0, true);
        let hi = dataview.getUint32(4, true);
        return hi << 32 + lo
    }
}
