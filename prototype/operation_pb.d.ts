// package: prototype
// file: prototype/operation.proto

import * as jspb from "google-protobuf";
import * as prototype_type_pb from "../prototype/type_pb";

export class account_create_operation extends jspb.Message {
  hasFee(): boolean;
  clearFee(): void;
  getFee(): prototype_type_pb.coin | undefined;
  setFee(value?: prototype_type_pb.coin): void;

  hasCreator(): boolean;
  clearCreator(): void;
  getCreator(): prototype_type_pb.account_name | undefined;
  setCreator(value?: prototype_type_pb.account_name): void;

  hasNewAccountName(): boolean;
  clearNewAccountName(): void;
  getNewAccountName(): prototype_type_pb.account_name | undefined;
  setNewAccountName(value?: prototype_type_pb.account_name): void;

  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): prototype_type_pb.authority | undefined;
  setOwner(value?: prototype_type_pb.authority): void;

  getJsonMetadata(): string;
  setJsonMetadata(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): account_create_operation.AsObject;
  static toObject(includeInstance: boolean, msg: account_create_operation): account_create_operation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: account_create_operation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): account_create_operation;
  static deserializeBinaryFromReader(message: account_create_operation, reader: jspb.BinaryReader): account_create_operation;
}

export namespace account_create_operation {
  export type AsObject = {
    fee?: prototype_type_pb.coin.AsObject,
    creator?: prototype_type_pb.account_name.AsObject,
    newAccountName?: prototype_type_pb.account_name.AsObject,
    owner?: prototype_type_pb.authority.AsObject,
    jsonMetadata: string,
  }
}

export class transfer_operation extends jspb.Message {
  hasFrom(): boolean;
  clearFrom(): void;
  getFrom(): prototype_type_pb.account_name | undefined;
  setFrom(value?: prototype_type_pb.account_name): void;

  hasTo(): boolean;
  clearTo(): void;
  getTo(): prototype_type_pb.account_name | undefined;
  setTo(value?: prototype_type_pb.account_name): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): prototype_type_pb.coin | undefined;
  setAmount(value?: prototype_type_pb.coin): void;

  getMemo(): string;
  setMemo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): transfer_operation.AsObject;
  static toObject(includeInstance: boolean, msg: transfer_operation): transfer_operation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: transfer_operation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): transfer_operation;
  static deserializeBinaryFromReader(message: transfer_operation, reader: jspb.BinaryReader): transfer_operation;
}

export namespace transfer_operation {
  export type AsObject = {
    from?: prototype_type_pb.account_name.AsObject,
    to?: prototype_type_pb.account_name.AsObject,
    amount?: prototype_type_pb.coin.AsObject,
    memo: string,
  }
}

export class transfer_to_vesting_operation extends jspb.Message {
  hasFrom(): boolean;
  clearFrom(): void;
  getFrom(): prototype_type_pb.account_name | undefined;
  setFrom(value?: prototype_type_pb.account_name): void;

  hasTo(): boolean;
  clearTo(): void;
  getTo(): prototype_type_pb.account_name | undefined;
  setTo(value?: prototype_type_pb.account_name): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): prototype_type_pb.coin | undefined;
  setAmount(value?: prototype_type_pb.coin): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): transfer_to_vesting_operation.AsObject;
  static toObject(includeInstance: boolean, msg: transfer_to_vesting_operation): transfer_to_vesting_operation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: transfer_to_vesting_operation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): transfer_to_vesting_operation;
  static deserializeBinaryFromReader(message: transfer_to_vesting_operation, reader: jspb.BinaryReader): transfer_to_vesting_operation;
}

export namespace transfer_to_vesting_operation {
  export type AsObject = {
    from?: prototype_type_pb.account_name.AsObject,
    to?: prototype_type_pb.account_name.AsObject,
    amount?: prototype_type_pb.coin.AsObject,
  }
}

export class vote_operation extends jspb.Message {
  hasVoter(): boolean;
  clearVoter(): void;
  getVoter(): prototype_type_pb.account_name | undefined;
  setVoter(value?: prototype_type_pb.account_name): void;

  getIdx(): number;
  setIdx(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): vote_operation.AsObject;
  static toObject(includeInstance: boolean, msg: vote_operation): vote_operation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: vote_operation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): vote_operation;
  static deserializeBinaryFromReader(message: vote_operation, reader: jspb.BinaryReader): vote_operation;
}

