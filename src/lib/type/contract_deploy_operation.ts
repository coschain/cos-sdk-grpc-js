import {contract_deploy_operation} from "../../prototype/operation_pb";


// @ts-ignore
contract_deploy_operation.prototype.getSigner = function (auth:{ [key:string]: boolean}) {
    let owner = this.getOwner().getValue();
    auth[owner] = true
};

export {contract_deploy_operation}

