import {account_create_operation} from "../../prototype/operation_pb";


// @ts-ignore
account_create_operation.prototype.getSigner = function (auth:{ [key:string]: boolean}) {
    let  creator = this.getCreator().getValue();
    auth[creator] = true
};

export {account_create_operation}
