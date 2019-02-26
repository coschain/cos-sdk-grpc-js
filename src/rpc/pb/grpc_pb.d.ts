// package: grpcpb
// file: rpc/pb/grpc.proto

import * as jspb from "google-protobuf";
import * as prototype_type_pb from "../../prototype/type_pb";
import * as prototype_multi_id_pb from "../../prototype/multi_id_pb";
import * as prototype_transaction_pb from "../../prototype/transaction_pb";

export class GetTableContentRequest extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): void;

  getContranct(): string;
  setContranct(value: string): void;

  getTable(): string;
  setTable(value: string): void;

  getField(): string;
  setField(value: string): void;

  getBegin(): string;
  setBegin(value: string): void;

  getEnd(): string;
  setEnd(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTableContentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTableContentRequest): GetTableContentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTableContentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTableContentRequest;
  static deserializeBinaryFromReader(message: GetTableContentRequest, reader: jspb.BinaryReader): GetTableContentRequest;
}

export namespace GetTableContentRequest {
  export type AsObject = {
    owner: string,
    contranct: string,
    table: string,
    field: string,
    begin: string,
    end: string,
  }
}

export class TableContentResponse extends jspb.Message {
  getTableContent(): string;
  setTableContent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableContentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TableContentResponse): TableContentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TableContentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableContentResponse;
  static deserializeBinaryFromReader(message: TableContentResponse, reader: jspb.BinaryReader): TableContentResponse;
}

export namespace TableContentResponse {
  export type AsObject = {
    tableContent: string,
  }
}

export class GetAccountByNameRequest extends jspb.Message {
  hasAccountName(): boolean;
  clearAccountName(): void;
  getAccountName(): prototype_type_pb.account_name | undefined;
  setAccountName(value?: prototype_type_pb.account_name): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountByNameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountByNameRequest): GetAccountByNameRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountByNameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountByNameRequest;
  static deserializeBinaryFromReader(message: GetAccountByNameRequest, reader: jspb.BinaryReader): GetAccountByNameRequest;
}

export namespace GetAccountByNameRequest {
  export type AsObject = {
    accountName?: prototype_type_pb.account_name.AsObject,
  }
}

export class GetAccountRewardByNameRequest extends jspb.Message {
  hasAccountName(): boolean;
  clearAccountName(): void;
  getAccountName(): prototype_type_pb.account_name | undefined;
  setAccountName(value?: prototype_type_pb.account_name): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountRewardByNameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountRewardByNameRequest): GetAccountRewardByNameRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountRewardByNameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountRewardByNameRequest;
  static deserializeBinaryFromReader(message: GetAccountRewardByNameRequest, reader: jspb.BinaryReader): GetAccountRewardByNameRequest;
}

export namespace GetAccountRewardByNameRequest {
  export type AsObject = {
    accountName?: prototype_type_pb.account_name.AsObject,
  }
}

export class AccountRewardResponse extends jspb.Message {
  hasAccountName(): boolean;
  clearAccountName(): void;
  getAccountName(): prototype_type_pb.account_name | undefined;
  setAccountName(value?: prototype_type_pb.account_name): void;

  hasReward(): boolean;
  clearReward(): void;
  getReward(): prototype_type_pb.vest | undefined;
  setReward(value?: prototype_type_pb.vest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountRewardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AccountRewardResponse): AccountRewardResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountRewardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountRewardResponse;
  static deserializeBinaryFromReader(message: AccountRewardResponse, reader: jspb.BinaryReader): AccountRewardResponse;
}

export namespace AccountRewardResponse {
  export type AsObject = {
    accountName?: prototype_type_pb.account_name.AsObject,
    reward?: prototype_type_pb.vest.AsObject,
  }
}

export class AccountResponse extends jspb.Message {
  hasAccountName(): boolean;
  clearAccountName(): void;
  getAccountName(): prototype_type_pb.account_name | undefined;
  setAccountName(value?: prototype_type_pb.account_name): void;

