import {crc32} from 'crc';
import {chain_id} from "../../prototype/type_pb";


// @ts-ignore
chain_id.prototype.setChainEnv = function (env: string) {
    let value = crc32(env);
    this.setValue(value);
};

export {chain_id}
