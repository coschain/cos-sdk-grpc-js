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

  hasPublicKey(): boolean;
  clearPublicKey(): void;
  getPublicKey(): prototype_type_pb.public_key_type | undefined;
  setPublicKey(value?: prototype_type_pb.public_key_type): void;

  hasCreatedTime(): boolean;
  clearCreatedTime(): void;
  getCreatedTime(): prototype_type_pb.time_point_sec | undefined;
  setCreatedTime(value?: prototype_type_pb.time_point_sec): void;

  hasWitness(): boolean;
  clearWitness(): void;
  getWitness(): WitnessResponse | undefined;
  setWitness(value?: WitnessResponse): void;

  hasState(): boolean;
  clearState(): void;
  getState(): ChainState | undefined;
  setState(value?: ChainState): void;

  getPostCount(): number;
  setPostCount(value: number): void;

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
    publicKey?: prototype_type_pb.public_key_type.AsObject,
    createdTime?: prototype_type_pb.time_point_sec.AsObject,
    witness?: WitnessResponse.AsObject,
    state?: ChainState.AsObject,
    postCount: number,
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
  getPostId(): string;
  setPostId(value: string): void;

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

  getRootId(): string;
  setRootId(value: string): void;

  getParentId(): string;
  setParentId(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  clearBeneficiariesList(): void;
  getBeneficiariesList(): Array<prototype_type_pb.beneficiary_route_type>;
  setBeneficiariesList(value: Array<prototype_type_pb.beneficiary_route_type>): void;
  addBeneficiaries(value?: prototype_type_pb.beneficiary_route_type, index?: number): prototype_type_pb.beneficiary_route_type;

  getVoteCnt(): number;
  setVoteCnt(value: number): void;

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
    postId: string,
    category: string,
    parentAuthor?: prototype_type_pb.account_name.AsObject,
    author?: prototype_type_pb.account_name.AsObject,
    title: string,
    body: string,
    created?: prototype_type_pb.time_point_sec.AsObject,
    lastPayout?: prototype_type_pb.time_point_sec.AsObject,
    depth: number,
    children: number,
    rootId: string,
    parentId: string,
    tagsList: Array<string>,
    beneficiariesList: Array<prototype_type_pb.beneficiary_route_type.AsObject>,
    voteCnt: number,
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
  hasState(): boolean;
  clearState(): void;
  getState(): ChainState | undefined;
  setState(value?: ChainState): void;

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
    state?: ChainState.AsObject,
  }
}

export class GetStatResponse extends jspb.Message {
  hasState(): boolean;
  clearState(): void;
  getState(): ChainState | undefined;
  setState(value?: ChainState): void;

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
    state?: ChainState.AsObject,
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

export class ChainState extends jspb.Message {
  getLastIrreversibleBlockNumber(): number;
  setLastIrreversibleBlockNumber(value: number): void;

  getLastIrreversibleBlockTime(): number;
  setLastIrreversibleBlockTime(value: number): void;

  hasDgpo(): boolean;
  clearDgpo(): void;
  getDgpo(): prototype_type_pb.dynamic_properties | undefined;
  setDgpo(value?: prototype_type_pb.dynamic_properties): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChainState.AsObject;
  static toObject(includeInstance: boolean, msg: ChainState): ChainState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChainState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChainState;
  static deserializeBinaryFromReader(message: ChainState, reader: jspb.BinaryReader): ChainState;
}

export namespace ChainState {
  export type AsObject = {
    lastIrreversibleBlockNumber: number,
    lastIrreversibleBlockTime: number,
    dgpo?: prototype_type_pb.dynamic_properties.AsObject,
  }
}

export class GetBlockListRequest extends jspb.Message {
  getStart(): number;
  setStart(value: number): void;

  getEnd(): number;
  setEnd(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockListRequest): GetBlockListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlockListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockListRequest;
  static deserializeBinaryFromReader(message: GetBlockListRequest, reader: jspb.BinaryReader): GetBlockListRequest;
}

export namespace GetBlockListRequest {
  export type AsObject = {
    start: number,
    end: number,
    limit: number,
  }
}

export class BlockInfo extends jspb.Message {
  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): prototype_type_pb.time_point_sec | undefined;
  setTimestamp(value?: prototype_type_pb.time_point_sec): void;

