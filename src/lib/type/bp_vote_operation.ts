import {bp_vote_operation} from "../../prototype/operation_pb";


// @ts-ignore
bp_vote_operation.prototype.getSigner = function (auth:{ [key:string]: boolean}) {
    let voter = this.getVoter();
    auth[voter] = true
};

export {bp_vote_operation}
