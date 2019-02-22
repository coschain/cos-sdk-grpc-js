// package: prototype
// file: prototype/multi_id.proto

import * as jspb from "google-protobuf";
import * as prototype_type_pb from "../prototype/type_pb";

export class follower_relation extends jspb.Message {
  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): prototype_type_pb.account_name | undefined;
  setAccount(value?: prototype_type_pb.account_name): void;

  hasFollower(): boolean;
  clearFollower(): void;
  getFollower(): prototype_type_pb.account_name | undefined;
  setFollower(value?: prototype_type_pb.account_name): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): follower_relation.AsObject;
  static toObject(includeInstance: boolean, msg: follower_relation): follower_relation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: follower_relation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): follower_relation;
  static deserializeBinaryFromReader(message: follower_relation, reader: jspb.BinaryReader): follower_relation;
}

export namespace follower_relation {
  export type AsObject = {
    account?: prototype_type_pb.account_name.AsObject,
    follower?: prototype_type_pb.account_name.AsObject,
  }
}

export class following_relation extends jspb.Message {
  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): prototype_type_pb.account_name | undefined;
  setAccount(value?: prototype_type_pb.account_name): void;

  hasFollowing(): boolean;
  clearFollowing(): void;
  getFollowing(): prototype_type_pb.account_name | undefined;
  setFollowing(value?: prototype_type_pb.account_name): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): following_relation.AsObject;
  static toObject(includeInstance: boolean, msg: following_relation): following_relation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: following_relation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): following_relation;
  static deserializeBinaryFromReader(message: following_relation, reader: jspb.BinaryReader): following_relation;
}

export namespace following_relation {
  export type AsObject = {
    account?: prototype_type_pb.account_name.AsObject,
    following?: prototype_type_pb.account_name.AsObject,
  }
}

export class follower_created_order extends jspb.Message {
  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): prototype_type_pb.account_name | undefined;
  setAccount(value?: prototype_type_pb.account_name): void;

  hasCreatedTime(): boolean;
  clearCreatedTime(): void;
  getCreatedTime(): prototype_type_pb.time_point_sec | undefined;
  setCreatedTime(value?: prototype_type_pb.time_point_sec): void;

  hasFollower(): boolean;
  clearFollower(): void;
  getFollower(): prototype_type_pb.account_name | undefined;
  setFollower(value?: prototype_type_pb.account_name): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): follower_created_order.AsObject;
  static toObject(includeInstance: boolean, msg: follower_created_order): follower_created_order.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: follower_created_order, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): follower_created_order;
  static deserializeBinaryFromReader(message: follower_created_order, reader: jspb.BinaryReader): follower_created_order;
}

export namespace follower_created_order {
  export type AsObject = {
    account?: prototype_type_pb.account_name.AsObject,
    createdTime?: prototype_type_pb.time_point_sec.AsObject,
    follower?: prototype_type_pb.account_name.AsObject,
  }
}

export class following_created_order extends jspb.Message {
  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): prototype_type_pb.account_name | undefined;
  setAccount(value?: prototype_type_pb.account_name): void;

  hasCreatedTime(): boolean;
  clearCreatedTime(): void;
  getCreatedTime(): prototype_type_pb.time_point_sec | undefined;
  setCreatedTime(value?: prototype_type_pb.time_point_sec): void;

  hasFollowing(): boolean;
  clearFollowing(): void;
  getFollowing(): prototype_type_pb.account_name | undefined;
  setFollowing(value?: prototype_type_pb.account_name): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): following_created_order.AsObject;
  static toObject(includeInstance: boolean, msg: following_created_order): following_created_order.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: following_created_order, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): following_created_order;
  static deserializeBinaryFromReader(message: following_created_order, reader: jspb.BinaryReader): following_created_order;
}

export namespace following_created_order {
  export type AsObject = {
    account?: prototype_type_pb.account_name.AsObject,
    createdTime?: prototype_type_pb.time_point_sec.AsObject,
    following?: prototype_type_pb.account_name.AsObject,
  }
}

export class post_created_order extends jspb.Message {
  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): prototype_type_pb.time_point_sec | undefined;
  setCreated(value?: prototype_type_pb.time_point_sec): void;

  getParentId(): number;
  setParentId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): post_created_order.AsObject;
  static toObject(includeInstance: boolean, msg: post_created_order): post_created_order.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: post_created_order, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): post_created_order;
  static deserializeBinaryFromReader(message: post_created_order, reader: jspb.BinaryReader): post_created_order;
}

