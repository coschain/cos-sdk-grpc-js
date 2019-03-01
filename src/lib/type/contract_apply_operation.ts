import {contract_apply_operation} from "../../prototype/operation_pb";


// @ts-ignore
contract_apply_operation.prototype.getSigner = function (auth:{ [key:string]: boolean}) {
    let caller = this.getCaller().getValue();
    auth[caller] = true
};

export {contract_apply_operation}

