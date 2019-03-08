import {public_key_type}  from "../../prototype/type_pb"
import {PubKey} from "../crypto/crypto";

// @ts-ignore
public_key_type.prototype.toWIF = function (){
    let data = Buffer.from(this.getData());
    let pub = new PubKey(data);
    return pub.toWIF();
};

export {public_key_type};