// package: prototype
// file: prototype/transaction.proto

import * as jspb from "google-protobuf";
import * as prototype_type_pb from "../prototype/type_pb";
import * as prototype_operation_pb from "../prototype/operation_pb";

export class operation extends jspb.Message {
  hasOp1(): boolean;
  clearOp1(): void;
  getOp1(): prototype_operation_pb.account_create_operation | undefined;
  setOp1(value?: prototype_operation_pb.account_create_operation): void;

  hasOp2(): boolean;
  clearOp2(): void;
  getOp2(): prototype_operation_pb.transfer_operation | undefined;
  setOp2(value?: prototype_operation_pb.transfer_operation): void;

  hasOp3(): boolean;
  clearOp3(): void;
  getOp3(): prototype_operation_pb.bp_register_operation | undefined;
  setOp3(value?: prototype_operation_pb.bp_register_operation): void;

  hasOp4(): boolean;
  clearOp4(): void;
  getOp4(): prototype_operation_pb.bp_unregister_operation | undefined;
  setOp4(value?: prototype_operation_pb.bp_unregister_operation): void;

  hasOp5(): boolean;
  clearOp5(): void;
  getOp5(): prototype_operation_pb.bp_vote_operation | undefined;
  setOp5(value?: prototype_operation_pb.bp_vote_operation): void;

  hasOp6(): boolean;
  clearOp6(): void;
  getOp6(): prototype_operation_pb.post_operation | undefined;
  setOp6(value?: prototype_operation_pb.post_operation): void;

  hasOp7(): boolean;
  clearOp7(): void;
  getOp7(): prototype_operation_pb.reply_operation | undefined;
  setOp7(value?: prototype_operation_pb.reply_operation): void;

  hasOp8(): boolean;
  clearOp8(): void;
  getOp8(): prototype_operation_pb.follow_operation | undefined;
  setOp8(value?: prototype_operation_pb.follow_operation): void;

  hasOp9(): boolean;
  clearOp9(): void;
  getOp9(): prototype_operation_pb.vote_operation | undefined;
  setOp9(value?: prototype_operation_pb.vote_operation): void;

  hasOp10(): boolean;
  clearOp10(): void;
  getOp10(): prototype_operation_pb.transfer_to_vesting_operation | undefined;
  setOp10(value?: prototype_operation_pb.transfer_to_vesting_operation): void;

  hasOp11(): boolean;
  clearOp11(): void;
  getOp11(): prototype_operation_pb.claim_operation | undefined;
  setOp11(value?: prototype_operation_pb.claim_operation): void;

  hasOp12(): boolean;
  clearOp12(): void;
  getOp12(): prototype_operation_pb.claim_all_operation | undefined;
  setOp12(value?: prototype_operation_pb.claim_all_operation): void;

  hasOp13(): boolean;
  clearOp13(): void;
  getOp13(): prototype_operation_pb.contract_deploy_operation | undefined;
  setOp13(value?: prototype_operation_pb.contract_deploy_operation): void;

  hasOp14(): boolean;
  clearOp14(): void;
  getOp14(): prototype_operation_pb.contract_apply_operation | undefined;
  setOp14(value?: prototype_operation_pb.contract_apply_operation): void;

  hasOp15(): boolean;
  clearOp15(): void;
  getOp15(): prototype_operation_pb.report_operation | undefined;
  setOp15(value?: prototype_operation_pb.report_operation): void;

  hasOp16(): boolean;
  clearOp16(): void;
  getOp16(): prototype_operation_pb.convert_vesting_operation | undefined;
  setOp16(value?: prototype_operation_pb.convert_vesting_operation): void;

  hasOp17(): boolean;
  clearOp17(): void;
  getOp17(): prototype_operation_pb.stake_operation | undefined;
  setOp17(value?: prototype_operation_pb.stake_operation): void;

  hasOp18(): boolean;
  clearOp18(): void;
  getOp18(): prototype_operation_pb.un_stake_operation | undefined;
  setOp18(value?: prototype_operation_pb.un_stake_operation): void;

  hasOp19(): boolean;
  clearOp19(): void;
  getOp19(): prototype_operation_pb.bp_update_operation | undefined;
  setOp19(value?: prototype_operation_pb.bp_update_operation): void;

  hasOp20(): boolean;
  clearOp20(): void;
  getOp20(): prototype_operation_pb.transfer_to_stake_vesting_operation | undefined;
  setOp20(value?: prototype_operation_pb.transfer_to_stake_vesting_operation): void;

  getOpCase(): operation.OpCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): operation.AsObject;
  static toObject(includeInstance: boolean, msg: operation): operation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: operation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): operation;
  static deserializeBinaryFromReader(message: operation, reader: jspb.BinaryReader): operation;
}

