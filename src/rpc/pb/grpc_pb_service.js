// package: grpcpb
// file: rpc/pb/grpc.proto

var rpc_pb_grpc_pb = require("../../rpc/pb/grpc_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ApiService = (function () {
  function ApiService() {}
  ApiService.serviceName = "grpcpb.ApiService";
  return ApiService;
}());

ApiService.QueryTableContent = {
  methodName: "QueryTableContent",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetTableContentRequest,
  responseType: rpc_pb_grpc_pb.TableContentResponse
};

ApiService.GetAccountByName = {
  methodName: "GetAccountByName",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetAccountByNameRequest,
  responseType: rpc_pb_grpc_pb.AccountResponse
};

ApiService.GetFollowerListByName = {
  methodName: "GetFollowerListByName",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetFollowerListByNameRequest,
  responseType: rpc_pb_grpc_pb.GetFollowerListByNameResponse
};

ApiService.GetFollowingListByName = {
  methodName: "GetFollowingListByName",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetFollowingListByNameRequest,
  responseType: rpc_pb_grpc_pb.GetFollowingListByNameResponse
};

ApiService.GetFollowCountByName = {
  methodName: "GetFollowCountByName",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetFollowCountByNameRequest,
  responseType: rpc_pb_grpc_pb.GetFollowCountByNameResponse
};

ApiService.GetBlockProducerList = {
  methodName: "GetBlockProducerList",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetBlockProducerListRequest,
  responseType: rpc_pb_grpc_pb.GetBlockProducerListResponse
};

ApiService.GetPostListByCreated = {
  methodName: "GetPostListByCreated",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetPostListByCreatedRequest,
  responseType: rpc_pb_grpc_pb.GetPostListByCreatedResponse
};

ApiService.GetReplyListByPostId = {
  methodName: "GetReplyListByPostId",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetReplyListByPostIdRequest,
  responseType: rpc_pb_grpc_pb.GetReplyListByPostIdResponse
};

ApiService.GetBlockTransactionsByNum = {
  methodName: "GetBlockTransactionsByNum",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetBlockTransactionsByNumRequest,
  responseType: rpc_pb_grpc_pb.GetBlockTransactionsByNumResponse
};

ApiService.GetChainState = {
  methodName: "GetChainState",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.NonParamsRequest,
  responseType: rpc_pb_grpc_pb.GetChainStateResponse
};

ApiService.BroadcastTrx = {
  methodName: "BroadcastTrx",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.BroadcastTrxRequest,
  responseType: rpc_pb_grpc_pb.BroadcastTrxResponse
};

ApiService.GetBlockList = {
  methodName: "GetBlockList",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetBlockListRequest,
  responseType: rpc_pb_grpc_pb.GetBlockListResponse
};

ApiService.GetSignedBlock = {
  methodName: "GetSignedBlock",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetSignedBlockRequest,
  responseType: rpc_pb_grpc_pb.GetSignedBlockResponse
};

ApiService.GetAccountListByBalance = {
  methodName: "GetAccountListByBalance",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetAccountListByBalanceRequest,
  responseType: rpc_pb_grpc_pb.GetAccountListResponse
};

ApiService.GetDailyTotalTrxInfo = {
  methodName: "GetDailyTotalTrxInfo",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetDailyTotalTrxRequest,
  responseType: rpc_pb_grpc_pb.GetDailyTotalTrxResponse
};

ApiService.GetTrxInfoById = {
  methodName: "GetTrxInfoById",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetTrxInfoByIdRequest,
  responseType: rpc_pb_grpc_pb.GetTrxInfoByIdResponse
};

ApiService.GetTrxListByTime = {
  methodName: "GetTrxListByTime",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetTrxListByTimeRequest,
  responseType: rpc_pb_grpc_pb.GetTrxListByTimeResponse
};

