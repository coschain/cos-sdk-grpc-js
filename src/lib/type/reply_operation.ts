import {reply_operation} from "../../prototype/operation_pb";


// @ts-ignore
reply_operation.prototype.getSigner = function (auth:{ [key:string]: boolean}) {
    let owner = this.getOwner().getValue();
    auth[owner] = true
};

export {reply_operation}

