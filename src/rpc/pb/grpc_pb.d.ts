// package: grpcpb
// file: rpc/pb/grpc.proto

import * as jspb from "google-protobuf";
import * as prototype_type_pb from "../../prototype/type_pb";
import * as prototype_multi_id_pb from "../../prototype/multi_id_pb";
import * as prototype_transaction_pb from "../../prototype/transaction_pb";

export class GetTableContentRequest extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): void;

  getContract(): string;
  setContract(value: string): void;

  getTable(): string;
  setTable(value: string): void;

  getField(): string;
  setField(value: string): void;

  getBegin(): string;
  setBegin(value: string): void;

  getCount(): number;
  setCount(value: number): void;

  getReverse(): boolean;
  setReverse(value: boolean): void;

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
    contract: string,
    table: string,
    field: string,
    begin: string,
    count: number,
    reverse: boolean,
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

export class GetAccountByPubKeyRequest extends jspb.Message {
  getPublicKey(): string;
  setPublicKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountByPubKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountByPubKeyRequest): GetAccountByPubKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountByPubKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountByPubKeyRequest;
  static deserializeBinaryFromReader(message: GetAccountByPubKeyRequest, reader: jspb.BinaryReader): GetAccountByPubKeyRequest;
}

export namespace GetAccountByPubKeyRequest {
  export type AsObject = {
    publicKey: string,
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

export class GetBlockProducerByNameRequest extends jspb.Message {
  hasBpName(): boolean;
  clearBpName(): void;
  getBpName(): prototype_type_pb.account_name | undefined;
  setBpName(value?: prototype_type_pb.account_name): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockProducerByNameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockProducerByNameRequest): GetBlockProducerByNameRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlockProducerByNameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockProducerByNameRequest;
  static deserializeBinaryFromReader(message: GetBlockProducerByNameRequest, reader: jspb.BinaryReader): GetBlockProducerByNameRequest;
}

export namespace GetBlockProducerByNameRequest {
  export type AsObject = {
    bpName?: prototype_type_pb.account_name.AsObject,
  }
}

export class GetAccountCashoutRequest extends jspb.Message {
  hasAccountName(): boolean;
  clearAccountName(): void;
  getAccountName(): prototype_type_pb.account_name | undefined;
  setAccountName(value?: prototype_type_pb.account_name): void;

  getPostId(): number;
  setPostId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountCashoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountCashoutRequest): GetAccountCashoutRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountCashoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountCashoutRequest;
  static deserializeBinaryFromReader(message: GetAccountCashoutRequest, reader: jspb.BinaryReader): GetAccountCashoutRequest;
}

export namespace GetAccountCashoutRequest {
  export type AsObject = {
    accountName?: prototype_type_pb.account_name.AsObject,
    postId: number,
  }
}

export class AccountCashoutResponse extends jspb.Message {
  hasAccountName(): boolean;
  clearAccountName(): void;
  getAccountName(): prototype_type_pb.account_name | undefined;
  setAccountName(value?: prototype_type_pb.account_name): void;

  hasReward(): boolean;
  clearReward(): void;
  getReward(): prototype_type_pb.vest | undefined;
  setReward(value?: prototype_type_pb.vest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountCashoutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AccountCashoutResponse): AccountCashoutResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountCashoutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountCashoutResponse;
  static deserializeBinaryFromReader(message: AccountCashoutResponse, reader: jspb.BinaryReader): AccountCashoutResponse;
}

export namespace AccountCashoutResponse {
  export type AsObject = {
    accountName?: prototype_type_pb.account_name.AsObject,
    reward?: prototype_type_pb.vest.AsObject,
  }
}

export class GetBlockCashoutRequest extends jspb.Message {
  getBlockHeight(): number;
  setBlockHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockCashoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockCashoutRequest): GetBlockCashoutRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlockCashoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockCashoutRequest;
  static deserializeBinaryFromReader(message: GetBlockCashoutRequest, reader: jspb.BinaryReader): GetBlockCashoutRequest;
}

export namespace GetBlockCashoutRequest {
  export type AsObject = {
    blockHeight: number,
  }
}

export class BlockCashoutResponse extends jspb.Message {
  clearCashoutListList(): void;
  getCashoutListList(): Array<AccountCashoutResponse>;
  setCashoutListList(value: Array<AccountCashoutResponse>): void;
  addCashoutList(value?: AccountCashoutResponse, index?: number): AccountCashoutResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockCashoutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BlockCashoutResponse): BlockCashoutResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockCashoutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockCashoutResponse;
  static deserializeBinaryFromReader(message: BlockCashoutResponse, reader: jspb.BinaryReader): BlockCashoutResponse;
}

