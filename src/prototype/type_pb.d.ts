// package: prototype
// file: prototype/type.proto

import * as jspb from "google-protobuf";

export class account_name extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): account_name.AsObject;
  static toObject(includeInstance: boolean, msg: account_name): account_name.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: account_name, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): account_name;
  static deserializeBinaryFromReader(message: account_name, reader: jspb.BinaryReader): account_name;
}

export namespace account_name {
  export type AsObject = {
    value: string,
  }
}

export class chain_id extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): chain_id.AsObject;
  static toObject(includeInstance: boolean, msg: chain_id): chain_id.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: chain_id, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): chain_id;
  static deserializeBinaryFromReader(message: chain_id, reader: jspb.BinaryReader): chain_id;
}

export namespace chain_id {
  export type AsObject = {
    value: number,
  }
}

export class coin extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): coin.AsObject;
  static toObject(includeInstance: boolean, msg: coin): coin.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: coin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): coin;
  static deserializeBinaryFromReader(message: coin, reader: jspb.BinaryReader): coin;
}

export namespace coin {
  export type AsObject = {
    value: string,
  }
}

export class vest extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): vest.AsObject;
  static toObject(includeInstance: boolean, msg: vest): vest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: vest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): vest;
  static deserializeBinaryFromReader(message: vest, reader: jspb.BinaryReader): vest;
}

export namespace vest {
  export type AsObject = {
    value: string,
  }
}

export class public_key_type extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): public_key_type.AsObject;
  static toObject(includeInstance: boolean, msg: public_key_type): public_key_type.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: public_key_type, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): public_key_type;
  static deserializeBinaryFromReader(message: public_key_type, reader: jspb.BinaryReader): public_key_type;
}

export namespace public_key_type {
  export type AsObject = {
    data: Uint8Array | string,
  }
}

export class private_key_type extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): private_key_type.AsObject;
  static toObject(includeInstance: boolean, msg: private_key_type): private_key_type.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: private_key_type, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): private_key_type;
  static deserializeBinaryFromReader(message: private_key_type, reader: jspb.BinaryReader): private_key_type;
}

export namespace private_key_type {
  export type AsObject = {
    data: Uint8Array | string,
  }
}

export class time_point_sec extends jspb.Message {
  getUtcSeconds(): number;
  setUtcSeconds(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): time_point_sec.AsObject;
  static toObject(includeInstance: boolean, msg: time_point_sec): time_point_sec.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: time_point_sec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): time_point_sec;
  static deserializeBinaryFromReader(message: time_point_sec, reader: jspb.BinaryReader): time_point_sec;
}

export namespace time_point_sec {
  export type AsObject = {
    utcSeconds: number,
  }
}

export class signature_type extends jspb.Message {
  getSig(): Uint8Array | string;
  getSig_asU8(): Uint8Array;
  getSig_asB64(): string;
  setSig(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): signature_type.AsObject;
  static toObject(includeInstance: boolean, msg: signature_type): signature_type.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: signature_type, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): signature_type;
  static deserializeBinaryFromReader(message: signature_type, reader: jspb.BinaryReader): signature_type;
}

export namespace signature_type {
  export type AsObject = {
    sig: Uint8Array | string,
  }
}

export class sha256 extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): sha256.AsObject;
  static toObject(includeInstance: boolean, msg: sha256): sha256.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: sha256, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): sha256;
  static deserializeBinaryFromReader(message: sha256, reader: jspb.BinaryReader): sha256;
}

export namespace sha256 {
  export type AsObject = {
    hash: Uint8Array | string,
  }
}

export class chain_properties extends jspb.Message {
  hasAccountCreationFee(): boolean;
  clearAccountCreationFee(): void;
  getAccountCreationFee(): coin | undefined;
  setAccountCreationFee(value?: coin): void;

  getMaximumBlockSize(): number;
  setMaximumBlockSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): chain_properties.AsObject;
  static toObject(includeInstance: boolean, msg: chain_properties): chain_properties.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: chain_properties, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): chain_properties;
  static deserializeBinaryFromReader(message: chain_properties, reader: jspb.BinaryReader): chain_properties;
}

export namespace chain_properties {
  export type AsObject = {
    accountCreationFee?: coin.AsObject,
    maximumBlockSize: number,
  }
}