  hasCoin(): boolean;
  clearCoin(): void;
  getCoin(): prototype_type_pb.coin | undefined;
  setCoin(value?: prototype_type_pb.coin): void;

  hasVest(): boolean;
  clearVest(): void;
  getVest(): prototype_type_pb.vest | undefined;
  setVest(value?: prototype_type_pb.vest): void;

  clearPublicKeysList(): void;
  getPublicKeysList(): Array<prototype_type_pb.public_key_type>;
  setPublicKeysList(value: Array<prototype_type_pb.public_key_type>): void;
  addPublicKeys(value?: prototype_type_pb.public_key_type, index?: number): prototype_type_pb.public_key_type;

  hasCreatedTime(): boolean;
  clearCreatedTime(): void;
  getCreatedTime(): prototype_type_pb.time_point_sec | undefined;
  setCreatedTime(value?: prototype_type_pb.time_point_sec): void;

  hasWitness(): boolean;
  clearWitness(): void;
  getWitness(): WitnessResponse | undefined;
  setWitness(value?: WitnessResponse): void;

  hasDgpo(): boolean;
  clearDgpo(): void;
  getDgpo(): prototype_type_pb.dynamic_properties | undefined;
  setDgpo(value?: prototype_type_pb.dynamic_properties): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AccountResponse): AccountResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountResponse;
  static deserializeBinaryFromReader(message: AccountResponse, reader: jspb.BinaryReader): AccountResponse;
}

export namespace AccountResponse {
  export type AsObject = {
    accountName?: prototype_type_pb.account_name.AsObject,
    coin?: prototype_type_pb.coin.AsObject,
    vest?: prototype_type_pb.vest.AsObject,
    publicKeysList: Array<prototype_type_pb.public_key_type.AsObject>,
    createdTime?: prototype_type_pb.time_point_sec.AsObject,
    witness?: WitnessResponse.AsObject,
    dgpo?: prototype_type_pb.dynamic_properties.AsObject,
  }
}

export class GetFollowerListByNameRequest extends jspb.Message {
  hasStart(): boolean;
  clearStart(): void;
  getStart(): prototype_multi_id_pb.follower_created_order | undefined;
  setStart(value?: prototype_multi_id_pb.follower_created_order): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): prototype_multi_id_pb.follower_created_order | undefined;
  setEnd(value?: prototype_multi_id_pb.follower_created_order): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFollowerListByNameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFollowerListByNameRequest): GetFollowerListByNameRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFollowerListByNameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFollowerListByNameRequest;
  static deserializeBinaryFromReader(message: GetFollowerListByNameRequest, reader: jspb.BinaryReader): GetFollowerListByNameRequest;
}

export namespace GetFollowerListByNameRequest {
  export type AsObject = {
    start?: prototype_multi_id_pb.follower_created_order.AsObject,
    end?: prototype_multi_id_pb.follower_created_order.AsObject,
    limit: number,
  }
}

export class GetFollowerListByNameResponse extends jspb.Message {
  clearFollowerListList(): void;
  getFollowerListList(): Array<prototype_type_pb.account_name>;
  setFollowerListList(value: Array<prototype_type_pb.account_name>): void;
  addFollowerList(value?: prototype_type_pb.account_name, index?: number): prototype_type_pb.account_name;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFollowerListByNameResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFollowerListByNameResponse): GetFollowerListByNameResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFollowerListByNameResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFollowerListByNameResponse;
  static deserializeBinaryFromReader(message: GetFollowerListByNameResponse, reader: jspb.BinaryReader): GetFollowerListByNameResponse;
}

export namespace GetFollowerListByNameResponse {
  export type AsObject = {
    followerListList: Array<prototype_type_pb.account_name.AsObject>,
  }
}