export namespace BlockCashoutResponse {
  export type AsObject = {
    cashoutListList: Array<AccountCashoutResponse.AsObject>,
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

export class AccountInfo extends jspb.Message {
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

  hasBlockProducer(): boolean;
  clearBlockProducer(): void;
  getBlockProducer(): BlockProducerResponse | undefined;
  setBlockProducer(value?: BlockProducerResponse): void;

  getPostCount(): number;
  setPostCount(value: number): void;

  getFollowerCount(): number;
  setFollowerCount(value: number): void;

  getFollowingCount(): number;
  setFollowingCount(value: number): void;

  getTrxCount(): number;
  setTrxCount(value: number): void;

  getVotePower(): number;
  setVotePower(value: number): void;

  getStaminaFreeRemain(): number;
  setStaminaFreeRemain(value: number): void;

  getStaminaStakeRemain(): number;
  setStaminaStakeRemain(value: number): void;

  getStaminaMax(): number;
  setStaminaMax(value: number): void;

  hasStakeVestForMe(): boolean;
  clearStakeVestForMe(): void;
  getStakeVestForMe(): prototype_type_pb.vest | undefined;
  setStakeVestForMe(value?: prototype_type_pb.vest): void;

  hasWithdrawRemains(): boolean;
  clearWithdrawRemains(): void;
  getWithdrawRemains(): prototype_type_pb.vest | undefined;
  setWithdrawRemains(value?: prototype_type_pb.vest): void;

  hasHasWithdrawn(): boolean;
  clearHasWithdrawn(): void;
  getHasWithdrawn(): prototype_type_pb.vest | undefined;
  setHasWithdrawn(value?: prototype_type_pb.vest): void;

  hasWithdrawEachTime(): boolean;
  clearWithdrawEachTime(): void;
  getWithdrawEachTime(): prototype_type_pb.vest | undefined;
  setWithdrawEachTime(value?: prototype_type_pb.vest): void;

  hasNextWithdrawTime(): boolean;
  clearNextWithdrawTime(): void;
  getNextWithdrawTime(): prototype_type_pb.time_point_sec | undefined;
  setNextWithdrawTime(value?: prototype_type_pb.time_point_sec): void;

  hasStartWithdrawTime(): boolean;
  clearStartWithdrawTime(): void;
  getStartWithdrawTime(): prototype_type_pb.time_point_sec | undefined;
  setStartWithdrawTime(value?: prototype_type_pb.time_point_sec): void;

  getBpVoteCount(): number;
  setBpVoteCount(value: number): void;

  getReputation(): number;
  setReputation(value: number): void;

  getReputationMemo(): string;
  setReputationMemo(value: string): void;

  getChargedTicket(): number;
  setChargedTicket(value: number): void;

  getFreeTicket(): number;
  setFreeTicket(value: number): void;

  getFreeze(): number;
  setFreeze(value: number): void;

  getFreezeMemo(): string;
  setFreezeMemo(value: string): void;

  hasStakeVestFromMe(): boolean;
  clearStakeVestFromMe(): void;
  getStakeVestFromMe(): prototype_type_pb.vest | undefined;
  setStakeVestFromMe(value?: prototype_type_pb.vest): void;

  hasVotedBlockProducer(): boolean;
  clearVotedBlockProducer(): void;
  getVotedBlockProducer(): prototype_type_pb.account_name | undefined;
  setVotedBlockProducer(value?: prototype_type_pb.account_name): void;

  hasVestBorrowed(): boolean;
  clearVestBorrowed(): void;
  getVestBorrowed(): prototype_type_pb.vest | undefined;
  setVestBorrowed(value?: prototype_type_pb.vest): void;

  hasVestLent(): boolean;
  clearVestLent(): void;
  getVestLent(): prototype_type_pb.vest | undefined;
  setVestLent(value?: prototype_type_pb.vest): void;

  hasVestDelivering(): boolean;
  clearVestDelivering(): void;
  getVestDelivering(): prototype_type_pb.vest | undefined;
  setVestDelivering(value?: prototype_type_pb.vest): void;

  hasVestOwned(): boolean;
  clearVestOwned(): void;
  getVestOwned(): prototype_type_pb.vest | undefined;
  setVestOwned(value?: prototype_type_pb.vest): void;

  hasVestSelf(): boolean;
  clearVestSelf(): void;
  getVestSelf(): prototype_type_pb.vest | undefined;
  setVestSelf(value?: prototype_type_pb.vest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AccountInfo): AccountInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountInfo;
  static deserializeBinaryFromReader(message: AccountInfo, reader: jspb.BinaryReader): AccountInfo;
}

export namespace AccountInfo {
  export type AsObject = {
    accountName?: prototype_type_pb.account_name.AsObject,
    coin?: prototype_type_pb.coin.AsObject,
    vest?: prototype_type_pb.vest.AsObject,
    publicKey?: prototype_type_pb.public_key_type.AsObject,
    createdTime?: prototype_type_pb.time_point_sec.AsObject,
    blockProducer?: BlockProducerResponse.AsObject,
    postCount: number,
    followerCount: number,
    followingCount: number,
    trxCount: number,
    votePower: number,
    staminaFreeRemain: number,
    staminaStakeRemain: number,
    staminaMax: number,
    stakeVestForMe?: prototype_type_pb.vest.AsObject,
    withdrawRemains?: prototype_type_pb.vest.AsObject,
    hasWithdrawn?: prototype_type_pb.vest.AsObject,
    withdrawEachTime?: prototype_type_pb.vest.AsObject,
    nextWithdrawTime?: prototype_type_pb.time_point_sec.AsObject,
    startWithdrawTime?: prototype_type_pb.time_point_sec.AsObject,
    bpVoteCount: number,
    reputation: number,
    reputationMemo: string,
    chargedTicket: number,
    freeTicket: number,
    freeze: number,
    freezeMemo: string,
    stakeVestFromMe?: prototype_type_pb.vest.AsObject,
    votedBlockProducer?: prototype_type_pb.account_name.AsObject,
    vestBorrowed?: prototype_type_pb.vest.AsObject,
    vestLent?: prototype_type_pb.vest.AsObject,
    vestDelivering?: prototype_type_pb.vest.AsObject,
    vestOwned?: prototype_type_pb.vest.AsObject,
    vestSelf?: prototype_type_pb.vest.AsObject,
  }
}

export class AccountResponse extends jspb.Message {
  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): AccountInfo | undefined;
  setInfo(value?: AccountInfo): void;

  hasState(): boolean;
  clearState(): void;
  getState(): ChainState | undefined;
  setState(value?: ChainState): void;

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
    info?: AccountInfo.AsObject,
    state?: ChainState.AsObject,
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

  hasLastOrder(): boolean;
  clearLastOrder(): void;
  getLastOrder(): prototype_multi_id_pb.follower_created_order | undefined;
  setLastOrder(value?: prototype_multi_id_pb.follower_created_order): void;

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
    lastOrder?: prototype_multi_id_pb.follower_created_order.AsObject,
  }
}

export class FollowerListInfo extends jspb.Message {
  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): AccountResponse | undefined;
  setAccount(value?: AccountResponse): void;

  hasCreateOrder(): boolean;
  clearCreateOrder(): void;
  getCreateOrder(): prototype_multi_id_pb.follower_created_order | undefined;
  setCreateOrder(value?: prototype_multi_id_pb.follower_created_order): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FollowerListInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FollowerListInfo): FollowerListInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FollowerListInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FollowerListInfo;
  static deserializeBinaryFromReader(message: FollowerListInfo, reader: jspb.BinaryReader): FollowerListInfo;
}

export namespace FollowerListInfo {
  export type AsObject = {
    account?: AccountResponse.AsObject,
    createOrder?: prototype_multi_id_pb.follower_created_order.AsObject,
  }
}

export class GetFollowerListByNameResponse extends jspb.Message {
  clearFollowerListList(): void;
  getFollowerListList(): Array<FollowerListInfo>;
  setFollowerListList(value: Array<FollowerListInfo>): void;
  addFollowerList(value?: FollowerListInfo, index?: number): FollowerListInfo;

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
    followerListList: Array<FollowerListInfo.AsObject>,
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

  hasLastOrder(): boolean;
  clearLastOrder(): void;
  getLastOrder(): prototype_multi_id_pb.following_created_order | undefined;
  setLastOrder(value?: prototype_multi_id_pb.following_created_order): void;

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
    lastOrder?: prototype_multi_id_pb.following_created_order.AsObject,
  }
}

export class FollowingListInfo extends jspb.Message {
  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): AccountResponse | undefined;
  setAccount(value?: AccountResponse): void;

  hasCreateOrder(): boolean;
  clearCreateOrder(): void;
  getCreateOrder(): prototype_multi_id_pb.following_created_order | undefined;
  setCreateOrder(value?: prototype_multi_id_pb.following_created_order): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FollowingListInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FollowingListInfo): FollowingListInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FollowingListInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FollowingListInfo;
  static deserializeBinaryFromReader(message: FollowingListInfo, reader: jspb.BinaryReader): FollowingListInfo;
}

