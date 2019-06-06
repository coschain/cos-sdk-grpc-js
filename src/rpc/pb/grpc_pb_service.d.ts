// package: grpcpb
// file: rpc/pb/grpc.proto

import * as rpc_pb_grpc_pb from "../../rpc/pb/grpc_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ApiServiceQueryTableContent = {
  readonly methodName: string;
  readonly service: typeof ApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb_grpc_pb.GetTableContentRequest;
  readonly responseType: typeof rpc_pb_grpc_pb.TableContentResponse;
};

type ApiServiceGetAccountByName = {
  readonly methodName: string;
  readonly service: typeof ApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb_grpc_pb.GetAccountByNameRequest;
  readonly responseType: typeof rpc_pb_grpc_pb.AccountResponse;
};

type ApiServiceGetAccountCashout = {
  readonly methodName: string;
  readonly service: typeof ApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb_grpc_pb.GetAccountCashoutRequest;
  readonly responseType: typeof rpc_pb_grpc_pb.AccountCashoutResponse;
};

type ApiServiceGetBlockCashout = {
  readonly methodName: string;
  readonly service: typeof ApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb_grpc_pb.GetBlockCashoutRequest;
  readonly responseType: typeof rpc_pb_grpc_pb.BlockCashoutResponse;
};

type ApiServiceGetFollowerListByName = {
  readonly methodName: string;
  readonly service: typeof ApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb_grpc_pb.GetFollowerListByNameRequest;
  readonly responseType: typeof rpc_pb_grpc_pb.GetFollowerListByNameResponse;
};

type ApiServiceGetFollowingListByName = {
  readonly methodName: string;
  readonly service: typeof ApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb_grpc_pb.GetFollowingListByNameRequest;
  readonly responseType: typeof rpc_pb_grpc_pb.GetFollowingListByNameResponse;
};

type ApiServiceGetFollowCountByName = {
  readonly methodName: string;
  readonly service: typeof ApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb_grpc_pb.GetFollowCountByNameRequest;
  readonly responseType: typeof rpc_pb_grpc_pb.GetFollowCountByNameResponse;
};

type ApiServiceGetWitnessList = {
  readonly methodName: string;
  readonly service: typeof ApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb_grpc_pb.GetWitnessListRequest;
  readonly responseType: typeof rpc_pb_grpc_pb.GetWitnessListResponse;
};

type ApiServiceGetPostListByCreated = {
  readonly methodName: string;
  readonly service: typeof ApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb_grpc_pb.GetPostListByCreatedRequest;
  readonly responseType: typeof rpc_pb_grpc_pb.GetPostListByCreatedResponse;
};

type ApiServiceGetReplyListByPostId = {
  readonly methodName: string;
  readonly service: typeof ApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb_grpc_pb.GetReplyListByPostIdRequest;
  readonly responseType: typeof rpc_pb_grpc_pb.GetReplyListByPostIdResponse;
};

type ApiServiceGetBlockTransactionsByNum = {
  readonly methodName: string;
  readonly service: typeof ApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb_grpc_pb.GetBlockTransactionsByNumRequest;
  readonly responseType: typeof rpc_pb_grpc_pb.GetBlockTransactionsByNumResponse;
};

type ApiServiceGetChainState = {
  readonly methodName: string;
  readonly service: typeof ApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb_grpc_pb.NonParamsRequest;
  readonly responseType: typeof rpc_pb_grpc_pb.GetChainStateResponse;
};

type ApiServiceBroadcastTrx = {
  readonly methodName: string;
  readonly service: typeof ApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb_grpc_pb.BroadcastTrxRequest;
  readonly responseType: typeof rpc_pb_grpc_pb.BroadcastTrxResponse;
};

type ApiServiceGetBlockList = {
  readonly methodName: string;
  readonly service: typeof ApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb_grpc_pb.GetBlockListRequest;
  readonly responseType: typeof rpc_pb_grpc_pb.GetBlockListResponse;
};

type ApiServiceGetSignedBlock = {
  readonly methodName: string;
  readonly service: typeof ApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb_grpc_pb.GetSignedBlockRequest;
  readonly responseType: typeof rpc_pb_grpc_pb.GetSignedBlockResponse;
};

type ApiServiceGetAccountListByBalance = {
  readonly methodName: string;
  readonly service: typeof ApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb_grpc_pb.GetAccountListByBalanceRequest;
  readonly responseType: typeof rpc_pb_grpc_pb.GetAccountListResponse;
};

