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

type ApiServiceGetAccountRewardByName = {
  readonly methodName: string;
  readonly service: typeof ApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb_grpc_pb.GetAccountRewardByNameRequest;
  readonly responseType: typeof rpc_pb_grpc_pb.AccountRewardResponse;
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

type ApiServiceGetTrxById = {
  readonly methodName: string;
  readonly service: typeof ApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb_grpc_pb.GetTrxByIdRequest;
  readonly responseType: typeof rpc_pb_grpc_pb.GetTrxByIdResponse;
};

type ApiServiceGetChainState = {
  readonly methodName: string;
  readonly service: typeof ApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb_grpc_pb.NonParamsRequest;
  readonly responseType: typeof rpc_pb_grpc_pb.GetChainStateResponse;
};

type ApiServiceGetStatisticsInfo = {
  readonly methodName: string;
  readonly service: typeof ApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb_grpc_pb.NonParamsRequest;
  readonly responseType: typeof rpc_pb_grpc_pb.GetStatResponse;
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

export class ApiService {
  static readonly serviceName: string;
  static readonly QueryTableContent: ApiServiceQueryTableContent;
  static readonly GetAccountByName: ApiServiceGetAccountByName;
  static readonly GetAccountRewardByName: ApiServiceGetAccountRewardByName;
  static readonly GetFollowerListByName: ApiServiceGetFollowerListByName;
  static readonly GetFollowingListByName: ApiServiceGetFollowingListByName;
  static readonly GetFollowCountByName: ApiServiceGetFollowCountByName;
  static readonly GetWitnessList: ApiServiceGetWitnessList;
  static readonly GetPostListByCreated: ApiServiceGetPostListByCreated;
  static readonly GetReplyListByPostId: ApiServiceGetReplyListByPostId;
  static readonly GetBlockTransactionsByNum: ApiServiceGetBlockTransactionsByNum;
  static readonly GetTrxById: ApiServiceGetTrxById;
  static readonly GetChainState: ApiServiceGetChainState;
  static readonly GetStatisticsInfo: ApiServiceGetStatisticsInfo;
  static readonly BroadcastTrx: ApiServiceBroadcastTrx;
  static readonly GetBlockList: ApiServiceGetBlockList;
  static readonly GetSignedBlock: ApiServiceGetSignedBlock;
  static readonly GetAccountListByBalance: ApiServiceGetAccountListByBalance;
  static readonly GetDailyTotalTrxInfo: ApiServiceGetDailyTotalTrxInfo;
  static readonly GetTrxInfoById: ApiServiceGetTrxInfoById;
  static readonly GetTrxListByTime: ApiServiceGetTrxListByTime;
  static readonly GetPostListByCreateTime: ApiServiceGetPostListByCreateTime;
  static readonly GetPostListByName: ApiServiceGetPostListByName;
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
  getAccountRewardByName(
    requestMessage: rpc_pb_grpc_pb.GetAccountRewardByNameRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.AccountRewardResponse|null) => void
  ): UnaryResponse;
  getAccountRewardByName(
    requestMessage: rpc_pb_grpc_pb.GetAccountRewardByNameRequest,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.AccountRewardResponse|null) => void
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
  getTrxById(
    requestMessage: rpc_pb_grpc_pb.GetTrxByIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetTrxByIdResponse|null) => void
  ): UnaryResponse;
  getTrxById(
    requestMessage: rpc_pb_grpc_pb.GetTrxByIdRequest,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetTrxByIdResponse|null) => void
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
  getStatisticsInfo(
    requestMessage: rpc_pb_grpc_pb.NonParamsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetStatResponse|null) => void
  ): UnaryResponse;
  getStatisticsInfo(
    requestMessage: rpc_pb_grpc_pb.NonParamsRequest,
    callback: (error: ServiceError|null, responseMessage: rpc_pb_grpc_pb.GetStatResponse|null) => void
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
}

