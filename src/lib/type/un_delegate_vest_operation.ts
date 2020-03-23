import {un_delegate_vest_operation} from "../../prototype/operation_pb";


// @ts-ignore
un_delegate_vest_operation.prototype.getSigner = function (auth:{ [key:string]: boolean}) {
    let lender = this.getAccount().getValue();
    auth[lender] = true
};

export {un_delegate_vest_operation}