export namespace FollowingListInfo {
  export type AsObject = {
    account?: AccountResponse.AsObject,
    createOrder?: prototype_multi_id_pb.following_created_order.AsObject,
  }
}

export class GetFollowingListByNameResponse extends jspb.Message {
  clearFollowingListList(): void;
  getFollowingListList(): Array<FollowingListInfo>;
  setFollowingListList(value: Array<FollowingListInfo>): void;
  addFollowingList(value?: FollowingListInfo, index?: number): FollowingListInfo;

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
    followingListList: Array<FollowingListInfo.AsObject>,
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

export class BlockProducerResponse extends jspb.Message {
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

  hasBpVest(): boolean;
  clearBpVest(): void;
  getBpVest(): prototype_multi_id_pb.bp_vest_id | undefined;
  setBpVest(value?: prototype_multi_id_pb.bp_vest_id): void;

  hasSigningKey(): boolean;
  clearSigningKey(): void;
  getSigningKey(): prototype_type_pb.public_key_type | undefined;
  setSigningKey(value?: prototype_type_pb.public_key_type): void;

  getProposedStaminaFree(): number;
  setProposedStaminaFree(value: number): void;

  getTpsExpected(): number;
  setTpsExpected(value: number): void;

  hasAccountCreateFee(): boolean;
  clearAccountCreateFee(): void;
  getAccountCreateFee(): prototype_type_pb.coin | undefined;
  setAccountCreateFee(value?: prototype_type_pb.coin): void;

  getTopNAcquireFreeToken(): number;
  setTopNAcquireFreeToken(value: number): void;

  getTicketFlushInterval(): number;
  setTicketFlushInterval(value: number): void;

  hasPerTicketPrice(): boolean;
  clearPerTicketPrice(): void;
  getPerTicketPrice(): prototype_type_pb.coin | undefined;
  setPerTicketPrice(value?: prototype_type_pb.coin): void;

  getPerTicketWeight(): number;
  setPerTicketWeight(value: number): void;

  getVoterCount(): number;
  setVoterCount(value: number): void;

  getGenBlockCount(): number;
  setGenBlockCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockProducerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BlockProducerResponse): BlockProducerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockProducerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockProducerResponse;
  static deserializeBinaryFromReader(message: BlockProducerResponse, reader: jspb.BinaryReader): BlockProducerResponse;
}

export namespace BlockProducerResponse {
  export type AsObject = {
    owner?: prototype_type_pb.account_name.AsObject,
    createdTime?: prototype_type_pb.time_point_sec.AsObject,
    url: string,
    bpVest?: prototype_multi_id_pb.bp_vest_id.AsObject,
    signingKey?: prototype_type_pb.public_key_type.AsObject,
    proposedStaminaFree: number,
    tpsExpected: number,
    accountCreateFee?: prototype_type_pb.coin.AsObject,
    topNAcquireFreeToken: number,
    ticketFlushInterval: number,
    perTicketPrice?: prototype_type_pb.coin.AsObject,
    perTicketWeight: number,
    voterCount: number,
    genBlockCount: number,
  }
}

export class GetBlockProducerListRequest extends jspb.Message {
  hasStart(): boolean;
  clearStart(): void;
  getStart(): prototype_type_pb.account_name | undefined;
  setStart(value?: prototype_type_pb.account_name): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockProducerListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockProducerListRequest): GetBlockProducerListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlockProducerListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockProducerListRequest;
  static deserializeBinaryFromReader(message: GetBlockProducerListRequest, reader: jspb.BinaryReader): GetBlockProducerListRequest;
}

export namespace GetBlockProducerListRequest {
  export type AsObject = {
    start?: prototype_type_pb.account_name.AsObject,
    limit: number,
  }
}

export class GetBlockProducerListResponse extends jspb.Message {
  clearBlockProducerListList(): void;
  getBlockProducerListList(): Array<BlockProducerResponse>;
  setBlockProducerListList(value: Array<BlockProducerResponse>): void;
  addBlockProducerList(value?: BlockProducerResponse, index?: number): BlockProducerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockProducerListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockProducerListResponse): GetBlockProducerListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlockProducerListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockProducerListResponse;
  static deserializeBinaryFromReader(message: GetBlockProducerListResponse, reader: jspb.BinaryReader): GetBlockProducerListResponse;
}

export namespace GetBlockProducerListResponse {
  export type AsObject = {
    blockProducerListList: Array<BlockProducerResponse.AsObject>,
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

  getWeightedVp(): string;
  setWeightedVp(value: string): void;

  hasRewards(): boolean;
  clearRewards(): void;
  getRewards(): prototype_type_pb.vest | undefined;
  setRewards(value?: prototype_type_pb.vest): void;

  hasDappRewards(): boolean;
  clearDappRewards(): void;
  getDappRewards(): prototype_type_pb.vest | undefined;
  setDappRewards(value?: prototype_type_pb.vest): void;

  getCashoutInterval(): number;
  setCashoutInterval(value: number): void;

  hasGlobalRewards(): boolean;
  clearGlobalRewards(): void;
  getGlobalRewards(): prototype_type_pb.vest | undefined;
  setGlobalRewards(value?: prototype_type_pb.vest): void;

  getGlobalWeightedVp(): string;
  setGlobalWeightedVp(value: string): void;

  getTicket(): number;
  setTicket(value: number): void;

  getCopyright(): number;
  setCopyright(value: number): void;

  getCopyrightMemo(): string;
  setCopyrightMemo(value: string): void;

  getCashoutBlockNum(): string;
  setCashoutBlockNum(value: string): void;

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
    weightedVp: string,
    rewards?: prototype_type_pb.vest.AsObject,
    dappRewards?: prototype_type_pb.vest.AsObject,
    cashoutInterval: number,
    globalRewards?: prototype_type_pb.vest.AsObject,
    globalWeightedVp: string,
    ticket: number,
    copyright: number,
    copyrightMemo: string,
    cashoutBlockNum: string,
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

export class GetNodeNeighboursResponse extends jspb.Message {
  getPeerlist(): string;
  setPeerlist(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNodeNeighboursResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNodeNeighboursResponse): GetNodeNeighboursResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNodeNeighboursResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNodeNeighboursResponse;
  static deserializeBinaryFromReader(message: GetNodeNeighboursResponse, reader: jspb.BinaryReader): GetNodeNeighboursResponse;
}

export namespace GetNodeNeighboursResponse {
  export type AsObject = {
    peerlist: string,
  }
}

export class GetNodeRunningVersionResponse extends jspb.Message {
  getNodeversion(): string;
  setNodeversion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNodeRunningVersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNodeRunningVersionResponse): GetNodeRunningVersionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNodeRunningVersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNodeRunningVersionResponse;
  static deserializeBinaryFromReader(message: GetNodeRunningVersionResponse, reader: jspb.BinaryReader): GetNodeRunningVersionResponse;
}

export namespace GetNodeRunningVersionResponse {
  export type AsObject = {
    nodeversion: string,
  }
}

export class BroadcastTrxRequest extends jspb.Message {
  hasTransaction(): boolean;
  clearTransaction(): void;
  getTransaction(): prototype_transaction_pb.signed_transaction | undefined;
  setTransaction(value?: prototype_transaction_pb.signed_transaction): void;

