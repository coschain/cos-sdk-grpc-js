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
    transfer_to_vest_operation,
    claim_operation,
    claim_all_operation, contract_deploy_operation, contract_apply_operation,
    convert_vest_operation,
    stake_operation, un_stake_operation,
    bp_update_operation,
    account_update_operation,
    acquire_ticket_operation,
    vote_by_ticket_operation
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
    } else if (op instanceof transfer_to_vest_operation) {
        operation.setOp10(op);
    } else if (op instanceof claim_operation) {
        operation.setOp11(op);
    } else if (op instanceof claim_all_operation) {
        operation.setOp12(op);
    } else if (op instanceof contract_deploy_operation) {
        operation.setOp13(op);
    } else if (op instanceof contract_apply_operation) {
        operation.setOp14(op);
    } else if (op instanceof convert_vest_operation) {
        operation.setOp16(op)
    } else if (op instanceof stake_operation) {
        operation.setOp17(op)
    } else if (op instanceof un_stake_operation) {
        operation.setOp18(op)
    } else if (op instanceof bp_update_operation) {
        operation.setOp19(op)
    } else if (op instanceof account_update_operation) {
        operation.setOp20(op)
    } else if (op instanceof acquire_ticket_operation) {
        operation.setOp21(op)
    } else if (op instanceof vote_by_ticket_operation) {
       operation.setOp22(op)
    } else {
        console.error("unknown operation when add operation, update sdk is necessary")
    }
    const operations = this.getOperationsList();
    operations.push(operation);
    this.setOperationsList(operations);
};

// @ts-ignore
const sender = function (op) {
    // @ts-ignore
    if (op.hasOp1()) return op.getOp1().getCreator().getValue();
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
    if (op.hasOp16()) return op.getOp16().getFrom().getValue();
    if (op.hasOp17()) return op.getOp17().getFrom().getValue();
    if (op.hasOp18()) return op.getOp18().getCreditor().getValue();
    if (op.hasOp19()) return op.getOp19().getOwner().getValue();
    if (op.hasOp20()) return op.getOp20().getFrom().getValue();
    if (op.hasOp21()) return op.getOp21().getAccount().getValue();
    if (op.hasOp22()) return op.getOp22().getAccount().getValue();
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

// @ts-ignore
const getActionName = function (op) {
    // @ts-ignore
    if (op.hasOp1()) return "Create Account";
    // @ts-ignore
    if (op.hasOp2()) return "Transfer";
    // @ts-ignore
    if (op.hasOp3()) return "Bp Register";
    // @ts-ignore
    if (op.hasOp4()) return "Bp Unregister";
    // @ts-ignore
    if (op.hasOp5()) return "Bp Vote";
    // @ts-ignore
    if (op.hasOp6()) return "Post";
    // @ts-ignore
    if (op.hasOp7()) return "Reply";
    // @ts-ignore
    if (op.hasOp8()) return "Follow";
    // @ts-ignore
    if (op.hasOp9()) return "Vote";
    // @ts-ignore
    if (op.hasOp10()) return "Transfer To Vesting";
    // @ts-ignore
    if (op.hasOp11()) return "Claim";
    // @ts-ignore
    if (op.hasOp12()) return "ClaimAll";
    // @ts-ignore
    if (op.hasOp13()) return "Contract Deploy";
    // @ts-ignore
    if (op.hasOp14()) return "Contract Apply";
    if (op.hasOp16()) return "Convert Vesting To Cos";
    if (op.hasOp17()) return "Stake";
    if (op.hasOp18()) return "Unstake";
    if (op.hasOp19()) return "Bp Update";
    if (op.hasOp20()) return "Transfer To Stake Vesting";
    if (op.hasOp21()) return "Acquire Ticket";
    if (op.hasOp22()) return "Vote by Ticket";
    return '';
};


// @ts-ignore
const getActionObject = function (op) {
    if (op.hasOp1()) return op.getOp1().toObject();
    // @ts-ignore
    if (op.hasOp2()) return op.getOp2().toObject();
    // @ts-ignore
    if (op.hasOp3()) return op.getOp3().toObject();
    // @ts-ignore
    if (op.hasOp4()) return op.getOp4().toObject();
    // @ts-ignore
    if (op.hasOp5()) return op.getOp5().toObject();
    // @ts-ignore
    if (op.hasOp6()) return op.getOp6().toObject();
    // @ts-ignore
    if (op.hasOp7()) return op.getOp7().toObject();
    // @ts-ignore
    if (op.hasOp8()) return op.getOp8().toObject();
    // @ts-ignore
    if (op.hasOp9()) return op.getOp9().toObject();
    // @ts-ignore
    if (op.hasOp10()) return op.getOp10().toObject();
    // @ts-ignore
    if (op.hasOp11()) return op.getOp11().toObject();
    // @ts-ignore
    if (op.hasOp12()) return op.getOp12().toObject();
    // @ts-ignore
    if (op.hasOp13()) return op.getOp13().toObject();
    // @ts-ignore
    if (op.hasOp14()) return op.getOp14().toObject();
    if (op.hasOp16()) return op.getOp16().toObject();
    if (op.hasOp17()) return op.getOp17().toObject();
    if (op.hasOp18()) return op.getOp18().toObject();
    if (op.hasOp19()) return op.getOp19().toObject();
    if (op.hasOp20()) return op.getOp20().toObject();
    if (op.hasOp21()) return op.getOp21().toObject();
    if (op.hasOp22()) return op.getOp22().toObject();
    return null
}


// @ts-ignore
transaction.prototype.getAllActions = function () {
  let ops = this.getOperationsList();
    // @ts-ignore
  let actionList = [];
  for(let op of ops) {
      let action = getActionName(op);
      if (action.length > 0 ) {
          actionList.push(action)
      }
  }
    // @ts-ignore
  return actionList;
};

// @ts-ignore
transaction.prototype.getOperationsObjectList = function () {
    let ops = this.getOperationsList();
    let operationObjectList = [];
    for (let op of ops) {
        let actionName = getActionName(op);
        let actionObject = getActionObject(op);
        if (actionName.length > 0 && actionObject !== null) {
            let action = {};
            // @ts-ignore
            actionName = actionName.replace(/\s+/g, '');
            // @ts-ignore
            action[actionName] = actionObject;
            operationObjectList.push(action)
        }
    }
    return operationObjectList;
};


export {transaction};
