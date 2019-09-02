/// <reference types="node" />
/// <reference types="secp256k1" />
export declare function generatePrivKey(): PrivKey;
export declare function privKeyFromWIF(encoded: string): PrivKey | null;
export declare function pubKeyFromWIF(encoded: string): PubKey | null;
export declare class PrivKey {
    data: Buffer;
    constructor(privKey: Buffer);
    isValid(): boolean;
    toWIF(): string;
    pubKey(): PubKey | null;
    sign(data: Buffer): {
        signature: Buffer;
        recovery: number;
    };
}
export declare class PubKey {
    data: Buffer;
    constructor(pubKey: Buffer);
    isValid(): boolean;
    toWIF(): string;
}
export declare function generateEncryptedJson(name: string, passphrase: string, pubKeyStr: string, privKeyStr: string): {
    "Name": string;
    "PubKey": string;
    "Cipher": string;
    "CipherText": string;
    "Iv": string;
    "Mac": string;
    "Version": number;
};
export declare function decryptPrivKey(cipher: string, passphrase: string, iv: string, mac: string): string;
export declare function generateMnemonic(): void;
export declare function generateKeyPairsFromMnemonic(words: string): null;