  getOnlyDeliver(): boolean;
  setOnlyDeliver(value: boolean): void;

  getFinality(): boolean;
  setFinality(value: boolean): void;

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
    finality: boolean,
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

  getFinality(): boolean;
  setFinality(value: boolean): void;

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
    finality: boolean,
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

  hasBlockProducer(): boolean;
  clearBlockProducer(): void;
  getBlockProducer(): prototype_type_pb.account_name | undefined;
  setBlockProducer(value?: prototype_type_pb.account_name): void;

  hasBlockId(): boolean;
  clearBlockId(): void;
  getBlockId(): prototype_type_pb.sha256 | undefined;
  setBlockId(value?: prototype_type_pb.sha256): void;

  hasPreId(): boolean;
  clearPreId(): void;
  getPreId(): prototype_type_pb.sha256 | undefined;
  setPreId(value?: prototype_type_pb.sha256): void;

  getBlockSize(): number;
  setBlockSize(value: number): void;

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
    blockProducer?: prototype_type_pb.account_name.AsObject,
    blockId?: prototype_type_pb.sha256.AsObject,
    preId?: prototype_type_pb.sha256.AsObject,
    blockSize: number,
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
  getLastAccount(): AccountInfo | undefined;
  setLastAccount(value?: AccountInfo): void;

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
    lastAccount?: AccountInfo.AsObject,
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

  hasBlockId(): boolean;
  clearBlockId(): void;
  getBlockId(): prototype_type_pb.sha256 | undefined;
  setBlockId(value?: prototype_type_pb.sha256): void;

  getBlkIsIrreversible(): boolean;
  setBlkIsIrreversible(value: boolean): void;

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
    blockId?: prototype_type_pb.sha256.AsObject,
    blkIsIrreversible: boolean,
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

export class GetUserTrxListByTimeRequest extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): prototype_type_pb.account_name | undefined;
  setName(value?: prototype_type_pb.account_name): void;

  hasStart(): boolean;
  clearStart(): void;
  getStart(): prototype_type_pb.time_point_sec | undefined;
  setStart(value?: prototype_type_pb.time_point_sec): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): prototype_type_pb.time_point_sec | undefined;
  setEnd(value?: prototype_type_pb.time_point_sec): void;

  hasLastTrx(): boolean;
  clearLastTrx(): void;
  getLastTrx(): TrxInfo | undefined;
  setLastTrx(value?: TrxInfo): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserTrxListByTimeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserTrxListByTimeRequest): GetUserTrxListByTimeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserTrxListByTimeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserTrxListByTimeRequest;
  static deserializeBinaryFromReader(message: GetUserTrxListByTimeRequest, reader: jspb.BinaryReader): GetUserTrxListByTimeRequest;
}

export namespace GetUserTrxListByTimeRequest {
  export type AsObject = {
    name?: prototype_type_pb.account_name.AsObject,
    start?: prototype_type_pb.time_point_sec.AsObject,
    end?: prototype_type_pb.time_point_sec.AsObject,
    lastTrx?: TrxInfo.AsObject,
    limit: number,
  }
}

export class GetUserTrxListByTimeResponse extends jspb.Message {
  clearTrxListList(): void;
  getTrxListList(): Array<TrxInfo>;
  setTrxListList(value: Array<TrxInfo>): void;
  addTrxList(value?: TrxInfo, index?: number): TrxInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserTrxListByTimeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserTrxListByTimeResponse): GetUserTrxListByTimeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserTrxListByTimeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserTrxListByTimeResponse;
  static deserializeBinaryFromReader(message: GetUserTrxListByTimeResponse, reader: jspb.BinaryReader): GetUserTrxListByTimeResponse;
}

export namespace GetUserTrxListByTimeResponse {
  export type AsObject = {
    trxListList: Array<TrxInfo.AsObject>,
  }
}

export class VoterOfPost extends jspb.Message {
  hasAccountName(): boolean;
  clearAccountName(): void;
  getAccountName(): prototype_type_pb.account_name | undefined;
  setAccountName(value?: prototype_type_pb.account_name): void;

  getWeightedVp(): string;
  setWeightedVp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VoterOfPost.AsObject;
  static toObject(includeInstance: boolean, msg: VoterOfPost): VoterOfPost.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VoterOfPost, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VoterOfPost;
  static deserializeBinaryFromReader(message: VoterOfPost, reader: jspb.BinaryReader): VoterOfPost;
}

export namespace VoterOfPost {
  export type AsObject = {
    accountName?: prototype_type_pb.account_name.AsObject,
    weightedVp: string,
  }
}

export class GetPostInfoByIdRequest extends jspb.Message {
  getPostId(): string;
  setPostId(value: string): void;

  getVoterListLimit(): number;
  setVoterListLimit(value: number): void;

  getReplyListLimit(): number;
  setReplyListLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPostInfoByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPostInfoByIdRequest): GetPostInfoByIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPostInfoByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPostInfoByIdRequest;
  static deserializeBinaryFromReader(message: GetPostInfoByIdRequest, reader: jspb.BinaryReader): GetPostInfoByIdRequest;
}

export namespace GetPostInfoByIdRequest {
  export type AsObject = {
    postId: string,
    voterListLimit: number,
    replyListLimit: number,
  }
}

export class GetPostInfoByIdResponse extends jspb.Message {
  hasPostInfo(): boolean;
  clearPostInfo(): void;
  getPostInfo(): PostResponse | undefined;
  setPostInfo(value?: PostResponse): void;

  clearVoterListList(): void;
  getVoterListList(): Array<VoterOfPost>;
  setVoterListList(value: Array<VoterOfPost>): void;
  addVoterList(value?: VoterOfPost, index?: number): VoterOfPost;

  clearReplyListList(): void;
  getReplyListList(): Array<PostResponse>;
  setReplyListList(value: Array<PostResponse>): void;
  addReplyList(value?: PostResponse, index?: number): PostResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPostInfoByIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPostInfoByIdResponse): GetPostInfoByIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPostInfoByIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPostInfoByIdResponse;
  static deserializeBinaryFromReader(message: GetPostInfoByIdResponse, reader: jspb.BinaryReader): GetPostInfoByIdResponse;
}

export namespace GetPostInfoByIdResponse {
  export type AsObject = {
    postInfo?: PostResponse.AsObject,
    voterListList: Array<VoterOfPost.AsObject>,
    replyListList: Array<PostResponse.AsObject>,
  }
}

