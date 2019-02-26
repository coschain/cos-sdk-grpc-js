import {grpc} from "@improbable-eng/grpc-web";
// Import code-generated data structures.
import {ApiService} from "../rpc/pb/grpc_pb_service";
import {BroadcastTrxRequest, GetAccountByNameRequest, NonParamsRequest} from "../rpc/pb/grpc_pb";
// import {account_name} from "../prototype/type_pb"
import {account_name} from "./helper/account";
import {authority, coin, kv_key_auth, public_key_type, signature_type, time_point_sec} from "../prototype/type_pb"
import {account_create_operation} from "../prototype/operation_pb";
import {PrivKey, privKeyFromWIF} from "./crypto/crypto";
import {host} from "./constants";
import {transaction} from "./helper/transaction";
import {signed_transaction} from "./helper/signed_transaction";
import {generatePrivKey} from "./crypto/crypto";


export const getAccountByName = async (name:string) => {
    const getAccountByNameRequest= new GetAccountByNameRequest();
    const accountName = new account_name();
    accountName.setValue(name);
    getAccountByNameRequest.setAccountName(accountName);
    return new Promise(
        resolve  => grpc.unary(ApiService.GetAccountByName, {
            request: getAccountByNameRequest,
            host: host,
            onEnd: res => {
                const {status, statusMessage, headers, message, trailers} = res;
                if (status === grpc.Code.OK && message) {
                    resolve(message.toObject())
                } else {
                    resolve({})
                }
            }
        })
    );
};

export const createAccount = async (name:string) => {
    const creatorPriv =  privKeyFromWIF('4DjYx2KAGh1NP3dai7MZTLUBMMhMBPmwouKE8jhVSESywccpVZ');
    if(creatorPriv === null){
        console.log("creator priv from wif failed");
        return
    }
    const priv = generatePrivKey();
    if(priv === null){
        console.log("generate priv failed");
        return
    }
    const pub = priv.pubKey();
    if(pub === null){
        console.log("generate pub from priv failed");
        return
    }
    const auth = new authority();
    auth.setWeightThreshold(1);
    const kauth = new kv_key_auth();
    const pubkeyType = new public_key_type();
    pubkeyType.setData(pub.data);
    kauth.setKey(pubkeyType);
    kauth.setWeight(1);
    auth.addKeyAuths(kauth);
    const acop = new account_create_operation();
    const c = new coin();
    c.setValue(1);
    acop.setFee(c);
    const creator = new account_name();
    creator.setValue('initminer');
    acop.setCreator(creator);
    const an = new account_name();
    an.setValue(name);
    acop.setNewAccountName(an);
    acop.setOwner(auth);
    const signTx = await signOps(creatorPriv, [acop]);
    if (signTx) {
        const broadcastTrxRequest = new BroadcastTrxRequest();
        // @ts-ignore
        broadcastTrxRequest.setTransaction(signTx);
        return new Promise(resolve => grpc.unary(ApiService.BroadcastTrx, {
                request: broadcastTrxRequest,
                host: host,
                onEnd: res => {
                    const {status, statusMessage, headers, message, trailers} = res;
                    console.log(res);
                    if (status === grpc.Code.OK && message) {
                        resolve(message.toObject())
                    } else {
                        resolve({})
                    }
                }
            }
        ));
    }
    return 'success'
};

const signOps = async (privKey: PrivKey, ops: any[]) => {
    const tx = new transaction();
    const nonParamsRequest = new NonParamsRequest();
    return new Promise(resolve  => grpc.unary(ApiService.GetChainState, {
        request: nonParamsRequest,
        host: host,
        onEnd: res => {
            const { status, statusMessage, headers, message, trailers } = res;
            if (status === grpc.Code.OK && message) {
                const chainState = message.toObject();
                // @ts-ignore
                tx.setRefBlockNum(chainState.props.headBlockNumber);
                // @ts-ignore
                tx.setRefBlockPrefix(chainState.props.headBlockPrefix);
                // @ts-ignore
                const expiration = new time_point_sec();
                // @ts-ignore
                expiration.setUtcSeconds(chainState.props.time.utcSeconds + 30);
                tx.setExpiration(expiration);
                for (let op of ops) {
                    tx.addOperation(op);
                }
                const signTx = new signed_transaction();
                signTx.setTrx(tx);
                // const signature = privKey.
                const signature = new signature_type();
                let s = signTx.sign(privKey);
                signature.setSig(s);
                signTx.addSignatures(signature);
                // skip validate
                resolve(signTx)
            } else {
                resolve({})
            }
        }
    }))
};

// function addOperation() {

// }

// createAccount('kochiye').then(
//     value => console.log(value)
// );

// getAccountByName('kochiye').then(
//     value => console.log(value)
// );