export namespace operation {
  export type AsObject = {
    op1?: prototype_operation_pb.account_create_operation.AsObject,
    op2?: prototype_operation_pb.transfer_operation.AsObject,
    op3?: prototype_operation_pb.bp_register_operation.AsObject,
    op4?: prototype_operation_pb.bp_unregister_operation.AsObject,
    op5?: prototype_operation_pb.bp_vote_operation.AsObject,
    op6?: prototype_operation_pb.post_operation.AsObject,
    op7?: prototype_operation_pb.reply_operation.AsObject,
    op8?: prototype_operation_pb.follow_operation.AsObject,
    op9?: prototype_operation_pb.vote_operation.AsObject,
    op10?: prototype_operation_pb.transfer_to_vesting_operation.AsObject,
    op11?: prototype_operation_pb.claim_operation.AsObject,
    op12?: prototype_operation_pb.claim_all_operation.AsObject,
    op13?: prototype_operation_pb.contract_deploy_operation.AsObject,
    op14?: prototype_operation_pb.contract_apply_operation.AsObject,
    op15?: prototype_operation_pb.report_operation.AsObject,
    op16?: prototype_operation_pb.convert_vesting_operation.AsObject,
    op17?: prototype_operation_pb.stake_operation.AsObject,
    op18?: prototype_operation_pb.un_stake_operation.AsObject,
    op19?: prototype_operation_pb.bp_update_operation.AsObject,
    op20?: prototype_operation_pb.transfer_to_stake_vesting_operation.AsObject,
  }

  export enum OpCase {
    OP_NOT_SET = 0,
    OP1 = 1,
    OP2 = 2,
    OP3 = 3,
    OP4 = 4,
    OP5 = 5,
    OP6 = 6,
    OP7 = 7,
    OP8 = 8,
    OP9 = 9,
    OP10 = 10,
    OP11 = 11,
    OP12 = 12,
    OP13 = 13,
    OP14 = 14,
    OP15 = 15,
    OP16 = 16,
    OP17 = 17,
    OP18 = 18,
    OP19 = 19,
    OP20 = 20,
  }
}

export class transaction extends jspb.Message {
  getRefBlockNum(): number;
  setRefBlockNum(value: number): void;

  getRefBlockPrefix(): number;
  setRefBlockPrefix(value: number): void;

  hasExpiration(): boolean;
  clearExpiration(): void;
  getExpiration(): prototype_type_pb.time_point_sec | undefined;
  setExpiration(value?: prototype_type_pb.time_point_sec): void;

  clearOperationsList(): void;
  getOperationsList(): Array<operation>;
  setOperationsList(value: Array<operation>): void;
  addOperations(value?: operation, index?: number): operation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): transaction.AsObject;
  static toObject(includeInstance: boolean, msg: transaction): transaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: transaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): transaction;
  static deserializeBinaryFromReader(message: transaction, reader: jspb.BinaryReader): transaction;
}

export namespace transaction {
  export type AsObject = {
    refBlockNum: number,
    refBlockPrefix: number,
    expiration?: prototype_type_pb.time_point_sec.AsObject,
    operationsList: Array<operation.AsObject>,
  }
}

export class signed_transaction extends jspb.Message {
  hasTrx(): boolean;
  clearTrx(): void;
  getTrx(): transaction | undefined;
  setTrx(value?: transaction): void;

  hasSignature(): boolean;
  clearSignature(): void;
  getSignature(): prototype_type_pb.signature_type | undefined;
  setSignature(value?: prototype_type_pb.signature_type): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): signed_transaction.AsObject;
  static toObject(includeInstance: boolean, msg: signed_transaction): signed_transaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: signed_transaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): signed_transaction;
  static deserializeBinaryFromReader(message: signed_transaction, reader: jspb.BinaryReader): signed_transaction;
}

export namespace signed_transaction {
  export type AsObject = {
    trx?: transaction.AsObject,
    signature?: prototype_type_pb.signature_type.AsObject,
  }
}

export class operation_receipt_with_info extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getGasUsage(): number;
  setGasUsage(value: number): void;

  getVmConsole(): string;
  setVmConsole(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): operation_receipt_with_info.AsObject;
  static toObject(includeInstance: boolean, msg: operation_receipt_with_info): operation_receipt_with_info.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: operation_receipt_with_info, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): operation_receipt_with_info;
  static deserializeBinaryFromReader(message: operation_receipt_with_info, reader: jspb.BinaryReader): operation_receipt_with_info;
}

export namespace operation_receipt_with_info {
  export type AsObject = {
    status: number,
    gasUsage: number,
    vmConsole: string,
  }
}

export class transaction_receipt extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getNetUsage(): number;
  setNetUsage(value: number): void;

  getCpuUsage(): number;
  setCpuUsage(value: number): void;

  getErrorInfo(): string;
  setErrorInfo(value: string): void;

  clearOpResultsList(): void;
  getOpResultsList(): Array<operation_receipt_with_info>;
  setOpResultsList(value: Array<operation_receipt_with_info>): void;
  addOpResults(value?: operation_receipt_with_info, index?: number): operation_receipt_with_info;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): transaction_receipt.AsObject;
  static toObject(includeInstance: boolean, msg: transaction_receipt): transaction_receipt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: transaction_receipt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): transaction_receipt;
  static deserializeBinaryFromReader(message: transaction_receipt, reader: jspb.BinaryReader): transaction_receipt;
}