export class GetFollowingListByNameRequest extends jspb.Message {
  hasStart(): boolean;
  clearStart(): void;
  getStart(): prototype_multi_id_pb.following_created_order | undefined;
  setStart(value?: prototype_multi_id_pb.following_created_order): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): prototype_multi_id_pb.following_created_order | undefined;
  setEnd(value?: prototype_multi_id_pb.following_created_order): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFollowingListByNameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFollowingListByNameRequest): GetFollowingListByNameRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFollowingListByNameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFollowingListByNameRequest;
  static deserializeBinaryFromReader(message: GetFollowingListByNameRequest, reader: jspb.BinaryReader): GetFollowingListByNameRequest;
}

export namespace GetFollowingListByNameRequest {
  export type AsObject = {
    start?: prototype_multi_id_pb.following_created_order.AsObject,
    end?: prototype_multi_id_pb.following_created_order.AsObject,
    limit: number,
  }
}

export class GetFollowingListByNameResponse extends jspb.Message {
  clearFollowingListList(): void;
  getFollowingListList(): Array<prototype_type_pb.account_name>;
  setFollowingListList(value: Array<prototype_type_pb.account_name>): void;
  addFollowingList(value?: prototype_type_pb.account_name, index?: number): prototype_type_pb.account_name;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFollowingListByNameResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFollowingListByNameResponse): GetFollowingListByNameResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFollowingListByNameResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFollowingListByNameResponse;
  static deserializeBinaryFromReader(message: GetFollowingListByNameResponse, reader: jspb.BinaryReader): GetFollowingListByNameResponse;
}

export namespace GetFollowingListByNameResponse {
  export type AsObject = {
    followingListList: Array<prototype_type_pb.account_name.AsObject>,
  }
}

export class GetFollowCountByNameRequest extends jspb.Message {
  hasAccountName(): boolean;
  clearAccountName(): void;
  getAccountName(): prototype_type_pb.account_name | undefined;
  setAccountName(value?: prototype_type_pb.account_name): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFollowCountByNameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFollowCountByNameRequest): GetFollowCountByNameRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFollowCountByNameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFollowCountByNameRequest;
  static deserializeBinaryFromReader(message: GetFollowCountByNameRequest, reader: jspb.BinaryReader): GetFollowCountByNameRequest;
}

export namespace GetFollowCountByNameRequest {
  export type AsObject = {
    accountName?: prototype_type_pb.account_name.AsObject,
  }
}

export class GetFollowCountByNameResponse extends jspb.Message {
  getFerCnt(): number;
  setFerCnt(value: number): void;

  getFingCnt(): number;
  setFingCnt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFollowCountByNameResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFollowCountByNameResponse): GetFollowCountByNameResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFollowCountByNameResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFollowCountByNameResponse;
  static deserializeBinaryFromReader(message: GetFollowCountByNameResponse, reader: jspb.BinaryReader): GetFollowCountByNameResponse;
}

export namespace GetFollowCountByNameResponse {
  export type AsObject = {
    ferCnt: number,
    fingCnt: number,
  }
}

export class WitnessResponse extends jspb.Message {
  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): prototype_type_pb.account_name | undefined;
  setOwner(value?: prototype_type_pb.account_name): void;

  hasWitnessScheduleType(): boolean;
  clearWitnessScheduleType(): void;
  getWitnessScheduleType(): prototype_type_pb.witness_schedule_type | undefined;
  setWitnessScheduleType(value?: prototype_type_pb.witness_schedule_type): void;

  hasCreatedTime(): boolean;
  clearCreatedTime(): void;
  getCreatedTime(): prototype_type_pb.time_point_sec | undefined;
  setCreatedTime(value?: prototype_type_pb.time_point_sec): void;

  getUrl(): string;
  setUrl(value: string): void;

  getLastConfirmedBlockNum(): number;
  setLastConfirmedBlockNum(value: number): void;

  getTotalMissed(): number;
  setTotalMissed(value: number): void;

  getVoteCount(): number;
  setVoteCount(value: number): void;

  hasSigningKey(): boolean;
  clearSigningKey(): void;
  getSigningKey(): prototype_type_pb.public_key_type | undefined;
  setSigningKey(value?: prototype_type_pb.public_key_type): void;

  hasLastWork(): boolean;
  clearLastWork(): void;
  getLastWork(): prototype_type_pb.sha256 | undefined;
  setLastWork(value?: prototype_type_pb.sha256): void;

  getRunningVersion(): number;
  setRunningVersion(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WitnessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WitnessResponse): WitnessResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WitnessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WitnessResponse;
  static deserializeBinaryFromReader(message: WitnessResponse, reader: jspb.BinaryReader): WitnessResponse;
}

