import {bp_register_operation} from "../../prototype/operation_pb";


// @ts-ignore
bp_register_operation.prototype.getSigner = function (auth:{ [key:string]: boolean}) {
    let bp = this.getOwner();
    auth[bp] = true
};