export class dynamic_properties extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasHeadBlockId(): boolean;
  clearHeadBlockId(): void;
  getHeadBlockId(): sha256 | undefined;
  setHeadBlockId(value?: sha256): void;

  getHeadBlockNumber(): number;
  setHeadBlockNumber(value: number): void;

  getMaximumBlockSize(): number;
  setMaximumBlockSize(value: number): void;

  hasTotalCos(): boolean;
  clearTotalCos(): void;
  getTotalCos(): coin | undefined;
  setTotalCos(value?: coin): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): time_point_sec | undefined;
  setTime(value?: time_point_sec): void;

  hasCurrentWitness(): boolean;
  clearCurrentWitness(): void;
  getCurrentWitness(): account_name | undefined;
  setCurrentWitness(value?: account_name): void;

  getIrreversibleBlockNum(): number;
  setIrreversibleBlockNum(value: number): void;

  getTps(): number;
  setTps(value: number): void;

  hasTotalVestingShares(): boolean;
  clearTotalVestingShares(): void;
  getTotalVestingShares(): vest | undefined;
  setTotalVestingShares(value?: vest): void;

  hasCurrentSupply(): boolean;
  clearCurrentSupply(): void;
  getCurrentSupply(): coin | undefined;
  setCurrentSupply(value?: coin): void;

  getCurrentAslot(): number;
  setCurrentAslot(value: number): void;

  getPostWeightedVps(): number;
  setPostWeightedVps(value: number): void;

  hasPostRewards(): boolean;
  clearPostRewards(): void;
  getPostRewards(): vest | undefined;
  setPostRewards(value?: vest): void;

  getTotalTrxCnt(): number;
  setTotalTrxCnt(value: number): void;

  getTotalPostCnt(): number;
  setTotalPostCnt(value: number): void;

  getTotalUserCnt(): number;
  setTotalUserCnt(value: number): void;

  getMaxTps(): number;
  setMaxTps(value: number): void;

  getMaxTpsBlockNum(): string;
  setMaxTpsBlockNum(value: string): void;

  getHeadBlockPrefix(): number;
  setHeadBlockPrefix(value: number): void;

  hasReportRewards(): boolean;
  clearReportRewards(): void;
  getReportRewards(): vest | undefined;
  setReportRewards(value?: vest): void;

  getIthYear(): number;
  setIthYear(value: number): void;

  hasAnnualBudget(): boolean;
  clearAnnualBudget(): void;
  getAnnualBudget(): vest | undefined;
  setAnnualBudget(value?: vest): void;

  hasAnnualMinted(): boolean;
  clearAnnualMinted(): void;
  getAnnualMinted(): vest | undefined;
  setAnnualMinted(value?: vest): void;

  hasPostDappRewards(): boolean;
  clearPostDappRewards(): void;
  getPostDappRewards(): vest | undefined;
  setPostDappRewards(value?: vest): void;

  hasVoterRewards(): boolean;
  clearVoterRewards(): void;
  getVoterRewards(): vest | undefined;
  setVoterRewards(value?: vest): void;

  hasReplyRewards(): boolean;
  clearReplyRewards(): void;
  getReplyRewards(): vest | undefined;
  setReplyRewards(value?: vest): void;

  getReplyWeightedVps(): number;
  setReplyWeightedVps(value: number): void;

  hasReplyDappRewards(): boolean;
  clearReplyDappRewards(): void;
  getReplyDappRewards(): vest | undefined;
  setReplyDappRewards(value?: vest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): dynamic_properties.AsObject;
  static toObject(includeInstance: boolean, msg: dynamic_properties): dynamic_properties.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: dynamic_properties, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): dynamic_properties;
  static deserializeBinaryFromReader(message: dynamic_properties, reader: jspb.BinaryReader): dynamic_properties;
}

export namespace dynamic_properties {
  export type AsObject = {
    id: number,
    headBlockId?: sha256.AsObject,
    headBlockNumber: number,
    maximumBlockSize: number,
    totalCos?: coin.AsObject,
    time?: time_point_sec.AsObject,
    currentWitness?: account_name.AsObject,
    irreversibleBlockNum: number,
    tps: number,
    totalVestingShares?: vest.AsObject,
    currentSupply?: coin.AsObject,
    currentAslot: number,
    postWeightedVps: number,
    postRewards?: vest.AsObject,
    totalTrxCnt: number,
    totalPostCnt: number,
    totalUserCnt: number,
    maxTps: number,
    maxTpsBlockNum: string,
    headBlockPrefix: number,
    reportRewards?: vest.AsObject,
    ithYear: number,
    annualBudget?: vest.AsObject,
    annualMinted?: vest.AsObject,
    postDappRewards?: vest.AsObject,
    voterRewards?: vest.AsObject,
    replyRewards?: vest.AsObject,
    replyWeightedVps: number,
    replyDappRewards?: vest.AsObject,
  }
}

export class internal_rewards_keeper extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getRewardsMap(): jspb.Map<string, vest>;
  clearRewardsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): internal_rewards_keeper.AsObject;
  static toObject(includeInstance: boolean, msg: internal_rewards_keeper): internal_rewards_keeper.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: internal_rewards_keeper, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): internal_rewards_keeper;
  static deserializeBinaryFromReader(message: internal_rewards_keeper, reader: jspb.BinaryReader): internal_rewards_keeper;
}

export namespace internal_rewards_keeper {
  export type AsObject = {
    id: number,
    rewardsMap: Array<[string, vest.AsObject]>,
  }
}

export class beneficiary_route_type extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): account_name | undefined;
  setName(value?: account_name): void;

  getWeight(): number;
  setWeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): beneficiary_route_type.AsObject;
  static toObject(includeInstance: boolean, msg: beneficiary_route_type): beneficiary_route_type.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: beneficiary_route_type, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): beneficiary_route_type;
  static deserializeBinaryFromReader(message: beneficiary_route_type, reader: jspb.BinaryReader): beneficiary_route_type;
}

export namespace beneficiary_route_type {
  export type AsObject = {
    name?: account_name.AsObject,
    weight: number,
  }
}