export class GetContractInfoRequest extends jspb.Message {
  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): prototype_type_pb.account_name | undefined;
  setOwner(value?: prototype_type_pb.account_name): void;

  getContractName(): string;
  setContractName(value: string): void;

  getFetchabi(): boolean;
  setFetchabi(value: boolean): void;

  getFetchcode(): boolean;
  setFetchcode(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractInfoRequest): GetContractInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractInfoRequest;
  static deserializeBinaryFromReader(message: GetContractInfoRequest, reader: jspb.BinaryReader): GetContractInfoRequest;
}

export namespace GetContractInfoRequest {
  export type AsObject = {
    owner?: prototype_type_pb.account_name.AsObject,
    contractName: string,
    fetchabi: boolean,
    fetchcode: boolean,
  }
}

export class GetContractInfoResponse extends jspb.Message {
  getExist(): boolean;
  setExist(value: boolean): void;

  getAbi(): string;
  setAbi(value: string): void;

  getCode(): Uint8Array | string;
  getCode_asU8(): Uint8Array;
  getCode_asB64(): string;
  setCode(value: Uint8Array | string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getDescribe(): string;
  setDescribe(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractInfoResponse): GetContractInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractInfoResponse;
  static deserializeBinaryFromReader(message: GetContractInfoResponse, reader: jspb.BinaryReader): GetContractInfoResponse;
}

export namespace GetContractInfoResponse {
  export type AsObject = {
    exist: boolean,
    abi: string,
    code: Uint8Array | string,
    url: string,
    describe: string,
  }
}

export class GetBlkIsIrreversibleByTxIdRequest extends jspb.Message {
  hasTrxId(): boolean;
  clearTrxId(): void;
  getTrxId(): prototype_type_pb.sha256 | undefined;
  setTrxId(value?: prototype_type_pb.sha256): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlkIsIrreversibleByTxIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlkIsIrreversibleByTxIdRequest): GetBlkIsIrreversibleByTxIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlkIsIrreversibleByTxIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlkIsIrreversibleByTxIdRequest;
  static deserializeBinaryFromReader(message: GetBlkIsIrreversibleByTxIdRequest, reader: jspb.BinaryReader): GetBlkIsIrreversibleByTxIdRequest;
}

export namespace GetBlkIsIrreversibleByTxIdRequest {
  export type AsObject = {
    trxId?: prototype_type_pb.sha256.AsObject,
  }
}

export class GetBlkIsIrreversibleByTxIdResponse extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlkIsIrreversibleByTxIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlkIsIrreversibleByTxIdResponse): GetBlkIsIrreversibleByTxIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlkIsIrreversibleByTxIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlkIsIrreversibleByTxIdResponse;
  static deserializeBinaryFromReader(message: GetBlkIsIrreversibleByTxIdResponse, reader: jspb.BinaryReader): GetBlkIsIrreversibleByTxIdResponse;
}

export namespace GetBlkIsIrreversibleByTxIdResponse {
  export type AsObject = {
    result: boolean,
  }
}

export class GetAccountListByCreTimeRequest extends jspb.Message {
  hasStart(): boolean;
  clearStart(): void;
  getStart(): prototype_type_pb.time_point_sec | undefined;
  setStart(value?: prototype_type_pb.time_point_sec): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): prototype_type_pb.time_point_sec | undefined;
  setEnd(value?: prototype_type_pb.time_point_sec): void;

  hasLastAccount(): boolean;
  clearLastAccount(): void;
  getLastAccount(): AccountInfo | undefined;
  setLastAccount(value?: AccountInfo): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountListByCreTimeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountListByCreTimeRequest): GetAccountListByCreTimeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountListByCreTimeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountListByCreTimeRequest;
  static deserializeBinaryFromReader(message: GetAccountListByCreTimeRequest, reader: jspb.BinaryReader): GetAccountListByCreTimeRequest;
}

export namespace GetAccountListByCreTimeRequest {
  export type AsObject = {
    start?: prototype_type_pb.time_point_sec.AsObject,
    end?: prototype_type_pb.time_point_sec.AsObject,
    lastAccount?: AccountInfo.AsObject,
    limit: number,
  }
}

export class DailyStat extends jspb.Message {
  getDate(): number;
  setDate(value: number): void;

  getDapp(): string;
  setDapp(value: string): void;

  getDau(): number;
  setDau(value: number): void;

  getDnu(): number;
  setDnu(value: number): void;

  getTrxs(): number;
  setTrxs(value: number): void;

  getAmount(): string;
  setAmount(value: string): void;

  getTotalUserCount(): number;
  setTotalUserCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DailyStat.AsObject;
  static toObject(includeInstance: boolean, msg: DailyStat): DailyStat.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DailyStat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DailyStat;
  static deserializeBinaryFromReader(message: DailyStat, reader: jspb.BinaryReader): DailyStat;
}

export namespace DailyStat {
  export type AsObject = {
    date: number,
    dapp: string,
    dau: number,
    dnu: number,
    trxs: number,
    amount: string,
    totalUserCount: number,
  }
}

export class GetDailyStatsRequest extends jspb.Message {
  getDays(): number;
  setDays(value: number): void;

  getDapp(): string;
  setDapp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDailyStatsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDailyStatsRequest): GetDailyStatsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDailyStatsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDailyStatsRequest;
  static deserializeBinaryFromReader(message: GetDailyStatsRequest, reader: jspb.BinaryReader): GetDailyStatsRequest;
}

export namespace GetDailyStatsRequest {
  export type AsObject = {
    days: number,
    dapp: string,
  }
}

export class GetDailyStatsResponse extends jspb.Message {
  clearStatList(): void;
  getStatList(): Array<DailyStat>;
  setStatList(value: Array<DailyStat>): void;
  addStat(value?: DailyStat, index?: number): DailyStat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDailyStatsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDailyStatsResponse): GetDailyStatsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDailyStatsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDailyStatsResponse;
  static deserializeBinaryFromReader(message: GetDailyStatsResponse, reader: jspb.BinaryReader): GetDailyStatsResponse;
}

export namespace GetDailyStatsResponse {
  export type AsObject = {
    statList: Array<DailyStat.AsObject>,
  }
}

export class ContractInfo extends jspb.Message {
  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): prototype_type_pb.account_name | undefined;
  setOwner(value?: prototype_type_pb.account_name): void;

  hasName(): boolean;
  clearName(): void;
  getName(): prototype_type_pb.account_name | undefined;
  setName(value?: prototype_type_pb.account_name): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): prototype_type_pb.time_point_sec | undefined;
  setCreateTime(value?: prototype_type_pb.time_point_sec): void;

  hasBalance(): boolean;
  clearBalance(): void;
  getBalance(): prototype_type_pb.coin | undefined;
  setBalance(value?: prototype_type_pb.coin): void;

  getApplyCount(): number;
  setApplyCount(value: number): void;

  getUpgradeable(): boolean;
  setUpgradeable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ContractInfo): ContractInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContractInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractInfo;
  static deserializeBinaryFromReader(message: ContractInfo, reader: jspb.BinaryReader): ContractInfo;
}