type ApiServiceGetDailyTotalTrxInfo = {
  readonly methodName: string;
  readonly service: typeof ApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb_grpc_pb.GetDailyTotalTrxRequest;
  readonly responseType: typeof rpc_pb_grpc_pb.GetDailyTotalTrxResponse;
};

type ApiServiceGetTrxInfoById = {
  readonly methodName: string;
  readonly service: typeof ApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb_grpc_pb.GetTrxInfoByIdRequest;
  readonly responseType: typeof rpc_pb_grpc_pb.GetTrxInfoByIdResponse;
};

type ApiServiceGetTrxListByTime = {
  readonly methodName: string;
  readonly service: typeof ApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb_grpc_pb.GetTrxListByTimeRequest;
  readonly responseType: typeof rpc_pb_grpc_pb.GetTrxListByTimeResponse;
};

type ApiServiceGetPostListByCreateTime = {
  readonly methodName: string;
  readonly service: typeof ApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb_grpc_pb.GetPostListByCreateTimeRequest;
  readonly responseType: typeof rpc_pb_grpc_pb.GetPostListByCreateTimeResponse;
};

type ApiServiceGetPostListByName = {
  readonly methodName: string;
  readonly service: typeof ApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb_grpc_pb.GetPostListByNameRequest;
  readonly responseType: typeof rpc_pb_grpc_pb.GetPostListByCreateTimeResponse;
};

type ApiServiceTrxStatByHour = {
  readonly methodName: string;
  readonly service: typeof ApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb_grpc_pb.TrxStatByHourRequest;
  readonly responseType: typeof rpc_pb_grpc_pb.TrxStatByHourResponse;
};

type ApiServiceGetUserTrxListByTime = {
  readonly methodName: string;
  readonly service: typeof ApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb_grpc_pb.GetUserTrxListByTimeRequest;
  readonly responseType: typeof rpc_pb_grpc_pb.GetUserTrxListByTimeResponse;
};

type ApiServiceGetPostInfoById = {
  readonly methodName: string;
  readonly service: typeof ApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb_grpc_pb.GetPostInfoByIdRequest;
  readonly responseType: typeof rpc_pb_grpc_pb.GetPostInfoByIdResponse;
};

type ApiServiceGetContractInfo = {
  readonly methodName: string;
  readonly service: typeof ApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb_grpc_pb.GetContractInfoRequest;
  readonly responseType: typeof rpc_pb_grpc_pb.GetContractInfoResponse;
};

type ApiServiceGetBlkIsIrreversibleByTxId = {
  readonly methodName: string;
  readonly service: typeof ApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb_grpc_pb.GetBlkIsIrreversibleByTxIdRequest;
  readonly responseType: typeof rpc_pb_grpc_pb.GetBlkIsIrreversibleByTxIdResponse;
};

type ApiServiceGetAccountListByCreTime = {
  readonly methodName: string;
  readonly service: typeof ApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb_grpc_pb.GetAccountListByCreTimeRequest;
  readonly responseType: typeof rpc_pb_grpc_pb.GetAccountListResponse;
};

type ApiServiceGetDailyStats = {
  readonly methodName: string;
  readonly service: typeof ApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb_grpc_pb.GetDailyStatsRequest;
  readonly responseType: typeof rpc_pb_grpc_pb.GetDailyStatsResponse;
};

type ApiServiceGetContractListByTime = {
  readonly methodName: string;
  readonly service: typeof ApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb_grpc_pb.GetContractListByTimeRequest;
  readonly responseType: typeof rpc_pb_grpc_pb.GetContractListResponse;
};

type ApiServiceGetWitnessListByVoteCount = {
  readonly methodName: string;
  readonly service: typeof ApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb_grpc_pb.GetWitnessListByVoteCountRequest;
  readonly responseType: typeof rpc_pb_grpc_pb.GetWitnessListResponse;
};

type ApiServiceGetPostListByVest = {
  readonly methodName: string;
  readonly service: typeof ApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb_grpc_pb.GetPostListByVestRequest;
  readonly responseType: typeof rpc_pb_grpc_pb.GetPostListByVestResponse;
};

