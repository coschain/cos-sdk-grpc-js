import {claim_operation} from "../../prototype/operation_pb";


// @ts-ignore
claim_operation.prototype.getSigner = function (auth:{ [key:string]: boolean}) {
    let account = this.getAccount().getValue();
    auth[account] = true
};

export {claim_operation}

