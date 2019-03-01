import {internal_contract_apply_operation} from "../../prototype/operation_pb";


// @ts-ignore
internal_contract_apply_operation.prototype.getSigner = function (auth:{ [key:string]: boolean}) {
    let caller = this.getFromCaller().getValue();
    auth[caller] = true
};

export {internal_contract_apply_operation}

