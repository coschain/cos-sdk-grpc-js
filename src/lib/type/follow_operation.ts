import {follow_operation} from "../../prototype/operation_pb";


// @ts-ignore
follow_operation.prototype.getSigner = function (auth:{ [key:string]: boolean}) {
    let account = this.getAccount().getValue();
    auth[account] = true
};