export namespace vote_operation {
  export type AsObject = {
    voter?: prototype_type_pb.account_name.AsObject,
    idx: number,
  }
}

export class bp_register_operation extends jspb.Message {
  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): prototype_type_pb.account_name | undefined;
  setOwner(value?: prototype_type_pb.account_name): void;

  getUrl(): string;
  setUrl(value: string): void;

  getDesc(): string;
  setDesc(value: string): void;

  hasBlockSigningKey(): boolean;
  clearBlockSigningKey(): void;
  getBlockSigningKey(): prototype_type_pb.public_key_type | undefined;
  setBlockSigningKey(value?: prototype_type_pb.public_key_type): void;

  hasProps(): boolean;
  clearProps(): void;
  getProps(): prototype_type_pb.chain_properties | undefined;
  setProps(value?: prototype_type_pb.chain_properties): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): bp_register_operation.AsObject;
  static toObject(includeInstance: boolean, msg: bp_register_operation): bp_register_operation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: bp_register_operation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): bp_register_operation;
  static deserializeBinaryFromReader(message: bp_register_operation, reader: jspb.BinaryReader): bp_register_operation;
}

export namespace bp_register_operation {
  export type AsObject = {
    owner?: prototype_type_pb.account_name.AsObject,
    url: string,
    desc: string,
    blockSigningKey?: prototype_type_pb.public_key_type.AsObject,
    props?: prototype_type_pb.chain_properties.AsObject,
  }
}

export class bp_unregister_operation extends jspb.Message {
  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): prototype_type_pb.account_name | undefined;
  setOwner(value?: prototype_type_pb.account_name): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): bp_unregister_operation.AsObject;
  static toObject(includeInstance: boolean, msg: bp_unregister_operation): bp_unregister_operation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: bp_unregister_operation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): bp_unregister_operation;
  static deserializeBinaryFromReader(message: bp_unregister_operation, reader: jspb.BinaryReader): bp_unregister_operation;
}

export namespace bp_unregister_operation {
  export type AsObject = {
    owner?: prototype_type_pb.account_name.AsObject,
  }
}

export class bp_vote_operation extends jspb.Message {
  hasVoter(): boolean;
  clearVoter(): void;
  getVoter(): prototype_type_pb.account_name | undefined;
  setVoter(value?: prototype_type_pb.account_name): void;

  hasWitness(): boolean;
  clearWitness(): void;
  getWitness(): prototype_type_pb.account_name | undefined;
  setWitness(value?: prototype_type_pb.account_name): void;

  getCancel(): boolean;
  setCancel(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): bp_vote_operation.AsObject;
  static toObject(includeInstance: boolean, msg: bp_vote_operation): bp_vote_operation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: bp_vote_operation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): bp_vote_operation;
  static deserializeBinaryFromReader(message: bp_vote_operation, reader: jspb.BinaryReader): bp_vote_operation;
}

export namespace bp_vote_operation {
  export type AsObject = {
    voter?: prototype_type_pb.account_name.AsObject,
    witness?: prototype_type_pb.account_name.AsObject,
    cancel: boolean,
  }
}

export class follow_operation extends jspb.Message {
  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): prototype_type_pb.account_name | undefined;
  setAccount(value?: prototype_type_pb.account_name): void;

  hasFAccount(): boolean;
  clearFAccount(): void;
  getFAccount(): prototype_type_pb.account_name | undefined;
  setFAccount(value?: prototype_type_pb.account_name): void;

  getCancel(): boolean;
  setCancel(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): follow_operation.AsObject;
  static toObject(includeInstance: boolean, msg: follow_operation): follow_operation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: follow_operation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): follow_operation;
  static deserializeBinaryFromReader(message: follow_operation, reader: jspb.BinaryReader): follow_operation;
}

export namespace follow_operation {
  export type AsObject = {
    account?: prototype_type_pb.account_name.AsObject,
    fAccount?: prototype_type_pb.account_name.AsObject,
    cancel: boolean,
  }
}

export class contract_deploy_operation extends jspb.Message {
  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): prototype_type_pb.account_name | undefined;
  setOwner(value?: prototype_type_pb.account_name): void;

  getContract(): string;
  setContract(value: string): void;

  getAbi(): string;
  setAbi(value: string): void;

  getCode(): Uint8Array | string;
  getCode_asU8(): Uint8Array;
  getCode_asB64(): string;
  setCode(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): contract_deploy_operation.AsObject;
  static toObject(includeInstance: boolean, msg: contract_deploy_operation): contract_deploy_operation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: contract_deploy_operation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): contract_deploy_operation;
  static deserializeBinaryFromReader(message: contract_deploy_operation, reader: jspb.BinaryReader): contract_deploy_operation;
}