export namespace transaction_receipt {
  export type AsObject = {
    status: number,
    netUsage: number,
    cpuUsage: number,
    errorInfo: string,
    opResultsList: Array<operation_receipt_with_info.AsObject>,
  }
}

export class transaction_wrapper extends jspb.Message {
  hasSigTrx(): boolean;
  clearSigTrx(): void;
  getSigTrx(): signed_transaction | undefined;
  setSigTrx(value?: signed_transaction): void;

  hasReceipt(): boolean;
  clearReceipt(): void;
  getReceipt(): transaction_receipt | undefined;
  setReceipt(value?: transaction_receipt): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): transaction_wrapper.AsObject;
  static toObject(includeInstance: boolean, msg: transaction_wrapper): transaction_wrapper.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: transaction_wrapper, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): transaction_wrapper;
  static deserializeBinaryFromReader(message: transaction_wrapper, reader: jspb.BinaryReader): transaction_wrapper;
}

export namespace transaction_wrapper {
  export type AsObject = {
    sigTrx?: signed_transaction.AsObject,
    receipt?: transaction_receipt.AsObject,
  }
}

export class block_header extends jspb.Message {
  hasPrevious(): boolean;
  clearPrevious(): void;
  getPrevious(): prototype_type_pb.sha256 | undefined;
  setPrevious(value?: prototype_type_pb.sha256): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): prototype_type_pb.time_point_sec | undefined;
  setTimestamp(value?: prototype_type_pb.time_point_sec): void;

  hasWitness(): boolean;
  clearWitness(): void;
  getWitness(): prototype_type_pb.account_name | undefined;
  setWitness(value?: prototype_type_pb.account_name): void;

  hasTransactionMerkleRoot(): boolean;
  clearTransactionMerkleRoot(): void;
  getTransactionMerkleRoot(): prototype_type_pb.sha256 | undefined;
  setTransactionMerkleRoot(value?: prototype_type_pb.sha256): void;

  getPrevApplyHash(): number;
  setPrevApplyHash(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): block_header.AsObject;
  static toObject(includeInstance: boolean, msg: block_header): block_header.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: block_header, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): block_header;
  static deserializeBinaryFromReader(message: block_header, reader: jspb.BinaryReader): block_header;
}

export namespace block_header {
  export type AsObject = {
    previous?: prototype_type_pb.sha256.AsObject,
    timestamp?: prototype_type_pb.time_point_sec.AsObject,
    witness?: prototype_type_pb.account_name.AsObject,
    transactionMerkleRoot?: prototype_type_pb.sha256.AsObject,
    prevApplyHash: number,
  }
}

export class signed_block_header extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): block_header | undefined;
  setHeader(value?: block_header): void;

  hasWitnessSignature(): boolean;
  clearWitnessSignature(): void;
  getWitnessSignature(): prototype_type_pb.signature_type | undefined;
  setWitnessSignature(value?: prototype_type_pb.signature_type): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): signed_block_header.AsObject;
  static toObject(includeInstance: boolean, msg: signed_block_header): signed_block_header.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: signed_block_header, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): signed_block_header;
  static deserializeBinaryFromReader(message: signed_block_header, reader: jspb.BinaryReader): signed_block_header;
}

export namespace signed_block_header {
  export type AsObject = {
    header?: block_header.AsObject,
    witnessSignature?: prototype_type_pb.signature_type.AsObject,
  }
}

export class signed_block extends jspb.Message {
  hasSignedHeader(): boolean;
  clearSignedHeader(): void;
  getSignedHeader(): signed_block_header | undefined;
  setSignedHeader(value?: signed_block_header): void;

  clearTransactionsList(): void;
  getTransactionsList(): Array<transaction_wrapper>;
  setTransactionsList(value: Array<transaction_wrapper>): void;
  addTransactions(value?: transaction_wrapper, index?: number): transaction_wrapper;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): signed_block.AsObject;
  static toObject(includeInstance: boolean, msg: signed_block): signed_block.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: signed_block, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): signed_block;
  static deserializeBinaryFromReader(message: signed_block, reader: jspb.BinaryReader): signed_block;
}

export namespace signed_block {
  export type AsObject = {
    signedHeader?: signed_block_header.AsObject,
    transactionsList: Array<transaction_wrapper.AsObject>,
  }
}

export class empty_signed_block extends jspb.Message {
  hasSignedHeader(): boolean;
  clearSignedHeader(): void;
  getSignedHeader(): signed_block_header | undefined;
  setSignedHeader(value?: signed_block_header): void;

  getTrxCount(): number;
  setTrxCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): empty_signed_block.AsObject;
  static toObject(includeInstance: boolean, msg: empty_signed_block): empty_signed_block.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: empty_signed_block, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): empty_signed_block;
  static deserializeBinaryFromReader(message: empty_signed_block, reader: jspb.BinaryReader): empty_signed_block;
}

export namespace empty_signed_block {
  export type AsObject = {
    signedHeader?: signed_block_header.AsObject,
    trxCount: number,
  }
}