export namespace WitnessResponse {
  export type AsObject = {
    owner?: prototype_type_pb.account_name.AsObject,
    witnessScheduleType?: prototype_type_pb.witness_schedule_type.AsObject,
    createdTime?: prototype_type_pb.time_point_sec.AsObject,
    url: string,
    lastConfirmedBlockNum: number,
    totalMissed: number,
    voteCount: number,
    signingKey?: prototype_type_pb.public_key_type.AsObject,
    lastWork?: prototype_type_pb.sha256.AsObject,
    runningVersion: number,
  }
}

export class GetWitnessListRequest extends jspb.Message {
  hasStart(): boolean;
  clearStart(): void;
  getStart(): prototype_type_pb.account_name | undefined;
  setStart(value?: prototype_type_pb.account_name): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWitnessListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWitnessListRequest): GetWitnessListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWitnessListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWitnessListRequest;
  static deserializeBinaryFromReader(message: GetWitnessListRequest, reader: jspb.BinaryReader): GetWitnessListRequest;
}

export namespace GetWitnessListRequest {
  export type AsObject = {
    start?: prototype_type_pb.account_name.AsObject,
    limit: number,
  }
}

export class GetWitnessListResponse extends jspb.Message {
  clearWitnessListList(): void;
  getWitnessListList(): Array<WitnessResponse>;
  setWitnessListList(value: Array<WitnessResponse>): void;
  addWitnessList(value?: WitnessResponse, index?: number): WitnessResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWitnessListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetWitnessListResponse): GetWitnessListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWitnessListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWitnessListResponse;
  static deserializeBinaryFromReader(message: GetWitnessListResponse, reader: jspb.BinaryReader): GetWitnessListResponse;
}

export namespace GetWitnessListResponse {
  export type AsObject = {
    witnessListList: Array<WitnessResponse.AsObject>,
  }
}

export class PostResponse extends jspb.Message {
  getPostId(): number;
  setPostId(value: number): void;

  getCategory(): string;
  setCategory(value: string): void;

  hasParentAuthor(): boolean;
  clearParentAuthor(): void;
  getParentAuthor(): prototype_type_pb.account_name | undefined;
  setParentAuthor(value?: prototype_type_pb.account_name): void;

  hasAuthor(): boolean;
  clearAuthor(): void;
  getAuthor(): prototype_type_pb.account_name | undefined;
  setAuthor(value?: prototype_type_pb.account_name): void;

  getTitle(): string;
  setTitle(value: string): void;

  getBody(): string;
  setBody(value: string): void;

  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): prototype_type_pb.time_point_sec | undefined;
  setCreated(value?: prototype_type_pb.time_point_sec): void;

  hasLastPayout(): boolean;
  clearLastPayout(): void;
  getLastPayout(): prototype_type_pb.time_point_sec | undefined;
  setLastPayout(value?: prototype_type_pb.time_point_sec): void;

  getDepth(): number;
  setDepth(value: number): void;

  getChildren(): number;
  setChildren(value: number): void;

  getRootId(): number;
  setRootId(value: number): void;

  getParentId(): number;
  setParentId(value: number): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  clearBeneficiariesList(): void;
  getBeneficiariesList(): Array<prototype_type_pb.beneficiary_route_type>;
  setBeneficiariesList(value: Array<prototype_type_pb.beneficiary_route_type>): void;
  addBeneficiaries(value?: prototype_type_pb.beneficiary_route_type, index?: number): prototype_type_pb.beneficiary_route_type;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostResponse): PostResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostResponse;
  static deserializeBinaryFromReader(message: PostResponse, reader: jspb.BinaryReader): PostResponse;
}