ApiService.GetPostListByCreateTime = {
  methodName: "GetPostListByCreateTime",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetPostListByCreateTimeRequest,
  responseType: rpc_pb_grpc_pb.GetPostListByCreateTimeResponse
};

ApiService.GetPostListByName = {
  methodName: "GetPostListByName",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetPostListByNameRequest,
  responseType: rpc_pb_grpc_pb.GetPostListByCreateTimeResponse
};

ApiService.TrxStatByHour = {
  methodName: "TrxStatByHour",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.TrxStatByHourRequest,
  responseType: rpc_pb_grpc_pb.TrxStatByHourResponse
};

ApiService.GetUserTrxListByTime = {
  methodName: "GetUserTrxListByTime",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetUserTrxListByTimeRequest,
  responseType: rpc_pb_grpc_pb.GetUserTrxListByTimeResponse
};

ApiService.GetPostInfoById = {
  methodName: "GetPostInfoById",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetPostInfoByIdRequest,
  responseType: rpc_pb_grpc_pb.GetPostInfoByIdResponse
};

ApiService.GetContractInfo = {
  methodName: "GetContractInfo",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetContractInfoRequest,
  responseType: rpc_pb_grpc_pb.GetContractInfoResponse
};

ApiService.GetBlkIsIrreversibleByTxId = {
  methodName: "GetBlkIsIrreversibleByTxId",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetBlkIsIrreversibleByTxIdRequest,
  responseType: rpc_pb_grpc_pb.GetBlkIsIrreversibleByTxIdResponse
};

ApiService.GetAccountListByCreTime = {
  methodName: "GetAccountListByCreTime",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetAccountListByCreTimeRequest,
  responseType: rpc_pb_grpc_pb.GetAccountListResponse
};

ApiService.GetDailyStats = {
  methodName: "GetDailyStats",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetDailyStatsRequest,
  responseType: rpc_pb_grpc_pb.GetDailyStatsResponse
};

ApiService.GetContractListByTime = {
  methodName: "GetContractListByTime",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetContractListByTimeRequest,
  responseType: rpc_pb_grpc_pb.GetContractListResponse
};

ApiService.GetBlockProducerListByVoteCount = {
  methodName: "GetBlockProducerListByVoteCount",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetBlockProducerListByVoteCountRequest,
  responseType: rpc_pb_grpc_pb.GetBlockProducerListResponse
};

ApiService.GetPostListByVest = {
  methodName: "GetPostListByVest",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetPostListByVestRequest,
  responseType: rpc_pb_grpc_pb.GetPostListByVestResponse
};

ApiService.EstimateStamina = {
  methodName: "EstimateStamina",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.EsimateRequest,
  responseType: rpc_pb_grpc_pb.EsimateResponse
};

ApiService.GetNodeNeighbours = {
  methodName: "GetNodeNeighbours",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.NonParamsRequest,
  responseType: rpc_pb_grpc_pb.GetNodeNeighboursResponse
};

ApiService.GetMyStakers = {
  methodName: "GetMyStakers",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetMyStakerListByNameRequest,
  responseType: rpc_pb_grpc_pb.GetMyStakerListByNameResponse
};

ApiService.GetMyStakes = {
  methodName: "GetMyStakes",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetMyStakeListByNameRequest,
  responseType: rpc_pb_grpc_pb.GetMyStakeListByNameResponse
};

ApiService.GetNodeRunningVersion = {
  methodName: "GetNodeRunningVersion",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.NonParamsRequest,
  responseType: rpc_pb_grpc_pb.GetNodeRunningVersionResponse
};

ApiService.GetAccountListByVest = {
  methodName: "GetAccountListByVest",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetAccountListByVestRequest,
  responseType: rpc_pb_grpc_pb.GetAccountListResponse
};

ApiService.GetBlockProducerByName = {
  methodName: "GetBlockProducerByName",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetBlockProducerByNameRequest,
  responseType: rpc_pb_grpc_pb.BlockProducerResponse
};