export namespace contract_deploy_operation {
  export type AsObject = {
    owner?: prototype_type_pb.account_name.AsObject,
    contract: string,
    abi: string,
    code: Uint8Array | string,
  }
}

export class contract_apply_operation extends jspb.Message {
  hasCaller(): boolean;
  clearCaller(): void;
  getCaller(): prototype_type_pb.account_name | undefined;
  setCaller(value?: prototype_type_pb.account_name): void;

  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): prototype_type_pb.account_name | undefined;
  setOwner(value?: prototype_type_pb.account_name): void;

  getContract(): string;
  setContract(value: string): void;

  getMethod(): string;
  setMethod(value: string): void;

  getParams(): string;
  setParams(value: string): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): prototype_type_pb.coin | undefined;
  setAmount(value?: prototype_type_pb.coin): void;

  hasGas(): boolean;
  clearGas(): void;
  getGas(): prototype_type_pb.coin | undefined;
  setGas(value?: prototype_type_pb.coin): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): contract_apply_operation.AsObject;
  static toObject(includeInstance: boolean, msg: contract_apply_operation): contract_apply_operation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: contract_apply_operation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): contract_apply_operation;
  static deserializeBinaryFromReader(message: contract_apply_operation, reader: jspb.BinaryReader): contract_apply_operation;
}

export namespace contract_apply_operation {
  export type AsObject = {
    caller?: prototype_type_pb.account_name.AsObject,
    owner?: prototype_type_pb.account_name.AsObject,
    contract: string,
    method: string,
    params: string,
    amount?: prototype_type_pb.coin.AsObject,
    gas?: prototype_type_pb.coin.AsObject,
  }
}

export class internal_contract_apply_operation extends jspb.Message {
  hasFromCaller(): boolean;
  clearFromCaller(): void;
  getFromCaller(): prototype_type_pb.account_name | undefined;
  setFromCaller(value?: prototype_type_pb.account_name): void;

  hasFromOwner(): boolean;
  clearFromOwner(): void;
  getFromOwner(): prototype_type_pb.account_name | undefined;
  setFromOwner(value?: prototype_type_pb.account_name): void;

  getFromContract(): string;
  setFromContract(value: string): void;

  getFromMethod(): string;
  setFromMethod(value: string): void;

  hasToOwner(): boolean;
  clearToOwner(): void;
  getToOwner(): prototype_type_pb.account_name | undefined;
  setToOwner(value?: prototype_type_pb.account_name): void;

  getToContract(): string;
  setToContract(value: string): void;

  getToMethod(): string;
  setToMethod(value: string): void;

  getParams(): Uint8Array | string;
  getParams_asU8(): Uint8Array;
  getParams_asB64(): string;
  setParams(value: Uint8Array | string): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): prototype_type_pb.coin | undefined;
  setAmount(value?: prototype_type_pb.coin): void;

  hasGas(): boolean;
  clearGas(): void;
  getGas(): prototype_type_pb.coin | undefined;
  setGas(value?: prototype_type_pb.coin): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): internal_contract_apply_operation.AsObject;
  static toObject(includeInstance: boolean, msg: internal_contract_apply_operation): internal_contract_apply_operation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: internal_contract_apply_operation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): internal_contract_apply_operation;
  static deserializeBinaryFromReader(message: internal_contract_apply_operation, reader: jspb.BinaryReader): internal_contract_apply_operation;
}

export namespace internal_contract_apply_operation {
  export type AsObject = {
    fromCaller?: prototype_type_pb.account_name.AsObject,
    fromOwner?: prototype_type_pb.account_name.AsObject,
    fromContract: string,
    fromMethod: string,
    toOwner?: prototype_type_pb.account_name.AsObject,
    toContract: string,
    toMethod: string,
    params: Uint8Array | string,
    amount?: prototype_type_pb.coin.AsObject,
    gas?: prototype_type_pb.coin.AsObject,
  }
}