export namespace PostResponse {
  export type AsObject = {
    postId: number,
    category: string,
    parentAuthor?: prototype_type_pb.account_name.AsObject,
    author?: prototype_type_pb.account_name.AsObject,
    title: string,
    body: string,
    created?: prototype_type_pb.time_point_sec.AsObject,
    lastPayout?: prototype_type_pb.time_point_sec.AsObject,
    depth: number,
    children: number,
    rootId: number,
    parentId: number,
    tagsList: Array<string>,
    beneficiariesList: Array<prototype_type_pb.beneficiary_route_type.AsObject>,
  }
}

export class GetPostListByCreatedRequest extends jspb.Message {
  hasStart(): boolean;
  clearStart(): void;
  getStart(): prototype_multi_id_pb.post_created_order | undefined;
  setStart(value?: prototype_multi_id_pb.post_created_order): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): prototype_multi_id_pb.post_created_order | undefined;
  setEnd(value?: prototype_multi_id_pb.post_created_order): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPostListByCreatedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPostListByCreatedRequest): GetPostListByCreatedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPostListByCreatedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPostListByCreatedRequest;
  static deserializeBinaryFromReader(message: GetPostListByCreatedRequest, reader: jspb.BinaryReader): GetPostListByCreatedRequest;
}

export namespace GetPostListByCreatedRequest {
  export type AsObject = {
    start?: prototype_multi_id_pb.post_created_order.AsObject,
    end?: prototype_multi_id_pb.post_created_order.AsObject,
    limit: number,
  }
}

export class GetPostListByCreatedResponse extends jspb.Message {
  clearPostListList(): void;
  getPostListList(): Array<PostResponse>;
  setPostListList(value: Array<PostResponse>): void;
  addPostList(value?: PostResponse, index?: number): PostResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPostListByCreatedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPostListByCreatedResponse): GetPostListByCreatedResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPostListByCreatedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPostListByCreatedResponse;
  static deserializeBinaryFromReader(message: GetPostListByCreatedResponse, reader: jspb.BinaryReader): GetPostListByCreatedResponse;
}

export namespace GetPostListByCreatedResponse {
  export type AsObject = {
    postListList: Array<PostResponse.AsObject>,
  }
}

export class GetReplyListByPostIdRequest extends jspb.Message {
  hasStart(): boolean;
  clearStart(): void;
  getStart(): prototype_multi_id_pb.reply_created_order | undefined;
  setStart(value?: prototype_multi_id_pb.reply_created_order): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): prototype_multi_id_pb.reply_created_order | undefined;
  setEnd(value?: prototype_multi_id_pb.reply_created_order): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReplyListByPostIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetReplyListByPostIdRequest): GetReplyListByPostIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetReplyListByPostIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReplyListByPostIdRequest;
  static deserializeBinaryFromReader(message: GetReplyListByPostIdRequest, reader: jspb.BinaryReader): GetReplyListByPostIdRequest;
}

export namespace GetReplyListByPostIdRequest {
  export type AsObject = {
    start?: prototype_multi_id_pb.reply_created_order.AsObject,
    end?: prototype_multi_id_pb.reply_created_order.AsObject,
    limit: number,
  }
}