export namespace ContractInfo {
  export type AsObject = {
    owner?: prototype_type_pb.account_name.AsObject,
    name?: prototype_type_pb.account_name.AsObject,
    createTime?: prototype_type_pb.time_point_sec.AsObject,
    balance?: prototype_type_pb.coin.AsObject,
    applyCount: number,
    upgradeable: boolean,
  }
}

export class GetContractListByTimeRequest extends jspb.Message {
  hasStart(): boolean;
  clearStart(): void;
  getStart(): prototype_type_pb.time_point_sec | undefined;
  setStart(value?: prototype_type_pb.time_point_sec): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): prototype_type_pb.time_point_sec | undefined;
  setEnd(value?: prototype_type_pb.time_point_sec): void;

  hasLastContract(): boolean;
  clearLastContract(): void;
  getLastContract(): ContractInfo | undefined;
  setLastContract(value?: ContractInfo): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractListByTimeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractListByTimeRequest): GetContractListByTimeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractListByTimeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractListByTimeRequest;
  static deserializeBinaryFromReader(message: GetContractListByTimeRequest, reader: jspb.BinaryReader): GetContractListByTimeRequest;
}

export namespace GetContractListByTimeRequest {
  export type AsObject = {
    start?: prototype_type_pb.time_point_sec.AsObject,
    end?: prototype_type_pb.time_point_sec.AsObject,
    lastContract?: ContractInfo.AsObject,
    limit: number,
  }
}

export class GetContractListResponse extends jspb.Message {
  clearContractListList(): void;
  getContractListList(): Array<ContractInfo>;
  setContractListList(value: Array<ContractInfo>): void;
  addContractList(value?: ContractInfo, index?: number): ContractInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractListResponse): GetContractListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContractListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractListResponse;
  static deserializeBinaryFromReader(message: GetContractListResponse, reader: jspb.BinaryReader): GetContractListResponse;
}

export namespace GetContractListResponse {
  export type AsObject = {
    contractListList: Array<ContractInfo.AsObject>,
  }
}

export class GetBlockProducerListByVoteCountRequest extends jspb.Message {
  hasStart(): boolean;
  clearStart(): void;
  getStart(): prototype_type_pb.vest | undefined;
  setStart(value?: prototype_type_pb.vest): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): prototype_type_pb.vest | undefined;
  setEnd(value?: prototype_type_pb.vest): void;

  hasLastBlockProducer(): boolean;
  clearLastBlockProducer(): void;
  getLastBlockProducer(): BlockProducerResponse | undefined;
  setLastBlockProducer(value?: BlockProducerResponse): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockProducerListByVoteCountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockProducerListByVoteCountRequest): GetBlockProducerListByVoteCountRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlockProducerListByVoteCountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockProducerListByVoteCountRequest;
  static deserializeBinaryFromReader(message: GetBlockProducerListByVoteCountRequest, reader: jspb.BinaryReader): GetBlockProducerListByVoteCountRequest;
}

export namespace GetBlockProducerListByVoteCountRequest {
  export type AsObject = {
    start?: prototype_type_pb.vest.AsObject,
    end?: prototype_type_pb.vest.AsObject,
    lastBlockProducer?: BlockProducerResponse.AsObject,
    limit: number,
  }
}

export class GetPostListByVestRequest extends jspb.Message {
  hasStart(): boolean;
  clearStart(): void;
  getStart(): prototype_type_pb.vest | undefined;
  setStart(value?: prototype_type_pb.vest): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): prototype_type_pb.vest | undefined;
  setEnd(value?: prototype_type_pb.vest): void;

  hasLastPost(): boolean;
  clearLastPost(): void;
  getLastPost(): PostResponse | undefined;
  setLastPost(value?: PostResponse): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPostListByVestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPostListByVestRequest): GetPostListByVestRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPostListByVestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPostListByVestRequest;
  static deserializeBinaryFromReader(message: GetPostListByVestRequest, reader: jspb.BinaryReader): GetPostListByVestRequest;
}

export namespace GetPostListByVestRequest {
  export type AsObject = {
    start?: prototype_type_pb.vest.AsObject,
    end?: prototype_type_pb.vest.AsObject,
    lastPost?: PostResponse.AsObject,
    limit: number,
  }
}

export class GetPostListByVestResponse extends jspb.Message {
  clearPostListList(): void;
  getPostListList(): Array<PostResponse>;
  setPostListList(value: Array<PostResponse>): void;
  addPostList(value?: PostResponse, index?: number): PostResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPostListByVestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPostListByVestResponse): GetPostListByVestResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPostListByVestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPostListByVestResponse;
  static deserializeBinaryFromReader(message: GetPostListByVestResponse, reader: jspb.BinaryReader): GetPostListByVestResponse;
}

export namespace GetPostListByVestResponse {
  export type AsObject = {
    postListList: Array<PostResponse.AsObject>,
  }
}

export class EsimateRequest extends jspb.Message {
  hasTransaction(): boolean;
  clearTransaction(): void;
  getTransaction(): prototype_transaction_pb.signed_transaction | undefined;
  setTransaction(value?: prototype_transaction_pb.signed_transaction): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EsimateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EsimateRequest): EsimateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EsimateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EsimateRequest;
  static deserializeBinaryFromReader(message: EsimateRequest, reader: jspb.BinaryReader): EsimateRequest;
}

export namespace EsimateRequest {
  export type AsObject = {
    transaction?: prototype_transaction_pb.signed_transaction.AsObject,
  }
}

export class EsimateResponse extends jspb.Message {
  hasInvoice(): boolean;
  clearInvoice(): void;
  getInvoice(): prototype_transaction_pb.transaction_receipt_with_info | undefined;
  setInvoice(value?: prototype_transaction_pb.transaction_receipt_with_info): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EsimateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EsimateResponse): EsimateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EsimateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EsimateResponse;
  static deserializeBinaryFromReader(message: EsimateResponse, reader: jspb.BinaryReader): EsimateResponse;
}

export namespace EsimateResponse {
  export type AsObject = {
    invoice?: prototype_transaction_pb.transaction_receipt_with_info.AsObject,
  }
}

export class StakeInfo extends jspb.Message {
  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): prototype_type_pb.account_name | undefined;
  setAccount(value?: prototype_type_pb.account_name): void;

  hasStakeAmount(): boolean;
  clearStakeAmount(): void;
  getStakeAmount(): prototype_type_pb.vest | undefined;
  setStakeAmount(value?: prototype_type_pb.vest): void;

  getStakeBlockNum(): number;
  setStakeBlockNum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StakeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: StakeInfo): StakeInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StakeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StakeInfo;
  static deserializeBinaryFromReader(message: StakeInfo, reader: jspb.BinaryReader): StakeInfo;
}

