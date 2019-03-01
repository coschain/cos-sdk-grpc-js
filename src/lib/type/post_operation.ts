import {post_operation} from "../../prototype/operation_pb";


// @ts-ignore
post_operation.prototype.getSigner = function (auth:{ [key:string]: boolean}) {
    let owner = this.getOwner().getValue();
    auth[owner] = true
};

export {post_operation}