export class GetReplyListByPostIdResponse extends jspb.Message {
  clearReplyListList(): void;
  getReplyListList(): Array<PostResponse>;
  setReplyListList(value: Array<PostResponse>): void;
  addReplyList(value?: PostResponse, index?: number): PostResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReplyListByPostIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetReplyListByPostIdResponse): GetReplyListByPostIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetReplyListByPostIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReplyListByPostIdResponse;
  static deserializeBinaryFromReader(message: GetReplyListByPostIdResponse, reader: jspb.BinaryReader): GetReplyListByPostIdResponse;
}

export namespace GetReplyListByPostIdResponse {
  export type AsObject = {
    replyListList: Array<PostResponse.AsObject>,
  }
}

export class GetBlockTransactionsByNumRequest extends jspb.Message {
  getBlockNum(): number;
  setBlockNum(value: number): void;

  getStart(): number;
  setStart(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockTransactionsByNumRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockTransactionsByNumRequest): GetBlockTransactionsByNumRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlockTransactionsByNumRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockTransactionsByNumRequest;
  static deserializeBinaryFromReader(message: GetBlockTransactionsByNumRequest, reader: jspb.BinaryReader): GetBlockTransactionsByNumRequest;
}

export namespace GetBlockTransactionsByNumRequest {
  export type AsObject = {
    blockNum: number,
    start: number,
    limit: number,
  }
}

export class GetBlockTransactionsByNumResponse extends jspb.Message {
  clearTransactionsList(): void;
  getTransactionsList(): Array<prototype_transaction_pb.signed_transaction>;
  setTransactionsList(value: Array<prototype_transaction_pb.signed_transaction>): void;
  addTransactions(value?: prototype_transaction_pb.signed_transaction, index?: number): prototype_transaction_pb.signed_transaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockTransactionsByNumResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockTransactionsByNumResponse): GetBlockTransactionsByNumResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlockTransactionsByNumResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockTransactionsByNumResponse;
  static deserializeBinaryFromReader(message: GetBlockTransactionsByNumResponse, reader: jspb.BinaryReader): GetBlockTransactionsByNumResponse;
}

export namespace GetBlockTransactionsByNumResponse {
  export type AsObject = {
    transactionsList: Array<prototype_transaction_pb.signed_transaction.AsObject>,
  }
}

export class GetTrxByIdRequest extends jspb.Message {
  hasTrxId(): boolean;
  clearTrxId(): void;
  getTrxId(): prototype_type_pb.sha256 | undefined;
  setTrxId(value?: prototype_type_pb.sha256): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTrxByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTrxByIdRequest): GetTrxByIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTrxByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTrxByIdRequest;
  static deserializeBinaryFromReader(message: GetTrxByIdRequest, reader: jspb.BinaryReader): GetTrxByIdRequest;
}

export namespace GetTrxByIdRequest {
  export type AsObject = {
    trxId?: prototype_type_pb.sha256.AsObject,
  }
}

export class GetTrxByIdResponse extends jspb.Message {
  hasTrx(): boolean;
  clearTrx(): void;
  getTrx(): prototype_transaction_pb.transaction | undefined;
  setTrx(value?: prototype_transaction_pb.transaction): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTrxByIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTrxByIdResponse): GetTrxByIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTrxByIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTrxByIdResponse;
  static deserializeBinaryFromReader(message: GetTrxByIdResponse, reader: jspb.BinaryReader): GetTrxByIdResponse;
}

export namespace GetTrxByIdResponse {
  export type AsObject = {
    trx?: prototype_transaction_pb.transaction.AsObject,
  }
}

export class GetChainStateResponse extends jspb.Message {
  hasProps(): boolean;
  clearProps(): void;
  getProps(): prototype_type_pb.dynamic_properties | undefined;
  setProps(value?: prototype_type_pb.dynamic_properties): void;