  getBlockHeight(): string;
  setBlockHeight(value: string): void;

  getTrxCount(): number;
  setTrxCount(value: number): void;

  hasWitness(): boolean;
  clearWitness(): void;
  getWitness(): prototype_type_pb.account_name | undefined;
  setWitness(value?: prototype_type_pb.account_name): void;

  hasBlockId(): boolean;
  clearBlockId(): void;
  getBlockId(): prototype_type_pb.sha256 | undefined;
  setBlockId(value?: prototype_type_pb.sha256): void;

  hasPreId(): boolean;
  clearPreId(): void;
  getPreId(): prototype_type_pb.sha256 | undefined;
  setPreId(value?: prototype_type_pb.sha256): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockInfo.AsObject;
  static toObject(includeInstance: boolean, msg: BlockInfo): BlockInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockInfo;
  static deserializeBinaryFromReader(message: BlockInfo, reader: jspb.BinaryReader): BlockInfo;
}

export namespace BlockInfo {
  export type AsObject = {
    timestamp?: prototype_type_pb.time_point_sec.AsObject,
    blockHeight: string,
    trxCount: number,
    witness?: prototype_type_pb.account_name.AsObject,
    blockId?: prototype_type_pb.sha256.AsObject,
    preId?: prototype_type_pb.sha256.AsObject,
  }
}

export class GetBlockListResponse extends jspb.Message {
  clearBlocksList(): void;
  getBlocksList(): Array<BlockInfo>;
  setBlocksList(value: Array<BlockInfo>): void;
  addBlocks(value?: BlockInfo, index?: number): BlockInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockListResponse): GetBlockListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlockListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockListResponse;
  static deserializeBinaryFromReader(message: GetBlockListResponse, reader: jspb.BinaryReader): GetBlockListResponse;
}

export namespace GetBlockListResponse {
  export type AsObject = {
    blocksList: Array<BlockInfo.AsObject>,
  }
}

export class GetSignedBlockRequest extends jspb.Message {
  getStart(): number;
  setStart(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSignedBlockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSignedBlockRequest): GetSignedBlockRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSignedBlockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSignedBlockRequest;
  static deserializeBinaryFromReader(message: GetSignedBlockRequest, reader: jspb.BinaryReader): GetSignedBlockRequest;
}

export namespace GetSignedBlockRequest {
  export type AsObject = {
    start: number,
  }
}

export class GetSignedBlockResponse extends jspb.Message {
  hasBlock(): boolean;
  clearBlock(): void;
  getBlock(): prototype_transaction_pb.signed_block | undefined;
  setBlock(value?: prototype_transaction_pb.signed_block): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSignedBlockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSignedBlockResponse): GetSignedBlockResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSignedBlockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSignedBlockResponse;
  static deserializeBinaryFromReader(message: GetSignedBlockResponse, reader: jspb.BinaryReader): GetSignedBlockResponse;
}

export namespace GetSignedBlockResponse {
  export type AsObject = {
    block?: prototype_transaction_pb.signed_block.AsObject,
  }
}

export class GetAccountListByBalanceRequest extends jspb.Message {
  hasStart(): boolean;
  clearStart(): void;
  getStart(): prototype_type_pb.coin | undefined;
  setStart(value?: prototype_type_pb.coin): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): prototype_type_pb.coin | undefined;
  setEnd(value?: prototype_type_pb.coin): void;

  hasLastAccount(): boolean;
  clearLastAccount(): void;
  getLastAccount(): AccountResponse | undefined;
  setLastAccount(value?: AccountResponse): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountListByBalanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountListByBalanceRequest): GetAccountListByBalanceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountListByBalanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountListByBalanceRequest;
  static deserializeBinaryFromReader(message: GetAccountListByBalanceRequest, reader: jspb.BinaryReader): GetAccountListByBalanceRequest;
}

