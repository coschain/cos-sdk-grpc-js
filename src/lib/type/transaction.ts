import {operation as Operation, transaction } from "../../prototype/transaction_pb";
import {
    account_create_operation,
    bp_register_operation,
    bp_unregister_operation,
    bp_vote_operation,
    transfer_operation,
    post_operation,
    reply_operation,
    follow_operation,
    vote_operation,
    transfer_to_vesting_operation,
    claim_operation,
    claim_all_operation, contract_deploy_operation, contract_apply_operation
} from "../../prototype/operation_pb";

// @ts-ignore
transaction.prototype.addOperation = function(op: any){
    let operation = new Operation();
    if (op instanceof account_create_operation) {
        operation.setOp1(op)
    } else if (op instanceof transfer_operation) {
        operation.setOp2(op);
    } else if (op instanceof bp_register_operation) {
        operation.setOp3(op);
    } else if (op instanceof bp_unregister_operation) {
        operation.setOp4(op);
    } else if (op instanceof bp_vote_operation) {
        operation.setOp5(op);
    } else if (op instanceof post_operation) {
        operation.setOp6(op);
    } else if (op instanceof reply_operation) {
        operation.setOp7(op);
    } else if (op instanceof follow_operation) {
        operation.setOp8(op);
    } else if (op instanceof vote_operation) {
        operation.setOp9(op);
    } else if (op instanceof transfer_to_vesting_operation) {
        operation.setOp10(op);
    } else if (op instanceof claim_operation) {
        operation.setOp11(op);
    } else if (op instanceof claim_all_operation) {
        operation.setOp12(op);
    } else if (op instanceof contract_deploy_operation) {
        operation.setOp13(op);
    } else if (op instanceof contract_apply_operation) {
        operation.setOp14(op);
    }
    const operations = this.getOperationsList();
    operations.push(operation);
    this.setOperationsList(operations);
};

// @ts-ignore
const sender = function (op) {
    // @ts-ignore
    if (op.hasOp1()) return op.getOp1().getNewAccountName().getValue();
    // @ts-ignore
    if (op.hasOp2()) return op.getOp2().getFrom().getValue();
    // @ts-ignore
    if (op.hasOp3()) return op.getOp3().getOwner().getValue();
    // @ts-ignore
    if (op.hasOp4()) return op.getOp4().getOwner().getValue();
    // @ts-ignore
    if (op.hasOp5()) return op.getOp5().getVoter().getValue();
    // @ts-ignore
    if (op.hasOp6()) return op.getOp6().getOwner().getValue();
    // @ts-ignore
    if (op.hasOp7()) return op.getOp7().getOwner().getValue();
    // @ts-ignore
    if (op.hasOp8()) return op.getOp8().getAccount().getValue();
    // @ts-ignore
    if (op.hasOp9()) return op.getOp9().getVoter().getValue();
    // @ts-ignore
    if (op.hasOp10()) return op.getOp10().getFrom().getValue();
    // @ts-ignore
    if (op.hasOp11()) return op.getOp11().getAccount().getValue();
    // @ts-ignore
    if (op.hasOp12()) return op.getOp12().getAccount().getValue();
    // @ts-ignore
    if (op.hasOp13()) return op.getOp13().getOwner().getValue();
    // @ts-ignore
    if (op.hasOp14()) return op.getOp14().getCaller().getValue();
    return ''
};

// @ts-ignore
transaction.prototype.sender = function () {
    let ops = this.getOperationsList();
    if (ops.length > 0) {
        let op = ops[0];
        return sender(op);
    } else {
        return ''
    }
};


export {transaction};
