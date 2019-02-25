import {grpc} from "@improbable-eng/grpc-web";

// Import code-generated data structures.
import {ApiService} from "../rpc/pb/grpc_pb_service";
import {GetAccountByNameRequest, NonParamsRequest} from "../rpc/pb/grpc_pb";
// import {account_name} from "../prototype/type_pb"
import {account_name} from "./account";

const host = 'http://' + window.location.hostname + ':8080';

/**
 * get account info by user name
 * @param name  the user name
 * @param success
 * @param fail
 */
 window.getAccountByName = (name,success,fail) => {
    const getAccountByNameRequest= new GetAccountByNameRequest();
    const accountName = new account_name();
    accountName.setValue(name);
    accountName.generateNewKeys();
    getAccountByNameRequest.setAccountName(accountName);
    grpc.unary(ApiService.GetAccountByName, {
        request: getAccountByNameRequest,
        host: host,
        onEnd: res => {
            const { status, statusMessage, headers, message, trailers } = res;
            if (status === grpc.Code.OK && message) {
                console.log("getAccount:");
                let obj = message.toObject;
                console.log(obj);
                // return message.toObject()
                success(obj)
            } else {
                console.log("get account fail");
                fail(status.code, statusMessage)
            }
        }
    });
};

/**
 * get some state info from chain like tps、maxTps
 * @param success  the request success callback
 * @param fail     the  request fail callback
 */
  window.getStateInfo = (success,fail) => {
    const req = new NonParamsRequest();
    grpc.unary(ApiService.GetChainState, {
        request:req,
        host: host,
        onEnd: res => {
            const { status, statusMessage, message } = res;
            if (status === grpc.Code.OK && message) {
                let obj = message.toObject();
                if (typeof(success) == 'function') {
                    console.log("success");
                    success(obj)
                }
            }else {
                if (typeof(fail) == 'function') {
                    fail(status,statusMessage);
                }
                console.log(statusMessage);
            }
        }
    });
};

