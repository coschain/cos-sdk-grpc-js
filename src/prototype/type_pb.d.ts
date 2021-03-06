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

export class gift_ticket_key_type extends jspb.Message {
  getType(): number;
  setType(value: number): void;

  getFrom(): string;
  setFrom(value: string): void;

  getTo(): string;
  setTo(value: string): void;

  getCreateBlock(): number;
  setCreateBlock(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): gift_ticket_key_type.AsObject;
  static toObject(includeInstance: boolean, msg: gift_ticket_key_type): gift_ticket_key_type.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: gift_ticket_key_type, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): gift_ticket_key_type;
  static deserializeBinaryFromReader(message: gift_ticket_key_type, reader: jspb.BinaryReader): gift_ticket_key_type;
}

export namespace gift_ticket_key_type {
  export type AsObject = {
    type: number,
    from: string,
    to: string,
    createBlock: number,
  }
}

export class chain_properties extends jspb.Message {
  hasAccountCreationFee(): boolean;
  clearAccountCreationFee(): void;
  getAccountCreationFee(): coin | undefined;
  setAccountCreationFee(value?: coin): void;

  getStaminaFree(): number;
  setStaminaFree(value: number): void;

  getTpsExpected(): number;
  setTpsExpected(value: number): void;

  getTopNAcquireFreeToken(): number;
  setTopNAcquireFreeToken(value: number): void;

  getEpochDuration(): number;
  setEpochDuration(value: number): void;

  hasPerTicketPrice(): boolean;
  clearPerTicketPrice(): void;
  getPerTicketPrice(): coin | undefined;
  setPerTicketPrice(value?: coin): void;

  getPerTicketWeight(): number;
  setPerTicketWeight(value: number): void;

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
    staminaFree: number,
    tpsExpected: number,
    topNAcquireFreeToken: number,
    epochDuration: number,
    perTicketPrice?: coin.AsObject,
    perTicketWeight: number,
  }
}

export class dynamic_properties extends jspb.Message {
  hasHeadBlockId(): boolean;
  clearHeadBlockId(): void;
  getHeadBlockId(): sha256 | undefined;
  setHeadBlockId(value?: sha256): void;

  getHeadBlockNumber(): number;
  setHeadBlockNumber(value: number): void;

