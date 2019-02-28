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