export class ApiService {
  static readonly serviceName: string;
  static readonly QueryTableContent: ApiServiceQueryTableContent;
  static readonly GetAccountByName: ApiServiceGetAccountByName;
  static readonly GetAccountCashout: ApiServiceGetAccountCashout;
  static readonly GetBlockCashout: ApiServiceGetBlockCashout;
  static readonly GetFollowerListByName: ApiServiceGetFollowerListByName;
  static readonly GetFollowingListByName: ApiServiceGetFollowingListByName;
  static readonly GetFollowCountByName: ApiServiceGetFollowCountByName;
  static readonly GetWitnessList: ApiServiceGetWitnessList;
  static readonly GetPostListByCreated: ApiServiceGetPostListByCreated;
  static readonly GetReplyListByPostId: ApiServiceGetReplyListByPostId;
  static readonly GetBlockTransactionsByNum: ApiServiceGetBlockTransactionsByNum;
  static readonly GetChainState: ApiServiceGetChainState;
  static readonly BroadcastTrx: ApiServiceBroadcastTrx;
  static readonly GetBlockList: ApiServiceGetBlockList;
  static readonly GetSignedBlock: ApiServiceGetSignedBlock;
  static readonly GetAccountListByBalance: ApiServiceGetAccountListByBalance;
  static readonly GetDailyTotalTrxInfo: ApiServiceGetDailyTotalTrxInfo;
  static readonly GetTrxInfoById: ApiServiceGetTrxInfoById;
  static readonly GetTrxListByTime: ApiServiceGetTrxListByTime;
  static readonly GetPostListByCreateTime: ApiServiceGetPostListByCreateTime;
  static readonly GetPostListByName: ApiServiceGetPostListByName;
  static readonly TrxStatByHour: ApiServiceTrxStatByHour;
  static readonly GetUserTrxListByTime: ApiServiceGetUserTrxListByTime;
  static readonly GetPostInfoById: ApiServiceGetPostInfoById;
  static readonly GetContractInfo: ApiServiceGetContractInfo;
  static readonly GetBlkIsIrreversibleByTxId: ApiServiceGetBlkIsIrreversibleByTxId;
  static readonly GetAccountListByCreTime: ApiServiceGetAccountListByCreTime;
  static readonly GetDailyStats: ApiServiceGetDailyStats;
  static readonly GetContractListByTime: ApiServiceGetContractListByTime;
  static readonly GetWitnessListByVoteCount: ApiServiceGetWitnessListByVoteCount;
  static readonly GetPostListByVest: ApiServiceGetPostListByVest;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: () => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: () => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ApiServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  queryTableContent(
    requestMessage: rpc_pb_grpc_pb.GetTableContentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.TableContentResponse|null) => void
  ): UnaryResponse;
  queryTableContent(
    requestMessage: rpc_pb_grpc_pb.GetTableContentRequest,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.TableContentResponse|null) => void
  ): UnaryResponse;
  getAccountByName(
    requestMessage: rpc_pb_grpc_pb.GetAccountByNameRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.AccountResponse|null) => void
  ): UnaryResponse;
  getAccountByName(
    requestMessage: rpc_pb_grpc_pb.GetAccountByNameRequest,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.AccountResponse|null) => void
  ): UnaryResponse;
  getAccountCashout(
    requestMessage: rpc_pb_grpc_pb.GetAccountCashoutRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.AccountCashoutResponse|null) => void
  ): UnaryResponse;
  getAccountCashout(
    requestMessage: rpc_pb_grpc_pb.GetAccountCashoutRequest,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.AccountCashoutResponse|null) => void
  ): UnaryResponse;
  getBlockCashout(
    requestMessage: rpc_pb_grpc_pb.GetBlockCashoutRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.BlockCashoutResponse|null) => void
  ): UnaryResponse;
  getBlockCashout(
    requestMessage: rpc_pb_grpc_pb.GetBlockCashoutRequest,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.BlockCashoutResponse|null) => void
  ): UnaryResponse;
  getFollowerListByName(
    requestMessage: rpc_pb_grpc_pb.GetFollowerListByNameRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetFollowerListByNameResponse|null) => void
  ): UnaryResponse;
  getFollowerListByName(
    requestMessage: rpc_pb_grpc_pb.GetFollowerListByNameRequest,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetFollowerListByNameResponse|null) => void
  ): UnaryResponse;
  getFollowingListByName(
    requestMessage: rpc_pb_grpc_pb.GetFollowingListByNameRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetFollowingListByNameResponse|null) => void
  ): UnaryResponse;
  getFollowingListByName(
    requestMessage: rpc_pb_grpc_pb.GetFollowingListByNameRequest,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetFollowingListByNameResponse|null) => void
  ): UnaryResponse;
  getFollowCountByName(
    requestMessage: rpc_pb_grpc_pb.GetFollowCountByNameRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetFollowCountByNameResponse|null) => void
  ): UnaryResponse;
  getFollowCountByName(
    requestMessage: rpc_pb_grpc_pb.GetFollowCountByNameRequest,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetFollowCountByNameResponse|null) => void
  ): UnaryResponse;
  getWitnessList(
    requestMessage: rpc_pb_grpc_pb.GetWitnessListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetWitnessListResponse|null) => void
  ): UnaryResponse;
  getWitnessList(
    requestMessage: rpc_pb_grpc_pb.GetWitnessListRequest,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetWitnessListResponse|null) => void
  ): UnaryResponse;
  getPostListByCreated(
    requestMessage: rpc_pb_grpc_pb.GetPostListByCreatedRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetPostListByCreatedResponse|null) => void
  ): UnaryResponse;
  getPostListByCreated(
    requestMessage: rpc_pb_grpc_pb.GetPostListByCreatedRequest,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetPostListByCreatedResponse|null) => void
  ): UnaryResponse;
  getReplyListByPostId(
    requestMessage: rpc_pb_grpc_pb.GetReplyListByPostIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetReplyListByPostIdResponse|null) => void
  ): UnaryResponse;
  getReplyListByPostId(
    requestMessage: rpc_pb_grpc_pb.GetReplyListByPostIdRequest,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetReplyListByPostIdResponse|null) => void
  ): UnaryResponse;
  getBlockTransactionsByNum(
    requestMessage: rpc_pb_grpc_pb.GetBlockTransactionsByNumRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetBlockTransactionsByNumResponse|null) => void
  ): UnaryResponse;
  getBlockTransactionsByNum(
    requestMessage: rpc_pb_grpc_pb.GetBlockTransactionsByNumRequest,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetBlockTransactionsByNumResponse|null) => void
  ): UnaryResponse;
  getChainState(
    requestMessage: rpc_pb_grpc_pb.NonParamsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetChainStateResponse|null) => void
  ): UnaryResponse;
  getChainState(
    requestMessage: rpc_pb_grpc_pb.NonParamsRequest,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetChainStateResponse|null) => void
  ): UnaryResponse;
  broadcastTrx(
    requestMessage: rpc_pb_grpc_pb.BroadcastTrxRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.BroadcastTrxResponse|null) => void
  ): UnaryResponse;
  broadcastTrx(
    requestMessage: rpc_pb_grpc_pb.BroadcastTrxRequest,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.BroadcastTrxResponse|null) => void
  ): UnaryResponse;
  getBlockList(
    requestMessage: rpc_pb_grpc_pb.GetBlockListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetBlockListResponse|null) => void
  ): UnaryResponse;
  getBlockList(
    requestMessage: rpc_pb_grpc_pb.GetBlockListRequest,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetBlockListResponse|null) => void
  ): UnaryResponse;
  getSignedBlock(
    requestMessage: rpc_pb_grpc_pb.GetSignedBlockRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetSignedBlockResponse|null) => void
  ): UnaryResponse;
  getSignedBlock(
    requestMessage: rpc_pb_grpc_pb.GetSignedBlockRequest,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetSignedBlockResponse|null) => void
  ): UnaryResponse;
  getAccountListByBalance(
    requestMessage: rpc_pb_grpc_pb.GetAccountListByBalanceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetAccountListResponse|null) => void
  ): UnaryResponse;
  getAccountListByBalance(
    requestMessage: rpc_pb_grpc_pb.GetAccountListByBalanceRequest,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetAccountListResponse|null) => void
  ): UnaryResponse;
  getDailyTotalTrxInfo(
    requestMessage: rpc_pb_grpc_pb.GetDailyTotalTrxRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetDailyTotalTrxResponse|null) => void
  ): UnaryResponse;
  getDailyTotalTrxInfo(
    requestMessage: rpc_pb_grpc_pb.GetDailyTotalTrxRequest,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetDailyTotalTrxResponse|null) => void
  ): UnaryResponse;
  getTrxInfoById(
    requestMessage: rpc_pb_grpc_pb.GetTrxInfoByIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetTrxInfoByIdResponse|null) => void
  ): UnaryResponse;
  getTrxInfoById(
    requestMessage: rpc_pb_grpc_pb.GetTrxInfoByIdRequest,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetTrxInfoByIdResponse|null) => void
  ): UnaryResponse;
  getTrxListByTime(
    requestMessage: rpc_pb_grpc_pb.GetTrxListByTimeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetTrxListByTimeResponse|null) => void
  ): UnaryResponse;
  getTrxListByTime(
    requestMessage: rpc_pb_grpc_pb.GetTrxListByTimeRequest,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetTrxListByTimeResponse|null) => void
  ): UnaryResponse;
  getPostListByCreateTime(
    requestMessage: rpc_pb_grpc_pb.GetPostListByCreateTimeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetPostListByCreateTimeResponse|null) => void
  ): UnaryResponse;
  getPostListByCreateTime(
    requestMessage: rpc_pb_grpc_pb.GetPostListByCreateTimeRequest,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetPostListByCreateTimeResponse|null) => void
  ): UnaryResponse;
  getPostListByName(
    requestMessage: rpc_pb_grpc_pb.GetPostListByNameRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetPostListByCreateTimeResponse|null) => void
  ): UnaryResponse;
  getPostListByName(
    requestMessage: rpc_pb_grpc_pb.GetPostListByNameRequest,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetPostListByCreateTimeResponse|null) => void
  ): UnaryResponse;
  trxStatByHour(
    requestMessage: rpc_pb_grpc_pb.TrxStatByHourRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.TrxStatByHourResponse|null) => void
  ): UnaryResponse;
  trxStatByHour(
    requestMessage: rpc_pb_grpc_pb.TrxStatByHourRequest,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.TrxStatByHourResponse|null) => void
  ): UnaryResponse;
  getUserTrxListByTime(
    requestMessage: rpc_pb_grpc_pb.GetUserTrxListByTimeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetUserTrxListByTimeResponse|null) => void
  ): UnaryResponse;
  getUserTrxListByTime(
    requestMessage: rpc_pb_grpc_pb.GetUserTrxListByTimeRequest,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetUserTrxListByTimeResponse|null) => void
  ): UnaryResponse;
  getPostInfoById(
    requestMessage: rpc_pb_grpc_pb.GetPostInfoByIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetPostInfoByIdResponse|null) => void
  ): UnaryResponse;
  getPostInfoById(
    requestMessage: rpc_pb_grpc_pb.GetPostInfoByIdRequest,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetPostInfoByIdResponse|null) => void
  ): UnaryResponse;
  getContractInfo(
    requestMessage: rpc_pb_grpc_pb.GetContractInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetContractInfoResponse|null) => void
  ): UnaryResponse;
  getContractInfo(
    requestMessage: rpc_pb_grpc_pb.GetContractInfoRequest,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetContractInfoResponse|null) => void
  ): UnaryResponse;
  getBlkIsIrreversibleByTxId(
    requestMessage: rpc_pb_grpc_pb.GetBlkIsIrreversibleByTxIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetBlkIsIrreversibleByTxIdResponse|null) => void
  ): UnaryResponse;
  getBlkIsIrreversibleByTxId(
    requestMessage: rpc_pb_grpc_pb.GetBlkIsIrreversibleByTxIdRequest,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetBlkIsIrreversibleByTxIdResponse|null) => void
  ): UnaryResponse;
  getAccountListByCreTime(
    requestMessage: rpc_pb_grpc_pb.GetAccountListByCreTimeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetAccountListResponse|null) => void
  ): UnaryResponse;
  getAccountListByCreTime(
    requestMessage: rpc_pb_grpc_pb.GetAccountListByCreTimeRequest,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetAccountListResponse|null) => void
  ): UnaryResponse;
  getDailyStats(
    requestMessage: rpc_pb_grpc_pb.GetDailyStatsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetDailyStatsResponse|null) => void
  ): UnaryResponse;
  getDailyStats(
    requestMessage: rpc_pb_grpc_pb.GetDailyStatsRequest,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetDailyStatsResponse|null) => void
  ): UnaryResponse;
  getContractListByTime(
    requestMessage: rpc_pb_grpc_pb.GetContractListByTimeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetContractListResponse|null) => void
  ): UnaryResponse;
  getContractListByTime(
    requestMessage: rpc_pb_grpc_pb.GetContractListByTimeRequest,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetContractListResponse|null) => void
  ): UnaryResponse;
  getWitnessListByVoteCount(
    requestMessage: rpc_pb_grpc_pb.GetWitnessListByVoteCountRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetWitnessListResponse|null) => void
  ): UnaryResponse;
  getWitnessListByVoteCount(
    requestMessage: rpc_pb_grpc_pb.GetWitnessListByVoteCountRequest,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetWitnessListResponse|null) => void
  ): UnaryResponse;
  getPostListByVest(
    requestMessage: rpc_pb_grpc_pb.GetPostListByVestRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetPostListByVestResponse|null) => void
  ): UnaryResponse;
  getPostListByVest(
    requestMessage: rpc_pb_grpc_pb.GetPostListByVestRequest,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetPostListByVestResponse|null) => void
  ): UnaryResponse;
}

