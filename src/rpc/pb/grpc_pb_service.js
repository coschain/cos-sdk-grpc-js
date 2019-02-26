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

ApiService.GetAccountRewardByName = {
  methodName: "GetAccountRewardByName",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetAccountRewardByNameRequest,
  responseType: rpc_pb_grpc_pb.AccountRewardResponse
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

ApiService.GetWitnessList = {
  methodName: "GetWitnessList",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetWitnessListRequest,
  responseType: rpc_pb_grpc_pb.GetWitnessListResponse
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

ApiService.GetTrxById = {
  methodName: "GetTrxById",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.GetTrxByIdRequest,
  responseType: rpc_pb_grpc_pb.GetTrxByIdResponse
};

ApiService.GetChainState = {
  methodName: "GetChainState",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.NonParamsRequest,
  responseType: rpc_pb_grpc_pb.GetChainStateResponse
};

ApiService.GetStatInfo = {
  methodName: "GetStatInfo",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.NonParamsRequest,
  responseType: rpc_pb_grpc_pb.GetStatResponse
};

ApiService.BroadcastTrx = {
  methodName: "BroadcastTrx",
  service: ApiService,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb_grpc_pb.BroadcastTrxRequest,
  responseType: rpc_pb_grpc_pb.BroadcastTrxResponse
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

ApiServiceClient.prototype.getAccountRewardByName = function getAccountRewardByName(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetAccountRewardByName, {
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

ApiServiceClient.prototype.getWitnessList = function getWitnessList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetWitnessList, {
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

ApiServiceClient.prototype.getTrxById = function getTrxById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetTrxById, {
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

ApiServiceClient.prototype.getStatInfo = function getStatInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ApiService.GetStatInfo, {
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

exports.ApiServiceClient = ApiServiceClient;