  hasTotalCos(): boolean;
  clearTotalCos(): void;
  getTotalCos(): coin | undefined;
  setTotalCos(value?: coin): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): time_point_sec | undefined;
  setTime(value?: time_point_sec): void;

  hasCurrentBlockProducer(): boolean;
  clearCurrentBlockProducer(): void;
  getCurrentBlockProducer(): account_name | undefined;
  setCurrentBlockProducer(value?: account_name): void;

  getTps(): number;
  setTps(value: number): void;

  hasTotalVest(): boolean;
  clearTotalVest(): void;
  getTotalVest(): vest | undefined;
  setTotalVest(value?: vest): void;

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

  hasPoolPostRewards(): boolean;
  clearPoolPostRewards(): void;
  getPoolPostRewards(): vest | undefined;
  setPoolPostRewards(value?: vest): void;

  hasPoolReplyRewards(): boolean;
  clearPoolReplyRewards(): void;
  getPoolReplyRewards(): vest | undefined;
  setPoolReplyRewards(value?: vest): void;

  hasPoolVoteRewards(): boolean;
  clearPoolVoteRewards(): void;
  getPoolVoteRewards(): vest | undefined;
  setPoolVoteRewards(value?: vest): void;

  hasPoolDappRewards(): boolean;
  clearPoolDappRewards(): void;
  getPoolDappRewards(): vest | undefined;
  setPoolDappRewards(value?: vest): void;

  getWeightedVpsPost(): string;
  setWeightedVpsPost(value: string): void;

  getWeightedVpsReply(): string;
  setWeightedVpsReply(value: string): void;

  getWeightedVpsVote(): string;
  setWeightedVpsVote(value: string): void;

  getWeightedVpsDapp(): string;
  setWeightedVpsDapp(value: string): void;

  hasClaimedPostRewards(): boolean;
  clearClaimedPostRewards(): void;
  getClaimedPostRewards(): vest | undefined;
  setClaimedPostRewards(value?: vest): void;

  hasClaimedReplyRewards(): boolean;
  clearClaimedReplyRewards(): void;
  getClaimedReplyRewards(): vest | undefined;
  setClaimedReplyRewards(value?: vest): void;

  hasClaimedVoteRewards(): boolean;
  clearClaimedVoteRewards(): void;
  getClaimedVoteRewards(): vest | undefined;
  setClaimedVoteRewards(value?: vest): void;

  hasClaimedDappRewards(): boolean;
  clearClaimedDappRewards(): void;
  getClaimedDappRewards(): vest | undefined;
  setClaimedDappRewards(value?: vest): void;

  hasStakeVest(): boolean;
  clearStakeVest(): void;
  getStakeVest(): vest | undefined;
  setStakeVest(value?: vest): void;

  getBlockProducerBootCompleted(): boolean;
  setBlockProducerBootCompleted(value: boolean): void;

  getStaminaFree(): number;
  setStaminaFree(value: number): void;

  getTpsExpected(): number;
  setTpsExpected(value: number): void;

  getAvgTpsUpdateBlock(): number;
  setAvgTpsUpdateBlock(value: number): void;

  getAvgTpsInWindow(): number;
  setAvgTpsInWindow(value: number): void;

  getOneDayStamina(): number;
  setOneDayStamina(value: number): void;

  hasAccountCreateFee(): boolean;
  clearAccountCreateFee(): void;
  getAccountCreateFee(): coin | undefined;
  setAccountCreateFee(value?: coin): void;

  hasReputationAdmin(): boolean;
  clearReputationAdmin(): void;
  getReputationAdmin(): account_name | undefined;
  setReputationAdmin(value?: account_name): void;

  getCurrentEpochStartBlock(): number;
  setCurrentEpochStartBlock(value: number): void;

  getEpochDuration(): number;
  setEpochDuration(value: number): void;

  getTopNAcquireFreeToken(): number;
  setTopNAcquireFreeToken(value: number): void;

  hasPerTicketPrice(): boolean;
  clearPerTicketPrice(): void;
  getPerTicketPrice(): coin | undefined;
  setPerTicketPrice(value?: coin): void;

  getPerTicketWeight(): number;
  setPerTicketWeight(value: number): void;

  hasTicketsIncome(): boolean;
  clearTicketsIncome(): void;
  getTicketsIncome(): vest | undefined;
  setTicketsIncome(value?: vest): void;

  getChargedTicketsNum(): number;
  setChargedTicketsNum(value: number): void;

  hasCopyrightAdmin(): boolean;
  clearCopyrightAdmin(): void;
  getCopyrightAdmin(): account_name | undefined;
  setCopyrightAdmin(value?: account_name): void;

  hasTicketsBpBonus(): boolean;
  clearTicketsBpBonus(): void;
  getTicketsBpBonus(): vest | undefined;
  setTicketsBpBonus(value?: vest): void;

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
    headBlockId?: sha256.AsObject,
    headBlockNumber: number,
    totalCos?: coin.AsObject,
    time?: time_point_sec.AsObject,
    currentBlockProducer?: account_name.AsObject,
    tps: number,
    totalVest?: vest.AsObject,
    totalTrxCnt: number,
    totalPostCnt: number,
    totalUserCnt: number,
    maxTps: number,
    maxTpsBlockNum: string,
    ithYear: number,
    annualBudget?: vest.AsObject,
    annualMinted?: vest.AsObject,
    poolPostRewards?: vest.AsObject,
    poolReplyRewards?: vest.AsObject,
    poolVoteRewards?: vest.AsObject,
    poolDappRewards?: vest.AsObject,
    weightedVpsPost: string,
    weightedVpsReply: string,
    weightedVpsVote: string,
    weightedVpsDapp: string,
    claimedPostRewards?: vest.AsObject,
    claimedReplyRewards?: vest.AsObject,
    claimedVoteRewards?: vest.AsObject,
    claimedDappRewards?: vest.AsObject,
    stakeVest?: vest.AsObject,
    blockProducerBootCompleted: boolean,
    staminaFree: number,
    tpsExpected: number,
    avgTpsUpdateBlock: number,
    avgTpsInWindow: number,
    oneDayStamina: number,
    accountCreateFee?: coin.AsObject,
    reputationAdmin?: account_name.AsObject,
    currentEpochStartBlock: number,
    epochDuration: number,
    topNAcquireFreeToken: number,
    perTicketPrice?: coin.AsObject,
    perTicketWeight: number,
    ticketsIncome?: vest.AsObject,
    chargedTicketsNum: number,
    copyrightAdmin?: account_name.AsObject,
    ticketsBpBonus?: vest.AsObject,
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