export namespace StakeInfo {
  export type AsObject = {
    account?: prototype_type_pb.account_name.AsObject,
    stakeAmount?: prototype_type_pb.vest.AsObject,
    stakeBlockNum: number,
  }
}

export class GetMyStakerListByNameRequest extends jspb.Message {
  hasStart(): boolean;
  clearStart(): void;
  getStart(): prototype_multi_id_pb.stake_record_reverse | undefined;
  setStart(value?: prototype_multi_id_pb.stake_record_reverse): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): prototype_multi_id_pb.stake_record_reverse | undefined;
  setEnd(value?: prototype_multi_id_pb.stake_record_reverse): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyStakerListByNameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyStakerListByNameRequest): GetMyStakerListByNameRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMyStakerListByNameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyStakerListByNameRequest;
  static deserializeBinaryFromReader(message: GetMyStakerListByNameRequest, reader: jspb.BinaryReader): GetMyStakerListByNameRequest;
}

export namespace GetMyStakerListByNameRequest {
  export type AsObject = {
    start?: prototype_multi_id_pb.stake_record_reverse.AsObject,
    end?: prototype_multi_id_pb.stake_record_reverse.AsObject,
    limit: number,
  }
}

export class GetMyStakerListByNameResponse extends jspb.Message {
  clearMyStakerListList(): void;
  getMyStakerListList(): Array<StakeInfo>;
  setMyStakerListList(value: Array<StakeInfo>): void;
  addMyStakerList(value?: StakeInfo, index?: number): StakeInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyStakerListByNameResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyStakerListByNameResponse): GetMyStakerListByNameResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMyStakerListByNameResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyStakerListByNameResponse;
  static deserializeBinaryFromReader(message: GetMyStakerListByNameResponse, reader: jspb.BinaryReader): GetMyStakerListByNameResponse;
}

export namespace GetMyStakerListByNameResponse {
  export type AsObject = {
    myStakerListList: Array<StakeInfo.AsObject>,
  }
}

export class GetMyStakeListByNameRequest extends jspb.Message {
  hasStart(): boolean;
  clearStart(): void;
  getStart(): prototype_multi_id_pb.stake_record | undefined;
  setStart(value?: prototype_multi_id_pb.stake_record): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): prototype_multi_id_pb.stake_record | undefined;
  setEnd(value?: prototype_multi_id_pb.stake_record): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyStakeListByNameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyStakeListByNameRequest): GetMyStakeListByNameRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMyStakeListByNameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyStakeListByNameRequest;
  static deserializeBinaryFromReader(message: GetMyStakeListByNameRequest, reader: jspb.BinaryReader): GetMyStakeListByNameRequest;
}

export namespace GetMyStakeListByNameRequest {
  export type AsObject = {
    start?: prototype_multi_id_pb.stake_record.AsObject,
    end?: prototype_multi_id_pb.stake_record.AsObject,
    limit: number,
  }
}

export class GetMyStakeListByNameResponse extends jspb.Message {
  clearMyStakeListList(): void;
  getMyStakeListList(): Array<StakeInfo>;
  setMyStakeListList(value: Array<StakeInfo>): void;
  addMyStakeList(value?: StakeInfo, index?: number): StakeInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyStakeListByNameResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyStakeListByNameResponse): GetMyStakeListByNameResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMyStakeListByNameResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyStakeListByNameResponse;
  static deserializeBinaryFromReader(message: GetMyStakeListByNameResponse, reader: jspb.BinaryReader): GetMyStakeListByNameResponse;
}

export namespace GetMyStakeListByNameResponse {
  export type AsObject = {
    myStakeListList: Array<StakeInfo.AsObject>,
  }
}

export class GetAccountListByVestRequest extends jspb.Message {
  hasStart(): boolean;
  clearStart(): void;
  getStart(): prototype_type_pb.vest | undefined;
  setStart(value?: prototype_type_pb.vest): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): prototype_type_pb.vest | undefined;
  setEnd(value?: prototype_type_pb.vest): void;

  hasLastAccount(): boolean;
  clearLastAccount(): void;
  getLastAccount(): AccountInfo | undefined;
  setLastAccount(value?: AccountInfo): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountListByVestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountListByVestRequest): GetAccountListByVestRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountListByVestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountListByVestRequest;
  static deserializeBinaryFromReader(message: GetAccountListByVestRequest, reader: jspb.BinaryReader): GetAccountListByVestRequest;
}

export namespace GetAccountListByVestRequest {
  export type AsObject = {
    start?: prototype_type_pb.vest.AsObject,
    end?: prototype_type_pb.vest.AsObject,
    lastAccount?: AccountInfo.AsObject,
    limit: number,
  }
}

export class GetBlockBFTInfoByNumRequest extends jspb.Message {
  getBlockNum(): string;
  setBlockNum(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockBFTInfoByNumRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockBFTInfoByNumRequest): GetBlockBFTInfoByNumRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlockBFTInfoByNumRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockBFTInfoByNumRequest;
  static deserializeBinaryFromReader(message: GetBlockBFTInfoByNumRequest, reader: jspb.BinaryReader): GetBlockBFTInfoByNumRequest;
}

export namespace GetBlockBFTInfoByNumRequest {
  export type AsObject = {
    blockNum: string,
  }
}

export class BFTVoteInfo extends jspb.Message {
  getPubKey(): string;
  setPubKey(value: string): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BFTVoteInfo.AsObject;
  static toObject(includeInstance: boolean, msg: BFTVoteInfo): BFTVoteInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BFTVoteInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BFTVoteInfo;
  static deserializeBinaryFromReader(message: BFTVoteInfo, reader: jspb.BinaryReader): BFTVoteInfo;
}

export namespace BFTVoteInfo {
  export type AsObject = {
    pubKey: string,
    signature: Uint8Array | string,
  }
}

export class GetBlockBFTInfoByNumResponse extends jspb.Message {
  getCommitterPubKey(): string;
  setCommitterPubKey(value: string): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  clearVoteList(): void;
  getVoteList(): Array<BFTVoteInfo>;
  setVoteList(value: Array<BFTVoteInfo>): void;
  addVote(value?: BFTVoteInfo, index?: number): BFTVoteInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockBFTInfoByNumResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockBFTInfoByNumResponse): GetBlockBFTInfoByNumResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlockBFTInfoByNumResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockBFTInfoByNumResponse;
  static deserializeBinaryFromReader(message: GetBlockBFTInfoByNumResponse, reader: jspb.BinaryReader): GetBlockBFTInfoByNumResponse;
}

export namespace GetBlockBFTInfoByNumResponse {
  export type AsObject = {
    committerPubKey: string,
    signature: Uint8Array | string,
    voteList: Array<BFTVoteInfo.AsObject>,
  }
}

