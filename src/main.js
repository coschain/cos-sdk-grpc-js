import {grpc} from "@improbable-eng/grpc-web";

// Import code-generated data structures.
import {ApiService} from "../rpc/pb/grpc_pb_service";
import {GetAccountByNameRequest} from "../rpc/pb/grpc_pb";
// import {account_name} from "../prototype/type_pb"
import {account_name} from "./account";

const host = 'http://' + window.location.hostname + ':8080';

const getAccountByName = (name) => {
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
                return message.toObject()
            } else {
                return {}
            }
        }
    });
};

getAccountByName('initminer');
