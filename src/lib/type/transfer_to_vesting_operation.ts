import {transfer_to_vesting_operation} from "../../prototype/operation_pb";


// @ts-ignore
transfer_to_vesting_operation.prototype.getSigner = function (auth:{ [key:string]: boolean}) {
    let sender = this.getFrom().getValue();
    auth[sender] = true
};
