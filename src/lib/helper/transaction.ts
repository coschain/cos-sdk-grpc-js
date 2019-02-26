import {operation as Operation, transaction as Transaction} from "../../../prototype/transaction_pb";
import {PrivKey} from "../crypto/crypto";
import {trxHash} from "../crypto/trx_hash";
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
} from "../../../prototype/operation_pb";

export class transaction extends Transaction {
    addOperation = (op: any) => {
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
}