export namespace GetAccountListByBalanceRequest {
  export type AsObject = {
    start?: prototype_type_pb.coin.AsObject,
    end?: prototype_type_pb.coin.AsObject,
    lastAccount?: AccountResponse.AsObject,
    limit: number,
  }
}

export class GetAccountListResponse extends jspb.Message {
  clearListList(): void;
  getListList(): Array<AccountResponse>;
  setListList(value: Array<AccountResponse>): void;
  addList(value?: AccountResponse, index?: number): AccountResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountListResponse): GetAccountListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountListResponse;
  static deserializeBinaryFromReader(message: GetAccountListResponse, reader: jspb.BinaryReader): GetAccountListResponse;
}

export namespace GetAccountListResponse {
  export type AsObject = {
    listList: Array<AccountResponse.AsObject>,
  }
}

export class DailyTotalTrx extends jspb.Message {
  hasDate(): boolean;
  clearDate(): void;
  getDate(): prototype_type_pb.time_point_sec | undefined;
  setDate(value?: prototype_type_pb.time_point_sec): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DailyTotalTrx.AsObject;
  static toObject(includeInstance: boolean, msg: DailyTotalTrx): DailyTotalTrx.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DailyTotalTrx, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DailyTotalTrx;
  static deserializeBinaryFromReader(message: DailyTotalTrx, reader: jspb.BinaryReader): DailyTotalTrx;
}

export namespace DailyTotalTrx {
  export type AsObject = {
    date?: prototype_type_pb.time_point_sec.AsObject,
    count: number,
  }
}

export class GetDailyTotalTrxRequest extends jspb.Message {
  hasStart(): boolean;
  clearStart(): void;
  getStart(): prototype_type_pb.time_point_sec | undefined;
  setStart(value?: prototype_type_pb.time_point_sec): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): prototype_type_pb.time_point_sec | undefined;
  setEnd(value?: prototype_type_pb.time_point_sec): void;

  hasLastInfo(): boolean;
  clearLastInfo(): void;
  getLastInfo(): DailyTotalTrx | undefined;
  setLastInfo(value?: DailyTotalTrx): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDailyTotalTrxRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDailyTotalTrxRequest): GetDailyTotalTrxRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDailyTotalTrxRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDailyTotalTrxRequest;
  static deserializeBinaryFromReader(message: GetDailyTotalTrxRequest, reader: jspb.BinaryReader): GetDailyTotalTrxRequest;
}

export namespace GetDailyTotalTrxRequest {
  export type AsObject = {
    start?: prototype_type_pb.time_point_sec.AsObject,
    end?: prototype_type_pb.time_point_sec.AsObject,
    lastInfo?: DailyTotalTrx.AsObject,
    limit: number,
  }
}

export class GetDailyTotalTrxResponse extends jspb.Message {
  clearListList(): void;
  getListList(): Array<DailyTotalTrx>;
  setListList(value: Array<DailyTotalTrx>): void;
  addList(value?: DailyTotalTrx, index?: number): DailyTotalTrx;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDailyTotalTrxResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDailyTotalTrxResponse): GetDailyTotalTrxResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDailyTotalTrxResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDailyTotalTrxResponse;
  static deserializeBinaryFromReader(message: GetDailyTotalTrxResponse, reader: jspb.BinaryReader): GetDailyTotalTrxResponse;
}

export namespace GetDailyTotalTrxResponse {
  export type AsObject = {
    listList: Array<DailyTotalTrx.AsObject>,
  }
}

export class StatByHour extends jspb.Message {
  getHour(): number;
  setHour(value: number): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatByHour.AsObject;
  static toObject(includeInstance: boolean, msg: StatByHour): StatByHour.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatByHour, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatByHour;
  static deserializeBinaryFromReader(message: StatByHour, reader: jspb.BinaryReader): StatByHour;
}

export namespace StatByHour {
  export type AsObject = {
    hour: number,
    count: number,
  }
}

export class TrxStatByHourRequest extends jspb.Message {
  getHours(): number;
  setHours(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrxStatByHourRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TrxStatByHourRequest): TrxStatByHourRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TrxStatByHourRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrxStatByHourRequest;
  static deserializeBinaryFromReader(message: TrxStatByHourRequest, reader: jspb.BinaryReader): TrxStatByHourRequest;
}