export class contract_estimate_apply_operation extends jspb.Message {
  hasCaller(): boolean;
  clearCaller(): void;
  getCaller(): prototype_type_pb.account_name | undefined;
  setCaller(value?: prototype_type_pb.account_name): void;

  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): prototype_type_pb.account_name | undefined;
  setOwner(value?: prototype_type_pb.account_name): void;

  getContract(): string;
  setContract(value: string): void;

  getParams(): string;
  setParams(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): contract_estimate_apply_operation.AsObject;
  static toObject(includeInstance: boolean, msg: contract_estimate_apply_operation): contract_estimate_apply_operation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: contract_estimate_apply_operation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): contract_estimate_apply_operation;
  static deserializeBinaryFromReader(message: contract_estimate_apply_operation, reader: jspb.BinaryReader): contract_estimate_apply_operation;
}

export namespace contract_estimate_apply_operation {
  export type AsObject = {
    caller?: prototype_type_pb.account_name.AsObject,
    owner?: prototype_type_pb.account_name.AsObject,
    contract: string,
    params: string,
  }
}

export class post_operation extends jspb.Message {
  getUuid(): number;
  setUuid(value: number): void;

  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): prototype_type_pb.account_name | undefined;
  setOwner(value?: prototype_type_pb.account_name): void;

  getTitle(): string;
  setTitle(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  clearBeneficiariesList(): void;
  getBeneficiariesList(): Array<prototype_type_pb.beneficiary_route_type>;
  setBeneficiariesList(value: Array<prototype_type_pb.beneficiary_route_type>): void;
  addBeneficiaries(value?: prototype_type_pb.beneficiary_route_type, index?: number): prototype_type_pb.beneficiary_route_type;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): post_operation.AsObject;
  static toObject(includeInstance: boolean, msg: post_operation): post_operation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: post_operation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): post_operation;
  static deserializeBinaryFromReader(message: post_operation, reader: jspb.BinaryReader): post_operation;
}

export namespace post_operation {
  export type AsObject = {
    uuid: number,
    owner?: prototype_type_pb.account_name.AsObject,
    title: string,
    content: string,
    tagsList: Array<string>,
    beneficiariesList: Array<prototype_type_pb.beneficiary_route_type.AsObject>,
  }
}

export class reply_operation extends jspb.Message {
  getUuid(): number;
  setUuid(value: number): void;

  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): prototype_type_pb.account_name | undefined;
  setOwner(value?: prototype_type_pb.account_name): void;

  getContent(): string;
  setContent(value: string): void;

  getParentUuid(): number;
  setParentUuid(value: number): void;

  clearBeneficiariesList(): void;
  getBeneficiariesList(): Array<prototype_type_pb.beneficiary_route_type>;
  setBeneficiariesList(value: Array<prototype_type_pb.beneficiary_route_type>): void;
  addBeneficiaries(value?: prototype_type_pb.beneficiary_route_type, index?: number): prototype_type_pb.beneficiary_route_type;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): reply_operation.AsObject;
  static toObject(includeInstance: boolean, msg: reply_operation): reply_operation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: reply_operation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): reply_operation;
  static deserializeBinaryFromReader(message: reply_operation, reader: jspb.BinaryReader): reply_operation;
}

export namespace reply_operation {
  export type AsObject = {
    uuid: number,
    owner?: prototype_type_pb.account_name.AsObject,
    content: string,
    parentUuid: number,
    beneficiariesList: Array<prototype_type_pb.beneficiary_route_type.AsObject>,
  }
}

export class claim_all_operation extends jspb.Message {
  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): prototype_type_pb.account_name | undefined;
  setAccount(value?: prototype_type_pb.account_name): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): claim_all_operation.AsObject;
  static toObject(includeInstance: boolean, msg: claim_all_operation): claim_all_operation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: claim_all_operation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): claim_all_operation;
  static deserializeBinaryFromReader(message: claim_all_operation, reader: jspb.BinaryReader): claim_all_operation;
}

export namespace claim_all_operation {
  export type AsObject = {
    account?: prototype_type_pb.account_name.AsObject,
  }
}

export class claim_operation extends jspb.Message {
  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): prototype_type_pb.account_name | undefined;
  setAccount(value?: prototype_type_pb.account_name): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): claim_operation.AsObject;
  static toObject(includeInstance: boolean, msg: claim_operation): claim_operation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: claim_operation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): claim_operation;
  static deserializeBinaryFromReader(message: claim_operation, reader: jspb.BinaryReader): claim_operation;
}

export namespace claim_operation {
  export type AsObject = {
    account?: prototype_type_pb.account_name.AsObject,
    amount: number,
  }
}

