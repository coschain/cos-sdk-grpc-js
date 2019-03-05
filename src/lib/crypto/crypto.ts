import bs58 = require('bs58');
import { randomBytes, createHash, createCipheriv, createHmac, createDecipheriv } from 'crypto';
import { Buffer } from 'buffer'
import secp256k1 = require('secp256k1');

const PasswordLength = 32

export function generatePrivKey () {
    let privKey;
    do {
        privKey = randomBytes(32)
    } while (!secp256k1.privateKeyVerify(privKey));
    return new PrivKey(privKey);
}

export function privKeyFromWIF (encoded:string) {
    if (encoded === '' || encoded === null) {
        return null;
    }
    const bytes = bs58.decode(encoded);
    if (bytes.length <= 5 || bytes[0] !== 1) {
        return null
    }
    const data = bytes.slice(1, bytes.length - 4);
    const vinfo = bytes.slice(bytes.length - 4, bytes.length);
    const hash1 = createHash('sha256');
    hash1.update(data);
    const sum1 = hash1.digest();
    const hash2 = createHash('sha256');
    hash2.update(sum1);
    const sum2 = hash2.digest();
    if (vinfo.toString() === sum2.slice(0, 4).toString()) {
        const priv = new PrivKey(data);
        if (priv.isValid()) {
            return priv
        } else {
            return null
        }
    } else {
        return null
    }
}

export function pubKeyFromWIF (encoded:string) {
    if (encoded === '' || encoded === null) {
        return null
    }
    if (encoded.length <= 3) {
        return null
    }
    if (encoded.slice(0, 3) !== 'COS') {
        return null
    }
    const bytes = bs58.decode(encoded.slice(3, encoded.length));
    if (bytes.length <= 4) {
        return null
    }
    const data = bytes.slice(0, bytes.length - 4);
    const vinfo = bytes.slice(bytes.length - 4, bytes.length);
    const hash1 = createHash('sha256');
    hash1.update(data);
    const sum1 = hash1.digest();
    const hash2 = createHash('sha256');
    hash2.update(sum1);
    const sum2 = hash2.digest();
    if (vinfo.toString() === sum2.slice(0, 4).toString()) {
        const pub = new PubKey(data);
        if (pub.isValid()) {
            return pub
        } else {
            return null
        }
    } else {
        return null
    }
}

export class PrivKey {
    data:Buffer;
    constructor (privKey:Buffer) {
        this.data = privKey
    }
    isValid () {
        return secp256k1.privateKeyVerify(this.data)
    }
    toWIF () {
        if (!this.isValid()) {
            return ''
        }
        const hash1 = createHash('sha256');
        hash1.update(this.data);
        const sum1 = hash1.digest();
        const hash2 = createHash('sha256');
        hash2.update(sum1);
        const sum2 = hash2.digest();
        const data = Buffer.concat([Buffer.from([1]), this.data, sum2.slice(0, 4)]);
        return bs58.encode(data)
    }
    pubKey () {
        if (!this.isValid()) {
            return null
        }
        const pubKeyData = secp256k1.publicKeyCreate(this.data);
        return new PubKey(pubKeyData)
    }

    sign(data:Buffer) {
        return secp256k1.sign(data, this.data);
    }
}

export class PubKey {
    data:Buffer;
    constructor (pubKey:Buffer) {
        this.data = pubKey
    }
    isValid () {
        return secp256k1.publicKeyVerify(this.data)
    }
    toWIF () {
        const symbol = 'COS';
        const hash1 = createHash('sha256');
        hash1.update(this.data);
        const sum1 = hash1.digest();
        const hash2 = createHash('sha256');
        hash2.update(sum1);
        const sum2 = hash2.digest();
        const data = Buffer.concat([this.data, sum2.slice(0, 4)]);
        return symbol + bs58.encode(data)
    }
}

function hashToFixLength(input:Buffer, length:number){
    const hash = createHash('sha256')
    hash.update(input)
    const sum = hash.digest()
    return sum.slice(0, length)
}

function encryptData(privKeyBytes:Buffer, passphraseBytes:Buffer) {
    const block = hashToFixLength(passphraseBytes, PasswordLength);
    const iv = randomBytes(16);
    const algorithm = 'aes-256-ctr';
    const cipher = createCipheriv(algorithm, block, iv);
    let encrypted = cipher.update(privKeyBytes);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return [encrypted, iv]
}

export function generateEncryptedJson(name:string, passphrase:string, pubKeyStr:string, privKeyStr:string) {
    // const priv = privKeyFromWIF(privKeyStr);
    // if(!priv) return null;
    // here, privkey bytes is not the real data of the key but the wif bytes
    const privKeyBytes = Buffer.from(privKeyStr);
    const passphraseBytes = Buffer.from(passphrase);
    let [encrypted, iv] = encryptData(privKeyBytes, passphraseBytes);
    const cipherText = encrypted.toString('base64');
    const ivText = iv.toString('base64');
    const hmac = createHmac('sha256', Buffer.from(passphrase));
    hmac.update(Buffer.from(privKeyStr));
    const macText = hmac.digest().toString('base64');
    return {"Name": name, "PubKey": pubKeyStr, "Cipher": "AES-256", "CipherText": cipherText, "Iv": ivText,
        "Mac": macText, "Version": 1}
}


function decryptData(cipherBytes:Buffer , passphraseBytes:Buffer, ivBytes:Buffer) {
    const block = hashToFixLength(passphraseBytes, PasswordLength);
    const algorithm = 'aes-256-ctr';
    const decipher =  createDecipheriv(algorithm, block, ivBytes);
    let decrypted = decipher.update(cipherBytes);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted
}

export function decryptPrivKey(cipher:string, passphrase:string, iv:string, mac:string) {
    const cipherBytes = Buffer.from(cipher, 'base64');
    const ivBytes = Buffer.from(iv, 'base64');
    const macBytes = Buffer.from(mac, 'base64');
    const passphraseBytes = Buffer.from(passphrase);
    const privKeyData = decryptData(cipherBytes, passphraseBytes, ivBytes);
    const hmac = createHmac('sha256', passphraseBytes);
    hmac.update(privKeyData)
    let r = hmac.digest()
    if (r.equals(macBytes)) {
        return privKeyData.toString()
    } else {
        return ''
    }
}