export namespace TrxStatByHourRequest {
  export type AsObject = {
    hours: number,
  }
}

export class TrxStatByHourResponse extends jspb.Message {
  clearStatList(): void;
  getStatList(): Array<StatByHour>;
  setStatList(value: Array<StatByHour>): void;
  addStat(value?: StatByHour, index?: number): StatByHour;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrxStatByHourResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TrxStatByHourResponse): TrxStatByHourResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TrxStatByHourResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrxStatByHourResponse;
  static deserializeBinaryFromReader(message: TrxStatByHourResponse, reader: jspb.BinaryReader): TrxStatByHourResponse;
}

export namespace TrxStatByHourResponse {
  export type AsObject = {
    statList: Array<StatByHour.AsObject>,
  }
}

export class TrxInfo extends jspb.Message {
  hasTrxId(): boolean;
  clearTrxId(): void;
  getTrxId(): prototype_type_pb.sha256 | undefined;
  setTrxId(value?: prototype_type_pb.sha256): void;

  getBlockHeight(): number;
  setBlockHeight(value: number): void;

  hasTrxWrap(): boolean;
  clearTrxWrap(): void;
  getTrxWrap(): prototype_transaction_pb.transaction_wrapper | undefined;
  setTrxWrap(value?: prototype_transaction_pb.transaction_wrapper): void;

  hasBlockTime(): boolean;
  clearBlockTime(): void;
  getBlockTime(): prototype_type_pb.time_point_sec | undefined;
  setBlockTime(value?: prototype_type_pb.time_point_sec): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrxInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TrxInfo): TrxInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TrxInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrxInfo;
  static deserializeBinaryFromReader(message: TrxInfo, reader: jspb.BinaryReader): TrxInfo;
}

export namespace TrxInfo {
  export type AsObject = {
    trxId?: prototype_type_pb.sha256.AsObject,
    blockHeight: number,
    trxWrap?: prototype_transaction_pb.transaction_wrapper.AsObject,
    blockTime?: prototype_type_pb.time_point_sec.AsObject,
  }
}

export class GetTrxInfoByIdRequest extends jspb.Message {
  hasTrxId(): boolean;
  clearTrxId(): void;
  getTrxId(): prototype_type_pb.sha256 | undefined;
  setTrxId(value?: prototype_type_pb.sha256): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTrxInfoByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTrxInfoByIdRequest): GetTrxInfoByIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTrxInfoByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTrxInfoByIdRequest;
  static deserializeBinaryFromReader(message: GetTrxInfoByIdRequest, reader: jspb.BinaryReader): GetTrxInfoByIdRequest;
}

export namespace GetTrxInfoByIdRequest {
  export type AsObject = {
    trxId?: prototype_type_pb.sha256.AsObject,
  }
}

export class GetTrxInfoByIdResponse extends jspb.Message {
  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): TrxInfo | undefined;
  setInfo(value?: TrxInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTrxInfoByIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTrxInfoByIdResponse): GetTrxInfoByIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTrxInfoByIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTrxInfoByIdResponse;
  static deserializeBinaryFromReader(message: GetTrxInfoByIdResponse, reader: jspb.BinaryReader): GetTrxInfoByIdResponse;
}

export namespace GetTrxInfoByIdResponse {
  export type AsObject = {
    info?: TrxInfo.AsObject,
  }
}

export class GetTrxListByTimeRequest extends jspb.Message {
  hasStart(): boolean;
  clearStart(): void;
  getStart(): prototype_type_pb.time_point_sec | undefined;
  setStart(value?: prototype_type_pb.time_point_sec): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): prototype_type_pb.time_point_sec | undefined;
  setEnd(value?: prototype_type_pb.time_point_sec): void;

  getLimit(): number;
  setLimit(value: number): void;

  hasLastInfo(): boolean;
  clearLastInfo(): void;
  getLastInfo(): TrxInfo | undefined;
  setLastInfo(value?: TrxInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTrxListByTimeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTrxListByTimeRequest): GetTrxListByTimeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTrxListByTimeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTrxListByTimeRequest;
  static deserializeBinaryFromReader(message: GetTrxListByTimeRequest, reader: jspb.BinaryReader): GetTrxListByTimeRequest;
}