export namespace post_created_order {
  export type AsObject = {
    created?: prototype_type_pb.time_point_sec.AsObject,
    parentId: number,
  }
}

export class voter_id extends jspb.Message {
  hasVoter(): boolean;
  clearVoter(): void;
  getVoter(): prototype_type_pb.account_name | undefined;
  setVoter(value?: prototype_type_pb.account_name): void;

  getPostId(): number;
  setPostId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): voter_id.AsObject;
  static toObject(includeInstance: boolean, msg: voter_id): voter_id.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: voter_id, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): voter_id;
  static deserializeBinaryFromReader(message: voter_id, reader: jspb.BinaryReader): voter_id;
}

export namespace voter_id {
  export type AsObject = {
    voter?: prototype_type_pb.account_name.AsObject,
    postId: number,
  }
}

export class bp_voter_id extends jspb.Message {
  hasVoter(): boolean;
  clearVoter(): void;
  getVoter(): prototype_type_pb.account_name | undefined;
  setVoter(value?: prototype_type_pb.account_name): void;

  hasWitness(): boolean;
  clearWitness(): void;
  getWitness(): prototype_type_pb.account_name | undefined;
  setWitness(value?: prototype_type_pb.account_name): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): bp_voter_id.AsObject;
  static toObject(includeInstance: boolean, msg: bp_voter_id): bp_voter_id.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: bp_voter_id, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): bp_voter_id;
  static deserializeBinaryFromReader(message: bp_voter_id, reader: jspb.BinaryReader): bp_voter_id;
}

export namespace bp_voter_id {
  export type AsObject = {
    voter?: prototype_type_pb.account_name.AsObject,
    witness?: prototype_type_pb.account_name.AsObject,
  }
}

export class bp_witness_id extends jspb.Message {
  hasVoter(): boolean;
  clearVoter(): void;
  getVoter(): prototype_type_pb.account_name | undefined;
  setVoter(value?: prototype_type_pb.account_name): void;

  hasWitness(): boolean;
  clearWitness(): void;
  getWitness(): prototype_type_pb.account_name | undefined;
  setWitness(value?: prototype_type_pb.account_name): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): bp_witness_id.AsObject;
  static toObject(includeInstance: boolean, msg: bp_witness_id): bp_witness_id.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: bp_witness_id, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): bp_witness_id;
  static deserializeBinaryFromReader(message: bp_witness_id, reader: jspb.BinaryReader): bp_witness_id;
}

export namespace bp_witness_id {
  export type AsObject = {
    voter?: prototype_type_pb.account_name.AsObject,
    witness?: prototype_type_pb.account_name.AsObject,
  }
}

export class contract_id extends jspb.Message {
  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): prototype_type_pb.account_name | undefined;
  setOwner(value?: prototype_type_pb.account_name): void;

  getCname(): string;
  setCname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): contract_id.AsObject;
  static toObject(includeInstance: boolean, msg: contract_id): contract_id.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: contract_id, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): contract_id;
  static deserializeBinaryFromReader(message: contract_id, reader: jspb.BinaryReader): contract_id;
}

export namespace contract_id {
  export type AsObject = {
    owner?: prototype_type_pb.account_name.AsObject,
    cname: string,
  }
}

export class contract_data_id extends jspb.Message {
  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): prototype_type_pb.account_name | undefined;
  setOwner(value?: prototype_type_pb.account_name): void;

  getCname(): string;
  setCname(value: string): void;

  getPos(): number;
  setPos(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): contract_data_id.AsObject;
  static toObject(includeInstance: boolean, msg: contract_data_id): contract_data_id.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: contract_data_id, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): contract_data_id;
  static deserializeBinaryFromReader(message: contract_data_id, reader: jspb.BinaryReader): contract_data_id;
}

export namespace contract_data_id {
  export type AsObject = {
    owner?: prototype_type_pb.account_name.AsObject,
    cname: string,
    pos: number,
  }
}

export class reply_created_order extends jspb.Message {
  getParentId(): number;
  setParentId(value: number): void;

  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): prototype_type_pb.time_point_sec | undefined;
  setCreated(value?: prototype_type_pb.time_point_sec): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): reply_created_order.AsObject;
  static toObject(includeInstance: boolean, msg: reply_created_order): reply_created_order.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: reply_created_order, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): reply_created_order;
  static deserializeBinaryFromReader(message: reply_created_order, reader: jspb.BinaryReader): reply_created_order;
}

export namespace reply_created_order {
  export type AsObject = {
    parentId: number,
    created?: prototype_type_pb.time_point_sec.AsObject,
  }
}