ApiService.GetAccountByPubKey = {
  methodName: "GetAccountByPubKey",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetAccountByPubKeyRequest,
  responseType: rpc_pb_grpc_pb.AccountResponse
};

ApiService.GetBlockBFTInfoByNum = {
  methodName: "GetBlockBFTInfoByNum",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetBlockBFTInfoByNumRequest,
  responseType: rpc_pb_grpc_pb.GetBlockBFTInfoByNumResponse
};

ApiService.GetAppTableRecord = {
  methodName: "GetAppTableRecord",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetAppTableRecordRequest,
  responseType: rpc_pb_grpc_pb.GetAppTableRecordResponse
};

exports.ApiService = ApiService;

function ApiServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ApiServiceClient.prototype.queryTableContent = function queryTableContent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.QueryTableContent, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.getAccountByName = function getAccountByName(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetAccountByName, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.getFollowerListByName = function getFollowerListByName(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetFollowerListByName, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.getFollowingListByName = function getFollowingListByName(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetFollowingListByName, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.getFollowCountByName = function getFollowCountByName(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetFollowCountByName, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.getBlockProducerList = function getBlockProducerList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetBlockProducerList, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.getPostListByCreated = function getPostListByCreated(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetPostListByCreated, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.getReplyListByPostId = function getReplyListByPostId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetReplyListByPostId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.getBlockTransactionsByNum = function getBlockTransactionsByNum(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetBlockTransactionsByNum, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.getChainState = function getChainState(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetChainState, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.broadcastTrx = function broadcastTrx(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.BroadcastTrx, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.getBlockList = function getBlockList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetBlockList, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.getSignedBlock = function getSignedBlock(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetSignedBlock, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.getAccountListByBalance = function getAccountListByBalance(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetAccountListByBalance, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.getDailyTotalTrxInfo = function getDailyTotalTrxInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetDailyTotalTrxInfo, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.getTrxInfoById = function getTrxInfoById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetTrxInfoById, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.getTrxListByTime = function getTrxListByTime(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetTrxListByTime, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.getPostListByCreateTime = function getPostListByCreateTime(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetPostListByCreateTime, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.getPostListByName = function getPostListByName(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetPostListByName, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.trxStatByHour = function trxStatByHour(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.TrxStatByHour, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.getUserTrxListByTime = function getUserTrxListByTime(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetUserTrxListByTime, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.getPostInfoById = function getPostInfoById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetPostInfoById, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.getContractInfo = function getContractInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetContractInfo, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.getBlkIsIrreversibleByTxId = function getBlkIsIrreversibleByTxId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetBlkIsIrreversibleByTxId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.getAccountListByCreTime = function getAccountListByCreTime(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetAccountListByCreTime, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.getDailyStats = function getDailyStats(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetDailyStats, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.getContractListByTime = function getContractListByTime(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetContractListByTime, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.getBlockProducerListByVoteCount = function getBlockProducerListByVoteCount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetBlockProducerListByVoteCount, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.getPostListByVest = function getPostListByVest(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetPostListByVest, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.estimateStamina = function estimateStamina(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.EstimateStamina, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.getNodeNeighbours = function getNodeNeighbours(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetNodeNeighbours, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.getMyStakers = function getMyStakers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetMyStakers, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.getMyStakes = function getMyStakes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetMyStakes, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.getNodeRunningVersion = function getNodeRunningVersion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetNodeRunningVersion, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.getAccountListByVest = function getAccountListByVest(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetAccountListByVest, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.getBlockProducerByName = function getBlockProducerByName(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetBlockProducerByName, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.getAccountByPubKey = function getAccountByPubKey(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetAccountByPubKey, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.getBlockBFTInfoByNum = function getBlockBFTInfoByNum(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetBlockBFTInfoByNum, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiServiceClient.prototype.getAppTableRecord = function getAppTableRecord(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetAppTableRecord, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.ApiServiceClient = ApiServiceClient;