export namespace GetTrxListByTimeRequest {
  export type AsObject = {
    start?: prototype_type_pb.time_point_sec.AsObject,
    end?: prototype_type_pb.time_point_sec.AsObject,
    limit: number,
    lastInfo?: TrxInfo.AsObject,
  }
}

export class GetTrxListByTimeResponse extends jspb.Message {
  clearListList(): void;
  getListList(): Array<TrxInfo>;
  setListList(value: Array<TrxInfo>): void;
  addList(value?: TrxInfo, index?: number): TrxInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTrxListByTimeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTrxListByTimeResponse): GetTrxListByTimeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTrxListByTimeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTrxListByTimeResponse;
  static deserializeBinaryFromReader(message: GetTrxListByTimeResponse, reader: jspb.BinaryReader): GetTrxListByTimeResponse;
}

export namespace GetTrxListByTimeResponse {
  export type AsObject = {
    listList: Array<TrxInfo.AsObject>,
  }
}

export class GetPostListByCreateTimeRequest extends jspb.Message {
  hasStart(): boolean;
  clearStart(): void;
  getStart(): prototype_type_pb.time_point_sec | undefined;
  setStart(value?: prototype_type_pb.time_point_sec): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): prototype_type_pb.time_point_sec | undefined;
  setEnd(value?: prototype_type_pb.time_point_sec): void;

  hasLastPost(): boolean;
  clearLastPost(): void;
  getLastPost(): PostResponse | undefined;
  setLastPost(value?: PostResponse): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPostListByCreateTimeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPostListByCreateTimeRequest): GetPostListByCreateTimeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPostListByCreateTimeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPostListByCreateTimeRequest;
  static deserializeBinaryFromReader(message: GetPostListByCreateTimeRequest, reader: jspb.BinaryReader): GetPostListByCreateTimeRequest;
}

export namespace GetPostListByCreateTimeRequest {
  export type AsObject = {
    start?: prototype_type_pb.time_point_sec.AsObject,
    end?: prototype_type_pb.time_point_sec.AsObject,
    lastPost?: PostResponse.AsObject,
    limit: number,
  }
}

export class GetPostListByCreateTimeResponse extends jspb.Message {
  clearPostedListList(): void;
  getPostedListList(): Array<PostResponse>;
  setPostedListList(value: Array<PostResponse>): void;
  addPostedList(value?: PostResponse, index?: number): PostResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPostListByCreateTimeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPostListByCreateTimeResponse): GetPostListByCreateTimeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPostListByCreateTimeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPostListByCreateTimeResponse;
  static deserializeBinaryFromReader(message: GetPostListByCreateTimeResponse, reader: jspb.BinaryReader): GetPostListByCreateTimeResponse;
}

export namespace GetPostListByCreateTimeResponse {
  export type AsObject = {
    postedListList: Array<PostResponse.AsObject>,
  }
}

export class GetPostListByNameRequest extends jspb.Message {
  hasStart(): boolean;
  clearStart(): void;
  getStart(): prototype_multi_id_pb.user_post_create_order | undefined;
  setStart(value?: prototype_multi_id_pb.user_post_create_order): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): prototype_multi_id_pb.user_post_create_order | undefined;
  setEnd(value?: prototype_multi_id_pb.user_post_create_order): void;

  hasLastPost(): boolean;
  clearLastPost(): void;
  getLastPost(): PostResponse | undefined;
  setLastPost(value?: PostResponse): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPostListByNameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPostListByNameRequest): GetPostListByNameRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPostListByNameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPostListByNameRequest;
  static deserializeBinaryFromReader(message: GetPostListByNameRequest, reader: jspb.BinaryReader): GetPostListByNameRequest;
}

export namespace GetPostListByNameRequest {
  export type AsObject = {
    start?: prototype_multi_id_pb.user_post_create_order.AsObject,
    end?: prototype_multi_id_pb.user_post_create_order.AsObject,
    lastPost?: PostResponse.AsObject,
    limit: number,
  }
}