  clearBlocksList(): void;
  getBlocksList(): Array<prototype_transaction_pb.empty_signed_block>;
  setBlocksList(value: Array<prototype_transaction_pb.empty_signed_block>): void;
  addBlocks(value?: prototype_transaction_pb.empty_signed_block, index?: number): prototype_transaction_pb.empty_signed_block;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChainStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetChainStateResponse): GetChainStateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetChainStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChainStateResponse;
  static deserializeBinaryFromReader(message: GetChainStateResponse, reader: jspb.BinaryReader): GetChainStateResponse;
}

export namespace GetChainStateResponse {
  export type AsObject = {
    props?: prototype_type_pb.dynamic_properties.AsObject,
    blocksList: Array<prototype_transaction_pb.empty_signed_block.AsObject>,
  }
}

export class GetStatResponse extends jspb.Message {
  hasProps(): boolean;
  clearProps(): void;
  getProps(): prototype_type_pb.dynamic_properties | undefined;
  setProps(value?: prototype_type_pb.dynamic_properties): void;

  clearDailyTrxCountsList(): void;
  getDailyTrxCountsList(): Array<number>;
  setDailyTrxCountsList(value: Array<number>): void;
  addDailyTrxCounts(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStatResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetStatResponse): GetStatResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStatResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStatResponse;
  static deserializeBinaryFromReader(message: GetStatResponse, reader: jspb.BinaryReader): GetStatResponse;
}

export namespace GetStatResponse {
  export type AsObject = {
    props?: prototype_type_pb.dynamic_properties.AsObject,
    dailyTrxCountsList: Array<number>,
  }
}

export class BroadcastTrxRequest extends jspb.Message {
  hasTransaction(): boolean;
  clearTransaction(): void;
  getTransaction(): prototype_transaction_pb.signed_transaction | undefined;
  setTransaction(value?: prototype_transaction_pb.signed_transaction): void;

  getOnlyDeliver(): boolean;
  setOnlyDeliver(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BroadcastTrxRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BroadcastTrxRequest): BroadcastTrxRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BroadcastTrxRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BroadcastTrxRequest;
  static deserializeBinaryFromReader(message: BroadcastTrxRequest, reader: jspb.BinaryReader): BroadcastTrxRequest;
}

export namespace BroadcastTrxRequest {
  export type AsObject = {
    transaction?: prototype_transaction_pb.signed_transaction.AsObject,
    onlyDeliver: boolean,
  }
}

export class BroadcastTrxResponse extends jspb.Message {
  hasInvoice(): boolean;
  clearInvoice(): void;
  getInvoice(): prototype_transaction_pb.transaction_receipt_with_info | undefined;
  setInvoice(value?: prototype_transaction_pb.transaction_receipt_with_info): void;

  getStatus(): number;
  setStatus(value: number): void;

  getMsg(): string;
  setMsg(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BroadcastTrxResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BroadcastTrxResponse): BroadcastTrxResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BroadcastTrxResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BroadcastTrxResponse;
  static deserializeBinaryFromReader(message: BroadcastTrxResponse, reader: jspb.BinaryReader): BroadcastTrxResponse;
}

export namespace BroadcastTrxResponse {
  export type AsObject = {
    invoice?: prototype_transaction_pb.transaction_receipt_with_info.AsObject,
    status: number,
    msg: string,
  }
}

export class NonParamsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NonParamsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NonParamsRequest): NonParamsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NonParamsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NonParamsRequest;
  static deserializeBinaryFromReader(message: NonParamsRequest, reader: jspb.BinaryReader): NonParamsRequest;
}

export namespace NonParamsRequest {
  export type AsObject = {
  }
}

export class CallResponse extends jspb.Message {
  getResult(): string;
  setResult(value: string): void;

  getExecuteErr(): string;
  setExecuteErr(value: string): void;

  getEstimateGas(): string;
  setEstimateGas(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CallResponse): CallResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallResponse;
  static deserializeBinaryFromReader(message: CallResponse, reader: jspb.BinaryReader): CallResponse;
}

export namespace CallResponse {
  export type AsObject = {
    result: string,
    executeErr: string,
    estimateGas: string,
  }
}

