import {vote_operation} from "../../prototype/operation_pb";


// @ts-ignore
vote_operation.prototype.getSigner = function (auth:{ [key:string]: boolean}) {
    let voter = this.getVoter().getValue();
    auth[voter] = true
};

export {vote_operation}

