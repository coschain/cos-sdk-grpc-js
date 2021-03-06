import {transfer_to_vest_operation} from "../../prototype/operation_pb";


// @ts-ignore
transfer_to_vest_operation.prototype.getSigner = function (auth:{ [key:string]: boolean}) {
    let sender = this.getFrom().getValue();
    auth[sender] = true
};

export {transfer_to_vest_operation}
