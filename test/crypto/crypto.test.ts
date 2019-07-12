import {raw_type, transaction, crypto} from "../../src/index";

// const {raw_type, transaction, crypto} = require('../../src/');

let chain_id = new raw_type.chain_id();
// @ts-ignore
chain_id.setChainEnv('main');

let privKey = crypto.privKeyFromWIF("4DjYx2KAGh1NP3dai7MZTLUBMMhMBPmwouKE8jhVSESywccpVZ");

const tx = new transaction.transaction();
tx.setRefBlockNum(0);
// @ts-ignore
tx.setRefBlockPrefix(0);
// @ts-ignore
const expiration = new raw_type.time_point_sec();
// @ts-ignore
expiration.setUtcSeconds(0);
tx.setExpiration(expiration);

const signTx = new transaction.signed_transaction();
signTx.setTrx(tx);


// const signature = privKey.
// @ts-ignore
let s = signTx.sign(privKey, chain_id);
console.log(s);
