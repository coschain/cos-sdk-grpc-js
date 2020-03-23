import {delegate_vest_operation} from "../../prototype/operation_pb";


// @ts-ignore
delegate_vest_operation.prototype.getSigner = function (auth:{ [key:string]: boolean}) {
    let lender = this.getFrom().getValue();
    auth[lender] = true
};

export {delegate_vest_operation}