export class GetAppTableRecordRequest extends jspb.Message {
  getTableName(): string;
  setTableName(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAppTableRecordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAppTableRecordRequest): GetAppTableRecordRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAppTableRecordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAppTableRecordRequest;
  static deserializeBinaryFromReader(message: GetAppTableRecordRequest, reader: jspb.BinaryReader): GetAppTableRecordRequest;
}

export namespace GetAppTableRecordRequest {
  export type AsObject = {
    tableName: string,
    key: string,
  }
}

export class GetAppTableRecordResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getErrorMsg(): string;
  setErrorMsg(value: string): void;

  getRecord(): string;
  setRecord(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAppTableRecordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAppTableRecordResponse): GetAppTableRecordResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAppTableRecordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAppTableRecordResponse;
  static deserializeBinaryFromReader(message: GetAppTableRecordResponse, reader: jspb.BinaryReader): GetAppTableRecordResponse;
}

export namespace GetAppTableRecordResponse {
  export type AsObject = {
    success: boolean,
    errorMsg: string,
    record: string,
  }
}

export class GetBlockProducerVoterListRequest extends jspb.Message {
  hasBlockProducer(): boolean;
  clearBlockProducer(): void;
  getBlockProducer(): prototype_type_pb.account_name | undefined;
  setBlockProducer(value?: prototype_type_pb.account_name): void;

  getLimit(): number;
  setLimit(value: number): void;

  hasLastVoter(): boolean;
  clearLastVoter(): void;
  getLastVoter(): prototype_type_pb.account_name | undefined;
  setLastVoter(value?: prototype_type_pb.account_name): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockProducerVoterListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockProducerVoterListRequest): GetBlockProducerVoterListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlockProducerVoterListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockProducerVoterListRequest;
  static deserializeBinaryFromReader(message: GetBlockProducerVoterListRequest, reader: jspb.BinaryReader): GetBlockProducerVoterListRequest;
}

export namespace GetBlockProducerVoterListRequest {
  export type AsObject = {
    blockProducer?: prototype_type_pb.account_name.AsObject,
    limit: number,
    lastVoter?: prototype_type_pb.account_name.AsObject,
  }
}

export class BlockProducerVoterResponse extends jspb.Message {
  hasAccountName(): boolean;
  clearAccountName(): void;
  getAccountName(): prototype_type_pb.account_name | undefined;
  setAccountName(value?: prototype_type_pb.account_name): void;

  hasVest(): boolean;
  clearVest(): void;
  getVest(): prototype_type_pb.vest | undefined;
  setVest(value?: prototype_type_pb.vest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockProducerVoterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BlockProducerVoterResponse): BlockProducerVoterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockProducerVoterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockProducerVoterResponse;
  static deserializeBinaryFromReader(message: BlockProducerVoterResponse, reader: jspb.BinaryReader): BlockProducerVoterResponse;
}

export namespace BlockProducerVoterResponse {
  export type AsObject = {
    accountName?: prototype_type_pb.account_name.AsObject,
    vest?: prototype_type_pb.vest.AsObject,
  }
}

export class GetBlockProducerVoterListResponse extends jspb.Message {
  clearVoterList(): void;
  getVoterList(): Array<BlockProducerVoterResponse>;
  setVoterList(value: Array<BlockProducerVoterResponse>): void;
  addVoter(value?: BlockProducerVoterResponse, index?: number): BlockProducerVoterResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockProducerVoterListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockProducerVoterListResponse): GetBlockProducerVoterListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlockProducerVoterListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockProducerVoterListResponse;
  static deserializeBinaryFromReader(message: GetBlockProducerVoterListResponse, reader: jspb.BinaryReader): GetBlockProducerVoterListResponse;
}

export namespace GetBlockProducerVoterListResponse {
  export type AsObject = {
    voterList: Array<BlockProducerVoterResponse.AsObject>,
  }
}

export class VestDelegationOrder extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasFromAccount(): boolean;
  clearFromAccount(): void;
  getFromAccount(): prototype_type_pb.account_name | undefined;
  setFromAccount(value?: prototype_type_pb.account_name): void;

  hasToAccount(): boolean;
  clearToAccount(): void;
  getToAccount(): prototype_type_pb.account_name | undefined;
  setToAccount(value?: prototype_type_pb.account_name): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): prototype_type_pb.vest | undefined;
  setAmount(value?: prototype_type_pb.vest): void;

  getCreatedBlock(): number;
  setCreatedBlock(value: number): void;

  getMaturityBlock(): number;
  setMaturityBlock(value: number): void;

  getDeliveryBlock(): number;
  setDeliveryBlock(value: number): void;

  getDelivering(): boolean;
  setDelivering(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VestDelegationOrder.AsObject;
  static toObject(includeInstance: boolean, msg: VestDelegationOrder): VestDelegationOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VestDelegationOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VestDelegationOrder;
  static deserializeBinaryFromReader(message: VestDelegationOrder, reader: jspb.BinaryReader): VestDelegationOrder;
}

export namespace VestDelegationOrder {
  export type AsObject = {
    id: number,
    fromAccount?: prototype_type_pb.account_name.AsObject,
    toAccount?: prototype_type_pb.account_name.AsObject,
    amount?: prototype_type_pb.vest.AsObject,
    createdBlock: number,
    maturityBlock: number,
    deliveryBlock: number,
    delivering: boolean,
  }
}

export class GetVestDelegationOrderListRequest extends jspb.Message {
  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): prototype_type_pb.account_name | undefined;
  setAccount(value?: prototype_type_pb.account_name): void;

  getIsFrom(): boolean;
  setIsFrom(value: boolean): void;

  getLimit(): number;
  setLimit(value: number): void;

  getLastOrderId(): number;
  setLastOrderId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVestDelegationOrderListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVestDelegationOrderListRequest): GetVestDelegationOrderListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVestDelegationOrderListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVestDelegationOrderListRequest;
  static deserializeBinaryFromReader(message: GetVestDelegationOrderListRequest, reader: jspb.BinaryReader): GetVestDelegationOrderListRequest;
}

export namespace GetVestDelegationOrderListRequest {
  export type AsObject = {
    account?: prototype_type_pb.account_name.AsObject,
    isFrom: boolean,
    limit: number,
    lastOrderId: number,
  }
}

export class GetVestDelegationOrderListResponse extends jspb.Message {
  clearOrdersList(): void;
  getOrdersList(): Array<VestDelegationOrder>;
  setOrdersList(value: Array<VestDelegationOrder>): void;
  addOrders(value?: VestDelegationOrder, index?: number): VestDelegationOrder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVestDelegationOrderListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVestDelegationOrderListResponse): GetVestDelegationOrderListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVestDelegationOrderListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVestDelegationOrderListResponse;
  static deserializeBinaryFromReader(message: GetVestDelegationOrderListResponse, reader: jspb.BinaryReader): GetVestDelegationOrderListResponse;
}

export namespace GetVestDelegationOrderListResponse {
  export type AsObject = {
    ordersList: Array<VestDelegationOrder.AsObject>,
  }
}

