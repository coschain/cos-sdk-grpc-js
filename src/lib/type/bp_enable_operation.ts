import {bp_enable_operation} from "../../prototype/operation_pb";


// @ts-ignore
bp_enable_operation.prototype.getSigner = function (auth:{ [key:string]: boolean}) {
    let bp = this.getOwner();
    auth[bp] = true
};

export {bp_enable_operation}

