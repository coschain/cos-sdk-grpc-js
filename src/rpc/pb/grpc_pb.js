/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var prototype_type_pb = require('../../prototype/type_pb.js');
var prototype_multi_id_pb = require('../../prototype/multi_id_pb.js');
var prototype_transaction_pb = require('../../prototype/transaction_pb.js');
goog.exportSymbol('proto.grpcpb.AccountCashoutResponse', null, global);
goog.exportSymbol('proto.grpcpb.AccountInfo', null, global);
goog.exportSymbol('proto.grpcpb.AccountResponse', null, global);
goog.exportSymbol('proto.grpcpb.AccountRewardResponse', null, global);
goog.exportSymbol('proto.grpcpb.BlockCashoutResponse', null, global);
goog.exportSymbol('proto.grpcpb.BlockInfo', null, global);
goog.exportSymbol('proto.grpcpb.BroadcastTrxRequest', null, global);
goog.exportSymbol('proto.grpcpb.BroadcastTrxResponse', null, global);
goog.exportSymbol('proto.grpcpb.CallResponse', null, global);
goog.exportSymbol('proto.grpcpb.ChainState', null, global);
goog.exportSymbol('proto.grpcpb.ContractInfo', null, global);
goog.exportSymbol('proto.grpcpb.DailyStat', null, global);
goog.exportSymbol('proto.grpcpb.DailyTotalTrx', null, global);
goog.exportSymbol('proto.grpcpb.EsimateRequest', null, global);
goog.exportSymbol('proto.grpcpb.EsimateResponse', null, global);
goog.exportSymbol('proto.grpcpb.FollowerListInfo', null, global);
goog.exportSymbol('proto.grpcpb.FollowingListInfo', null, global);
goog.exportSymbol('proto.grpcpb.GetAccountByNameRequest', null, global);
goog.exportSymbol('proto.grpcpb.GetAccountCashoutRequest', null, global);
goog.exportSymbol('proto.grpcpb.GetAccountListByBalanceRequest', null, global);
goog.exportSymbol('proto.grpcpb.GetAccountListByCreTimeRequest', null, global);
goog.exportSymbol('proto.grpcpb.GetAccountListByVestRequest', null, global);
goog.exportSymbol('proto.grpcpb.GetAccountListResponse', null, global);
goog.exportSymbol('proto.grpcpb.GetAccountRewardByNameRequest', null, global);
goog.exportSymbol('proto.grpcpb.GetBlkIsIrreversibleByTxIdRequest', null, global);
goog.exportSymbol('proto.grpcpb.GetBlkIsIrreversibleByTxIdResponse', null, global);
goog.exportSymbol('proto.grpcpb.GetBlockCashoutRequest', null, global);
goog.exportSymbol('proto.grpcpb.GetBlockListRequest', null, global);
goog.exportSymbol('proto.grpcpb.GetBlockListResponse', null, global);
goog.exportSymbol('proto.grpcpb.GetBlockTransactionsByNumRequest', null, global);
goog.exportSymbol('proto.grpcpb.GetBlockTransactionsByNumResponse', null, global);
goog.exportSymbol('proto.grpcpb.GetChainStateResponse', null, global);
goog.exportSymbol('proto.grpcpb.GetContractInfoRequest', null, global);
goog.exportSymbol('proto.grpcpb.GetContractInfoResponse', null, global);
goog.exportSymbol('proto.grpcpb.GetContractListByTimeRequest', null, global);
goog.exportSymbol('proto.grpcpb.GetContractListResponse', null, global);
goog.exportSymbol('proto.grpcpb.GetDailyStatsRequest', null, global);
goog.exportSymbol('proto.grpcpb.GetDailyStatsResponse', null, global);
goog.exportSymbol('proto.grpcpb.GetDailyTotalTrxRequest', null, global);
goog.exportSymbol('proto.grpcpb.GetDailyTotalTrxResponse', null, global);
goog.exportSymbol('proto.grpcpb.GetFollowCountByNameRequest', null, global);
goog.exportSymbol('proto.grpcpb.GetFollowCountByNameResponse', null, global);
goog.exportSymbol('proto.grpcpb.GetFollowerListByNameRequest', null, global);
goog.exportSymbol('proto.grpcpb.GetFollowerListByNameResponse', null, global);
goog.exportSymbol('proto.grpcpb.GetFollowingListByNameRequest', null, global);
goog.exportSymbol('proto.grpcpb.GetFollowingListByNameResponse', null, global);
goog.exportSymbol('proto.grpcpb.GetMyStakeListByNameRequest', null, global);
goog.exportSymbol('proto.grpcpb.GetMyStakeListByNameResponse', null, global);
goog.exportSymbol('proto.grpcpb.GetMyStakerListByNameRequest', null, global);
goog.exportSymbol('proto.grpcpb.GetMyStakerListByNameResponse', null, global);
goog.exportSymbol('proto.grpcpb.GetNodeNeighboursResponse', null, global);
goog.exportSymbol('proto.grpcpb.GetNodeRunningVersionResponse', null, global);
goog.exportSymbol('proto.grpcpb.GetPostInfoByIdRequest', null, global);
goog.exportSymbol('proto.grpcpb.GetPostInfoByIdResponse', null, global);
goog.exportSymbol('proto.grpcpb.GetPostListByCreateTimeRequest', null, global);
goog.exportSymbol('proto.grpcpb.GetPostListByCreateTimeResponse', null, global);
goog.exportSymbol('proto.grpcpb.GetPostListByCreatedRequest', null, global);
goog.exportSymbol('proto.grpcpb.GetPostListByCreatedResponse', null, global);
goog.exportSymbol('proto.grpcpb.GetPostListByNameRequest', null, global);
goog.exportSymbol('proto.grpcpb.GetPostListByVestRequest', null, global);
goog.exportSymbol('proto.grpcpb.GetPostListByVestResponse', null, global);
goog.exportSymbol('proto.grpcpb.GetReplyListByPostIdRequest', null, global);
goog.exportSymbol('proto.grpcpb.GetReplyListByPostIdResponse', null, global);
goog.exportSymbol('proto.grpcpb.GetSignedBlockRequest', null, global);
goog.exportSymbol('proto.grpcpb.GetSignedBlockResponse', null, global);
goog.exportSymbol('proto.grpcpb.GetTableContentRequest', null, global);
goog.exportSymbol('proto.grpcpb.GetTrxInfoByIdRequest', null, global);
goog.exportSymbol('proto.grpcpb.GetTrxInfoByIdResponse', null, global);
goog.exportSymbol('proto.grpcpb.GetTrxListByTimeRequest', null, global);
goog.exportSymbol('proto.grpcpb.GetTrxListByTimeResponse', null, global);
goog.exportSymbol('proto.grpcpb.GetUserTrxListByTimeRequest', null, global);
goog.exportSymbol('proto.grpcpb.GetUserTrxListByTimeResponse', null, global);
goog.exportSymbol('proto.grpcpb.GetWitnessListByVoteCountRequest', null, global);
goog.exportSymbol('proto.grpcpb.GetWitnessListRequest', null, global);
goog.exportSymbol('proto.grpcpb.GetWitnessListResponse', null, global);
goog.exportSymbol('proto.grpcpb.NonParamsRequest', null, global);
goog.exportSymbol('proto.grpcpb.PostResponse', null, global);
goog.exportSymbol('proto.grpcpb.StakeInfo', null, global);
goog.exportSymbol('proto.grpcpb.StatByHour', null, global);
goog.exportSymbol('proto.grpcpb.TableContentResponse', null, global);
goog.exportSymbol('proto.grpcpb.TrxInfo', null, global);
goog.exportSymbol('proto.grpcpb.TrxStatByHourRequest', null, global);
goog.exportSymbol('proto.grpcpb.TrxStatByHourResponse', null, global);
goog.exportSymbol('proto.grpcpb.VoterOfPost', null, global);
goog.exportSymbol('proto.grpcpb.WitnessResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetTableContentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetTableContentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetTableContentRequest.displayName = 'proto.grpcpb.GetTableContentRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetTableContentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetTableContentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetTableContentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetTableContentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    owner: jspb.Message.getFieldWithDefault(msg, 1, ""),
    contract: jspb.Message.getFieldWithDefault(msg, 2, ""),
    table: jspb.Message.getFieldWithDefault(msg, 3, ""),
    field: jspb.Message.getFieldWithDefault(msg, 4, ""),
    begin: jspb.Message.getFieldWithDefault(msg, 5, ""),
    count: jspb.Message.getFieldWithDefault(msg, 6, 0),
    reverse: jspb.Message.getFieldWithDefault(msg, 7, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetTableContentRequest}
 */
proto.grpcpb.GetTableContentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetTableContentRequest;
  return proto.grpcpb.GetTableContentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetTableContentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetTableContentRequest}
 */
proto.grpcpb.GetTableContentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContract(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTable(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setBegin(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCount(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReverse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetTableContentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetTableContentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetTableContentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetTableContentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwner();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContract();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTable();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getField();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBegin();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getReverse();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional string owner = 1;
 * @return {string}
 */
proto.grpcpb.GetTableContentRequest.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.grpcpb.GetTableContentRequest.prototype.setOwner = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string contract = 2;
 * @return {string}
 */
proto.grpcpb.GetTableContentRequest.prototype.getContract = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.grpcpb.GetTableContentRequest.prototype.setContract = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string table = 3;
 * @return {string}
 */
proto.grpcpb.GetTableContentRequest.prototype.getTable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.grpcpb.GetTableContentRequest.prototype.setTable = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string field = 4;
 * @return {string}
 */
proto.grpcpb.GetTableContentRequest.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.grpcpb.GetTableContentRequest.prototype.setField = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string begin = 5;
 * @return {string}
 */
proto.grpcpb.GetTableContentRequest.prototype.getBegin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.grpcpb.GetTableContentRequest.prototype.setBegin = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint32 count = 6;
 * @return {number}
 */
proto.grpcpb.GetTableContentRequest.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.grpcpb.GetTableContentRequest.prototype.setCount = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional bool reverse = 7;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.grpcpb.GetTableContentRequest.prototype.getReverse = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.grpcpb.GetTableContentRequest.prototype.setReverse = function(value) {
  jspb.Message.setProto3BooleanField(this, 7, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.TableContentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.TableContentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.TableContentResponse.displayName = 'proto.grpcpb.TableContentResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.TableContentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.TableContentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.TableContentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.TableContentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tableContent: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.TableContentResponse}
 */
proto.grpcpb.TableContentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.TableContentResponse;
  return proto.grpcpb.TableContentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.TableContentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.TableContentResponse}
 */
proto.grpcpb.TableContentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.TableContentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.TableContentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.TableContentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.TableContentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTableContent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string table_content = 1;
 * @return {string}
 */
proto.grpcpb.TableContentResponse.prototype.getTableContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.grpcpb.TableContentResponse.prototype.setTableContent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetAccountByNameRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetAccountByNameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetAccountByNameRequest.displayName = 'proto.grpcpb.GetAccountByNameRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetAccountByNameRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetAccountByNameRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetAccountByNameRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetAccountByNameRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountName: (f = msg.getAccountName()) && prototype_type_pb.account_name.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetAccountByNameRequest}
 */
proto.grpcpb.GetAccountByNameRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetAccountByNameRequest;
  return proto.grpcpb.GetAccountByNameRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetAccountByNameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetAccountByNameRequest}
 */
proto.grpcpb.GetAccountByNameRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_type_pb.account_name;
      reader.readMessage(value,prototype_type_pb.account_name.deserializeBinaryFromReader);
      msg.setAccountName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetAccountByNameRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetAccountByNameRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetAccountByNameRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetAccountByNameRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountName();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_type_pb.account_name.serializeBinaryToWriter
    );
  }
};


/**
 * optional prototype.account_name account_name = 1;
 * @return {?proto.prototype.account_name}
 */
proto.grpcpb.GetAccountByNameRequest.prototype.getAccountName = function() {
  return /** @type{?proto.prototype.account_name} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.account_name, 1));
};


/** @param {?proto.prototype.account_name|undefined} value */
proto.grpcpb.GetAccountByNameRequest.prototype.setAccountName = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.GetAccountByNameRequest.prototype.clearAccountName = function() {
  this.setAccountName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetAccountByNameRequest.prototype.hasAccountName = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetAccountCashoutRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetAccountCashoutRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetAccountCashoutRequest.displayName = 'proto.grpcpb.GetAccountCashoutRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetAccountCashoutRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetAccountCashoutRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetAccountCashoutRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetAccountCashoutRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountName: (f = msg.getAccountName()) && prototype_type_pb.account_name.toObject(includeInstance, f),
    postId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetAccountCashoutRequest}
 */
proto.grpcpb.GetAccountCashoutRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetAccountCashoutRequest;
  return proto.grpcpb.GetAccountCashoutRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetAccountCashoutRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetAccountCashoutRequest}
 */
proto.grpcpb.GetAccountCashoutRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_type_pb.account_name;
      reader.readMessage(value,prototype_type_pb.account_name.deserializeBinaryFromReader);
      msg.setAccountName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPostId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetAccountCashoutRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetAccountCashoutRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetAccountCashoutRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetAccountCashoutRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountName();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_type_pb.account_name.serializeBinaryToWriter
    );
  }
  f = message.getPostId();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional prototype.account_name account_name = 1;
 * @return {?proto.prototype.account_name}
 */
proto.grpcpb.GetAccountCashoutRequest.prototype.getAccountName = function() {
  return /** @type{?proto.prototype.account_name} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.account_name, 1));
};


/** @param {?proto.prototype.account_name|undefined} value */
proto.grpcpb.GetAccountCashoutRequest.prototype.setAccountName = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.GetAccountCashoutRequest.prototype.clearAccountName = function() {
  this.setAccountName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetAccountCashoutRequest.prototype.hasAccountName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 post_id = 2;
 * @return {number}
 */
proto.grpcpb.GetAccountCashoutRequest.prototype.getPostId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.grpcpb.GetAccountCashoutRequest.prototype.setPostId = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.AccountCashoutResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.AccountCashoutResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.AccountCashoutResponse.displayName = 'proto.grpcpb.AccountCashoutResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.AccountCashoutResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.AccountCashoutResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.AccountCashoutResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.AccountCashoutResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountName: (f = msg.getAccountName()) && prototype_type_pb.account_name.toObject(includeInstance, f),
    reward: (f = msg.getReward()) && prototype_type_pb.vest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.AccountCashoutResponse}
 */
proto.grpcpb.AccountCashoutResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.AccountCashoutResponse;
  return proto.grpcpb.AccountCashoutResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.AccountCashoutResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.AccountCashoutResponse}
 */
proto.grpcpb.AccountCashoutResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_type_pb.account_name;
      reader.readMessage(value,prototype_type_pb.account_name.deserializeBinaryFromReader);
      msg.setAccountName(value);
      break;
    case 2:
      var value = new prototype_type_pb.vest;
      reader.readMessage(value,prototype_type_pb.vest.deserializeBinaryFromReader);
      msg.setReward(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.AccountCashoutResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.AccountCashoutResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.AccountCashoutResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.AccountCashoutResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountName();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_type_pb.account_name.serializeBinaryToWriter
    );
  }
  f = message.getReward();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      prototype_type_pb.vest.serializeBinaryToWriter
    );
  }
};


/**
 * optional prototype.account_name account_name = 1;
 * @return {?proto.prototype.account_name}
 */
proto.grpcpb.AccountCashoutResponse.prototype.getAccountName = function() {
  return /** @type{?proto.prototype.account_name} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.account_name, 1));
};


/** @param {?proto.prototype.account_name|undefined} value */
proto.grpcpb.AccountCashoutResponse.prototype.setAccountName = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.AccountCashoutResponse.prototype.clearAccountName = function() {
  this.setAccountName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.AccountCashoutResponse.prototype.hasAccountName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional prototype.vest reward = 2;
 * @return {?proto.prototype.vest}
 */
proto.grpcpb.AccountCashoutResponse.prototype.getReward = function() {
  return /** @type{?proto.prototype.vest} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.vest, 2));
};


/** @param {?proto.prototype.vest|undefined} value */
proto.grpcpb.AccountCashoutResponse.prototype.setReward = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.grpcpb.AccountCashoutResponse.prototype.clearReward = function() {
  this.setReward(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.AccountCashoutResponse.prototype.hasReward = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetBlockCashoutRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetBlockCashoutRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetBlockCashoutRequest.displayName = 'proto.grpcpb.GetBlockCashoutRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetBlockCashoutRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetBlockCashoutRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetBlockCashoutRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetBlockCashoutRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockHeight: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetBlockCashoutRequest}
 */
proto.grpcpb.GetBlockCashoutRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetBlockCashoutRequest;
  return proto.grpcpb.GetBlockCashoutRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetBlockCashoutRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetBlockCashoutRequest}
 */
proto.grpcpb.GetBlockCashoutRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockHeight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetBlockCashoutRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetBlockCashoutRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetBlockCashoutRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetBlockCashoutRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockHeight();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 block_height = 1;
 * @return {number}
 */
proto.grpcpb.GetBlockCashoutRequest.prototype.getBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.grpcpb.GetBlockCashoutRequest.prototype.setBlockHeight = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.BlockCashoutResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grpcpb.BlockCashoutResponse.repeatedFields_, null);
};
goog.inherits(proto.grpcpb.BlockCashoutResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.BlockCashoutResponse.displayName = 'proto.grpcpb.BlockCashoutResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grpcpb.BlockCashoutResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.BlockCashoutResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.BlockCashoutResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.BlockCashoutResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.BlockCashoutResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cashoutListList: jspb.Message.toObjectList(msg.getCashoutListList(),
    proto.grpcpb.AccountCashoutResponse.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.BlockCashoutResponse}
 */
proto.grpcpb.BlockCashoutResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.BlockCashoutResponse;
  return proto.grpcpb.BlockCashoutResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.BlockCashoutResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.BlockCashoutResponse}
 */
proto.grpcpb.BlockCashoutResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grpcpb.AccountCashoutResponse;
      reader.readMessage(value,proto.grpcpb.AccountCashoutResponse.deserializeBinaryFromReader);
      msg.addCashoutList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.BlockCashoutResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.BlockCashoutResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.BlockCashoutResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.BlockCashoutResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCashoutListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.grpcpb.AccountCashoutResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AccountCashoutResponse cashout_list = 1;
 * @return {!Array<!proto.grpcpb.AccountCashoutResponse>}
 */
proto.grpcpb.BlockCashoutResponse.prototype.getCashoutListList = function() {
  return /** @type{!Array<!proto.grpcpb.AccountCashoutResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.grpcpb.AccountCashoutResponse, 1));
};


/** @param {!Array<!proto.grpcpb.AccountCashoutResponse>} value */
proto.grpcpb.BlockCashoutResponse.prototype.setCashoutListList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.grpcpb.AccountCashoutResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.grpcpb.AccountCashoutResponse}
 */
proto.grpcpb.BlockCashoutResponse.prototype.addCashoutList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.grpcpb.AccountCashoutResponse, opt_index);
};


proto.grpcpb.BlockCashoutResponse.prototype.clearCashoutListList = function() {
  this.setCashoutListList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetAccountRewardByNameRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetAccountRewardByNameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetAccountRewardByNameRequest.displayName = 'proto.grpcpb.GetAccountRewardByNameRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetAccountRewardByNameRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetAccountRewardByNameRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetAccountRewardByNameRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetAccountRewardByNameRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountName: (f = msg.getAccountName()) && prototype_type_pb.account_name.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetAccountRewardByNameRequest}
 */
proto.grpcpb.GetAccountRewardByNameRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetAccountRewardByNameRequest;
  return proto.grpcpb.GetAccountRewardByNameRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetAccountRewardByNameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetAccountRewardByNameRequest}
 */
proto.grpcpb.GetAccountRewardByNameRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_type_pb.account_name;
      reader.readMessage(value,prototype_type_pb.account_name.deserializeBinaryFromReader);
      msg.setAccountName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetAccountRewardByNameRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetAccountRewardByNameRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetAccountRewardByNameRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetAccountRewardByNameRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountName();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_type_pb.account_name.serializeBinaryToWriter
    );
  }
};


/**
 * optional prototype.account_name account_name = 1;
 * @return {?proto.prototype.account_name}
 */
proto.grpcpb.GetAccountRewardByNameRequest.prototype.getAccountName = function() {
  return /** @type{?proto.prototype.account_name} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.account_name, 1));
};


/** @param {?proto.prototype.account_name|undefined} value */
proto.grpcpb.GetAccountRewardByNameRequest.prototype.setAccountName = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.GetAccountRewardByNameRequest.prototype.clearAccountName = function() {
  this.setAccountName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetAccountRewardByNameRequest.prototype.hasAccountName = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.AccountRewardResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.AccountRewardResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.AccountRewardResponse.displayName = 'proto.grpcpb.AccountRewardResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.AccountRewardResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.AccountRewardResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.AccountRewardResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.AccountRewardResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountName: (f = msg.getAccountName()) && prototype_type_pb.account_name.toObject(includeInstance, f),
    reward: (f = msg.getReward()) && prototype_type_pb.vest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.AccountRewardResponse}
 */
proto.grpcpb.AccountRewardResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.AccountRewardResponse;
  return proto.grpcpb.AccountRewardResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.AccountRewardResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.AccountRewardResponse}
 */
proto.grpcpb.AccountRewardResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_type_pb.account_name;
      reader.readMessage(value,prototype_type_pb.account_name.deserializeBinaryFromReader);
      msg.setAccountName(value);
      break;
    case 2:
      var value = new prototype_type_pb.vest;
      reader.readMessage(value,prototype_type_pb.vest.deserializeBinaryFromReader);
      msg.setReward(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.AccountRewardResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.AccountRewardResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.AccountRewardResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.AccountRewardResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountName();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_type_pb.account_name.serializeBinaryToWriter
    );
  }
  f = message.getReward();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      prototype_type_pb.vest.serializeBinaryToWriter
    );
  }
};


/**
 * optional prototype.account_name account_name = 1;
 * @return {?proto.prototype.account_name}
 */
proto.grpcpb.AccountRewardResponse.prototype.getAccountName = function() {
  return /** @type{?proto.prototype.account_name} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.account_name, 1));
};


/** @param {?proto.prototype.account_name|undefined} value */
proto.grpcpb.AccountRewardResponse.prototype.setAccountName = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.AccountRewardResponse.prototype.clearAccountName = function() {
  this.setAccountName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.AccountRewardResponse.prototype.hasAccountName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional prototype.vest reward = 2;
 * @return {?proto.prototype.vest}
 */
proto.grpcpb.AccountRewardResponse.prototype.getReward = function() {
  return /** @type{?proto.prototype.vest} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.vest, 2));
};


/** @param {?proto.prototype.vest|undefined} value */
proto.grpcpb.AccountRewardResponse.prototype.setReward = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.grpcpb.AccountRewardResponse.prototype.clearReward = function() {
  this.setReward(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.AccountRewardResponse.prototype.hasReward = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.AccountInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.AccountInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.AccountInfo.displayName = 'proto.grpcpb.AccountInfo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.AccountInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.AccountInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.AccountInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.AccountInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountName: (f = msg.getAccountName()) && prototype_type_pb.account_name.toObject(includeInstance, f),
    coin: (f = msg.getCoin()) && prototype_type_pb.coin.toObject(includeInstance, f),
    vest: (f = msg.getVest()) && prototype_type_pb.vest.toObject(includeInstance, f),
    publicKey: (f = msg.getPublicKey()) && prototype_type_pb.public_key_type.toObject(includeInstance, f),
    createdTime: (f = msg.getCreatedTime()) && prototype_type_pb.time_point_sec.toObject(includeInstance, f),
    witness: (f = msg.getWitness()) && proto.grpcpb.WitnessResponse.toObject(includeInstance, f),
    postCount: jspb.Message.getFieldWithDefault(msg, 7, 0),
    followerCount: jspb.Message.getFieldWithDefault(msg, 8, 0),
    followingCount: jspb.Message.getFieldWithDefault(msg, 9, 0),
    trxCount: jspb.Message.getFieldWithDefault(msg, 10, 0),
    votePower: jspb.Message.getFieldWithDefault(msg, 11, 0),
    staminaFreeRemain: jspb.Message.getFieldWithDefault(msg, 12, 0),
    staminaStakeRemain: jspb.Message.getFieldWithDefault(msg, 13, 0),
    staminaMax: jspb.Message.getFieldWithDefault(msg, 14, 0),
    stakeVest: (f = msg.getStakeVest()) && prototype_type_pb.vest.toObject(includeInstance, f),
    withdrawRemains: (f = msg.getWithdrawRemains()) && prototype_type_pb.vest.toObject(includeInstance, f),
    withdrawEachTime: (f = msg.getWithdrawEachTime()) && prototype_type_pb.vest.toObject(includeInstance, f),
    nextWithdrawTime: (f = msg.getNextWithdrawTime()) && prototype_type_pb.time_point_sec.toObject(includeInstance, f),
    bpVoteCount: jspb.Message.getFieldWithDefault(msg, 19, 0),
    reputation: jspb.Message.getFieldWithDefault(msg, 20, 0),
    reputationMemo: jspb.Message.getFieldWithDefault(msg, 21, ""),
    chargedTicket: jspb.Message.getFieldWithDefault(msg, 22, 0),
    freeTicket: jspb.Message.getFieldWithDefault(msg, 23, 0),
    freeze: jspb.Message.getFieldWithDefault(msg, 24, 0),
    freezeMemo: jspb.Message.getFieldWithDefault(msg, 25, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.AccountInfo}
 */
proto.grpcpb.AccountInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.AccountInfo;
  return proto.grpcpb.AccountInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.AccountInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.AccountInfo}
 */
proto.grpcpb.AccountInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_type_pb.account_name;
      reader.readMessage(value,prototype_type_pb.account_name.deserializeBinaryFromReader);
      msg.setAccountName(value);
      break;
    case 2:
      var value = new prototype_type_pb.coin;
      reader.readMessage(value,prototype_type_pb.coin.deserializeBinaryFromReader);
      msg.setCoin(value);
      break;
    case 3:
      var value = new prototype_type_pb.vest;
      reader.readMessage(value,prototype_type_pb.vest.deserializeBinaryFromReader);
      msg.setVest(value);
      break;
    case 4:
      var value = new prototype_type_pb.public_key_type;
      reader.readMessage(value,prototype_type_pb.public_key_type.deserializeBinaryFromReader);
      msg.setPublicKey(value);
      break;
    case 5:
      var value = new prototype_type_pb.time_point_sec;
      reader.readMessage(value,prototype_type_pb.time_point_sec.deserializeBinaryFromReader);
      msg.setCreatedTime(value);
      break;
    case 6:
      var value = new proto.grpcpb.WitnessResponse;
      reader.readMessage(value,proto.grpcpb.WitnessResponse.deserializeBinaryFromReader);
      msg.setWitness(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPostCount(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFollowerCount(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFollowingCount(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTrxCount(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVotePower(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStaminaFreeRemain(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStaminaStakeRemain(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStaminaMax(value);
      break;
    case 15:
      var value = new prototype_type_pb.vest;
      reader.readMessage(value,prototype_type_pb.vest.deserializeBinaryFromReader);
      msg.setStakeVest(value);
      break;
    case 16:
      var value = new prototype_type_pb.vest;
      reader.readMessage(value,prototype_type_pb.vest.deserializeBinaryFromReader);
      msg.setWithdrawRemains(value);
      break;
    case 17:
      var value = new prototype_type_pb.vest;
      reader.readMessage(value,prototype_type_pb.vest.deserializeBinaryFromReader);
      msg.setWithdrawEachTime(value);
      break;
    case 18:
      var value = new prototype_type_pb.time_point_sec;
      reader.readMessage(value,prototype_type_pb.time_point_sec.deserializeBinaryFromReader);
      msg.setNextWithdrawTime(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBpVoteCount(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setReputation(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setReputationMemo(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setChargedTicket(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFreeTicket(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFreeze(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setFreezeMemo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.AccountInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.AccountInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.AccountInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.AccountInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountName();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_type_pb.account_name.serializeBinaryToWriter
    );
  }
  f = message.getCoin();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      prototype_type_pb.coin.serializeBinaryToWriter
    );
  }
  f = message.getVest();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      prototype_type_pb.vest.serializeBinaryToWriter
    );
  }
  f = message.getPublicKey();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      prototype_type_pb.public_key_type.serializeBinaryToWriter
    );
  }
  f = message.getCreatedTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      prototype_type_pb.time_point_sec.serializeBinaryToWriter
    );
  }
  f = message.getWitness();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.grpcpb.WitnessResponse.serializeBinaryToWriter
    );
  }
  f = message.getPostCount();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getFollowerCount();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getFollowingCount();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getTrxCount();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getVotePower();
  if (f !== 0) {
    writer.writeUint32(
      11,
      f
    );
  }
  f = message.getStaminaFreeRemain();
  if (f !== 0) {
    writer.writeUint64(
      12,
      f
    );
  }
  f = message.getStaminaStakeRemain();
  if (f !== 0) {
    writer.writeUint64(
      13,
      f
    );
  }
  f = message.getStaminaMax();
  if (f !== 0) {
    writer.writeUint64(
      14,
      f
    );
  }
  f = message.getStakeVest();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      prototype_type_pb.vest.serializeBinaryToWriter
    );
  }
  f = message.getWithdrawRemains();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      prototype_type_pb.vest.serializeBinaryToWriter
    );
  }
  f = message.getWithdrawEachTime();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      prototype_type_pb.vest.serializeBinaryToWriter
    );
  }
  f = message.getNextWithdrawTime();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      prototype_type_pb.time_point_sec.serializeBinaryToWriter
    );
  }
  f = message.getBpVoteCount();
  if (f !== 0) {
    writer.writeUint32(
      19,
      f
    );
  }
  f = message.getReputation();
  if (f !== 0) {
    writer.writeUint32(
      20,
      f
    );
  }
  f = message.getReputationMemo();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getChargedTicket();
  if (f !== 0) {
    writer.writeUint32(
      22,
      f
    );
  }
  f = message.getFreeTicket();
  if (f !== 0) {
    writer.writeUint32(
      23,
      f
    );
  }
  f = message.getFreeze();
  if (f !== 0) {
    writer.writeUint32(
      24,
      f
    );
  }
  f = message.getFreezeMemo();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
};


/**
 * optional prototype.account_name account_name = 1;
 * @return {?proto.prototype.account_name}
 */
proto.grpcpb.AccountInfo.prototype.getAccountName = function() {
  return /** @type{?proto.prototype.account_name} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.account_name, 1));
};


/** @param {?proto.prototype.account_name|undefined} value */
proto.grpcpb.AccountInfo.prototype.setAccountName = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.AccountInfo.prototype.clearAccountName = function() {
  this.setAccountName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.AccountInfo.prototype.hasAccountName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional prototype.coin coin = 2;
 * @return {?proto.prototype.coin}
 */
proto.grpcpb.AccountInfo.prototype.getCoin = function() {
  return /** @type{?proto.prototype.coin} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.coin, 2));
};


/** @param {?proto.prototype.coin|undefined} value */
proto.grpcpb.AccountInfo.prototype.setCoin = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.grpcpb.AccountInfo.prototype.clearCoin = function() {
  this.setCoin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.AccountInfo.prototype.hasCoin = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional prototype.vest vest = 3;
 * @return {?proto.prototype.vest}
 */
proto.grpcpb.AccountInfo.prototype.getVest = function() {
  return /** @type{?proto.prototype.vest} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.vest, 3));
};


/** @param {?proto.prototype.vest|undefined} value */
proto.grpcpb.AccountInfo.prototype.setVest = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.grpcpb.AccountInfo.prototype.clearVest = function() {
  this.setVest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.AccountInfo.prototype.hasVest = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional prototype.public_key_type public_key = 4;
 * @return {?proto.prototype.public_key_type}
 */
proto.grpcpb.AccountInfo.prototype.getPublicKey = function() {
  return /** @type{?proto.prototype.public_key_type} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.public_key_type, 4));
};


/** @param {?proto.prototype.public_key_type|undefined} value */
proto.grpcpb.AccountInfo.prototype.setPublicKey = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.grpcpb.AccountInfo.prototype.clearPublicKey = function() {
  this.setPublicKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.AccountInfo.prototype.hasPublicKey = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional prototype.time_point_sec created_time = 5;
 * @return {?proto.prototype.time_point_sec}
 */
proto.grpcpb.AccountInfo.prototype.getCreatedTime = function() {
  return /** @type{?proto.prototype.time_point_sec} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.time_point_sec, 5));
};


/** @param {?proto.prototype.time_point_sec|undefined} value */
proto.grpcpb.AccountInfo.prototype.setCreatedTime = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.grpcpb.AccountInfo.prototype.clearCreatedTime = function() {
  this.setCreatedTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.AccountInfo.prototype.hasCreatedTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional WitnessResponse witness = 6;
 * @return {?proto.grpcpb.WitnessResponse}
 */
proto.grpcpb.AccountInfo.prototype.getWitness = function() {
  return /** @type{?proto.grpcpb.WitnessResponse} */ (
    jspb.Message.getWrapperField(this, proto.grpcpb.WitnessResponse, 6));
};


/** @param {?proto.grpcpb.WitnessResponse|undefined} value */
proto.grpcpb.AccountInfo.prototype.setWitness = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.grpcpb.AccountInfo.prototype.clearWitness = function() {
  this.setWitness(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.AccountInfo.prototype.hasWitness = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 post_count = 7;
 * @return {number}
 */
proto.grpcpb.AccountInfo.prototype.getPostCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.grpcpb.AccountInfo.prototype.setPostCount = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 follower_count = 8;
 * @return {number}
 */
proto.grpcpb.AccountInfo.prototype.getFollowerCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.grpcpb.AccountInfo.prototype.setFollowerCount = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint32 following_count = 9;
 * @return {number}
 */
proto.grpcpb.AccountInfo.prototype.getFollowingCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.grpcpb.AccountInfo.prototype.setFollowingCount = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint32 trx_count = 10;
 * @return {number}
 */
proto.grpcpb.AccountInfo.prototype.getTrxCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.grpcpb.AccountInfo.prototype.setTrxCount = function(value) {
  jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint32 vote_power = 11;
 * @return {number}
 */
proto.grpcpb.AccountInfo.prototype.getVotePower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.grpcpb.AccountInfo.prototype.setVotePower = function(value) {
  jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional uint64 stamina_free_remain = 12;
 * @return {number}
 */
proto.grpcpb.AccountInfo.prototype.getStaminaFreeRemain = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.grpcpb.AccountInfo.prototype.setStaminaFreeRemain = function(value) {
  jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional uint64 stamina_stake_remain = 13;
 * @return {number}
 */
proto.grpcpb.AccountInfo.prototype.getStaminaStakeRemain = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {number} value */
proto.grpcpb.AccountInfo.prototype.setStaminaStakeRemain = function(value) {
  jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional uint64 stamina_max = 14;
 * @return {number}
 */
proto.grpcpb.AccountInfo.prototype.getStaminaMax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/** @param {number} value */
proto.grpcpb.AccountInfo.prototype.setStaminaMax = function(value) {
  jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional prototype.vest stake_vest = 15;
 * @return {?proto.prototype.vest}
 */
proto.grpcpb.AccountInfo.prototype.getStakeVest = function() {
  return /** @type{?proto.prototype.vest} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.vest, 15));
};


/** @param {?proto.prototype.vest|undefined} value */
proto.grpcpb.AccountInfo.prototype.setStakeVest = function(value) {
  jspb.Message.setWrapperField(this, 15, value);
};


proto.grpcpb.AccountInfo.prototype.clearStakeVest = function() {
  this.setStakeVest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.AccountInfo.prototype.hasStakeVest = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional prototype.vest withdraw_remains = 16;
 * @return {?proto.prototype.vest}
 */
proto.grpcpb.AccountInfo.prototype.getWithdrawRemains = function() {
  return /** @type{?proto.prototype.vest} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.vest, 16));
};


/** @param {?proto.prototype.vest|undefined} value */
proto.grpcpb.AccountInfo.prototype.setWithdrawRemains = function(value) {
  jspb.Message.setWrapperField(this, 16, value);
};


proto.grpcpb.AccountInfo.prototype.clearWithdrawRemains = function() {
  this.setWithdrawRemains(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.AccountInfo.prototype.hasWithdrawRemains = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional prototype.vest withdraw_each_time = 17;
 * @return {?proto.prototype.vest}
 */
proto.grpcpb.AccountInfo.prototype.getWithdrawEachTime = function() {
  return /** @type{?proto.prototype.vest} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.vest, 17));
};


/** @param {?proto.prototype.vest|undefined} value */
proto.grpcpb.AccountInfo.prototype.setWithdrawEachTime = function(value) {
  jspb.Message.setWrapperField(this, 17, value);
};


proto.grpcpb.AccountInfo.prototype.clearWithdrawEachTime = function() {
  this.setWithdrawEachTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.AccountInfo.prototype.hasWithdrawEachTime = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional prototype.time_point_sec next_withdraw_time = 18;
 * @return {?proto.prototype.time_point_sec}
 */
proto.grpcpb.AccountInfo.prototype.getNextWithdrawTime = function() {
  return /** @type{?proto.prototype.time_point_sec} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.time_point_sec, 18));
};


/** @param {?proto.prototype.time_point_sec|undefined} value */
proto.grpcpb.AccountInfo.prototype.setNextWithdrawTime = function(value) {
  jspb.Message.setWrapperField(this, 18, value);
};


proto.grpcpb.AccountInfo.prototype.clearNextWithdrawTime = function() {
  this.setNextWithdrawTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.AccountInfo.prototype.hasNextWithdrawTime = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional uint32 bp_vote_count = 19;
 * @return {number}
 */
proto.grpcpb.AccountInfo.prototype.getBpVoteCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/** @param {number} value */
proto.grpcpb.AccountInfo.prototype.setBpVoteCount = function(value) {
  jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional uint32 reputation = 20;
 * @return {number}
 */
proto.grpcpb.AccountInfo.prototype.getReputation = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/** @param {number} value */
proto.grpcpb.AccountInfo.prototype.setReputation = function(value) {
  jspb.Message.setProto3IntField(this, 20, value);
};


/**
 * optional string reputation_memo = 21;
 * @return {string}
 */
proto.grpcpb.AccountInfo.prototype.getReputationMemo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/** @param {string} value */
proto.grpcpb.AccountInfo.prototype.setReputationMemo = function(value) {
  jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional uint32 charged_ticket = 22;
 * @return {number}
 */
proto.grpcpb.AccountInfo.prototype.getChargedTicket = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/** @param {number} value */
proto.grpcpb.AccountInfo.prototype.setChargedTicket = function(value) {
  jspb.Message.setProto3IntField(this, 22, value);
};


/**
 * optional uint32 free_ticket = 23;
 * @return {number}
 */
proto.grpcpb.AccountInfo.prototype.getFreeTicket = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/** @param {number} value */
proto.grpcpb.AccountInfo.prototype.setFreeTicket = function(value) {
  jspb.Message.setProto3IntField(this, 23, value);
};


/**
 * optional uint32 freeze = 24;
 * @return {number}
 */
proto.grpcpb.AccountInfo.prototype.getFreeze = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/** @param {number} value */
proto.grpcpb.AccountInfo.prototype.setFreeze = function(value) {
  jspb.Message.setProto3IntField(this, 24, value);
};


/**
 * optional string freeze_memo = 25;
 * @return {string}
 */
proto.grpcpb.AccountInfo.prototype.getFreezeMemo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/** @param {string} value */
proto.grpcpb.AccountInfo.prototype.setFreezeMemo = function(value) {
  jspb.Message.setProto3StringField(this, 25, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.AccountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.AccountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.AccountResponse.displayName = 'proto.grpcpb.AccountResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.AccountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.AccountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.AccountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.AccountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && proto.grpcpb.AccountInfo.toObject(includeInstance, f),
    state: (f = msg.getState()) && proto.grpcpb.ChainState.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.AccountResponse}
 */
proto.grpcpb.AccountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.AccountResponse;
  return proto.grpcpb.AccountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.AccountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.AccountResponse}
 */
proto.grpcpb.AccountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grpcpb.AccountInfo;
      reader.readMessage(value,proto.grpcpb.AccountInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = new proto.grpcpb.ChainState;
      reader.readMessage(value,proto.grpcpb.ChainState.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.AccountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.AccountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.AccountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.AccountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.grpcpb.AccountInfo.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.grpcpb.ChainState.serializeBinaryToWriter
    );
  }
};


/**
 * optional AccountInfo info = 1;
 * @return {?proto.grpcpb.AccountInfo}
 */
proto.grpcpb.AccountResponse.prototype.getInfo = function() {
  return /** @type{?proto.grpcpb.AccountInfo} */ (
    jspb.Message.getWrapperField(this, proto.grpcpb.AccountInfo, 1));
};


/** @param {?proto.grpcpb.AccountInfo|undefined} value */
proto.grpcpb.AccountResponse.prototype.setInfo = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.AccountResponse.prototype.clearInfo = function() {
  this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.AccountResponse.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ChainState state = 2;
 * @return {?proto.grpcpb.ChainState}
 */
proto.grpcpb.AccountResponse.prototype.getState = function() {
  return /** @type{?proto.grpcpb.ChainState} */ (
    jspb.Message.getWrapperField(this, proto.grpcpb.ChainState, 2));
};


/** @param {?proto.grpcpb.ChainState|undefined} value */
proto.grpcpb.AccountResponse.prototype.setState = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.grpcpb.AccountResponse.prototype.clearState = function() {
  this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.AccountResponse.prototype.hasState = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetFollowerListByNameRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetFollowerListByNameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetFollowerListByNameRequest.displayName = 'proto.grpcpb.GetFollowerListByNameRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetFollowerListByNameRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetFollowerListByNameRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetFollowerListByNameRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetFollowerListByNameRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: (f = msg.getStart()) && prototype_multi_id_pb.follower_created_order.toObject(includeInstance, f),
    end: (f = msg.getEnd()) && prototype_multi_id_pb.follower_created_order.toObject(includeInstance, f),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0),
    lastOrder: (f = msg.getLastOrder()) && prototype_multi_id_pb.follower_created_order.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetFollowerListByNameRequest}
 */
proto.grpcpb.GetFollowerListByNameRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetFollowerListByNameRequest;
  return proto.grpcpb.GetFollowerListByNameRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetFollowerListByNameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetFollowerListByNameRequest}
 */
proto.grpcpb.GetFollowerListByNameRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_multi_id_pb.follower_created_order;
      reader.readMessage(value,prototype_multi_id_pb.follower_created_order.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 2:
      var value = new prototype_multi_id_pb.follower_created_order;
      reader.readMessage(value,prototype_multi_id_pb.follower_created_order.deserializeBinaryFromReader);
      msg.setEnd(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    case 4:
      var value = new prototype_multi_id_pb.follower_created_order;
      reader.readMessage(value,prototype_multi_id_pb.follower_created_order.deserializeBinaryFromReader);
      msg.setLastOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetFollowerListByNameRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetFollowerListByNameRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetFollowerListByNameRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetFollowerListByNameRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_multi_id_pb.follower_created_order.serializeBinaryToWriter
    );
  }
  f = message.getEnd();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      prototype_multi_id_pb.follower_created_order.serializeBinaryToWriter
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getLastOrder();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      prototype_multi_id_pb.follower_created_order.serializeBinaryToWriter
    );
  }
};


/**
 * optional prototype.follower_created_order start = 1;
 * @return {?proto.prototype.follower_created_order}
 */
proto.grpcpb.GetFollowerListByNameRequest.prototype.getStart = function() {
  return /** @type{?proto.prototype.follower_created_order} */ (
    jspb.Message.getWrapperField(this, prototype_multi_id_pb.follower_created_order, 1));
};


/** @param {?proto.prototype.follower_created_order|undefined} value */
proto.grpcpb.GetFollowerListByNameRequest.prototype.setStart = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.GetFollowerListByNameRequest.prototype.clearStart = function() {
  this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetFollowerListByNameRequest.prototype.hasStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional prototype.follower_created_order end = 2;
 * @return {?proto.prototype.follower_created_order}
 */
proto.grpcpb.GetFollowerListByNameRequest.prototype.getEnd = function() {
  return /** @type{?proto.prototype.follower_created_order} */ (
    jspb.Message.getWrapperField(this, prototype_multi_id_pb.follower_created_order, 2));
};


/** @param {?proto.prototype.follower_created_order|undefined} value */
proto.grpcpb.GetFollowerListByNameRequest.prototype.setEnd = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.grpcpb.GetFollowerListByNameRequest.prototype.clearEnd = function() {
  this.setEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetFollowerListByNameRequest.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 limit = 3;
 * @return {number}
 */
proto.grpcpb.GetFollowerListByNameRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.grpcpb.GetFollowerListByNameRequest.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional prototype.follower_created_order last_order = 4;
 * @return {?proto.prototype.follower_created_order}
 */
proto.grpcpb.GetFollowerListByNameRequest.prototype.getLastOrder = function() {
  return /** @type{?proto.prototype.follower_created_order} */ (
    jspb.Message.getWrapperField(this, prototype_multi_id_pb.follower_created_order, 4));
};


/** @param {?proto.prototype.follower_created_order|undefined} value */
proto.grpcpb.GetFollowerListByNameRequest.prototype.setLastOrder = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.grpcpb.GetFollowerListByNameRequest.prototype.clearLastOrder = function() {
  this.setLastOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetFollowerListByNameRequest.prototype.hasLastOrder = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.FollowerListInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.FollowerListInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.FollowerListInfo.displayName = 'proto.grpcpb.FollowerListInfo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.FollowerListInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.FollowerListInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.FollowerListInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.FollowerListInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: (f = msg.getAccount()) && proto.grpcpb.AccountResponse.toObject(includeInstance, f),
    createOrder: (f = msg.getCreateOrder()) && prototype_multi_id_pb.follower_created_order.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.FollowerListInfo}
 */
proto.grpcpb.FollowerListInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.FollowerListInfo;
  return proto.grpcpb.FollowerListInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.FollowerListInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.FollowerListInfo}
 */
proto.grpcpb.FollowerListInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grpcpb.AccountResponse;
      reader.readMessage(value,proto.grpcpb.AccountResponse.deserializeBinaryFromReader);
      msg.setAccount(value);
      break;
    case 2:
      var value = new prototype_multi_id_pb.follower_created_order;
      reader.readMessage(value,prototype_multi_id_pb.follower_created_order.deserializeBinaryFromReader);
      msg.setCreateOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.FollowerListInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.FollowerListInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.FollowerListInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.FollowerListInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.grpcpb.AccountResponse.serializeBinaryToWriter
    );
  }
  f = message.getCreateOrder();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      prototype_multi_id_pb.follower_created_order.serializeBinaryToWriter
    );
  }
};


/**
 * optional AccountResponse account = 1;
 * @return {?proto.grpcpb.AccountResponse}
 */
proto.grpcpb.FollowerListInfo.prototype.getAccount = function() {
  return /** @type{?proto.grpcpb.AccountResponse} */ (
    jspb.Message.getWrapperField(this, proto.grpcpb.AccountResponse, 1));
};


/** @param {?proto.grpcpb.AccountResponse|undefined} value */
proto.grpcpb.FollowerListInfo.prototype.setAccount = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.FollowerListInfo.prototype.clearAccount = function() {
  this.setAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.FollowerListInfo.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional prototype.follower_created_order create_order = 2;
 * @return {?proto.prototype.follower_created_order}
 */
proto.grpcpb.FollowerListInfo.prototype.getCreateOrder = function() {
  return /** @type{?proto.prototype.follower_created_order} */ (
    jspb.Message.getWrapperField(this, prototype_multi_id_pb.follower_created_order, 2));
};


/** @param {?proto.prototype.follower_created_order|undefined} value */
proto.grpcpb.FollowerListInfo.prototype.setCreateOrder = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.grpcpb.FollowerListInfo.prototype.clearCreateOrder = function() {
  this.setCreateOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.FollowerListInfo.prototype.hasCreateOrder = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetFollowerListByNameResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grpcpb.GetFollowerListByNameResponse.repeatedFields_, null);
};
goog.inherits(proto.grpcpb.GetFollowerListByNameResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetFollowerListByNameResponse.displayName = 'proto.grpcpb.GetFollowerListByNameResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grpcpb.GetFollowerListByNameResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetFollowerListByNameResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetFollowerListByNameResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetFollowerListByNameResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetFollowerListByNameResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    followerListList: jspb.Message.toObjectList(msg.getFollowerListList(),
    proto.grpcpb.FollowerListInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetFollowerListByNameResponse}
 */
proto.grpcpb.GetFollowerListByNameResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetFollowerListByNameResponse;
  return proto.grpcpb.GetFollowerListByNameResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetFollowerListByNameResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetFollowerListByNameResponse}
 */
proto.grpcpb.GetFollowerListByNameResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grpcpb.FollowerListInfo;
      reader.readMessage(value,proto.grpcpb.FollowerListInfo.deserializeBinaryFromReader);
      msg.addFollowerList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetFollowerListByNameResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetFollowerListByNameResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetFollowerListByNameResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetFollowerListByNameResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFollowerListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.grpcpb.FollowerListInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated FollowerListInfo follower_list = 1;
 * @return {!Array<!proto.grpcpb.FollowerListInfo>}
 */
proto.grpcpb.GetFollowerListByNameResponse.prototype.getFollowerListList = function() {
  return /** @type{!Array<!proto.grpcpb.FollowerListInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.grpcpb.FollowerListInfo, 1));
};


/** @param {!Array<!proto.grpcpb.FollowerListInfo>} value */
proto.grpcpb.GetFollowerListByNameResponse.prototype.setFollowerListList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.grpcpb.FollowerListInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.grpcpb.FollowerListInfo}
 */
proto.grpcpb.GetFollowerListByNameResponse.prototype.addFollowerList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.grpcpb.FollowerListInfo, opt_index);
};


proto.grpcpb.GetFollowerListByNameResponse.prototype.clearFollowerListList = function() {
  this.setFollowerListList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetFollowingListByNameRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetFollowingListByNameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetFollowingListByNameRequest.displayName = 'proto.grpcpb.GetFollowingListByNameRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetFollowingListByNameRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetFollowingListByNameRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetFollowingListByNameRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetFollowingListByNameRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: (f = msg.getStart()) && prototype_multi_id_pb.following_created_order.toObject(includeInstance, f),
    end: (f = msg.getEnd()) && prototype_multi_id_pb.following_created_order.toObject(includeInstance, f),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0),
    lastOrder: (f = msg.getLastOrder()) && prototype_multi_id_pb.following_created_order.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetFollowingListByNameRequest}
 */
proto.grpcpb.GetFollowingListByNameRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetFollowingListByNameRequest;
  return proto.grpcpb.GetFollowingListByNameRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetFollowingListByNameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetFollowingListByNameRequest}
 */
proto.grpcpb.GetFollowingListByNameRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_multi_id_pb.following_created_order;
      reader.readMessage(value,prototype_multi_id_pb.following_created_order.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 2:
      var value = new prototype_multi_id_pb.following_created_order;
      reader.readMessage(value,prototype_multi_id_pb.following_created_order.deserializeBinaryFromReader);
      msg.setEnd(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    case 4:
      var value = new prototype_multi_id_pb.following_created_order;
      reader.readMessage(value,prototype_multi_id_pb.following_created_order.deserializeBinaryFromReader);
      msg.setLastOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetFollowingListByNameRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetFollowingListByNameRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetFollowingListByNameRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetFollowingListByNameRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_multi_id_pb.following_created_order.serializeBinaryToWriter
    );
  }
  f = message.getEnd();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      prototype_multi_id_pb.following_created_order.serializeBinaryToWriter
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getLastOrder();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      prototype_multi_id_pb.following_created_order.serializeBinaryToWriter
    );
  }
};


/**
 * optional prototype.following_created_order start = 1;
 * @return {?proto.prototype.following_created_order}
 */
proto.grpcpb.GetFollowingListByNameRequest.prototype.getStart = function() {
  return /** @type{?proto.prototype.following_created_order} */ (
    jspb.Message.getWrapperField(this, prototype_multi_id_pb.following_created_order, 1));
};


/** @param {?proto.prototype.following_created_order|undefined} value */
proto.grpcpb.GetFollowingListByNameRequest.prototype.setStart = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.GetFollowingListByNameRequest.prototype.clearStart = function() {
  this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetFollowingListByNameRequest.prototype.hasStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional prototype.following_created_order end = 2;
 * @return {?proto.prototype.following_created_order}
 */
proto.grpcpb.GetFollowingListByNameRequest.prototype.getEnd = function() {
  return /** @type{?proto.prototype.following_created_order} */ (
    jspb.Message.getWrapperField(this, prototype_multi_id_pb.following_created_order, 2));
};


/** @param {?proto.prototype.following_created_order|undefined} value */
proto.grpcpb.GetFollowingListByNameRequest.prototype.setEnd = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.grpcpb.GetFollowingListByNameRequest.prototype.clearEnd = function() {
  this.setEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetFollowingListByNameRequest.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 limit = 3;
 * @return {number}
 */
proto.grpcpb.GetFollowingListByNameRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.grpcpb.GetFollowingListByNameRequest.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional prototype.following_created_order last_order = 4;
 * @return {?proto.prototype.following_created_order}
 */
proto.grpcpb.GetFollowingListByNameRequest.prototype.getLastOrder = function() {
  return /** @type{?proto.prototype.following_created_order} */ (
    jspb.Message.getWrapperField(this, prototype_multi_id_pb.following_created_order, 4));
};


/** @param {?proto.prototype.following_created_order|undefined} value */
proto.grpcpb.GetFollowingListByNameRequest.prototype.setLastOrder = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.grpcpb.GetFollowingListByNameRequest.prototype.clearLastOrder = function() {
  this.setLastOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetFollowingListByNameRequest.prototype.hasLastOrder = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.FollowingListInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.FollowingListInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.FollowingListInfo.displayName = 'proto.grpcpb.FollowingListInfo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.FollowingListInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.FollowingListInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.FollowingListInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.FollowingListInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: (f = msg.getAccount()) && proto.grpcpb.AccountResponse.toObject(includeInstance, f),
    createOrder: (f = msg.getCreateOrder()) && prototype_multi_id_pb.following_created_order.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.FollowingListInfo}
 */
proto.grpcpb.FollowingListInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.FollowingListInfo;
  return proto.grpcpb.FollowingListInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.FollowingListInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.FollowingListInfo}
 */
proto.grpcpb.FollowingListInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grpcpb.AccountResponse;
      reader.readMessage(value,proto.grpcpb.AccountResponse.deserializeBinaryFromReader);
      msg.setAccount(value);
      break;
    case 2:
      var value = new prototype_multi_id_pb.following_created_order;
      reader.readMessage(value,prototype_multi_id_pb.following_created_order.deserializeBinaryFromReader);
      msg.setCreateOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.FollowingListInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.FollowingListInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.FollowingListInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.FollowingListInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.grpcpb.AccountResponse.serializeBinaryToWriter
    );
  }
  f = message.getCreateOrder();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      prototype_multi_id_pb.following_created_order.serializeBinaryToWriter
    );
  }
};


/**
 * optional AccountResponse account = 1;
 * @return {?proto.grpcpb.AccountResponse}
 */
proto.grpcpb.FollowingListInfo.prototype.getAccount = function() {
  return /** @type{?proto.grpcpb.AccountResponse} */ (
    jspb.Message.getWrapperField(this, proto.grpcpb.AccountResponse, 1));
};


/** @param {?proto.grpcpb.AccountResponse|undefined} value */
proto.grpcpb.FollowingListInfo.prototype.setAccount = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.FollowingListInfo.prototype.clearAccount = function() {
  this.setAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.FollowingListInfo.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional prototype.following_created_order create_order = 2;
 * @return {?proto.prototype.following_created_order}
 */
proto.grpcpb.FollowingListInfo.prototype.getCreateOrder = function() {
  return /** @type{?proto.prototype.following_created_order} */ (
    jspb.Message.getWrapperField(this, prototype_multi_id_pb.following_created_order, 2));
};


/** @param {?proto.prototype.following_created_order|undefined} value */
proto.grpcpb.FollowingListInfo.prototype.setCreateOrder = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.grpcpb.FollowingListInfo.prototype.clearCreateOrder = function() {
  this.setCreateOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.FollowingListInfo.prototype.hasCreateOrder = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetFollowingListByNameResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grpcpb.GetFollowingListByNameResponse.repeatedFields_, null);
};
goog.inherits(proto.grpcpb.GetFollowingListByNameResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetFollowingListByNameResponse.displayName = 'proto.grpcpb.GetFollowingListByNameResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grpcpb.GetFollowingListByNameResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetFollowingListByNameResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetFollowingListByNameResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetFollowingListByNameResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetFollowingListByNameResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    followingListList: jspb.Message.toObjectList(msg.getFollowingListList(),
    proto.grpcpb.FollowingListInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetFollowingListByNameResponse}
 */
proto.grpcpb.GetFollowingListByNameResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetFollowingListByNameResponse;
  return proto.grpcpb.GetFollowingListByNameResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetFollowingListByNameResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetFollowingListByNameResponse}
 */
proto.grpcpb.GetFollowingListByNameResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grpcpb.FollowingListInfo;
      reader.readMessage(value,proto.grpcpb.FollowingListInfo.deserializeBinaryFromReader);
      msg.addFollowingList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetFollowingListByNameResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetFollowingListByNameResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetFollowingListByNameResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetFollowingListByNameResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFollowingListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.grpcpb.FollowingListInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated FollowingListInfo following_list = 1;
 * @return {!Array<!proto.grpcpb.FollowingListInfo>}
 */
proto.grpcpb.GetFollowingListByNameResponse.prototype.getFollowingListList = function() {
  return /** @type{!Array<!proto.grpcpb.FollowingListInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.grpcpb.FollowingListInfo, 1));
};


/** @param {!Array<!proto.grpcpb.FollowingListInfo>} value */
proto.grpcpb.GetFollowingListByNameResponse.prototype.setFollowingListList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.grpcpb.FollowingListInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.grpcpb.FollowingListInfo}
 */
proto.grpcpb.GetFollowingListByNameResponse.prototype.addFollowingList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.grpcpb.FollowingListInfo, opt_index);
};


proto.grpcpb.GetFollowingListByNameResponse.prototype.clearFollowingListList = function() {
  this.setFollowingListList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetFollowCountByNameRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetFollowCountByNameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetFollowCountByNameRequest.displayName = 'proto.grpcpb.GetFollowCountByNameRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetFollowCountByNameRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetFollowCountByNameRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetFollowCountByNameRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetFollowCountByNameRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountName: (f = msg.getAccountName()) && prototype_type_pb.account_name.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetFollowCountByNameRequest}
 */
proto.grpcpb.GetFollowCountByNameRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetFollowCountByNameRequest;
  return proto.grpcpb.GetFollowCountByNameRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetFollowCountByNameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetFollowCountByNameRequest}
 */
proto.grpcpb.GetFollowCountByNameRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_type_pb.account_name;
      reader.readMessage(value,prototype_type_pb.account_name.deserializeBinaryFromReader);
      msg.setAccountName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetFollowCountByNameRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetFollowCountByNameRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetFollowCountByNameRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetFollowCountByNameRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountName();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_type_pb.account_name.serializeBinaryToWriter
    );
  }
};


/**
 * optional prototype.account_name account_name = 1;
 * @return {?proto.prototype.account_name}
 */
proto.grpcpb.GetFollowCountByNameRequest.prototype.getAccountName = function() {
  return /** @type{?proto.prototype.account_name} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.account_name, 1));
};


/** @param {?proto.prototype.account_name|undefined} value */
proto.grpcpb.GetFollowCountByNameRequest.prototype.setAccountName = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.GetFollowCountByNameRequest.prototype.clearAccountName = function() {
  this.setAccountName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetFollowCountByNameRequest.prototype.hasAccountName = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetFollowCountByNameResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetFollowCountByNameResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetFollowCountByNameResponse.displayName = 'proto.grpcpb.GetFollowCountByNameResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetFollowCountByNameResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetFollowCountByNameResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetFollowCountByNameResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetFollowCountByNameResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ferCnt: jspb.Message.getFieldWithDefault(msg, 1, 0),
    fingCnt: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetFollowCountByNameResponse}
 */
proto.grpcpb.GetFollowCountByNameResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetFollowCountByNameResponse;
  return proto.grpcpb.GetFollowCountByNameResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetFollowCountByNameResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetFollowCountByNameResponse}
 */
proto.grpcpb.GetFollowCountByNameResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFerCnt(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFingCnt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetFollowCountByNameResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetFollowCountByNameResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetFollowCountByNameResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetFollowCountByNameResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFerCnt();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getFingCnt();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 fer_cnt = 1;
 * @return {number}
 */
proto.grpcpb.GetFollowCountByNameResponse.prototype.getFerCnt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.grpcpb.GetFollowCountByNameResponse.prototype.setFerCnt = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 fing_cnt = 2;
 * @return {number}
 */
proto.grpcpb.GetFollowCountByNameResponse.prototype.getFingCnt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.grpcpb.GetFollowCountByNameResponse.prototype.setFingCnt = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.WitnessResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grpcpb.WitnessResponse.repeatedFields_, null);
};
goog.inherits(proto.grpcpb.WitnessResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.WitnessResponse.displayName = 'proto.grpcpb.WitnessResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grpcpb.WitnessResponse.repeatedFields_ = [14];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.WitnessResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.WitnessResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.WitnessResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.WitnessResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    owner: (f = msg.getOwner()) && prototype_type_pb.account_name.toObject(includeInstance, f),
    createdTime: (f = msg.getCreatedTime()) && prototype_type_pb.time_point_sec.toObject(includeInstance, f),
    url: jspb.Message.getFieldWithDefault(msg, 3, ""),
    voteCount: (f = msg.getVoteCount()) && prototype_type_pb.vest.toObject(includeInstance, f),
    signingKey: (f = msg.getSigningKey()) && prototype_type_pb.public_key_type.toObject(includeInstance, f),
    proposedStaminaFree: jspb.Message.getFieldWithDefault(msg, 6, 0),
    active: jspb.Message.getFieldWithDefault(msg, 7, false),
    tpsExpected: jspb.Message.getFieldWithDefault(msg, 8, 0),
    accountCreateFee: (f = msg.getAccountCreateFee()) && prototype_type_pb.coin.toObject(includeInstance, f),
    topNAcquireFreeToken: jspb.Message.getFieldWithDefault(msg, 10, 0),
    ticketFlushInterval: jspb.Message.getFieldWithDefault(msg, 11, 0),
    perTicketPrice: (f = msg.getPerTicketPrice()) && prototype_type_pb.coin.toObject(includeInstance, f),
    perTicketWeight: jspb.Message.getFieldWithDefault(msg, 13, 0),
    voterListList: jspb.Message.toObjectList(msg.getVoterListList(),
    prototype_type_pb.account_name.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.WitnessResponse}
 */
proto.grpcpb.WitnessResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.WitnessResponse;
  return proto.grpcpb.WitnessResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.WitnessResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.WitnessResponse}
 */
proto.grpcpb.WitnessResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_type_pb.account_name;
      reader.readMessage(value,prototype_type_pb.account_name.deserializeBinaryFromReader);
      msg.setOwner(value);
      break;
    case 2:
      var value = new prototype_type_pb.time_point_sec;
      reader.readMessage(value,prototype_type_pb.time_point_sec.deserializeBinaryFromReader);
      msg.setCreatedTime(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 4:
      var value = new prototype_type_pb.vest;
      reader.readMessage(value,prototype_type_pb.vest.deserializeBinaryFromReader);
      msg.setVoteCount(value);
      break;
    case 5:
      var value = new prototype_type_pb.public_key_type;
      reader.readMessage(value,prototype_type_pb.public_key_type.deserializeBinaryFromReader);
      msg.setSigningKey(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setProposedStaminaFree(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActive(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTpsExpected(value);
      break;
    case 9:
      var value = new prototype_type_pb.coin;
      reader.readMessage(value,prototype_type_pb.coin.deserializeBinaryFromReader);
      msg.setAccountCreateFee(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTopNAcquireFreeToken(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTicketFlushInterval(value);
      break;
    case 12:
      var value = new prototype_type_pb.coin;
      reader.readMessage(value,prototype_type_pb.coin.deserializeBinaryFromReader);
      msg.setPerTicketPrice(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPerTicketWeight(value);
      break;
    case 14:
      var value = new prototype_type_pb.account_name;
      reader.readMessage(value,prototype_type_pb.account_name.deserializeBinaryFromReader);
      msg.addVoterList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.WitnessResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.WitnessResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.WitnessResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.WitnessResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwner();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_type_pb.account_name.serializeBinaryToWriter
    );
  }
  f = message.getCreatedTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      prototype_type_pb.time_point_sec.serializeBinaryToWriter
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getVoteCount();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      prototype_type_pb.vest.serializeBinaryToWriter
    );
  }
  f = message.getSigningKey();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      prototype_type_pb.public_key_type.serializeBinaryToWriter
    );
  }
  f = message.getProposedStaminaFree();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getActive();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getTpsExpected();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getAccountCreateFee();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      prototype_type_pb.coin.serializeBinaryToWriter
    );
  }
  f = message.getTopNAcquireFreeToken();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getTicketFlushInterval();
  if (f !== 0) {
    writer.writeUint64(
      11,
      f
    );
  }
  f = message.getPerTicketPrice();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      prototype_type_pb.coin.serializeBinaryToWriter
    );
  }
  f = message.getPerTicketWeight();
  if (f !== 0) {
    writer.writeUint64(
      13,
      f
    );
  }
  f = message.getVoterListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      prototype_type_pb.account_name.serializeBinaryToWriter
    );
  }
};


/**
 * optional prototype.account_name owner = 1;
 * @return {?proto.prototype.account_name}
 */
proto.grpcpb.WitnessResponse.prototype.getOwner = function() {
  return /** @type{?proto.prototype.account_name} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.account_name, 1));
};


/** @param {?proto.prototype.account_name|undefined} value */
proto.grpcpb.WitnessResponse.prototype.setOwner = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.WitnessResponse.prototype.clearOwner = function() {
  this.setOwner(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.WitnessResponse.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional prototype.time_point_sec created_time = 2;
 * @return {?proto.prototype.time_point_sec}
 */
proto.grpcpb.WitnessResponse.prototype.getCreatedTime = function() {
  return /** @type{?proto.prototype.time_point_sec} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.time_point_sec, 2));
};


/** @param {?proto.prototype.time_point_sec|undefined} value */
proto.grpcpb.WitnessResponse.prototype.setCreatedTime = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.grpcpb.WitnessResponse.prototype.clearCreatedTime = function() {
  this.setCreatedTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.WitnessResponse.prototype.hasCreatedTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string url = 3;
 * @return {string}
 */
proto.grpcpb.WitnessResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.grpcpb.WitnessResponse.prototype.setUrl = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional prototype.vest vote_count = 4;
 * @return {?proto.prototype.vest}
 */
proto.grpcpb.WitnessResponse.prototype.getVoteCount = function() {
  return /** @type{?proto.prototype.vest} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.vest, 4));
};


/** @param {?proto.prototype.vest|undefined} value */
proto.grpcpb.WitnessResponse.prototype.setVoteCount = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.grpcpb.WitnessResponse.prototype.clearVoteCount = function() {
  this.setVoteCount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.WitnessResponse.prototype.hasVoteCount = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional prototype.public_key_type signing_key = 5;
 * @return {?proto.prototype.public_key_type}
 */
proto.grpcpb.WitnessResponse.prototype.getSigningKey = function() {
  return /** @type{?proto.prototype.public_key_type} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.public_key_type, 5));
};


/** @param {?proto.prototype.public_key_type|undefined} value */
proto.grpcpb.WitnessResponse.prototype.setSigningKey = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.grpcpb.WitnessResponse.prototype.clearSigningKey = function() {
  this.setSigningKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.WitnessResponse.prototype.hasSigningKey = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint64 proposed_stamina_free = 6;
 * @return {number}
 */
proto.grpcpb.WitnessResponse.prototype.getProposedStaminaFree = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.grpcpb.WitnessResponse.prototype.setProposedStaminaFree = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional bool active = 7;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.grpcpb.WitnessResponse.prototype.getActive = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.grpcpb.WitnessResponse.prototype.setActive = function(value) {
  jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional uint64 tps_expected = 8;
 * @return {number}
 */
proto.grpcpb.WitnessResponse.prototype.getTpsExpected = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.grpcpb.WitnessResponse.prototype.setTpsExpected = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional prototype.coin account_create_fee = 9;
 * @return {?proto.prototype.coin}
 */
proto.grpcpb.WitnessResponse.prototype.getAccountCreateFee = function() {
  return /** @type{?proto.prototype.coin} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.coin, 9));
};


/** @param {?proto.prototype.coin|undefined} value */
proto.grpcpb.WitnessResponse.prototype.setAccountCreateFee = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.grpcpb.WitnessResponse.prototype.clearAccountCreateFee = function() {
  this.setAccountCreateFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.WitnessResponse.prototype.hasAccountCreateFee = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional uint32 top_n_acquire_free_token = 10;
 * @return {number}
 */
proto.grpcpb.WitnessResponse.prototype.getTopNAcquireFreeToken = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.grpcpb.WitnessResponse.prototype.setTopNAcquireFreeToken = function(value) {
  jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint64 ticket_flush_interval = 11;
 * @return {number}
 */
proto.grpcpb.WitnessResponse.prototype.getTicketFlushInterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.grpcpb.WitnessResponse.prototype.setTicketFlushInterval = function(value) {
  jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional prototype.coin per_ticket_price = 12;
 * @return {?proto.prototype.coin}
 */
proto.grpcpb.WitnessResponse.prototype.getPerTicketPrice = function() {
  return /** @type{?proto.prototype.coin} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.coin, 12));
};


/** @param {?proto.prototype.coin|undefined} value */
proto.grpcpb.WitnessResponse.prototype.setPerTicketPrice = function(value) {
  jspb.Message.setWrapperField(this, 12, value);
};


proto.grpcpb.WitnessResponse.prototype.clearPerTicketPrice = function() {
  this.setPerTicketPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.WitnessResponse.prototype.hasPerTicketPrice = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional uint64 per_ticket_weight = 13;
 * @return {number}
 */
proto.grpcpb.WitnessResponse.prototype.getPerTicketWeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {number} value */
proto.grpcpb.WitnessResponse.prototype.setPerTicketWeight = function(value) {
  jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * repeated prototype.account_name voter_list = 14;
 * @return {!Array<!proto.prototype.account_name>}
 */
proto.grpcpb.WitnessResponse.prototype.getVoterListList = function() {
  return /** @type{!Array<!proto.prototype.account_name>} */ (
    jspb.Message.getRepeatedWrapperField(this, prototype_type_pb.account_name, 14));
};


/** @param {!Array<!proto.prototype.account_name>} value */
proto.grpcpb.WitnessResponse.prototype.setVoterListList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.prototype.account_name=} opt_value
 * @param {number=} opt_index
 * @return {!proto.prototype.account_name}
 */
proto.grpcpb.WitnessResponse.prototype.addVoterList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.prototype.account_name, opt_index);
};


proto.grpcpb.WitnessResponse.prototype.clearVoterListList = function() {
  this.setVoterListList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetWitnessListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetWitnessListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetWitnessListRequest.displayName = 'proto.grpcpb.GetWitnessListRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetWitnessListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetWitnessListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetWitnessListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetWitnessListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: (f = msg.getStart()) && prototype_type_pb.account_name.toObject(includeInstance, f),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetWitnessListRequest}
 */
proto.grpcpb.GetWitnessListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetWitnessListRequest;
  return proto.grpcpb.GetWitnessListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetWitnessListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetWitnessListRequest}
 */
proto.grpcpb.GetWitnessListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_type_pb.account_name;
      reader.readMessage(value,prototype_type_pb.account_name.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetWitnessListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetWitnessListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetWitnessListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetWitnessListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_type_pb.account_name.serializeBinaryToWriter
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional prototype.account_name start = 1;
 * @return {?proto.prototype.account_name}
 */
proto.grpcpb.GetWitnessListRequest.prototype.getStart = function() {
  return /** @type{?proto.prototype.account_name} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.account_name, 1));
};


/** @param {?proto.prototype.account_name|undefined} value */
proto.grpcpb.GetWitnessListRequest.prototype.setStart = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.GetWitnessListRequest.prototype.clearStart = function() {
  this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetWitnessListRequest.prototype.hasStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 limit = 2;
 * @return {number}
 */
proto.grpcpb.GetWitnessListRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.grpcpb.GetWitnessListRequest.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetWitnessListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grpcpb.GetWitnessListResponse.repeatedFields_, null);
};
goog.inherits(proto.grpcpb.GetWitnessListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetWitnessListResponse.displayName = 'proto.grpcpb.GetWitnessListResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grpcpb.GetWitnessListResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetWitnessListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetWitnessListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetWitnessListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetWitnessListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    witnessListList: jspb.Message.toObjectList(msg.getWitnessListList(),
    proto.grpcpb.WitnessResponse.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetWitnessListResponse}
 */
proto.grpcpb.GetWitnessListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetWitnessListResponse;
  return proto.grpcpb.GetWitnessListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetWitnessListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetWitnessListResponse}
 */
proto.grpcpb.GetWitnessListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grpcpb.WitnessResponse;
      reader.readMessage(value,proto.grpcpb.WitnessResponse.deserializeBinaryFromReader);
      msg.addWitnessList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetWitnessListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetWitnessListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetWitnessListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetWitnessListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWitnessListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.grpcpb.WitnessResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated WitnessResponse witness_list = 1;
 * @return {!Array<!proto.grpcpb.WitnessResponse>}
 */
proto.grpcpb.GetWitnessListResponse.prototype.getWitnessListList = function() {
  return /** @type{!Array<!proto.grpcpb.WitnessResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.grpcpb.WitnessResponse, 1));
};


/** @param {!Array<!proto.grpcpb.WitnessResponse>} value */
proto.grpcpb.GetWitnessListResponse.prototype.setWitnessListList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.grpcpb.WitnessResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.grpcpb.WitnessResponse}
 */
proto.grpcpb.GetWitnessListResponse.prototype.addWitnessList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.grpcpb.WitnessResponse, opt_index);
};


proto.grpcpb.GetWitnessListResponse.prototype.clearWitnessListList = function() {
  this.setWitnessListList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.PostResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grpcpb.PostResponse.repeatedFields_, null);
};
goog.inherits(proto.grpcpb.PostResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.PostResponse.displayName = 'proto.grpcpb.PostResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grpcpb.PostResponse.repeatedFields_ = [18,19];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.PostResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.PostResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.PostResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.PostResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    postId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    category: jspb.Message.getFieldWithDefault(msg, 2, ""),
    parentAuthor: (f = msg.getParentAuthor()) && prototype_type_pb.account_name.toObject(includeInstance, f),
    author: (f = msg.getAuthor()) && prototype_type_pb.account_name.toObject(includeInstance, f),
    title: jspb.Message.getFieldWithDefault(msg, 7, ""),
    body: jspb.Message.getFieldWithDefault(msg, 8, ""),
    created: (f = msg.getCreated()) && prototype_type_pb.time_point_sec.toObject(includeInstance, f),
    lastPayout: (f = msg.getLastPayout()) && prototype_type_pb.time_point_sec.toObject(includeInstance, f),
    depth: jspb.Message.getFieldWithDefault(msg, 14, 0),
    children: jspb.Message.getFieldWithDefault(msg, 15, 0),
    rootId: jspb.Message.getFieldWithDefault(msg, 16, "0"),
    parentId: jspb.Message.getFieldWithDefault(msg, 17, "0"),
    tagsList: jspb.Message.getRepeatedField(msg, 18),
    beneficiariesList: jspb.Message.toObjectList(msg.getBeneficiariesList(),
    prototype_type_pb.beneficiary_route_type.toObject, includeInstance),
    voteCnt: jspb.Message.getFieldWithDefault(msg, 20, 0),
    weightedVp: jspb.Message.getFieldWithDefault(msg, 21, ""),
    rewards: (f = msg.getRewards()) && prototype_type_pb.vest.toObject(includeInstance, f),
    dappRewards: (f = msg.getDappRewards()) && prototype_type_pb.vest.toObject(includeInstance, f),
    cashoutInterval: jspb.Message.getFieldWithDefault(msg, 24, 0),
    globalRewards: (f = msg.getGlobalRewards()) && prototype_type_pb.vest.toObject(includeInstance, f),
    globalWeightedVp: jspb.Message.getFieldWithDefault(msg, 26, ""),
    ticket: jspb.Message.getFieldWithDefault(msg, 27, 0),
    copyright: jspb.Message.getFieldWithDefault(msg, 28, 0),
    copyrightMemo: jspb.Message.getFieldWithDefault(msg, 29, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.PostResponse}
 */
proto.grpcpb.PostResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.PostResponse;
  return proto.grpcpb.PostResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.PostResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.PostResponse}
 */
proto.grpcpb.PostResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setPostId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = new prototype_type_pb.account_name;
      reader.readMessage(value,prototype_type_pb.account_name.deserializeBinaryFromReader);
      msg.setParentAuthor(value);
      break;
    case 5:
      var value = new prototype_type_pb.account_name;
      reader.readMessage(value,prototype_type_pb.account_name.deserializeBinaryFromReader);
      msg.setAuthor(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setBody(value);
      break;
    case 11:
      var value = new prototype_type_pb.time_point_sec;
      reader.readMessage(value,prototype_type_pb.time_point_sec.deserializeBinaryFromReader);
      msg.setCreated(value);
      break;
    case 13:
      var value = new prototype_type_pb.time_point_sec;
      reader.readMessage(value,prototype_type_pb.time_point_sec.deserializeBinaryFromReader);
      msg.setLastPayout(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDepth(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setChildren(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setRootId(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setParentId(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 19:
      var value = new prototype_type_pb.beneficiary_route_type;
      reader.readMessage(value,prototype_type_pb.beneficiary_route_type.deserializeBinaryFromReader);
      msg.addBeneficiaries(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setVoteCnt(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setWeightedVp(value);
      break;
    case 22:
      var value = new prototype_type_pb.vest;
      reader.readMessage(value,prototype_type_pb.vest.deserializeBinaryFromReader);
      msg.setRewards(value);
      break;
    case 23:
      var value = new prototype_type_pb.vest;
      reader.readMessage(value,prototype_type_pb.vest.deserializeBinaryFromReader);
      msg.setDappRewards(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCashoutInterval(value);
      break;
    case 25:
      var value = new prototype_type_pb.vest;
      reader.readMessage(value,prototype_type_pb.vest.deserializeBinaryFromReader);
      msg.setGlobalRewards(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.setGlobalWeightedVp(value);
      break;
    case 27:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTicket(value);
      break;
    case 28:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCopyright(value);
      break;
    case 29:
      var value = /** @type {string} */ (reader.readString());
      msg.setCopyrightMemo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.PostResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.PostResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.PostResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.PostResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPostId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParentAuthor();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      prototype_type_pb.account_name.serializeBinaryToWriter
    );
  }
  f = message.getAuthor();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      prototype_type_pb.account_name.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getBody();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getCreated();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      prototype_type_pb.time_point_sec.serializeBinaryToWriter
    );
  }
  f = message.getLastPayout();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      prototype_type_pb.time_point_sec.serializeBinaryToWriter
    );
  }
  f = message.getDepth();
  if (f !== 0) {
    writer.writeUint32(
      14,
      f
    );
  }
  f = message.getChildren();
  if (f !== 0) {
    writer.writeUint32(
      15,
      f
    );
  }
  f = message.getRootId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      16,
      f
    );
  }
  f = message.getParentId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      17,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      18,
      f
    );
  }
  f = message.getBeneficiariesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      19,
      f,
      prototype_type_pb.beneficiary_route_type.serializeBinaryToWriter
    );
  }
  f = message.getVoteCnt();
  if (f !== 0) {
    writer.writeUint64(
      20,
      f
    );
  }
  f = message.getWeightedVp();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getRewards();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      prototype_type_pb.vest.serializeBinaryToWriter
    );
  }
  f = message.getDappRewards();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      prototype_type_pb.vest.serializeBinaryToWriter
    );
  }
  f = message.getCashoutInterval();
  if (f !== 0) {
    writer.writeUint64(
      24,
      f
    );
  }
  f = message.getGlobalRewards();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      prototype_type_pb.vest.serializeBinaryToWriter
    );
  }
  f = message.getGlobalWeightedVp();
  if (f.length > 0) {
    writer.writeString(
      26,
      f
    );
  }
  f = message.getTicket();
  if (f !== 0) {
    writer.writeUint32(
      27,
      f
    );
  }
  f = message.getCopyright();
  if (f !== 0) {
    writer.writeUint32(
      28,
      f
    );
  }
  f = message.getCopyrightMemo();
  if (f.length > 0) {
    writer.writeString(
      29,
      f
    );
  }
};


/**
 * optional uint64 post_id = 1;
 * @return {string}
 */
proto.grpcpb.PostResponse.prototype.getPostId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/** @param {string} value */
proto.grpcpb.PostResponse.prototype.setPostId = function(value) {
  jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.grpcpb.PostResponse.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.grpcpb.PostResponse.prototype.setCategory = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional prototype.account_name parent_author = 3;
 * @return {?proto.prototype.account_name}
 */
proto.grpcpb.PostResponse.prototype.getParentAuthor = function() {
  return /** @type{?proto.prototype.account_name} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.account_name, 3));
};


/** @param {?proto.prototype.account_name|undefined} value */
proto.grpcpb.PostResponse.prototype.setParentAuthor = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.grpcpb.PostResponse.prototype.clearParentAuthor = function() {
  this.setParentAuthor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.PostResponse.prototype.hasParentAuthor = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional prototype.account_name author = 5;
 * @return {?proto.prototype.account_name}
 */
proto.grpcpb.PostResponse.prototype.getAuthor = function() {
  return /** @type{?proto.prototype.account_name} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.account_name, 5));
};


/** @param {?proto.prototype.account_name|undefined} value */
proto.grpcpb.PostResponse.prototype.setAuthor = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.grpcpb.PostResponse.prototype.clearAuthor = function() {
  this.setAuthor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.PostResponse.prototype.hasAuthor = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string title = 7;
 * @return {string}
 */
proto.grpcpb.PostResponse.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.grpcpb.PostResponse.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string body = 8;
 * @return {string}
 */
proto.grpcpb.PostResponse.prototype.getBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.grpcpb.PostResponse.prototype.setBody = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional prototype.time_point_sec created = 11;
 * @return {?proto.prototype.time_point_sec}
 */
proto.grpcpb.PostResponse.prototype.getCreated = function() {
  return /** @type{?proto.prototype.time_point_sec} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.time_point_sec, 11));
};


/** @param {?proto.prototype.time_point_sec|undefined} value */
proto.grpcpb.PostResponse.prototype.setCreated = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


proto.grpcpb.PostResponse.prototype.clearCreated = function() {
  this.setCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.PostResponse.prototype.hasCreated = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional prototype.time_point_sec last_payout = 13;
 * @return {?proto.prototype.time_point_sec}
 */
proto.grpcpb.PostResponse.prototype.getLastPayout = function() {
  return /** @type{?proto.prototype.time_point_sec} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.time_point_sec, 13));
};


/** @param {?proto.prototype.time_point_sec|undefined} value */
proto.grpcpb.PostResponse.prototype.setLastPayout = function(value) {
  jspb.Message.setWrapperField(this, 13, value);
};


proto.grpcpb.PostResponse.prototype.clearLastPayout = function() {
  this.setLastPayout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.PostResponse.prototype.hasLastPayout = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional uint32 depth = 14;
 * @return {number}
 */
proto.grpcpb.PostResponse.prototype.getDepth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/** @param {number} value */
proto.grpcpb.PostResponse.prototype.setDepth = function(value) {
  jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional uint32 children = 15;
 * @return {number}
 */
proto.grpcpb.PostResponse.prototype.getChildren = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/** @param {number} value */
proto.grpcpb.PostResponse.prototype.setChildren = function(value) {
  jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional uint64 root_id = 16;
 * @return {string}
 */
proto.grpcpb.PostResponse.prototype.getRootId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, "0"));
};


/** @param {string} value */
proto.grpcpb.PostResponse.prototype.setRootId = function(value) {
  jspb.Message.setProto3StringIntField(this, 16, value);
};


/**
 * optional uint64 parent_id = 17;
 * @return {string}
 */
proto.grpcpb.PostResponse.prototype.getParentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, "0"));
};


/** @param {string} value */
proto.grpcpb.PostResponse.prototype.setParentId = function(value) {
  jspb.Message.setProto3StringIntField(this, 17, value);
};


/**
 * repeated string tags = 18;
 * @return {!Array<string>}
 */
proto.grpcpb.PostResponse.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 18));
};


/** @param {!Array<string>} value */
proto.grpcpb.PostResponse.prototype.setTagsList = function(value) {
  jspb.Message.setField(this, 18, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.grpcpb.PostResponse.prototype.addTags = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 18, value, opt_index);
};


proto.grpcpb.PostResponse.prototype.clearTagsList = function() {
  this.setTagsList([]);
};


/**
 * repeated prototype.beneficiary_route_type beneficiaries = 19;
 * @return {!Array<!proto.prototype.beneficiary_route_type>}
 */
proto.grpcpb.PostResponse.prototype.getBeneficiariesList = function() {
  return /** @type{!Array<!proto.prototype.beneficiary_route_type>} */ (
    jspb.Message.getRepeatedWrapperField(this, prototype_type_pb.beneficiary_route_type, 19));
};


/** @param {!Array<!proto.prototype.beneficiary_route_type>} value */
proto.grpcpb.PostResponse.prototype.setBeneficiariesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 19, value);
};


/**
 * @param {!proto.prototype.beneficiary_route_type=} opt_value
 * @param {number=} opt_index
 * @return {!proto.prototype.beneficiary_route_type}
 */
proto.grpcpb.PostResponse.prototype.addBeneficiaries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 19, opt_value, proto.prototype.beneficiary_route_type, opt_index);
};


proto.grpcpb.PostResponse.prototype.clearBeneficiariesList = function() {
  this.setBeneficiariesList([]);
};


/**
 * optional uint64 vote_cnt = 20;
 * @return {number}
 */
proto.grpcpb.PostResponse.prototype.getVoteCnt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/** @param {number} value */
proto.grpcpb.PostResponse.prototype.setVoteCnt = function(value) {
  jspb.Message.setProto3IntField(this, 20, value);
};


/**
 * optional string weighted_vp = 21;
 * @return {string}
 */
proto.grpcpb.PostResponse.prototype.getWeightedVp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/** @param {string} value */
proto.grpcpb.PostResponse.prototype.setWeightedVp = function(value) {
  jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional prototype.vest rewards = 22;
 * @return {?proto.prototype.vest}
 */
proto.grpcpb.PostResponse.prototype.getRewards = function() {
  return /** @type{?proto.prototype.vest} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.vest, 22));
};


/** @param {?proto.prototype.vest|undefined} value */
proto.grpcpb.PostResponse.prototype.setRewards = function(value) {
  jspb.Message.setWrapperField(this, 22, value);
};


proto.grpcpb.PostResponse.prototype.clearRewards = function() {
  this.setRewards(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.PostResponse.prototype.hasRewards = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional prototype.vest dapp_rewards = 23;
 * @return {?proto.prototype.vest}
 */
proto.grpcpb.PostResponse.prototype.getDappRewards = function() {
  return /** @type{?proto.prototype.vest} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.vest, 23));
};


/** @param {?proto.prototype.vest|undefined} value */
proto.grpcpb.PostResponse.prototype.setDappRewards = function(value) {
  jspb.Message.setWrapperField(this, 23, value);
};


proto.grpcpb.PostResponse.prototype.clearDappRewards = function() {
  this.setDappRewards(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.PostResponse.prototype.hasDappRewards = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional uint64 cashout_interval = 24;
 * @return {number}
 */
proto.grpcpb.PostResponse.prototype.getCashoutInterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/** @param {number} value */
proto.grpcpb.PostResponse.prototype.setCashoutInterval = function(value) {
  jspb.Message.setProto3IntField(this, 24, value);
};


/**
 * optional prototype.vest global_rewards = 25;
 * @return {?proto.prototype.vest}
 */
proto.grpcpb.PostResponse.prototype.getGlobalRewards = function() {
  return /** @type{?proto.prototype.vest} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.vest, 25));
};


/** @param {?proto.prototype.vest|undefined} value */
proto.grpcpb.PostResponse.prototype.setGlobalRewards = function(value) {
  jspb.Message.setWrapperField(this, 25, value);
};


proto.grpcpb.PostResponse.prototype.clearGlobalRewards = function() {
  this.setGlobalRewards(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.PostResponse.prototype.hasGlobalRewards = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional string global_weighted_vp = 26;
 * @return {string}
 */
proto.grpcpb.PostResponse.prototype.getGlobalWeightedVp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/** @param {string} value */
proto.grpcpb.PostResponse.prototype.setGlobalWeightedVp = function(value) {
  jspb.Message.setProto3StringField(this, 26, value);
};


/**
 * optional uint32 ticket = 27;
 * @return {number}
 */
proto.grpcpb.PostResponse.prototype.getTicket = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 27, 0));
};


/** @param {number} value */
proto.grpcpb.PostResponse.prototype.setTicket = function(value) {
  jspb.Message.setProto3IntField(this, 27, value);
};


/**
 * optional uint32 copyright = 28;
 * @return {number}
 */
proto.grpcpb.PostResponse.prototype.getCopyright = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 28, 0));
};


/** @param {number} value */
proto.grpcpb.PostResponse.prototype.setCopyright = function(value) {
  jspb.Message.setProto3IntField(this, 28, value);
};


/**
 * optional string copyright_memo = 29;
 * @return {string}
 */
proto.grpcpb.PostResponse.prototype.getCopyrightMemo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 29, ""));
};


/** @param {string} value */
proto.grpcpb.PostResponse.prototype.setCopyrightMemo = function(value) {
  jspb.Message.setProto3StringField(this, 29, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetPostListByCreatedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetPostListByCreatedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetPostListByCreatedRequest.displayName = 'proto.grpcpb.GetPostListByCreatedRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetPostListByCreatedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetPostListByCreatedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetPostListByCreatedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetPostListByCreatedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: (f = msg.getStart()) && prototype_multi_id_pb.post_created_order.toObject(includeInstance, f),
    end: (f = msg.getEnd()) && prototype_multi_id_pb.post_created_order.toObject(includeInstance, f),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetPostListByCreatedRequest}
 */
proto.grpcpb.GetPostListByCreatedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetPostListByCreatedRequest;
  return proto.grpcpb.GetPostListByCreatedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetPostListByCreatedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetPostListByCreatedRequest}
 */
proto.grpcpb.GetPostListByCreatedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_multi_id_pb.post_created_order;
      reader.readMessage(value,prototype_multi_id_pb.post_created_order.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 2:
      var value = new prototype_multi_id_pb.post_created_order;
      reader.readMessage(value,prototype_multi_id_pb.post_created_order.deserializeBinaryFromReader);
      msg.setEnd(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetPostListByCreatedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetPostListByCreatedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetPostListByCreatedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetPostListByCreatedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_multi_id_pb.post_created_order.serializeBinaryToWriter
    );
  }
  f = message.getEnd();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      prototype_multi_id_pb.post_created_order.serializeBinaryToWriter
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional prototype.post_created_order start = 1;
 * @return {?proto.prototype.post_created_order}
 */
proto.grpcpb.GetPostListByCreatedRequest.prototype.getStart = function() {
  return /** @type{?proto.prototype.post_created_order} */ (
    jspb.Message.getWrapperField(this, prototype_multi_id_pb.post_created_order, 1));
};


/** @param {?proto.prototype.post_created_order|undefined} value */
proto.grpcpb.GetPostListByCreatedRequest.prototype.setStart = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.GetPostListByCreatedRequest.prototype.clearStart = function() {
  this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetPostListByCreatedRequest.prototype.hasStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional prototype.post_created_order end = 2;
 * @return {?proto.prototype.post_created_order}
 */
proto.grpcpb.GetPostListByCreatedRequest.prototype.getEnd = function() {
  return /** @type{?proto.prototype.post_created_order} */ (
    jspb.Message.getWrapperField(this, prototype_multi_id_pb.post_created_order, 2));
};


/** @param {?proto.prototype.post_created_order|undefined} value */
proto.grpcpb.GetPostListByCreatedRequest.prototype.setEnd = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.grpcpb.GetPostListByCreatedRequest.prototype.clearEnd = function() {
  this.setEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetPostListByCreatedRequest.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 limit = 3;
 * @return {number}
 */
proto.grpcpb.GetPostListByCreatedRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.grpcpb.GetPostListByCreatedRequest.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetPostListByCreatedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grpcpb.GetPostListByCreatedResponse.repeatedFields_, null);
};
goog.inherits(proto.grpcpb.GetPostListByCreatedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetPostListByCreatedResponse.displayName = 'proto.grpcpb.GetPostListByCreatedResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grpcpb.GetPostListByCreatedResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetPostListByCreatedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetPostListByCreatedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetPostListByCreatedResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetPostListByCreatedResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    postListList: jspb.Message.toObjectList(msg.getPostListList(),
    proto.grpcpb.PostResponse.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetPostListByCreatedResponse}
 */
proto.grpcpb.GetPostListByCreatedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetPostListByCreatedResponse;
  return proto.grpcpb.GetPostListByCreatedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetPostListByCreatedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetPostListByCreatedResponse}
 */
proto.grpcpb.GetPostListByCreatedResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grpcpb.PostResponse;
      reader.readMessage(value,proto.grpcpb.PostResponse.deserializeBinaryFromReader);
      msg.addPostList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetPostListByCreatedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetPostListByCreatedResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetPostListByCreatedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetPostListByCreatedResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPostListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.grpcpb.PostResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PostResponse post_list = 1;
 * @return {!Array<!proto.grpcpb.PostResponse>}
 */
proto.grpcpb.GetPostListByCreatedResponse.prototype.getPostListList = function() {
  return /** @type{!Array<!proto.grpcpb.PostResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.grpcpb.PostResponse, 1));
};


/** @param {!Array<!proto.grpcpb.PostResponse>} value */
proto.grpcpb.GetPostListByCreatedResponse.prototype.setPostListList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.grpcpb.PostResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.grpcpb.PostResponse}
 */
proto.grpcpb.GetPostListByCreatedResponse.prototype.addPostList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.grpcpb.PostResponse, opt_index);
};


proto.grpcpb.GetPostListByCreatedResponse.prototype.clearPostListList = function() {
  this.setPostListList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetReplyListByPostIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetReplyListByPostIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetReplyListByPostIdRequest.displayName = 'proto.grpcpb.GetReplyListByPostIdRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetReplyListByPostIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetReplyListByPostIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetReplyListByPostIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetReplyListByPostIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: (f = msg.getStart()) && prototype_multi_id_pb.reply_created_order.toObject(includeInstance, f),
    end: (f = msg.getEnd()) && prototype_multi_id_pb.reply_created_order.toObject(includeInstance, f),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetReplyListByPostIdRequest}
 */
proto.grpcpb.GetReplyListByPostIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetReplyListByPostIdRequest;
  return proto.grpcpb.GetReplyListByPostIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetReplyListByPostIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetReplyListByPostIdRequest}
 */
proto.grpcpb.GetReplyListByPostIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_multi_id_pb.reply_created_order;
      reader.readMessage(value,prototype_multi_id_pb.reply_created_order.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 2:
      var value = new prototype_multi_id_pb.reply_created_order;
      reader.readMessage(value,prototype_multi_id_pb.reply_created_order.deserializeBinaryFromReader);
      msg.setEnd(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetReplyListByPostIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetReplyListByPostIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetReplyListByPostIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetReplyListByPostIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_multi_id_pb.reply_created_order.serializeBinaryToWriter
    );
  }
  f = message.getEnd();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      prototype_multi_id_pb.reply_created_order.serializeBinaryToWriter
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional prototype.reply_created_order start = 1;
 * @return {?proto.prototype.reply_created_order}
 */
proto.grpcpb.GetReplyListByPostIdRequest.prototype.getStart = function() {
  return /** @type{?proto.prototype.reply_created_order} */ (
    jspb.Message.getWrapperField(this, prototype_multi_id_pb.reply_created_order, 1));
};


/** @param {?proto.prototype.reply_created_order|undefined} value */
proto.grpcpb.GetReplyListByPostIdRequest.prototype.setStart = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.GetReplyListByPostIdRequest.prototype.clearStart = function() {
  this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetReplyListByPostIdRequest.prototype.hasStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional prototype.reply_created_order end = 2;
 * @return {?proto.prototype.reply_created_order}
 */
proto.grpcpb.GetReplyListByPostIdRequest.prototype.getEnd = function() {
  return /** @type{?proto.prototype.reply_created_order} */ (
    jspb.Message.getWrapperField(this, prototype_multi_id_pb.reply_created_order, 2));
};


/** @param {?proto.prototype.reply_created_order|undefined} value */
proto.grpcpb.GetReplyListByPostIdRequest.prototype.setEnd = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.grpcpb.GetReplyListByPostIdRequest.prototype.clearEnd = function() {
  this.setEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetReplyListByPostIdRequest.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 limit = 3;
 * @return {number}
 */
proto.grpcpb.GetReplyListByPostIdRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.grpcpb.GetReplyListByPostIdRequest.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetReplyListByPostIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grpcpb.GetReplyListByPostIdResponse.repeatedFields_, null);
};
goog.inherits(proto.grpcpb.GetReplyListByPostIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetReplyListByPostIdResponse.displayName = 'proto.grpcpb.GetReplyListByPostIdResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grpcpb.GetReplyListByPostIdResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetReplyListByPostIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetReplyListByPostIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetReplyListByPostIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetReplyListByPostIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    replyListList: jspb.Message.toObjectList(msg.getReplyListList(),
    proto.grpcpb.PostResponse.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetReplyListByPostIdResponse}
 */
proto.grpcpb.GetReplyListByPostIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetReplyListByPostIdResponse;
  return proto.grpcpb.GetReplyListByPostIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetReplyListByPostIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetReplyListByPostIdResponse}
 */
proto.grpcpb.GetReplyListByPostIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grpcpb.PostResponse;
      reader.readMessage(value,proto.grpcpb.PostResponse.deserializeBinaryFromReader);
      msg.addReplyList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetReplyListByPostIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetReplyListByPostIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetReplyListByPostIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetReplyListByPostIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReplyListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.grpcpb.PostResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PostResponse reply_list = 1;
 * @return {!Array<!proto.grpcpb.PostResponse>}
 */
proto.grpcpb.GetReplyListByPostIdResponse.prototype.getReplyListList = function() {
  return /** @type{!Array<!proto.grpcpb.PostResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.grpcpb.PostResponse, 1));
};


/** @param {!Array<!proto.grpcpb.PostResponse>} value */
proto.grpcpb.GetReplyListByPostIdResponse.prototype.setReplyListList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.grpcpb.PostResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.grpcpb.PostResponse}
 */
proto.grpcpb.GetReplyListByPostIdResponse.prototype.addReplyList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.grpcpb.PostResponse, opt_index);
};


proto.grpcpb.GetReplyListByPostIdResponse.prototype.clearReplyListList = function() {
  this.setReplyListList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetBlockTransactionsByNumRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetBlockTransactionsByNumRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetBlockTransactionsByNumRequest.displayName = 'proto.grpcpb.GetBlockTransactionsByNumRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetBlockTransactionsByNumRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetBlockTransactionsByNumRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetBlockTransactionsByNumRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetBlockTransactionsByNumRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockNum: jspb.Message.getFieldWithDefault(msg, 1, 0),
    start: jspb.Message.getFieldWithDefault(msg, 2, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetBlockTransactionsByNumRequest}
 */
proto.grpcpb.GetBlockTransactionsByNumRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetBlockTransactionsByNumRequest;
  return proto.grpcpb.GetBlockTransactionsByNumRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetBlockTransactionsByNumRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetBlockTransactionsByNumRequest}
 */
proto.grpcpb.GetBlockTransactionsByNumRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBlockNum(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStart(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetBlockTransactionsByNumRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetBlockTransactionsByNumRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetBlockTransactionsByNumRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetBlockTransactionsByNumRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockNum();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getStart();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 block_num = 1;
 * @return {number}
 */
proto.grpcpb.GetBlockTransactionsByNumRequest.prototype.getBlockNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.grpcpb.GetBlockTransactionsByNumRequest.prototype.setBlockNum = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 start = 2;
 * @return {number}
 */
proto.grpcpb.GetBlockTransactionsByNumRequest.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.grpcpb.GetBlockTransactionsByNumRequest.prototype.setStart = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 limit = 3;
 * @return {number}
 */
proto.grpcpb.GetBlockTransactionsByNumRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.grpcpb.GetBlockTransactionsByNumRequest.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetBlockTransactionsByNumResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grpcpb.GetBlockTransactionsByNumResponse.repeatedFields_, null);
};
goog.inherits(proto.grpcpb.GetBlockTransactionsByNumResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetBlockTransactionsByNumResponse.displayName = 'proto.grpcpb.GetBlockTransactionsByNumResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grpcpb.GetBlockTransactionsByNumResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetBlockTransactionsByNumResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetBlockTransactionsByNumResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetBlockTransactionsByNumResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetBlockTransactionsByNumResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionsList: jspb.Message.toObjectList(msg.getTransactionsList(),
    prototype_transaction_pb.signed_transaction.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetBlockTransactionsByNumResponse}
 */
proto.grpcpb.GetBlockTransactionsByNumResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetBlockTransactionsByNumResponse;
  return proto.grpcpb.GetBlockTransactionsByNumResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetBlockTransactionsByNumResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetBlockTransactionsByNumResponse}
 */
proto.grpcpb.GetBlockTransactionsByNumResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_transaction_pb.signed_transaction;
      reader.readMessage(value,prototype_transaction_pb.signed_transaction.deserializeBinaryFromReader);
      msg.addTransactions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetBlockTransactionsByNumResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetBlockTransactionsByNumResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetBlockTransactionsByNumResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetBlockTransactionsByNumResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      prototype_transaction_pb.signed_transaction.serializeBinaryToWriter
    );
  }
};


/**
 * repeated prototype.signed_transaction transactions = 1;
 * @return {!Array<!proto.prototype.signed_transaction>}
 */
proto.grpcpb.GetBlockTransactionsByNumResponse.prototype.getTransactionsList = function() {
  return /** @type{!Array<!proto.prototype.signed_transaction>} */ (
    jspb.Message.getRepeatedWrapperField(this, prototype_transaction_pb.signed_transaction, 1));
};


/** @param {!Array<!proto.prototype.signed_transaction>} value */
proto.grpcpb.GetBlockTransactionsByNumResponse.prototype.setTransactionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.prototype.signed_transaction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.prototype.signed_transaction}
 */
proto.grpcpb.GetBlockTransactionsByNumResponse.prototype.addTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.prototype.signed_transaction, opt_index);
};


proto.grpcpb.GetBlockTransactionsByNumResponse.prototype.clearTransactionsList = function() {
  this.setTransactionsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetChainStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetChainStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetChainStateResponse.displayName = 'proto.grpcpb.GetChainStateResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetChainStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetChainStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetChainStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetChainStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: (f = msg.getState()) && proto.grpcpb.ChainState.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetChainStateResponse}
 */
proto.grpcpb.GetChainStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetChainStateResponse;
  return proto.grpcpb.GetChainStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetChainStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetChainStateResponse}
 */
proto.grpcpb.GetChainStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grpcpb.ChainState;
      reader.readMessage(value,proto.grpcpb.ChainState.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetChainStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetChainStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetChainStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetChainStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.grpcpb.ChainState.serializeBinaryToWriter
    );
  }
};


/**
 * optional ChainState state = 1;
 * @return {?proto.grpcpb.ChainState}
 */
proto.grpcpb.GetChainStateResponse.prototype.getState = function() {
  return /** @type{?proto.grpcpb.ChainState} */ (
    jspb.Message.getWrapperField(this, proto.grpcpb.ChainState, 1));
};


/** @param {?proto.grpcpb.ChainState|undefined} value */
proto.grpcpb.GetChainStateResponse.prototype.setState = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.GetChainStateResponse.prototype.clearState = function() {
  this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetChainStateResponse.prototype.hasState = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetNodeNeighboursResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetNodeNeighboursResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetNodeNeighboursResponse.displayName = 'proto.grpcpb.GetNodeNeighboursResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetNodeNeighboursResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetNodeNeighboursResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetNodeNeighboursResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetNodeNeighboursResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    peerlist: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetNodeNeighboursResponse}
 */
proto.grpcpb.GetNodeNeighboursResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetNodeNeighboursResponse;
  return proto.grpcpb.GetNodeNeighboursResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetNodeNeighboursResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetNodeNeighboursResponse}
 */
proto.grpcpb.GetNodeNeighboursResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeerlist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetNodeNeighboursResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetNodeNeighboursResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetNodeNeighboursResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetNodeNeighboursResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeerlist();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string peerlist = 1;
 * @return {string}
 */
proto.grpcpb.GetNodeNeighboursResponse.prototype.getPeerlist = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.grpcpb.GetNodeNeighboursResponse.prototype.setPeerlist = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetNodeRunningVersionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetNodeRunningVersionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetNodeRunningVersionResponse.displayName = 'proto.grpcpb.GetNodeRunningVersionResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetNodeRunningVersionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetNodeRunningVersionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetNodeRunningVersionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetNodeRunningVersionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeversion: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetNodeRunningVersionResponse}
 */
proto.grpcpb.GetNodeRunningVersionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetNodeRunningVersionResponse;
  return proto.grpcpb.GetNodeRunningVersionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetNodeRunningVersionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetNodeRunningVersionResponse}
 */
proto.grpcpb.GetNodeRunningVersionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeversion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetNodeRunningVersionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetNodeRunningVersionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetNodeRunningVersionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetNodeRunningVersionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeversion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string nodeVersion = 1;
 * @return {string}
 */
proto.grpcpb.GetNodeRunningVersionResponse.prototype.getNodeversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.grpcpb.GetNodeRunningVersionResponse.prototype.setNodeversion = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.BroadcastTrxRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.BroadcastTrxRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.BroadcastTrxRequest.displayName = 'proto.grpcpb.BroadcastTrxRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.BroadcastTrxRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.BroadcastTrxRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.BroadcastTrxRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.BroadcastTrxRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    transaction: (f = msg.getTransaction()) && prototype_transaction_pb.signed_transaction.toObject(includeInstance, f),
    onlyDeliver: jspb.Message.getFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.BroadcastTrxRequest}
 */
proto.grpcpb.BroadcastTrxRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.BroadcastTrxRequest;
  return proto.grpcpb.BroadcastTrxRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.BroadcastTrxRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.BroadcastTrxRequest}
 */
proto.grpcpb.BroadcastTrxRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_transaction_pb.signed_transaction;
      reader.readMessage(value,prototype_transaction_pb.signed_transaction.deserializeBinaryFromReader);
      msg.setTransaction(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOnlyDeliver(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.BroadcastTrxRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.BroadcastTrxRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.BroadcastTrxRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.BroadcastTrxRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_transaction_pb.signed_transaction.serializeBinaryToWriter
    );
  }
  f = message.getOnlyDeliver();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional prototype.signed_transaction transaction = 1;
 * @return {?proto.prototype.signed_transaction}
 */
proto.grpcpb.BroadcastTrxRequest.prototype.getTransaction = function() {
  return /** @type{?proto.prototype.signed_transaction} */ (
    jspb.Message.getWrapperField(this, prototype_transaction_pb.signed_transaction, 1));
};


/** @param {?proto.prototype.signed_transaction|undefined} value */
proto.grpcpb.BroadcastTrxRequest.prototype.setTransaction = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.BroadcastTrxRequest.prototype.clearTransaction = function() {
  this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.BroadcastTrxRequest.prototype.hasTransaction = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool only_deliver = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.grpcpb.BroadcastTrxRequest.prototype.getOnlyDeliver = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.grpcpb.BroadcastTrxRequest.prototype.setOnlyDeliver = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.BroadcastTrxResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.BroadcastTrxResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.BroadcastTrxResponse.displayName = 'proto.grpcpb.BroadcastTrxResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.BroadcastTrxResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.BroadcastTrxResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.BroadcastTrxResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.BroadcastTrxResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    invoice: (f = msg.getInvoice()) && prototype_transaction_pb.transaction_receipt_with_info.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.BroadcastTrxResponse}
 */
proto.grpcpb.BroadcastTrxResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.BroadcastTrxResponse;
  return proto.grpcpb.BroadcastTrxResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.BroadcastTrxResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.BroadcastTrxResponse}
 */
proto.grpcpb.BroadcastTrxResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_transaction_pb.transaction_receipt_with_info;
      reader.readMessage(value,prototype_transaction_pb.transaction_receipt_with_info.deserializeBinaryFromReader);
      msg.setInvoice(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.BroadcastTrxResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.BroadcastTrxResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.BroadcastTrxResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.BroadcastTrxResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvoice();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_transaction_pb.transaction_receipt_with_info.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional prototype.transaction_receipt_with_info invoice = 1;
 * @return {?proto.prototype.transaction_receipt_with_info}
 */
proto.grpcpb.BroadcastTrxResponse.prototype.getInvoice = function() {
  return /** @type{?proto.prototype.transaction_receipt_with_info} */ (
    jspb.Message.getWrapperField(this, prototype_transaction_pb.transaction_receipt_with_info, 1));
};


/** @param {?proto.prototype.transaction_receipt_with_info|undefined} value */
proto.grpcpb.BroadcastTrxResponse.prototype.setInvoice = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.BroadcastTrxResponse.prototype.clearInvoice = function() {
  this.setInvoice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.BroadcastTrxResponse.prototype.hasInvoice = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 status = 2;
 * @return {number}
 */
proto.grpcpb.BroadcastTrxResponse.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.grpcpb.BroadcastTrxResponse.prototype.setStatus = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string msg = 3;
 * @return {string}
 */
proto.grpcpb.BroadcastTrxResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.grpcpb.BroadcastTrxResponse.prototype.setMsg = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.NonParamsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.NonParamsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.NonParamsRequest.displayName = 'proto.grpcpb.NonParamsRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.NonParamsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.NonParamsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.NonParamsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.NonParamsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.NonParamsRequest}
 */
proto.grpcpb.NonParamsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.NonParamsRequest;
  return proto.grpcpb.NonParamsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.NonParamsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.NonParamsRequest}
 */
proto.grpcpb.NonParamsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.NonParamsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.NonParamsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.NonParamsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.NonParamsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.CallResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.CallResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.CallResponse.displayName = 'proto.grpcpb.CallResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.CallResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.CallResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.CallResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.CallResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, ""),
    executeErr: jspb.Message.getFieldWithDefault(msg, 2, ""),
    estimateGas: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.CallResponse}
 */
proto.grpcpb.CallResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.CallResponse;
  return proto.grpcpb.CallResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.CallResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.CallResponse}
 */
proto.grpcpb.CallResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResult(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setExecuteErr(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEstimateGas(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.CallResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.CallResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.CallResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.CallResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExecuteErr();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEstimateGas();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string result = 1;
 * @return {string}
 */
proto.grpcpb.CallResponse.prototype.getResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.grpcpb.CallResponse.prototype.setResult = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string execute_err = 2;
 * @return {string}
 */
proto.grpcpb.CallResponse.prototype.getExecuteErr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.grpcpb.CallResponse.prototype.setExecuteErr = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string estimate_gas = 3;
 * @return {string}
 */
proto.grpcpb.CallResponse.prototype.getEstimateGas = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.grpcpb.CallResponse.prototype.setEstimateGas = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.ChainState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.ChainState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.ChainState.displayName = 'proto.grpcpb.ChainState';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.ChainState.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.ChainState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.ChainState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.ChainState.toObject = function(includeInstance, msg) {
  var f, obj = {
    lastIrreversibleBlockNumber: jspb.Message.getFieldWithDefault(msg, 1, 0),
    lastIrreversibleBlockTime: jspb.Message.getFieldWithDefault(msg, 2, 0),
    dgpo: (f = msg.getDgpo()) && prototype_type_pb.dynamic_properties.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.ChainState}
 */
proto.grpcpb.ChainState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.ChainState;
  return proto.grpcpb.ChainState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.ChainState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.ChainState}
 */
proto.grpcpb.ChainState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLastIrreversibleBlockNumber(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLastIrreversibleBlockTime(value);
      break;
    case 3:
      var value = new prototype_type_pb.dynamic_properties;
      reader.readMessage(value,prototype_type_pb.dynamic_properties.deserializeBinaryFromReader);
      msg.setDgpo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.ChainState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.ChainState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.ChainState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.ChainState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLastIrreversibleBlockNumber();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getLastIrreversibleBlockTime();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getDgpo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      prototype_type_pb.dynamic_properties.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 last_irreversible_block_number = 1;
 * @return {number}
 */
proto.grpcpb.ChainState.prototype.getLastIrreversibleBlockNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.grpcpb.ChainState.prototype.setLastIrreversibleBlockNumber = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 last_irreversible_block_time = 2;
 * @return {number}
 */
proto.grpcpb.ChainState.prototype.getLastIrreversibleBlockTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.grpcpb.ChainState.prototype.setLastIrreversibleBlockTime = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional prototype.dynamic_properties dgpo = 3;
 * @return {?proto.prototype.dynamic_properties}
 */
proto.grpcpb.ChainState.prototype.getDgpo = function() {
  return /** @type{?proto.prototype.dynamic_properties} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.dynamic_properties, 3));
};


/** @param {?proto.prototype.dynamic_properties|undefined} value */
proto.grpcpb.ChainState.prototype.setDgpo = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.grpcpb.ChainState.prototype.clearDgpo = function() {
  this.setDgpo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.ChainState.prototype.hasDgpo = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetBlockListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetBlockListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetBlockListRequest.displayName = 'proto.grpcpb.GetBlockListRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetBlockListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetBlockListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetBlockListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetBlockListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: jspb.Message.getFieldWithDefault(msg, 1, 0),
    end: jspb.Message.getFieldWithDefault(msg, 2, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetBlockListRequest}
 */
proto.grpcpb.GetBlockListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetBlockListRequest;
  return proto.grpcpb.GetBlockListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetBlockListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetBlockListRequest}
 */
proto.grpcpb.GetBlockListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStart(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEnd(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetBlockListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetBlockListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetBlockListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetBlockListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEnd();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint64 start = 1;
 * @return {number}
 */
proto.grpcpb.GetBlockListRequest.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.grpcpb.GetBlockListRequest.prototype.setStart = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 end = 2;
 * @return {number}
 */
proto.grpcpb.GetBlockListRequest.prototype.getEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.grpcpb.GetBlockListRequest.prototype.setEnd = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 limit = 3;
 * @return {number}
 */
proto.grpcpb.GetBlockListRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.grpcpb.GetBlockListRequest.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.BlockInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.BlockInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.BlockInfo.displayName = 'proto.grpcpb.BlockInfo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.BlockInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.BlockInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.BlockInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.BlockInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: (f = msg.getTimestamp()) && prototype_type_pb.time_point_sec.toObject(includeInstance, f),
    blockHeight: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    trxCount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    witness: (f = msg.getWitness()) && prototype_type_pb.account_name.toObject(includeInstance, f),
    blockId: (f = msg.getBlockId()) && prototype_type_pb.sha256.toObject(includeInstance, f),
    preId: (f = msg.getPreId()) && prototype_type_pb.sha256.toObject(includeInstance, f),
    blockSize: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.BlockInfo}
 */
proto.grpcpb.BlockInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.BlockInfo;
  return proto.grpcpb.BlockInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.BlockInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.BlockInfo}
 */
proto.grpcpb.BlockInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_type_pb.time_point_sec;
      reader.readMessage(value,prototype_type_pb.time_point_sec.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setBlockHeight(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTrxCount(value);
      break;
    case 4:
      var value = new prototype_type_pb.account_name;
      reader.readMessage(value,prototype_type_pb.account_name.deserializeBinaryFromReader);
      msg.setWitness(value);
      break;
    case 5:
      var value = new prototype_type_pb.sha256;
      reader.readMessage(value,prototype_type_pb.sha256.deserializeBinaryFromReader);
      msg.setBlockId(value);
      break;
    case 6:
      var value = new prototype_type_pb.sha256;
      reader.readMessage(value,prototype_type_pb.sha256.deserializeBinaryFromReader);
      msg.setPreId(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBlockSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.BlockInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.BlockInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.BlockInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.BlockInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_type_pb.time_point_sec.serializeBinaryToWriter
    );
  }
  f = message.getBlockHeight();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
  f = message.getTrxCount();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getWitness();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      prototype_type_pb.account_name.serializeBinaryToWriter
    );
  }
  f = message.getBlockId();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      prototype_type_pb.sha256.serializeBinaryToWriter
    );
  }
  f = message.getPreId();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      prototype_type_pb.sha256.serializeBinaryToWriter
    );
  }
  f = message.getBlockSize();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
};


/**
 * optional prototype.time_point_sec timestamp = 1;
 * @return {?proto.prototype.time_point_sec}
 */
proto.grpcpb.BlockInfo.prototype.getTimestamp = function() {
  return /** @type{?proto.prototype.time_point_sec} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.time_point_sec, 1));
};


/** @param {?proto.prototype.time_point_sec|undefined} value */
proto.grpcpb.BlockInfo.prototype.setTimestamp = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.BlockInfo.prototype.clearTimestamp = function() {
  this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.BlockInfo.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 block_height = 2;
 * @return {string}
 */
proto.grpcpb.BlockInfo.prototype.getBlockHeight = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/** @param {string} value */
proto.grpcpb.BlockInfo.prototype.setBlockHeight = function(value) {
  jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional uint32 trx_count = 3;
 * @return {number}
 */
proto.grpcpb.BlockInfo.prototype.getTrxCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.grpcpb.BlockInfo.prototype.setTrxCount = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional prototype.account_name witness = 4;
 * @return {?proto.prototype.account_name}
 */
proto.grpcpb.BlockInfo.prototype.getWitness = function() {
  return /** @type{?proto.prototype.account_name} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.account_name, 4));
};


/** @param {?proto.prototype.account_name|undefined} value */
proto.grpcpb.BlockInfo.prototype.setWitness = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.grpcpb.BlockInfo.prototype.clearWitness = function() {
  this.setWitness(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.BlockInfo.prototype.hasWitness = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional prototype.sha256 block_id = 5;
 * @return {?proto.prototype.sha256}
 */
proto.grpcpb.BlockInfo.prototype.getBlockId = function() {
  return /** @type{?proto.prototype.sha256} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.sha256, 5));
};


/** @param {?proto.prototype.sha256|undefined} value */
proto.grpcpb.BlockInfo.prototype.setBlockId = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.grpcpb.BlockInfo.prototype.clearBlockId = function() {
  this.setBlockId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.BlockInfo.prototype.hasBlockId = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional prototype.sha256 pre_id = 6;
 * @return {?proto.prototype.sha256}
 */
proto.grpcpb.BlockInfo.prototype.getPreId = function() {
  return /** @type{?proto.prototype.sha256} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.sha256, 6));
};


/** @param {?proto.prototype.sha256|undefined} value */
proto.grpcpb.BlockInfo.prototype.setPreId = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.grpcpb.BlockInfo.prototype.clearPreId = function() {
  this.setPreId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.BlockInfo.prototype.hasPreId = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 block_size = 7;
 * @return {number}
 */
proto.grpcpb.BlockInfo.prototype.getBlockSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.grpcpb.BlockInfo.prototype.setBlockSize = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetBlockListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grpcpb.GetBlockListResponse.repeatedFields_, null);
};
goog.inherits(proto.grpcpb.GetBlockListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetBlockListResponse.displayName = 'proto.grpcpb.GetBlockListResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grpcpb.GetBlockListResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetBlockListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetBlockListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetBlockListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetBlockListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    blocksList: jspb.Message.toObjectList(msg.getBlocksList(),
    proto.grpcpb.BlockInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetBlockListResponse}
 */
proto.grpcpb.GetBlockListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetBlockListResponse;
  return proto.grpcpb.GetBlockListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetBlockListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetBlockListResponse}
 */
proto.grpcpb.GetBlockListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grpcpb.BlockInfo;
      reader.readMessage(value,proto.grpcpb.BlockInfo.deserializeBinaryFromReader);
      msg.addBlocks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetBlockListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetBlockListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetBlockListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetBlockListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlocksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.grpcpb.BlockInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated BlockInfo blocks = 1;
 * @return {!Array<!proto.grpcpb.BlockInfo>}
 */
proto.grpcpb.GetBlockListResponse.prototype.getBlocksList = function() {
  return /** @type{!Array<!proto.grpcpb.BlockInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.grpcpb.BlockInfo, 1));
};


/** @param {!Array<!proto.grpcpb.BlockInfo>} value */
proto.grpcpb.GetBlockListResponse.prototype.setBlocksList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.grpcpb.BlockInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.grpcpb.BlockInfo}
 */
proto.grpcpb.GetBlockListResponse.prototype.addBlocks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.grpcpb.BlockInfo, opt_index);
};


proto.grpcpb.GetBlockListResponse.prototype.clearBlocksList = function() {
  this.setBlocksList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetSignedBlockRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetSignedBlockRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetSignedBlockRequest.displayName = 'proto.grpcpb.GetSignedBlockRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetSignedBlockRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetSignedBlockRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetSignedBlockRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetSignedBlockRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetSignedBlockRequest}
 */
proto.grpcpb.GetSignedBlockRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetSignedBlockRequest;
  return proto.grpcpb.GetSignedBlockRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetSignedBlockRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetSignedBlockRequest}
 */
proto.grpcpb.GetSignedBlockRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStart(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetSignedBlockRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetSignedBlockRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetSignedBlockRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetSignedBlockRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 start = 1;
 * @return {number}
 */
proto.grpcpb.GetSignedBlockRequest.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.grpcpb.GetSignedBlockRequest.prototype.setStart = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetSignedBlockResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetSignedBlockResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetSignedBlockResponse.displayName = 'proto.grpcpb.GetSignedBlockResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetSignedBlockResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetSignedBlockResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetSignedBlockResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetSignedBlockResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    block: (f = msg.getBlock()) && prototype_transaction_pb.signed_block.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetSignedBlockResponse}
 */
proto.grpcpb.GetSignedBlockResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetSignedBlockResponse;
  return proto.grpcpb.GetSignedBlockResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetSignedBlockResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetSignedBlockResponse}
 */
proto.grpcpb.GetSignedBlockResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_transaction_pb.signed_block;
      reader.readMessage(value,prototype_transaction_pb.signed_block.deserializeBinaryFromReader);
      msg.setBlock(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetSignedBlockResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetSignedBlockResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetSignedBlockResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetSignedBlockResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlock();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_transaction_pb.signed_block.serializeBinaryToWriter
    );
  }
};


/**
 * optional prototype.signed_block block = 1;
 * @return {?proto.prototype.signed_block}
 */
proto.grpcpb.GetSignedBlockResponse.prototype.getBlock = function() {
  return /** @type{?proto.prototype.signed_block} */ (
    jspb.Message.getWrapperField(this, prototype_transaction_pb.signed_block, 1));
};


/** @param {?proto.prototype.signed_block|undefined} value */
proto.grpcpb.GetSignedBlockResponse.prototype.setBlock = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.GetSignedBlockResponse.prototype.clearBlock = function() {
  this.setBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetSignedBlockResponse.prototype.hasBlock = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetAccountListByBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetAccountListByBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetAccountListByBalanceRequest.displayName = 'proto.grpcpb.GetAccountListByBalanceRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetAccountListByBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetAccountListByBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetAccountListByBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetAccountListByBalanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: (f = msg.getStart()) && prototype_type_pb.coin.toObject(includeInstance, f),
    end: (f = msg.getEnd()) && prototype_type_pb.coin.toObject(includeInstance, f),
    lastAccount: (f = msg.getLastAccount()) && proto.grpcpb.AccountInfo.toObject(includeInstance, f),
    limit: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetAccountListByBalanceRequest}
 */
proto.grpcpb.GetAccountListByBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetAccountListByBalanceRequest;
  return proto.grpcpb.GetAccountListByBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetAccountListByBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetAccountListByBalanceRequest}
 */
proto.grpcpb.GetAccountListByBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_type_pb.coin;
      reader.readMessage(value,prototype_type_pb.coin.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 2:
      var value = new prototype_type_pb.coin;
      reader.readMessage(value,prototype_type_pb.coin.deserializeBinaryFromReader);
      msg.setEnd(value);
      break;
    case 3:
      var value = new proto.grpcpb.AccountInfo;
      reader.readMessage(value,proto.grpcpb.AccountInfo.deserializeBinaryFromReader);
      msg.setLastAccount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetAccountListByBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetAccountListByBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetAccountListByBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetAccountListByBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_type_pb.coin.serializeBinaryToWriter
    );
  }
  f = message.getEnd();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      prototype_type_pb.coin.serializeBinaryToWriter
    );
  }
  f = message.getLastAccount();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.grpcpb.AccountInfo.serializeBinaryToWriter
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional prototype.coin start = 1;
 * @return {?proto.prototype.coin}
 */
proto.grpcpb.GetAccountListByBalanceRequest.prototype.getStart = function() {
  return /** @type{?proto.prototype.coin} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.coin, 1));
};


/** @param {?proto.prototype.coin|undefined} value */
proto.grpcpb.GetAccountListByBalanceRequest.prototype.setStart = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.GetAccountListByBalanceRequest.prototype.clearStart = function() {
  this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetAccountListByBalanceRequest.prototype.hasStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional prototype.coin end = 2;
 * @return {?proto.prototype.coin}
 */
proto.grpcpb.GetAccountListByBalanceRequest.prototype.getEnd = function() {
  return /** @type{?proto.prototype.coin} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.coin, 2));
};


/** @param {?proto.prototype.coin|undefined} value */
proto.grpcpb.GetAccountListByBalanceRequest.prototype.setEnd = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.grpcpb.GetAccountListByBalanceRequest.prototype.clearEnd = function() {
  this.setEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetAccountListByBalanceRequest.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AccountInfo last_account = 3;
 * @return {?proto.grpcpb.AccountInfo}
 */
proto.grpcpb.GetAccountListByBalanceRequest.prototype.getLastAccount = function() {
  return /** @type{?proto.grpcpb.AccountInfo} */ (
    jspb.Message.getWrapperField(this, proto.grpcpb.AccountInfo, 3));
};


/** @param {?proto.grpcpb.AccountInfo|undefined} value */
proto.grpcpb.GetAccountListByBalanceRequest.prototype.setLastAccount = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.grpcpb.GetAccountListByBalanceRequest.prototype.clearLastAccount = function() {
  this.setLastAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetAccountListByBalanceRequest.prototype.hasLastAccount = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 limit = 4;
 * @return {number}
 */
proto.grpcpb.GetAccountListByBalanceRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.grpcpb.GetAccountListByBalanceRequest.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetAccountListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grpcpb.GetAccountListResponse.repeatedFields_, null);
};
goog.inherits(proto.grpcpb.GetAccountListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetAccountListResponse.displayName = 'proto.grpcpb.GetAccountListResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grpcpb.GetAccountListResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetAccountListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetAccountListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetAccountListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetAccountListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    listList: jspb.Message.toObjectList(msg.getListList(),
    proto.grpcpb.AccountResponse.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetAccountListResponse}
 */
proto.grpcpb.GetAccountListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetAccountListResponse;
  return proto.grpcpb.GetAccountListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetAccountListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetAccountListResponse}
 */
proto.grpcpb.GetAccountListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grpcpb.AccountResponse;
      reader.readMessage(value,proto.grpcpb.AccountResponse.deserializeBinaryFromReader);
      msg.addList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetAccountListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetAccountListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetAccountListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetAccountListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.grpcpb.AccountResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AccountResponse list = 1;
 * @return {!Array<!proto.grpcpb.AccountResponse>}
 */
proto.grpcpb.GetAccountListResponse.prototype.getListList = function() {
  return /** @type{!Array<!proto.grpcpb.AccountResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.grpcpb.AccountResponse, 1));
};


/** @param {!Array<!proto.grpcpb.AccountResponse>} value */
proto.grpcpb.GetAccountListResponse.prototype.setListList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.grpcpb.AccountResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.grpcpb.AccountResponse}
 */
proto.grpcpb.GetAccountListResponse.prototype.addList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.grpcpb.AccountResponse, opt_index);
};


proto.grpcpb.GetAccountListResponse.prototype.clearListList = function() {
  this.setListList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.DailyTotalTrx = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.DailyTotalTrx, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.DailyTotalTrx.displayName = 'proto.grpcpb.DailyTotalTrx';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.DailyTotalTrx.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.DailyTotalTrx.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.DailyTotalTrx} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.DailyTotalTrx.toObject = function(includeInstance, msg) {
  var f, obj = {
    date: (f = msg.getDate()) && prototype_type_pb.time_point_sec.toObject(includeInstance, f),
    count: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.DailyTotalTrx}
 */
proto.grpcpb.DailyTotalTrx.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.DailyTotalTrx;
  return proto.grpcpb.DailyTotalTrx.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.DailyTotalTrx} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.DailyTotalTrx}
 */
proto.grpcpb.DailyTotalTrx.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_type_pb.time_point_sec;
      reader.readMessage(value,prototype_type_pb.time_point_sec.deserializeBinaryFromReader);
      msg.setDate(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.DailyTotalTrx.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.DailyTotalTrx.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.DailyTotalTrx} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.DailyTotalTrx.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_type_pb.time_point_sec.serializeBinaryToWriter
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional prototype.time_point_sec date = 1;
 * @return {?proto.prototype.time_point_sec}
 */
proto.grpcpb.DailyTotalTrx.prototype.getDate = function() {
  return /** @type{?proto.prototype.time_point_sec} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.time_point_sec, 1));
};


/** @param {?proto.prototype.time_point_sec|undefined} value */
proto.grpcpb.DailyTotalTrx.prototype.setDate = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.DailyTotalTrx.prototype.clearDate = function() {
  this.setDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.DailyTotalTrx.prototype.hasDate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 count = 2;
 * @return {number}
 */
proto.grpcpb.DailyTotalTrx.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.grpcpb.DailyTotalTrx.prototype.setCount = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetDailyTotalTrxRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetDailyTotalTrxRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetDailyTotalTrxRequest.displayName = 'proto.grpcpb.GetDailyTotalTrxRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetDailyTotalTrxRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetDailyTotalTrxRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetDailyTotalTrxRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetDailyTotalTrxRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: (f = msg.getStart()) && prototype_type_pb.time_point_sec.toObject(includeInstance, f),
    end: (f = msg.getEnd()) && prototype_type_pb.time_point_sec.toObject(includeInstance, f),
    lastInfo: (f = msg.getLastInfo()) && proto.grpcpb.DailyTotalTrx.toObject(includeInstance, f),
    limit: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetDailyTotalTrxRequest}
 */
proto.grpcpb.GetDailyTotalTrxRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetDailyTotalTrxRequest;
  return proto.grpcpb.GetDailyTotalTrxRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetDailyTotalTrxRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetDailyTotalTrxRequest}
 */
proto.grpcpb.GetDailyTotalTrxRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_type_pb.time_point_sec;
      reader.readMessage(value,prototype_type_pb.time_point_sec.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 2:
      var value = new prototype_type_pb.time_point_sec;
      reader.readMessage(value,prototype_type_pb.time_point_sec.deserializeBinaryFromReader);
      msg.setEnd(value);
      break;
    case 3:
      var value = new proto.grpcpb.DailyTotalTrx;
      reader.readMessage(value,proto.grpcpb.DailyTotalTrx.deserializeBinaryFromReader);
      msg.setLastInfo(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetDailyTotalTrxRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetDailyTotalTrxRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetDailyTotalTrxRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetDailyTotalTrxRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_type_pb.time_point_sec.serializeBinaryToWriter
    );
  }
  f = message.getEnd();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      prototype_type_pb.time_point_sec.serializeBinaryToWriter
    );
  }
  f = message.getLastInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.grpcpb.DailyTotalTrx.serializeBinaryToWriter
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional prototype.time_point_sec start = 1;
 * @return {?proto.prototype.time_point_sec}
 */
proto.grpcpb.GetDailyTotalTrxRequest.prototype.getStart = function() {
  return /** @type{?proto.prototype.time_point_sec} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.time_point_sec, 1));
};


/** @param {?proto.prototype.time_point_sec|undefined} value */
proto.grpcpb.GetDailyTotalTrxRequest.prototype.setStart = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.GetDailyTotalTrxRequest.prototype.clearStart = function() {
  this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetDailyTotalTrxRequest.prototype.hasStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional prototype.time_point_sec end = 2;
 * @return {?proto.prototype.time_point_sec}
 */
proto.grpcpb.GetDailyTotalTrxRequest.prototype.getEnd = function() {
  return /** @type{?proto.prototype.time_point_sec} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.time_point_sec, 2));
};


/** @param {?proto.prototype.time_point_sec|undefined} value */
proto.grpcpb.GetDailyTotalTrxRequest.prototype.setEnd = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.grpcpb.GetDailyTotalTrxRequest.prototype.clearEnd = function() {
  this.setEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetDailyTotalTrxRequest.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DailyTotalTrx last_info = 3;
 * @return {?proto.grpcpb.DailyTotalTrx}
 */
proto.grpcpb.GetDailyTotalTrxRequest.prototype.getLastInfo = function() {
  return /** @type{?proto.grpcpb.DailyTotalTrx} */ (
    jspb.Message.getWrapperField(this, proto.grpcpb.DailyTotalTrx, 3));
};


/** @param {?proto.grpcpb.DailyTotalTrx|undefined} value */
proto.grpcpb.GetDailyTotalTrxRequest.prototype.setLastInfo = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.grpcpb.GetDailyTotalTrxRequest.prototype.clearLastInfo = function() {
  this.setLastInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetDailyTotalTrxRequest.prototype.hasLastInfo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 limit = 4;
 * @return {number}
 */
proto.grpcpb.GetDailyTotalTrxRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.grpcpb.GetDailyTotalTrxRequest.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetDailyTotalTrxResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grpcpb.GetDailyTotalTrxResponse.repeatedFields_, null);
};
goog.inherits(proto.grpcpb.GetDailyTotalTrxResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetDailyTotalTrxResponse.displayName = 'proto.grpcpb.GetDailyTotalTrxResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grpcpb.GetDailyTotalTrxResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetDailyTotalTrxResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetDailyTotalTrxResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetDailyTotalTrxResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetDailyTotalTrxResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    listList: jspb.Message.toObjectList(msg.getListList(),
    proto.grpcpb.DailyTotalTrx.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetDailyTotalTrxResponse}
 */
proto.grpcpb.GetDailyTotalTrxResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetDailyTotalTrxResponse;
  return proto.grpcpb.GetDailyTotalTrxResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetDailyTotalTrxResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetDailyTotalTrxResponse}
 */
proto.grpcpb.GetDailyTotalTrxResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grpcpb.DailyTotalTrx;
      reader.readMessage(value,proto.grpcpb.DailyTotalTrx.deserializeBinaryFromReader);
      msg.addList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetDailyTotalTrxResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetDailyTotalTrxResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetDailyTotalTrxResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetDailyTotalTrxResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.grpcpb.DailyTotalTrx.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DailyTotalTrx list = 1;
 * @return {!Array<!proto.grpcpb.DailyTotalTrx>}
 */
proto.grpcpb.GetDailyTotalTrxResponse.prototype.getListList = function() {
  return /** @type{!Array<!proto.grpcpb.DailyTotalTrx>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.grpcpb.DailyTotalTrx, 1));
};


/** @param {!Array<!proto.grpcpb.DailyTotalTrx>} value */
proto.grpcpb.GetDailyTotalTrxResponse.prototype.setListList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.grpcpb.DailyTotalTrx=} opt_value
 * @param {number=} opt_index
 * @return {!proto.grpcpb.DailyTotalTrx}
 */
proto.grpcpb.GetDailyTotalTrxResponse.prototype.addList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.grpcpb.DailyTotalTrx, opt_index);
};


proto.grpcpb.GetDailyTotalTrxResponse.prototype.clearListList = function() {
  this.setListList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.StatByHour = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.StatByHour, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.StatByHour.displayName = 'proto.grpcpb.StatByHour';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.StatByHour.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.StatByHour.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.StatByHour} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.StatByHour.toObject = function(includeInstance, msg) {
  var f, obj = {
    hour: jspb.Message.getFieldWithDefault(msg, 1, 0),
    count: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.StatByHour}
 */
proto.grpcpb.StatByHour.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.StatByHour;
  return proto.grpcpb.StatByHour.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.StatByHour} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.StatByHour}
 */
proto.grpcpb.StatByHour.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHour(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.StatByHour.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.StatByHour.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.StatByHour} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.StatByHour.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHour();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 hour = 1;
 * @return {number}
 */
proto.grpcpb.StatByHour.prototype.getHour = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.grpcpb.StatByHour.prototype.setHour = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 count = 2;
 * @return {number}
 */
proto.grpcpb.StatByHour.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.grpcpb.StatByHour.prototype.setCount = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.TrxStatByHourRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.TrxStatByHourRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.TrxStatByHourRequest.displayName = 'proto.grpcpb.TrxStatByHourRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.TrxStatByHourRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.TrxStatByHourRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.TrxStatByHourRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.TrxStatByHourRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    hours: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.TrxStatByHourRequest}
 */
proto.grpcpb.TrxStatByHourRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.TrxStatByHourRequest;
  return proto.grpcpb.TrxStatByHourRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.TrxStatByHourRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.TrxStatByHourRequest}
 */
proto.grpcpb.TrxStatByHourRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHours(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.TrxStatByHourRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.TrxStatByHourRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.TrxStatByHourRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.TrxStatByHourRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHours();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 hours = 1;
 * @return {number}
 */
proto.grpcpb.TrxStatByHourRequest.prototype.getHours = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.grpcpb.TrxStatByHourRequest.prototype.setHours = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.TrxStatByHourResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grpcpb.TrxStatByHourResponse.repeatedFields_, null);
};
goog.inherits(proto.grpcpb.TrxStatByHourResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.TrxStatByHourResponse.displayName = 'proto.grpcpb.TrxStatByHourResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grpcpb.TrxStatByHourResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.TrxStatByHourResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.TrxStatByHourResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.TrxStatByHourResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.TrxStatByHourResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    statList: jspb.Message.toObjectList(msg.getStatList(),
    proto.grpcpb.StatByHour.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.TrxStatByHourResponse}
 */
proto.grpcpb.TrxStatByHourResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.TrxStatByHourResponse;
  return proto.grpcpb.TrxStatByHourResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.TrxStatByHourResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.TrxStatByHourResponse}
 */
proto.grpcpb.TrxStatByHourResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grpcpb.StatByHour;
      reader.readMessage(value,proto.grpcpb.StatByHour.deserializeBinaryFromReader);
      msg.addStat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.TrxStatByHourResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.TrxStatByHourResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.TrxStatByHourResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.TrxStatByHourResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.grpcpb.StatByHour.serializeBinaryToWriter
    );
  }
};


/**
 * repeated StatByHour stat = 1;
 * @return {!Array<!proto.grpcpb.StatByHour>}
 */
proto.grpcpb.TrxStatByHourResponse.prototype.getStatList = function() {
  return /** @type{!Array<!proto.grpcpb.StatByHour>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.grpcpb.StatByHour, 1));
};


/** @param {!Array<!proto.grpcpb.StatByHour>} value */
proto.grpcpb.TrxStatByHourResponse.prototype.setStatList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.grpcpb.StatByHour=} opt_value
 * @param {number=} opt_index
 * @return {!proto.grpcpb.StatByHour}
 */
proto.grpcpb.TrxStatByHourResponse.prototype.addStat = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.grpcpb.StatByHour, opt_index);
};


proto.grpcpb.TrxStatByHourResponse.prototype.clearStatList = function() {
  this.setStatList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.TrxInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.TrxInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.TrxInfo.displayName = 'proto.grpcpb.TrxInfo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.TrxInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.TrxInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.TrxInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.TrxInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    trxId: (f = msg.getTrxId()) && prototype_type_pb.sha256.toObject(includeInstance, f),
    blockHeight: jspb.Message.getFieldWithDefault(msg, 2, 0),
    trxWrap: (f = msg.getTrxWrap()) && prototype_transaction_pb.transaction_wrapper.toObject(includeInstance, f),
    blockTime: (f = msg.getBlockTime()) && prototype_type_pb.time_point_sec.toObject(includeInstance, f),
    blockId: (f = msg.getBlockId()) && prototype_type_pb.sha256.toObject(includeInstance, f),
    blkIsIrreversible: jspb.Message.getFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.TrxInfo}
 */
proto.grpcpb.TrxInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.TrxInfo;
  return proto.grpcpb.TrxInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.TrxInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.TrxInfo}
 */
proto.grpcpb.TrxInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_type_pb.sha256;
      reader.readMessage(value,prototype_type_pb.sha256.deserializeBinaryFromReader);
      msg.setTrxId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockHeight(value);
      break;
    case 3:
      var value = new prototype_transaction_pb.transaction_wrapper;
      reader.readMessage(value,prototype_transaction_pb.transaction_wrapper.deserializeBinaryFromReader);
      msg.setTrxWrap(value);
      break;
    case 4:
      var value = new prototype_type_pb.time_point_sec;
      reader.readMessage(value,prototype_type_pb.time_point_sec.deserializeBinaryFromReader);
      msg.setBlockTime(value);
      break;
    case 5:
      var value = new prototype_type_pb.sha256;
      reader.readMessage(value,prototype_type_pb.sha256.deserializeBinaryFromReader);
      msg.setBlockId(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBlkIsIrreversible(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.TrxInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.TrxInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.TrxInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.TrxInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrxId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_type_pb.sha256.serializeBinaryToWriter
    );
  }
  f = message.getBlockHeight();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTrxWrap();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      prototype_transaction_pb.transaction_wrapper.serializeBinaryToWriter
    );
  }
  f = message.getBlockTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      prototype_type_pb.time_point_sec.serializeBinaryToWriter
    );
  }
  f = message.getBlockId();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      prototype_type_pb.sha256.serializeBinaryToWriter
    );
  }
  f = message.getBlkIsIrreversible();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional prototype.sha256 trx_id = 1;
 * @return {?proto.prototype.sha256}
 */
proto.grpcpb.TrxInfo.prototype.getTrxId = function() {
  return /** @type{?proto.prototype.sha256} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.sha256, 1));
};


/** @param {?proto.prototype.sha256|undefined} value */
proto.grpcpb.TrxInfo.prototype.setTrxId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.TrxInfo.prototype.clearTrxId = function() {
  this.setTrxId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.TrxInfo.prototype.hasTrxId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 block_height = 2;
 * @return {number}
 */
proto.grpcpb.TrxInfo.prototype.getBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.grpcpb.TrxInfo.prototype.setBlockHeight = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional prototype.transaction_wrapper trx_wrap = 3;
 * @return {?proto.prototype.transaction_wrapper}
 */
proto.grpcpb.TrxInfo.prototype.getTrxWrap = function() {
  return /** @type{?proto.prototype.transaction_wrapper} */ (
    jspb.Message.getWrapperField(this, prototype_transaction_pb.transaction_wrapper, 3));
};


/** @param {?proto.prototype.transaction_wrapper|undefined} value */
proto.grpcpb.TrxInfo.prototype.setTrxWrap = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.grpcpb.TrxInfo.prototype.clearTrxWrap = function() {
  this.setTrxWrap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.TrxInfo.prototype.hasTrxWrap = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional prototype.time_point_sec block_time = 4;
 * @return {?proto.prototype.time_point_sec}
 */
proto.grpcpb.TrxInfo.prototype.getBlockTime = function() {
  return /** @type{?proto.prototype.time_point_sec} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.time_point_sec, 4));
};


/** @param {?proto.prototype.time_point_sec|undefined} value */
proto.grpcpb.TrxInfo.prototype.setBlockTime = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.grpcpb.TrxInfo.prototype.clearBlockTime = function() {
  this.setBlockTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.TrxInfo.prototype.hasBlockTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional prototype.sha256 block_id = 5;
 * @return {?proto.prototype.sha256}
 */
proto.grpcpb.TrxInfo.prototype.getBlockId = function() {
  return /** @type{?proto.prototype.sha256} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.sha256, 5));
};


/** @param {?proto.prototype.sha256|undefined} value */
proto.grpcpb.TrxInfo.prototype.setBlockId = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.grpcpb.TrxInfo.prototype.clearBlockId = function() {
  this.setBlockId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.TrxInfo.prototype.hasBlockId = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool blk_is_irreversible = 6;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.grpcpb.TrxInfo.prototype.getBlkIsIrreversible = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.grpcpb.TrxInfo.prototype.setBlkIsIrreversible = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetTrxInfoByIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetTrxInfoByIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetTrxInfoByIdRequest.displayName = 'proto.grpcpb.GetTrxInfoByIdRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetTrxInfoByIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetTrxInfoByIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetTrxInfoByIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetTrxInfoByIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    trxId: (f = msg.getTrxId()) && prototype_type_pb.sha256.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetTrxInfoByIdRequest}
 */
proto.grpcpb.GetTrxInfoByIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetTrxInfoByIdRequest;
  return proto.grpcpb.GetTrxInfoByIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetTrxInfoByIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetTrxInfoByIdRequest}
 */
proto.grpcpb.GetTrxInfoByIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_type_pb.sha256;
      reader.readMessage(value,prototype_type_pb.sha256.deserializeBinaryFromReader);
      msg.setTrxId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetTrxInfoByIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetTrxInfoByIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetTrxInfoByIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetTrxInfoByIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrxId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_type_pb.sha256.serializeBinaryToWriter
    );
  }
};


/**
 * optional prototype.sha256 trx_id = 1;
 * @return {?proto.prototype.sha256}
 */
proto.grpcpb.GetTrxInfoByIdRequest.prototype.getTrxId = function() {
  return /** @type{?proto.prototype.sha256} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.sha256, 1));
};


/** @param {?proto.prototype.sha256|undefined} value */
proto.grpcpb.GetTrxInfoByIdRequest.prototype.setTrxId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.GetTrxInfoByIdRequest.prototype.clearTrxId = function() {
  this.setTrxId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetTrxInfoByIdRequest.prototype.hasTrxId = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetTrxInfoByIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetTrxInfoByIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetTrxInfoByIdResponse.displayName = 'proto.grpcpb.GetTrxInfoByIdResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetTrxInfoByIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetTrxInfoByIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetTrxInfoByIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetTrxInfoByIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && proto.grpcpb.TrxInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetTrxInfoByIdResponse}
 */
proto.grpcpb.GetTrxInfoByIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetTrxInfoByIdResponse;
  return proto.grpcpb.GetTrxInfoByIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetTrxInfoByIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetTrxInfoByIdResponse}
 */
proto.grpcpb.GetTrxInfoByIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grpcpb.TrxInfo;
      reader.readMessage(value,proto.grpcpb.TrxInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetTrxInfoByIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetTrxInfoByIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetTrxInfoByIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetTrxInfoByIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.grpcpb.TrxInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional TrxInfo info = 1;
 * @return {?proto.grpcpb.TrxInfo}
 */
proto.grpcpb.GetTrxInfoByIdResponse.prototype.getInfo = function() {
  return /** @type{?proto.grpcpb.TrxInfo} */ (
    jspb.Message.getWrapperField(this, proto.grpcpb.TrxInfo, 1));
};


/** @param {?proto.grpcpb.TrxInfo|undefined} value */
proto.grpcpb.GetTrxInfoByIdResponse.prototype.setInfo = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.GetTrxInfoByIdResponse.prototype.clearInfo = function() {
  this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetTrxInfoByIdResponse.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetTrxListByTimeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetTrxListByTimeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetTrxListByTimeRequest.displayName = 'proto.grpcpb.GetTrxListByTimeRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetTrxListByTimeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetTrxListByTimeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetTrxListByTimeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetTrxListByTimeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: (f = msg.getStart()) && prototype_type_pb.time_point_sec.toObject(includeInstance, f),
    end: (f = msg.getEnd()) && prototype_type_pb.time_point_sec.toObject(includeInstance, f),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0),
    lastInfo: (f = msg.getLastInfo()) && proto.grpcpb.TrxInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetTrxListByTimeRequest}
 */
proto.grpcpb.GetTrxListByTimeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetTrxListByTimeRequest;
  return proto.grpcpb.GetTrxListByTimeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetTrxListByTimeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetTrxListByTimeRequest}
 */
proto.grpcpb.GetTrxListByTimeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_type_pb.time_point_sec;
      reader.readMessage(value,prototype_type_pb.time_point_sec.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 2:
      var value = new prototype_type_pb.time_point_sec;
      reader.readMessage(value,prototype_type_pb.time_point_sec.deserializeBinaryFromReader);
      msg.setEnd(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    case 4:
      var value = new proto.grpcpb.TrxInfo;
      reader.readMessage(value,proto.grpcpb.TrxInfo.deserializeBinaryFromReader);
      msg.setLastInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetTrxListByTimeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetTrxListByTimeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetTrxListByTimeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetTrxListByTimeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_type_pb.time_point_sec.serializeBinaryToWriter
    );
  }
  f = message.getEnd();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      prototype_type_pb.time_point_sec.serializeBinaryToWriter
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getLastInfo();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.grpcpb.TrxInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional prototype.time_point_sec start = 1;
 * @return {?proto.prototype.time_point_sec}
 */
proto.grpcpb.GetTrxListByTimeRequest.prototype.getStart = function() {
  return /** @type{?proto.prototype.time_point_sec} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.time_point_sec, 1));
};


/** @param {?proto.prototype.time_point_sec|undefined} value */
proto.grpcpb.GetTrxListByTimeRequest.prototype.setStart = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.GetTrxListByTimeRequest.prototype.clearStart = function() {
  this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetTrxListByTimeRequest.prototype.hasStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional prototype.time_point_sec end = 2;
 * @return {?proto.prototype.time_point_sec}
 */
proto.grpcpb.GetTrxListByTimeRequest.prototype.getEnd = function() {
  return /** @type{?proto.prototype.time_point_sec} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.time_point_sec, 2));
};


/** @param {?proto.prototype.time_point_sec|undefined} value */
proto.grpcpb.GetTrxListByTimeRequest.prototype.setEnd = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.grpcpb.GetTrxListByTimeRequest.prototype.clearEnd = function() {
  this.setEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetTrxListByTimeRequest.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 limit = 3;
 * @return {number}
 */
proto.grpcpb.GetTrxListByTimeRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.grpcpb.GetTrxListByTimeRequest.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional TrxInfo last_info = 4;
 * @return {?proto.grpcpb.TrxInfo}
 */
proto.grpcpb.GetTrxListByTimeRequest.prototype.getLastInfo = function() {
  return /** @type{?proto.grpcpb.TrxInfo} */ (
    jspb.Message.getWrapperField(this, proto.grpcpb.TrxInfo, 4));
};


/** @param {?proto.grpcpb.TrxInfo|undefined} value */
proto.grpcpb.GetTrxListByTimeRequest.prototype.setLastInfo = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.grpcpb.GetTrxListByTimeRequest.prototype.clearLastInfo = function() {
  this.setLastInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetTrxListByTimeRequest.prototype.hasLastInfo = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetTrxListByTimeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grpcpb.GetTrxListByTimeResponse.repeatedFields_, null);
};
goog.inherits(proto.grpcpb.GetTrxListByTimeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetTrxListByTimeResponse.displayName = 'proto.grpcpb.GetTrxListByTimeResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grpcpb.GetTrxListByTimeResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetTrxListByTimeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetTrxListByTimeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetTrxListByTimeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetTrxListByTimeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    listList: jspb.Message.toObjectList(msg.getListList(),
    proto.grpcpb.TrxInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetTrxListByTimeResponse}
 */
proto.grpcpb.GetTrxListByTimeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetTrxListByTimeResponse;
  return proto.grpcpb.GetTrxListByTimeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetTrxListByTimeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetTrxListByTimeResponse}
 */
proto.grpcpb.GetTrxListByTimeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grpcpb.TrxInfo;
      reader.readMessage(value,proto.grpcpb.TrxInfo.deserializeBinaryFromReader);
      msg.addList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetTrxListByTimeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetTrxListByTimeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetTrxListByTimeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetTrxListByTimeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.grpcpb.TrxInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TrxInfo list = 1;
 * @return {!Array<!proto.grpcpb.TrxInfo>}
 */
proto.grpcpb.GetTrxListByTimeResponse.prototype.getListList = function() {
  return /** @type{!Array<!proto.grpcpb.TrxInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.grpcpb.TrxInfo, 1));
};


/** @param {!Array<!proto.grpcpb.TrxInfo>} value */
proto.grpcpb.GetTrxListByTimeResponse.prototype.setListList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.grpcpb.TrxInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.grpcpb.TrxInfo}
 */
proto.grpcpb.GetTrxListByTimeResponse.prototype.addList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.grpcpb.TrxInfo, opt_index);
};


proto.grpcpb.GetTrxListByTimeResponse.prototype.clearListList = function() {
  this.setListList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetPostListByCreateTimeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetPostListByCreateTimeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetPostListByCreateTimeRequest.displayName = 'proto.grpcpb.GetPostListByCreateTimeRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetPostListByCreateTimeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetPostListByCreateTimeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetPostListByCreateTimeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetPostListByCreateTimeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: (f = msg.getStart()) && prototype_type_pb.time_point_sec.toObject(includeInstance, f),
    end: (f = msg.getEnd()) && prototype_type_pb.time_point_sec.toObject(includeInstance, f),
    lastPost: (f = msg.getLastPost()) && proto.grpcpb.PostResponse.toObject(includeInstance, f),
    limit: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetPostListByCreateTimeRequest}
 */
proto.grpcpb.GetPostListByCreateTimeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetPostListByCreateTimeRequest;
  return proto.grpcpb.GetPostListByCreateTimeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetPostListByCreateTimeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetPostListByCreateTimeRequest}
 */
proto.grpcpb.GetPostListByCreateTimeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_type_pb.time_point_sec;
      reader.readMessage(value,prototype_type_pb.time_point_sec.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 2:
      var value = new prototype_type_pb.time_point_sec;
      reader.readMessage(value,prototype_type_pb.time_point_sec.deserializeBinaryFromReader);
      msg.setEnd(value);
      break;
    case 3:
      var value = new proto.grpcpb.PostResponse;
      reader.readMessage(value,proto.grpcpb.PostResponse.deserializeBinaryFromReader);
      msg.setLastPost(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetPostListByCreateTimeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetPostListByCreateTimeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetPostListByCreateTimeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetPostListByCreateTimeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_type_pb.time_point_sec.serializeBinaryToWriter
    );
  }
  f = message.getEnd();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      prototype_type_pb.time_point_sec.serializeBinaryToWriter
    );
  }
  f = message.getLastPost();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.grpcpb.PostResponse.serializeBinaryToWriter
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional prototype.time_point_sec start = 1;
 * @return {?proto.prototype.time_point_sec}
 */
proto.grpcpb.GetPostListByCreateTimeRequest.prototype.getStart = function() {
  return /** @type{?proto.prototype.time_point_sec} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.time_point_sec, 1));
};


/** @param {?proto.prototype.time_point_sec|undefined} value */
proto.grpcpb.GetPostListByCreateTimeRequest.prototype.setStart = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.GetPostListByCreateTimeRequest.prototype.clearStart = function() {
  this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetPostListByCreateTimeRequest.prototype.hasStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional prototype.time_point_sec end = 2;
 * @return {?proto.prototype.time_point_sec}
 */
proto.grpcpb.GetPostListByCreateTimeRequest.prototype.getEnd = function() {
  return /** @type{?proto.prototype.time_point_sec} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.time_point_sec, 2));
};


/** @param {?proto.prototype.time_point_sec|undefined} value */
proto.grpcpb.GetPostListByCreateTimeRequest.prototype.setEnd = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.grpcpb.GetPostListByCreateTimeRequest.prototype.clearEnd = function() {
  this.setEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetPostListByCreateTimeRequest.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PostResponse last_post = 3;
 * @return {?proto.grpcpb.PostResponse}
 */
proto.grpcpb.GetPostListByCreateTimeRequest.prototype.getLastPost = function() {
  return /** @type{?proto.grpcpb.PostResponse} */ (
    jspb.Message.getWrapperField(this, proto.grpcpb.PostResponse, 3));
};


/** @param {?proto.grpcpb.PostResponse|undefined} value */
proto.grpcpb.GetPostListByCreateTimeRequest.prototype.setLastPost = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.grpcpb.GetPostListByCreateTimeRequest.prototype.clearLastPost = function() {
  this.setLastPost(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetPostListByCreateTimeRequest.prototype.hasLastPost = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 limit = 4;
 * @return {number}
 */
proto.grpcpb.GetPostListByCreateTimeRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.grpcpb.GetPostListByCreateTimeRequest.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetPostListByCreateTimeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grpcpb.GetPostListByCreateTimeResponse.repeatedFields_, null);
};
goog.inherits(proto.grpcpb.GetPostListByCreateTimeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetPostListByCreateTimeResponse.displayName = 'proto.grpcpb.GetPostListByCreateTimeResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grpcpb.GetPostListByCreateTimeResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetPostListByCreateTimeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetPostListByCreateTimeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetPostListByCreateTimeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetPostListByCreateTimeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    postedListList: jspb.Message.toObjectList(msg.getPostedListList(),
    proto.grpcpb.PostResponse.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetPostListByCreateTimeResponse}
 */
proto.grpcpb.GetPostListByCreateTimeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetPostListByCreateTimeResponse;
  return proto.grpcpb.GetPostListByCreateTimeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetPostListByCreateTimeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetPostListByCreateTimeResponse}
 */
proto.grpcpb.GetPostListByCreateTimeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grpcpb.PostResponse;
      reader.readMessage(value,proto.grpcpb.PostResponse.deserializeBinaryFromReader);
      msg.addPostedList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetPostListByCreateTimeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetPostListByCreateTimeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetPostListByCreateTimeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetPostListByCreateTimeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPostedListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.grpcpb.PostResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PostResponse posted_list = 1;
 * @return {!Array<!proto.grpcpb.PostResponse>}
 */
proto.grpcpb.GetPostListByCreateTimeResponse.prototype.getPostedListList = function() {
  return /** @type{!Array<!proto.grpcpb.PostResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.grpcpb.PostResponse, 1));
};


/** @param {!Array<!proto.grpcpb.PostResponse>} value */
proto.grpcpb.GetPostListByCreateTimeResponse.prototype.setPostedListList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.grpcpb.PostResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.grpcpb.PostResponse}
 */
proto.grpcpb.GetPostListByCreateTimeResponse.prototype.addPostedList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.grpcpb.PostResponse, opt_index);
};


proto.grpcpb.GetPostListByCreateTimeResponse.prototype.clearPostedListList = function() {
  this.setPostedListList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetPostListByNameRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetPostListByNameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetPostListByNameRequest.displayName = 'proto.grpcpb.GetPostListByNameRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetPostListByNameRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetPostListByNameRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetPostListByNameRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetPostListByNameRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: (f = msg.getStart()) && prototype_multi_id_pb.user_post_create_order.toObject(includeInstance, f),
    end: (f = msg.getEnd()) && prototype_multi_id_pb.user_post_create_order.toObject(includeInstance, f),
    lastPost: (f = msg.getLastPost()) && proto.grpcpb.PostResponse.toObject(includeInstance, f),
    limit: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetPostListByNameRequest}
 */
proto.grpcpb.GetPostListByNameRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetPostListByNameRequest;
  return proto.grpcpb.GetPostListByNameRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetPostListByNameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetPostListByNameRequest}
 */
proto.grpcpb.GetPostListByNameRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_multi_id_pb.user_post_create_order;
      reader.readMessage(value,prototype_multi_id_pb.user_post_create_order.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 2:
      var value = new prototype_multi_id_pb.user_post_create_order;
      reader.readMessage(value,prototype_multi_id_pb.user_post_create_order.deserializeBinaryFromReader);
      msg.setEnd(value);
      break;
    case 3:
      var value = new proto.grpcpb.PostResponse;
      reader.readMessage(value,proto.grpcpb.PostResponse.deserializeBinaryFromReader);
      msg.setLastPost(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetPostListByNameRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetPostListByNameRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetPostListByNameRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetPostListByNameRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_multi_id_pb.user_post_create_order.serializeBinaryToWriter
    );
  }
  f = message.getEnd();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      prototype_multi_id_pb.user_post_create_order.serializeBinaryToWriter
    );
  }
  f = message.getLastPost();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.grpcpb.PostResponse.serializeBinaryToWriter
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional prototype.user_post_create_order start = 1;
 * @return {?proto.prototype.user_post_create_order}
 */
proto.grpcpb.GetPostListByNameRequest.prototype.getStart = function() {
  return /** @type{?proto.prototype.user_post_create_order} */ (
    jspb.Message.getWrapperField(this, prototype_multi_id_pb.user_post_create_order, 1));
};


/** @param {?proto.prototype.user_post_create_order|undefined} value */
proto.grpcpb.GetPostListByNameRequest.prototype.setStart = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.GetPostListByNameRequest.prototype.clearStart = function() {
  this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetPostListByNameRequest.prototype.hasStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional prototype.user_post_create_order end = 2;
 * @return {?proto.prototype.user_post_create_order}
 */
proto.grpcpb.GetPostListByNameRequest.prototype.getEnd = function() {
  return /** @type{?proto.prototype.user_post_create_order} */ (
    jspb.Message.getWrapperField(this, prototype_multi_id_pb.user_post_create_order, 2));
};


/** @param {?proto.prototype.user_post_create_order|undefined} value */
proto.grpcpb.GetPostListByNameRequest.prototype.setEnd = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.grpcpb.GetPostListByNameRequest.prototype.clearEnd = function() {
  this.setEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetPostListByNameRequest.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PostResponse last_post = 3;
 * @return {?proto.grpcpb.PostResponse}
 */
proto.grpcpb.GetPostListByNameRequest.prototype.getLastPost = function() {
  return /** @type{?proto.grpcpb.PostResponse} */ (
    jspb.Message.getWrapperField(this, proto.grpcpb.PostResponse, 3));
};


/** @param {?proto.grpcpb.PostResponse|undefined} value */
proto.grpcpb.GetPostListByNameRequest.prototype.setLastPost = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.grpcpb.GetPostListByNameRequest.prototype.clearLastPost = function() {
  this.setLastPost(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetPostListByNameRequest.prototype.hasLastPost = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 limit = 4;
 * @return {number}
 */
proto.grpcpb.GetPostListByNameRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.grpcpb.GetPostListByNameRequest.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetUserTrxListByTimeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetUserTrxListByTimeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetUserTrxListByTimeRequest.displayName = 'proto.grpcpb.GetUserTrxListByTimeRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetUserTrxListByTimeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetUserTrxListByTimeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetUserTrxListByTimeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetUserTrxListByTimeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = msg.getName()) && prototype_type_pb.account_name.toObject(includeInstance, f),
    start: (f = msg.getStart()) && prototype_type_pb.time_point_sec.toObject(includeInstance, f),
    end: (f = msg.getEnd()) && prototype_type_pb.time_point_sec.toObject(includeInstance, f),
    lastTrx: (f = msg.getLastTrx()) && proto.grpcpb.TrxInfo.toObject(includeInstance, f),
    limit: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetUserTrxListByTimeRequest}
 */
proto.grpcpb.GetUserTrxListByTimeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetUserTrxListByTimeRequest;
  return proto.grpcpb.GetUserTrxListByTimeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetUserTrxListByTimeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetUserTrxListByTimeRequest}
 */
proto.grpcpb.GetUserTrxListByTimeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_type_pb.account_name;
      reader.readMessage(value,prototype_type_pb.account_name.deserializeBinaryFromReader);
      msg.setName(value);
      break;
    case 2:
      var value = new prototype_type_pb.time_point_sec;
      reader.readMessage(value,prototype_type_pb.time_point_sec.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 3:
      var value = new prototype_type_pb.time_point_sec;
      reader.readMessage(value,prototype_type_pb.time_point_sec.deserializeBinaryFromReader);
      msg.setEnd(value);
      break;
    case 4:
      var value = new proto.grpcpb.TrxInfo;
      reader.readMessage(value,proto.grpcpb.TrxInfo.deserializeBinaryFromReader);
      msg.setLastTrx(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetUserTrxListByTimeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetUserTrxListByTimeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetUserTrxListByTimeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetUserTrxListByTimeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_type_pb.account_name.serializeBinaryToWriter
    );
  }
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      prototype_type_pb.time_point_sec.serializeBinaryToWriter
    );
  }
  f = message.getEnd();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      prototype_type_pb.time_point_sec.serializeBinaryToWriter
    );
  }
  f = message.getLastTrx();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.grpcpb.TrxInfo.serializeBinaryToWriter
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional prototype.account_name name = 1;
 * @return {?proto.prototype.account_name}
 */
proto.grpcpb.GetUserTrxListByTimeRequest.prototype.getName = function() {
  return /** @type{?proto.prototype.account_name} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.account_name, 1));
};


/** @param {?proto.prototype.account_name|undefined} value */
proto.grpcpb.GetUserTrxListByTimeRequest.prototype.setName = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.GetUserTrxListByTimeRequest.prototype.clearName = function() {
  this.setName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetUserTrxListByTimeRequest.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional prototype.time_point_sec start = 2;
 * @return {?proto.prototype.time_point_sec}
 */
proto.grpcpb.GetUserTrxListByTimeRequest.prototype.getStart = function() {
  return /** @type{?proto.prototype.time_point_sec} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.time_point_sec, 2));
};


/** @param {?proto.prototype.time_point_sec|undefined} value */
proto.grpcpb.GetUserTrxListByTimeRequest.prototype.setStart = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.grpcpb.GetUserTrxListByTimeRequest.prototype.clearStart = function() {
  this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetUserTrxListByTimeRequest.prototype.hasStart = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional prototype.time_point_sec end = 3;
 * @return {?proto.prototype.time_point_sec}
 */
proto.grpcpb.GetUserTrxListByTimeRequest.prototype.getEnd = function() {
  return /** @type{?proto.prototype.time_point_sec} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.time_point_sec, 3));
};


/** @param {?proto.prototype.time_point_sec|undefined} value */
proto.grpcpb.GetUserTrxListByTimeRequest.prototype.setEnd = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.grpcpb.GetUserTrxListByTimeRequest.prototype.clearEnd = function() {
  this.setEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetUserTrxListByTimeRequest.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional TrxInfo last_trx = 4;
 * @return {?proto.grpcpb.TrxInfo}
 */
proto.grpcpb.GetUserTrxListByTimeRequest.prototype.getLastTrx = function() {
  return /** @type{?proto.grpcpb.TrxInfo} */ (
    jspb.Message.getWrapperField(this, proto.grpcpb.TrxInfo, 4));
};


/** @param {?proto.grpcpb.TrxInfo|undefined} value */
proto.grpcpb.GetUserTrxListByTimeRequest.prototype.setLastTrx = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.grpcpb.GetUserTrxListByTimeRequest.prototype.clearLastTrx = function() {
  this.setLastTrx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetUserTrxListByTimeRequest.prototype.hasLastTrx = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 limit = 5;
 * @return {number}
 */
proto.grpcpb.GetUserTrxListByTimeRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.grpcpb.GetUserTrxListByTimeRequest.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetUserTrxListByTimeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grpcpb.GetUserTrxListByTimeResponse.repeatedFields_, null);
};
goog.inherits(proto.grpcpb.GetUserTrxListByTimeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetUserTrxListByTimeResponse.displayName = 'proto.grpcpb.GetUserTrxListByTimeResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grpcpb.GetUserTrxListByTimeResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetUserTrxListByTimeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetUserTrxListByTimeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetUserTrxListByTimeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetUserTrxListByTimeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    trxListList: jspb.Message.toObjectList(msg.getTrxListList(),
    proto.grpcpb.TrxInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetUserTrxListByTimeResponse}
 */
proto.grpcpb.GetUserTrxListByTimeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetUserTrxListByTimeResponse;
  return proto.grpcpb.GetUserTrxListByTimeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetUserTrxListByTimeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetUserTrxListByTimeResponse}
 */
proto.grpcpb.GetUserTrxListByTimeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grpcpb.TrxInfo;
      reader.readMessage(value,proto.grpcpb.TrxInfo.deserializeBinaryFromReader);
      msg.addTrxList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetUserTrxListByTimeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetUserTrxListByTimeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetUserTrxListByTimeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetUserTrxListByTimeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrxListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.grpcpb.TrxInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TrxInfo trx_list = 1;
 * @return {!Array<!proto.grpcpb.TrxInfo>}
 */
proto.grpcpb.GetUserTrxListByTimeResponse.prototype.getTrxListList = function() {
  return /** @type{!Array<!proto.grpcpb.TrxInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.grpcpb.TrxInfo, 1));
};


/** @param {!Array<!proto.grpcpb.TrxInfo>} value */
proto.grpcpb.GetUserTrxListByTimeResponse.prototype.setTrxListList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.grpcpb.TrxInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.grpcpb.TrxInfo}
 */
proto.grpcpb.GetUserTrxListByTimeResponse.prototype.addTrxList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.grpcpb.TrxInfo, opt_index);
};


proto.grpcpb.GetUserTrxListByTimeResponse.prototype.clearTrxListList = function() {
  this.setTrxListList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.VoterOfPost = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.VoterOfPost, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.VoterOfPost.displayName = 'proto.grpcpb.VoterOfPost';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.VoterOfPost.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.VoterOfPost.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.VoterOfPost} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.VoterOfPost.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountName: (f = msg.getAccountName()) && prototype_type_pb.account_name.toObject(includeInstance, f),
    weightedVp: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.VoterOfPost}
 */
proto.grpcpb.VoterOfPost.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.VoterOfPost;
  return proto.grpcpb.VoterOfPost.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.VoterOfPost} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.VoterOfPost}
 */
proto.grpcpb.VoterOfPost.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_type_pb.account_name;
      reader.readMessage(value,prototype_type_pb.account_name.deserializeBinaryFromReader);
      msg.setAccountName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWeightedVp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.VoterOfPost.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.VoterOfPost.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.VoterOfPost} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.VoterOfPost.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountName();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_type_pb.account_name.serializeBinaryToWriter
    );
  }
  f = message.getWeightedVp();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional prototype.account_name account_name = 1;
 * @return {?proto.prototype.account_name}
 */
proto.grpcpb.VoterOfPost.prototype.getAccountName = function() {
  return /** @type{?proto.prototype.account_name} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.account_name, 1));
};


/** @param {?proto.prototype.account_name|undefined} value */
proto.grpcpb.VoterOfPost.prototype.setAccountName = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.VoterOfPost.prototype.clearAccountName = function() {
  this.setAccountName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.VoterOfPost.prototype.hasAccountName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string weighted_vp = 2;
 * @return {string}
 */
proto.grpcpb.VoterOfPost.prototype.getWeightedVp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.grpcpb.VoterOfPost.prototype.setWeightedVp = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetPostInfoByIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetPostInfoByIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetPostInfoByIdRequest.displayName = 'proto.grpcpb.GetPostInfoByIdRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetPostInfoByIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetPostInfoByIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetPostInfoByIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetPostInfoByIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    postId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    voterListLimit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    replyListLimit: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetPostInfoByIdRequest}
 */
proto.grpcpb.GetPostInfoByIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetPostInfoByIdRequest;
  return proto.grpcpb.GetPostInfoByIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetPostInfoByIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetPostInfoByIdRequest}
 */
proto.grpcpb.GetPostInfoByIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setPostId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVoterListLimit(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setReplyListLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetPostInfoByIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetPostInfoByIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetPostInfoByIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetPostInfoByIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPostId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getVoterListLimit();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getReplyListLimit();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint64 post_id = 1;
 * @return {string}
 */
proto.grpcpb.GetPostInfoByIdRequest.prototype.getPostId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/** @param {string} value */
proto.grpcpb.GetPostInfoByIdRequest.prototype.setPostId = function(value) {
  jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint32 voter_list_limit = 2;
 * @return {number}
 */
proto.grpcpb.GetPostInfoByIdRequest.prototype.getVoterListLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.grpcpb.GetPostInfoByIdRequest.prototype.setVoterListLimit = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 reply_list_limit = 3;
 * @return {number}
 */
proto.grpcpb.GetPostInfoByIdRequest.prototype.getReplyListLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.grpcpb.GetPostInfoByIdRequest.prototype.setReplyListLimit = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetPostInfoByIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grpcpb.GetPostInfoByIdResponse.repeatedFields_, null);
};
goog.inherits(proto.grpcpb.GetPostInfoByIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetPostInfoByIdResponse.displayName = 'proto.grpcpb.GetPostInfoByIdResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grpcpb.GetPostInfoByIdResponse.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetPostInfoByIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetPostInfoByIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetPostInfoByIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetPostInfoByIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    postInfo: (f = msg.getPostInfo()) && proto.grpcpb.PostResponse.toObject(includeInstance, f),
    voterListList: jspb.Message.toObjectList(msg.getVoterListList(),
    proto.grpcpb.VoterOfPost.toObject, includeInstance),
    replyListList: jspb.Message.toObjectList(msg.getReplyListList(),
    proto.grpcpb.PostResponse.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetPostInfoByIdResponse}
 */
proto.grpcpb.GetPostInfoByIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetPostInfoByIdResponse;
  return proto.grpcpb.GetPostInfoByIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetPostInfoByIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetPostInfoByIdResponse}
 */
proto.grpcpb.GetPostInfoByIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grpcpb.PostResponse;
      reader.readMessage(value,proto.grpcpb.PostResponse.deserializeBinaryFromReader);
      msg.setPostInfo(value);
      break;
    case 2:
      var value = new proto.grpcpb.VoterOfPost;
      reader.readMessage(value,proto.grpcpb.VoterOfPost.deserializeBinaryFromReader);
      msg.addVoterList(value);
      break;
    case 3:
      var value = new proto.grpcpb.PostResponse;
      reader.readMessage(value,proto.grpcpb.PostResponse.deserializeBinaryFromReader);
      msg.addReplyList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetPostInfoByIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetPostInfoByIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetPostInfoByIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetPostInfoByIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPostInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.grpcpb.PostResponse.serializeBinaryToWriter
    );
  }
  f = message.getVoterListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.grpcpb.VoterOfPost.serializeBinaryToWriter
    );
  }
  f = message.getReplyListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.grpcpb.PostResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional PostResponse post_info = 1;
 * @return {?proto.grpcpb.PostResponse}
 */
proto.grpcpb.GetPostInfoByIdResponse.prototype.getPostInfo = function() {
  return /** @type{?proto.grpcpb.PostResponse} */ (
    jspb.Message.getWrapperField(this, proto.grpcpb.PostResponse, 1));
};


/** @param {?proto.grpcpb.PostResponse|undefined} value */
proto.grpcpb.GetPostInfoByIdResponse.prototype.setPostInfo = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.GetPostInfoByIdResponse.prototype.clearPostInfo = function() {
  this.setPostInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetPostInfoByIdResponse.prototype.hasPostInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated VoterOfPost voter_list = 2;
 * @return {!Array<!proto.grpcpb.VoterOfPost>}
 */
proto.grpcpb.GetPostInfoByIdResponse.prototype.getVoterListList = function() {
  return /** @type{!Array<!proto.grpcpb.VoterOfPost>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.grpcpb.VoterOfPost, 2));
};


/** @param {!Array<!proto.grpcpb.VoterOfPost>} value */
proto.grpcpb.GetPostInfoByIdResponse.prototype.setVoterListList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.grpcpb.VoterOfPost=} opt_value
 * @param {number=} opt_index
 * @return {!proto.grpcpb.VoterOfPost}
 */
proto.grpcpb.GetPostInfoByIdResponse.prototype.addVoterList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.grpcpb.VoterOfPost, opt_index);
};


proto.grpcpb.GetPostInfoByIdResponse.prototype.clearVoterListList = function() {
  this.setVoterListList([]);
};


/**
 * repeated PostResponse reply_list = 3;
 * @return {!Array<!proto.grpcpb.PostResponse>}
 */
proto.grpcpb.GetPostInfoByIdResponse.prototype.getReplyListList = function() {
  return /** @type{!Array<!proto.grpcpb.PostResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.grpcpb.PostResponse, 3));
};


/** @param {!Array<!proto.grpcpb.PostResponse>} value */
proto.grpcpb.GetPostInfoByIdResponse.prototype.setReplyListList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.grpcpb.PostResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.grpcpb.PostResponse}
 */
proto.grpcpb.GetPostInfoByIdResponse.prototype.addReplyList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.grpcpb.PostResponse, opt_index);
};


proto.grpcpb.GetPostInfoByIdResponse.prototype.clearReplyListList = function() {
  this.setReplyListList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetContractInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetContractInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetContractInfoRequest.displayName = 'proto.grpcpb.GetContractInfoRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetContractInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetContractInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetContractInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetContractInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    owner: (f = msg.getOwner()) && prototype_type_pb.account_name.toObject(includeInstance, f),
    contractName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fetchabi: jspb.Message.getFieldWithDefault(msg, 3, false),
    fetchcode: jspb.Message.getFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetContractInfoRequest}
 */
proto.grpcpb.GetContractInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetContractInfoRequest;
  return proto.grpcpb.GetContractInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetContractInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetContractInfoRequest}
 */
proto.grpcpb.GetContractInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_type_pb.account_name;
      reader.readMessage(value,prototype_type_pb.account_name.deserializeBinaryFromReader);
      msg.setOwner(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractName(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFetchabi(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFetchcode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetContractInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetContractInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetContractInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetContractInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwner();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_type_pb.account_name.serializeBinaryToWriter
    );
  }
  f = message.getContractName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFetchabi();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getFetchcode();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional prototype.account_name owner = 1;
 * @return {?proto.prototype.account_name}
 */
proto.grpcpb.GetContractInfoRequest.prototype.getOwner = function() {
  return /** @type{?proto.prototype.account_name} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.account_name, 1));
};


/** @param {?proto.prototype.account_name|undefined} value */
proto.grpcpb.GetContractInfoRequest.prototype.setOwner = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.GetContractInfoRequest.prototype.clearOwner = function() {
  this.setOwner(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetContractInfoRequest.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string contract_name = 2;
 * @return {string}
 */
proto.grpcpb.GetContractInfoRequest.prototype.getContractName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.grpcpb.GetContractInfoRequest.prototype.setContractName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool fetchAbi = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.grpcpb.GetContractInfoRequest.prototype.getFetchabi = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.grpcpb.GetContractInfoRequest.prototype.setFetchabi = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool fetchCode = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.grpcpb.GetContractInfoRequest.prototype.getFetchcode = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.grpcpb.GetContractInfoRequest.prototype.setFetchcode = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetContractInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetContractInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetContractInfoResponse.displayName = 'proto.grpcpb.GetContractInfoResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetContractInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetContractInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetContractInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetContractInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    exist: jspb.Message.getFieldWithDefault(msg, 1, false),
    abi: jspb.Message.getFieldWithDefault(msg, 2, ""),
    code: msg.getCode_asB64(),
    url: jspb.Message.getFieldWithDefault(msg, 4, ""),
    describe: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetContractInfoResponse}
 */
proto.grpcpb.GetContractInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetContractInfoResponse;
  return proto.grpcpb.GetContractInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetContractInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetContractInfoResponse}
 */
proto.grpcpb.GetContractInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExist(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAbi(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescribe(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetContractInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetContractInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetContractInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetContractInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExist();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getAbi();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCode_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDescribe();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional bool exist = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.grpcpb.GetContractInfoResponse.prototype.getExist = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.grpcpb.GetContractInfoResponse.prototype.setExist = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string abi = 2;
 * @return {string}
 */
proto.grpcpb.GetContractInfoResponse.prototype.getAbi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.grpcpb.GetContractInfoResponse.prototype.setAbi = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bytes code = 3;
 * @return {!(string|Uint8Array)}
 */
proto.grpcpb.GetContractInfoResponse.prototype.getCode = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes code = 3;
 * This is a type-conversion wrapper around `getCode()`
 * @return {string}
 */
proto.grpcpb.GetContractInfoResponse.prototype.getCode_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCode()));
};


/**
 * optional bytes code = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCode()`
 * @return {!Uint8Array}
 */
proto.grpcpb.GetContractInfoResponse.prototype.getCode_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCode()));
};


/** @param {!(string|Uint8Array)} value */
proto.grpcpb.GetContractInfoResponse.prototype.setCode = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional string url = 4;
 * @return {string}
 */
proto.grpcpb.GetContractInfoResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.grpcpb.GetContractInfoResponse.prototype.setUrl = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string describe = 5;
 * @return {string}
 */
proto.grpcpb.GetContractInfoResponse.prototype.getDescribe = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.grpcpb.GetContractInfoResponse.prototype.setDescribe = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetBlkIsIrreversibleByTxIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetBlkIsIrreversibleByTxIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetBlkIsIrreversibleByTxIdRequest.displayName = 'proto.grpcpb.GetBlkIsIrreversibleByTxIdRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetBlkIsIrreversibleByTxIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetBlkIsIrreversibleByTxIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetBlkIsIrreversibleByTxIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetBlkIsIrreversibleByTxIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    trxId: (f = msg.getTrxId()) && prototype_type_pb.sha256.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetBlkIsIrreversibleByTxIdRequest}
 */
proto.grpcpb.GetBlkIsIrreversibleByTxIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetBlkIsIrreversibleByTxIdRequest;
  return proto.grpcpb.GetBlkIsIrreversibleByTxIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetBlkIsIrreversibleByTxIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetBlkIsIrreversibleByTxIdRequest}
 */
proto.grpcpb.GetBlkIsIrreversibleByTxIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_type_pb.sha256;
      reader.readMessage(value,prototype_type_pb.sha256.deserializeBinaryFromReader);
      msg.setTrxId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetBlkIsIrreversibleByTxIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetBlkIsIrreversibleByTxIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetBlkIsIrreversibleByTxIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetBlkIsIrreversibleByTxIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrxId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_type_pb.sha256.serializeBinaryToWriter
    );
  }
};


/**
 * optional prototype.sha256 trx_id = 1;
 * @return {?proto.prototype.sha256}
 */
proto.grpcpb.GetBlkIsIrreversibleByTxIdRequest.prototype.getTrxId = function() {
  return /** @type{?proto.prototype.sha256} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.sha256, 1));
};


/** @param {?proto.prototype.sha256|undefined} value */
proto.grpcpb.GetBlkIsIrreversibleByTxIdRequest.prototype.setTrxId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.GetBlkIsIrreversibleByTxIdRequest.prototype.clearTrxId = function() {
  this.setTrxId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetBlkIsIrreversibleByTxIdRequest.prototype.hasTrxId = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetBlkIsIrreversibleByTxIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetBlkIsIrreversibleByTxIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetBlkIsIrreversibleByTxIdResponse.displayName = 'proto.grpcpb.GetBlkIsIrreversibleByTxIdResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetBlkIsIrreversibleByTxIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetBlkIsIrreversibleByTxIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetBlkIsIrreversibleByTxIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetBlkIsIrreversibleByTxIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetBlkIsIrreversibleByTxIdResponse}
 */
proto.grpcpb.GetBlkIsIrreversibleByTxIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetBlkIsIrreversibleByTxIdResponse;
  return proto.grpcpb.GetBlkIsIrreversibleByTxIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetBlkIsIrreversibleByTxIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetBlkIsIrreversibleByTxIdResponse}
 */
proto.grpcpb.GetBlkIsIrreversibleByTxIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetBlkIsIrreversibleByTxIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetBlkIsIrreversibleByTxIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetBlkIsIrreversibleByTxIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetBlkIsIrreversibleByTxIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool result = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.grpcpb.GetBlkIsIrreversibleByTxIdResponse.prototype.getResult = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.grpcpb.GetBlkIsIrreversibleByTxIdResponse.prototype.setResult = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetAccountListByCreTimeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetAccountListByCreTimeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetAccountListByCreTimeRequest.displayName = 'proto.grpcpb.GetAccountListByCreTimeRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetAccountListByCreTimeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetAccountListByCreTimeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetAccountListByCreTimeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetAccountListByCreTimeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: (f = msg.getStart()) && prototype_type_pb.time_point_sec.toObject(includeInstance, f),
    end: (f = msg.getEnd()) && prototype_type_pb.time_point_sec.toObject(includeInstance, f),
    lastAccount: (f = msg.getLastAccount()) && proto.grpcpb.AccountInfo.toObject(includeInstance, f),
    limit: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetAccountListByCreTimeRequest}
 */
proto.grpcpb.GetAccountListByCreTimeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetAccountListByCreTimeRequest;
  return proto.grpcpb.GetAccountListByCreTimeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetAccountListByCreTimeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetAccountListByCreTimeRequest}
 */
proto.grpcpb.GetAccountListByCreTimeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_type_pb.time_point_sec;
      reader.readMessage(value,prototype_type_pb.time_point_sec.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 2:
      var value = new prototype_type_pb.time_point_sec;
      reader.readMessage(value,prototype_type_pb.time_point_sec.deserializeBinaryFromReader);
      msg.setEnd(value);
      break;
    case 3:
      var value = new proto.grpcpb.AccountInfo;
      reader.readMessage(value,proto.grpcpb.AccountInfo.deserializeBinaryFromReader);
      msg.setLastAccount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetAccountListByCreTimeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetAccountListByCreTimeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetAccountListByCreTimeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetAccountListByCreTimeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_type_pb.time_point_sec.serializeBinaryToWriter
    );
  }
  f = message.getEnd();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      prototype_type_pb.time_point_sec.serializeBinaryToWriter
    );
  }
  f = message.getLastAccount();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.grpcpb.AccountInfo.serializeBinaryToWriter
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional prototype.time_point_sec start = 1;
 * @return {?proto.prototype.time_point_sec}
 */
proto.grpcpb.GetAccountListByCreTimeRequest.prototype.getStart = function() {
  return /** @type{?proto.prototype.time_point_sec} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.time_point_sec, 1));
};


/** @param {?proto.prototype.time_point_sec|undefined} value */
proto.grpcpb.GetAccountListByCreTimeRequest.prototype.setStart = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.GetAccountListByCreTimeRequest.prototype.clearStart = function() {
  this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetAccountListByCreTimeRequest.prototype.hasStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional prototype.time_point_sec end = 2;
 * @return {?proto.prototype.time_point_sec}
 */
proto.grpcpb.GetAccountListByCreTimeRequest.prototype.getEnd = function() {
  return /** @type{?proto.prototype.time_point_sec} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.time_point_sec, 2));
};


/** @param {?proto.prototype.time_point_sec|undefined} value */
proto.grpcpb.GetAccountListByCreTimeRequest.prototype.setEnd = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.grpcpb.GetAccountListByCreTimeRequest.prototype.clearEnd = function() {
  this.setEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetAccountListByCreTimeRequest.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AccountInfo last_account = 3;
 * @return {?proto.grpcpb.AccountInfo}
 */
proto.grpcpb.GetAccountListByCreTimeRequest.prototype.getLastAccount = function() {
  return /** @type{?proto.grpcpb.AccountInfo} */ (
    jspb.Message.getWrapperField(this, proto.grpcpb.AccountInfo, 3));
};


/** @param {?proto.grpcpb.AccountInfo|undefined} value */
proto.grpcpb.GetAccountListByCreTimeRequest.prototype.setLastAccount = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.grpcpb.GetAccountListByCreTimeRequest.prototype.clearLastAccount = function() {
  this.setLastAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetAccountListByCreTimeRequest.prototype.hasLastAccount = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 limit = 4;
 * @return {number}
 */
proto.grpcpb.GetAccountListByCreTimeRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.grpcpb.GetAccountListByCreTimeRequest.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.DailyStat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.DailyStat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.DailyStat.displayName = 'proto.grpcpb.DailyStat';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.DailyStat.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.DailyStat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.DailyStat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.DailyStat.toObject = function(includeInstance, msg) {
  var f, obj = {
    date: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dapp: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dau: jspb.Message.getFieldWithDefault(msg, 3, 0),
    dnu: jspb.Message.getFieldWithDefault(msg, 4, 0),
    trxs: jspb.Message.getFieldWithDefault(msg, 5, 0),
    amount: jspb.Message.getFieldWithDefault(msg, 6, "0"),
    totalUserCount: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.DailyStat}
 */
proto.grpcpb.DailyStat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.DailyStat;
  return proto.grpcpb.DailyStat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.DailyStat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.DailyStat}
 */
proto.grpcpb.DailyStat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDate(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDapp(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDau(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDnu(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTrxs(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAmount(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalUserCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.DailyStat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.DailyStat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.DailyStat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.DailyStat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDate();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getDapp();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDau();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getDnu();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getTrxs();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getAmount();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      6,
      f
    );
  }
  f = message.getTotalUserCount();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
};


/**
 * optional uint64 date = 1;
 * @return {number}
 */
proto.grpcpb.DailyStat.prototype.getDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.grpcpb.DailyStat.prototype.setDate = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string dapp = 2;
 * @return {string}
 */
proto.grpcpb.DailyStat.prototype.getDapp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.grpcpb.DailyStat.prototype.setDapp = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 dau = 3;
 * @return {number}
 */
proto.grpcpb.DailyStat.prototype.getDau = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.grpcpb.DailyStat.prototype.setDau = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 dnu = 4;
 * @return {number}
 */
proto.grpcpb.DailyStat.prototype.getDnu = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.grpcpb.DailyStat.prototype.setDnu = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 trxs = 5;
 * @return {number}
 */
proto.grpcpb.DailyStat.prototype.getTrxs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.grpcpb.DailyStat.prototype.setTrxs = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 amount = 6;
 * @return {string}
 */
proto.grpcpb.DailyStat.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, "0"));
};


/** @param {string} value */
proto.grpcpb.DailyStat.prototype.setAmount = function(value) {
  jspb.Message.setProto3StringIntField(this, 6, value);
};


/**
 * optional uint32 total_user_count = 7;
 * @return {number}
 */
proto.grpcpb.DailyStat.prototype.getTotalUserCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.grpcpb.DailyStat.prototype.setTotalUserCount = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetDailyStatsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetDailyStatsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetDailyStatsRequest.displayName = 'proto.grpcpb.GetDailyStatsRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetDailyStatsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetDailyStatsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetDailyStatsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetDailyStatsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    days: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dapp: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetDailyStatsRequest}
 */
proto.grpcpb.GetDailyStatsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetDailyStatsRequest;
  return proto.grpcpb.GetDailyStatsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetDailyStatsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetDailyStatsRequest}
 */
proto.grpcpb.GetDailyStatsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDays(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDapp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetDailyStatsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetDailyStatsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetDailyStatsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetDailyStatsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDays();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getDapp();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 days = 1;
 * @return {number}
 */
proto.grpcpb.GetDailyStatsRequest.prototype.getDays = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.grpcpb.GetDailyStatsRequest.prototype.setDays = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string dapp = 2;
 * @return {string}
 */
proto.grpcpb.GetDailyStatsRequest.prototype.getDapp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.grpcpb.GetDailyStatsRequest.prototype.setDapp = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetDailyStatsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grpcpb.GetDailyStatsResponse.repeatedFields_, null);
};
goog.inherits(proto.grpcpb.GetDailyStatsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetDailyStatsResponse.displayName = 'proto.grpcpb.GetDailyStatsResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grpcpb.GetDailyStatsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetDailyStatsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetDailyStatsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetDailyStatsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetDailyStatsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    statList: jspb.Message.toObjectList(msg.getStatList(),
    proto.grpcpb.DailyStat.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetDailyStatsResponse}
 */
proto.grpcpb.GetDailyStatsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetDailyStatsResponse;
  return proto.grpcpb.GetDailyStatsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetDailyStatsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetDailyStatsResponse}
 */
proto.grpcpb.GetDailyStatsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grpcpb.DailyStat;
      reader.readMessage(value,proto.grpcpb.DailyStat.deserializeBinaryFromReader);
      msg.addStat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetDailyStatsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetDailyStatsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetDailyStatsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetDailyStatsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.grpcpb.DailyStat.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DailyStat stat = 1;
 * @return {!Array<!proto.grpcpb.DailyStat>}
 */
proto.grpcpb.GetDailyStatsResponse.prototype.getStatList = function() {
  return /** @type{!Array<!proto.grpcpb.DailyStat>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.grpcpb.DailyStat, 1));
};


/** @param {!Array<!proto.grpcpb.DailyStat>} value */
proto.grpcpb.GetDailyStatsResponse.prototype.setStatList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.grpcpb.DailyStat=} opt_value
 * @param {number=} opt_index
 * @return {!proto.grpcpb.DailyStat}
 */
proto.grpcpb.GetDailyStatsResponse.prototype.addStat = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.grpcpb.DailyStat, opt_index);
};


proto.grpcpb.GetDailyStatsResponse.prototype.clearStatList = function() {
  this.setStatList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.ContractInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.ContractInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.ContractInfo.displayName = 'proto.grpcpb.ContractInfo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.ContractInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.ContractInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.ContractInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.ContractInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    owner: (f = msg.getOwner()) && prototype_type_pb.account_name.toObject(includeInstance, f),
    name: (f = msg.getName()) && prototype_type_pb.account_name.toObject(includeInstance, f),
    createTime: (f = msg.getCreateTime()) && prototype_type_pb.time_point_sec.toObject(includeInstance, f),
    balance: (f = msg.getBalance()) && prototype_type_pb.coin.toObject(includeInstance, f),
    applyCount: jspb.Message.getFieldWithDefault(msg, 5, 0),
    upgradeable: jspb.Message.getFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.ContractInfo}
 */
proto.grpcpb.ContractInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.ContractInfo;
  return proto.grpcpb.ContractInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.ContractInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.ContractInfo}
 */
proto.grpcpb.ContractInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_type_pb.account_name;
      reader.readMessage(value,prototype_type_pb.account_name.deserializeBinaryFromReader);
      msg.setOwner(value);
      break;
    case 2:
      var value = new prototype_type_pb.account_name;
      reader.readMessage(value,prototype_type_pb.account_name.deserializeBinaryFromReader);
      msg.setName(value);
      break;
    case 3:
      var value = new prototype_type_pb.time_point_sec;
      reader.readMessage(value,prototype_type_pb.time_point_sec.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 4:
      var value = new prototype_type_pb.coin;
      reader.readMessage(value,prototype_type_pb.coin.deserializeBinaryFromReader);
      msg.setBalance(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setApplyCount(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpgradeable(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.ContractInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.ContractInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.ContractInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.ContractInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwner();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_type_pb.account_name.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      prototype_type_pb.account_name.serializeBinaryToWriter
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      prototype_type_pb.time_point_sec.serializeBinaryToWriter
    );
  }
  f = message.getBalance();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      prototype_type_pb.coin.serializeBinaryToWriter
    );
  }
  f = message.getApplyCount();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getUpgradeable();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional prototype.account_name owner = 1;
 * @return {?proto.prototype.account_name}
 */
proto.grpcpb.ContractInfo.prototype.getOwner = function() {
  return /** @type{?proto.prototype.account_name} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.account_name, 1));
};


/** @param {?proto.prototype.account_name|undefined} value */
proto.grpcpb.ContractInfo.prototype.setOwner = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.ContractInfo.prototype.clearOwner = function() {
  this.setOwner(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.ContractInfo.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional prototype.account_name name = 2;
 * @return {?proto.prototype.account_name}
 */
proto.grpcpb.ContractInfo.prototype.getName = function() {
  return /** @type{?proto.prototype.account_name} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.account_name, 2));
};


/** @param {?proto.prototype.account_name|undefined} value */
proto.grpcpb.ContractInfo.prototype.setName = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.grpcpb.ContractInfo.prototype.clearName = function() {
  this.setName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.ContractInfo.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional prototype.time_point_sec create_time = 3;
 * @return {?proto.prototype.time_point_sec}
 */
proto.grpcpb.ContractInfo.prototype.getCreateTime = function() {
  return /** @type{?proto.prototype.time_point_sec} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.time_point_sec, 3));
};


/** @param {?proto.prototype.time_point_sec|undefined} value */
proto.grpcpb.ContractInfo.prototype.setCreateTime = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.grpcpb.ContractInfo.prototype.clearCreateTime = function() {
  this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.ContractInfo.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional prototype.coin balance = 4;
 * @return {?proto.prototype.coin}
 */
proto.grpcpb.ContractInfo.prototype.getBalance = function() {
  return /** @type{?proto.prototype.coin} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.coin, 4));
};


/** @param {?proto.prototype.coin|undefined} value */
proto.grpcpb.ContractInfo.prototype.setBalance = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.grpcpb.ContractInfo.prototype.clearBalance = function() {
  this.setBalance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.ContractInfo.prototype.hasBalance = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 apply_count = 5;
 * @return {number}
 */
proto.grpcpb.ContractInfo.prototype.getApplyCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.grpcpb.ContractInfo.prototype.setApplyCount = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool upgradeable = 6;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.grpcpb.ContractInfo.prototype.getUpgradeable = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.grpcpb.ContractInfo.prototype.setUpgradeable = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetContractListByTimeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetContractListByTimeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetContractListByTimeRequest.displayName = 'proto.grpcpb.GetContractListByTimeRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetContractListByTimeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetContractListByTimeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetContractListByTimeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetContractListByTimeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: (f = msg.getStart()) && prototype_type_pb.time_point_sec.toObject(includeInstance, f),
    end: (f = msg.getEnd()) && prototype_type_pb.time_point_sec.toObject(includeInstance, f),
    lastContract: (f = msg.getLastContract()) && proto.grpcpb.ContractInfo.toObject(includeInstance, f),
    limit: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetContractListByTimeRequest}
 */
proto.grpcpb.GetContractListByTimeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetContractListByTimeRequest;
  return proto.grpcpb.GetContractListByTimeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetContractListByTimeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetContractListByTimeRequest}
 */
proto.grpcpb.GetContractListByTimeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_type_pb.time_point_sec;
      reader.readMessage(value,prototype_type_pb.time_point_sec.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 2:
      var value = new prototype_type_pb.time_point_sec;
      reader.readMessage(value,prototype_type_pb.time_point_sec.deserializeBinaryFromReader);
      msg.setEnd(value);
      break;
    case 3:
      var value = new proto.grpcpb.ContractInfo;
      reader.readMessage(value,proto.grpcpb.ContractInfo.deserializeBinaryFromReader);
      msg.setLastContract(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetContractListByTimeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetContractListByTimeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetContractListByTimeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetContractListByTimeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_type_pb.time_point_sec.serializeBinaryToWriter
    );
  }
  f = message.getEnd();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      prototype_type_pb.time_point_sec.serializeBinaryToWriter
    );
  }
  f = message.getLastContract();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.grpcpb.ContractInfo.serializeBinaryToWriter
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional prototype.time_point_sec start = 1;
 * @return {?proto.prototype.time_point_sec}
 */
proto.grpcpb.GetContractListByTimeRequest.prototype.getStart = function() {
  return /** @type{?proto.prototype.time_point_sec} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.time_point_sec, 1));
};


/** @param {?proto.prototype.time_point_sec|undefined} value */
proto.grpcpb.GetContractListByTimeRequest.prototype.setStart = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.GetContractListByTimeRequest.prototype.clearStart = function() {
  this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetContractListByTimeRequest.prototype.hasStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional prototype.time_point_sec end = 2;
 * @return {?proto.prototype.time_point_sec}
 */
proto.grpcpb.GetContractListByTimeRequest.prototype.getEnd = function() {
  return /** @type{?proto.prototype.time_point_sec} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.time_point_sec, 2));
};


/** @param {?proto.prototype.time_point_sec|undefined} value */
proto.grpcpb.GetContractListByTimeRequest.prototype.setEnd = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.grpcpb.GetContractListByTimeRequest.prototype.clearEnd = function() {
  this.setEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetContractListByTimeRequest.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ContractInfo last_contract = 3;
 * @return {?proto.grpcpb.ContractInfo}
 */
proto.grpcpb.GetContractListByTimeRequest.prototype.getLastContract = function() {
  return /** @type{?proto.grpcpb.ContractInfo} */ (
    jspb.Message.getWrapperField(this, proto.grpcpb.ContractInfo, 3));
};


/** @param {?proto.grpcpb.ContractInfo|undefined} value */
proto.grpcpb.GetContractListByTimeRequest.prototype.setLastContract = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.grpcpb.GetContractListByTimeRequest.prototype.clearLastContract = function() {
  this.setLastContract(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetContractListByTimeRequest.prototype.hasLastContract = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 limit = 4;
 * @return {number}
 */
proto.grpcpb.GetContractListByTimeRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.grpcpb.GetContractListByTimeRequest.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetContractListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grpcpb.GetContractListResponse.repeatedFields_, null);
};
goog.inherits(proto.grpcpb.GetContractListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetContractListResponse.displayName = 'proto.grpcpb.GetContractListResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grpcpb.GetContractListResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetContractListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetContractListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetContractListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetContractListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    contractListList: jspb.Message.toObjectList(msg.getContractListList(),
    proto.grpcpb.ContractInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetContractListResponse}
 */
proto.grpcpb.GetContractListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetContractListResponse;
  return proto.grpcpb.GetContractListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetContractListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetContractListResponse}
 */
proto.grpcpb.GetContractListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grpcpb.ContractInfo;
      reader.readMessage(value,proto.grpcpb.ContractInfo.deserializeBinaryFromReader);
      msg.addContractList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetContractListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetContractListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetContractListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetContractListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContractListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.grpcpb.ContractInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ContractInfo contract_list = 1;
 * @return {!Array<!proto.grpcpb.ContractInfo>}
 */
proto.grpcpb.GetContractListResponse.prototype.getContractListList = function() {
  return /** @type{!Array<!proto.grpcpb.ContractInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.grpcpb.ContractInfo, 1));
};


/** @param {!Array<!proto.grpcpb.ContractInfo>} value */
proto.grpcpb.GetContractListResponse.prototype.setContractListList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.grpcpb.ContractInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.grpcpb.ContractInfo}
 */
proto.grpcpb.GetContractListResponse.prototype.addContractList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.grpcpb.ContractInfo, opt_index);
};


proto.grpcpb.GetContractListResponse.prototype.clearContractListList = function() {
  this.setContractListList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetWitnessListByVoteCountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetWitnessListByVoteCountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetWitnessListByVoteCountRequest.displayName = 'proto.grpcpb.GetWitnessListByVoteCountRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetWitnessListByVoteCountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetWitnessListByVoteCountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetWitnessListByVoteCountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetWitnessListByVoteCountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: (f = msg.getStart()) && prototype_type_pb.vest.toObject(includeInstance, f),
    end: (f = msg.getEnd()) && prototype_type_pb.vest.toObject(includeInstance, f),
    lastWitness: (f = msg.getLastWitness()) && proto.grpcpb.WitnessResponse.toObject(includeInstance, f),
    limit: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetWitnessListByVoteCountRequest}
 */
proto.grpcpb.GetWitnessListByVoteCountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetWitnessListByVoteCountRequest;
  return proto.grpcpb.GetWitnessListByVoteCountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetWitnessListByVoteCountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetWitnessListByVoteCountRequest}
 */
proto.grpcpb.GetWitnessListByVoteCountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_type_pb.vest;
      reader.readMessage(value,prototype_type_pb.vest.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 2:
      var value = new prototype_type_pb.vest;
      reader.readMessage(value,prototype_type_pb.vest.deserializeBinaryFromReader);
      msg.setEnd(value);
      break;
    case 3:
      var value = new proto.grpcpb.WitnessResponse;
      reader.readMessage(value,proto.grpcpb.WitnessResponse.deserializeBinaryFromReader);
      msg.setLastWitness(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetWitnessListByVoteCountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetWitnessListByVoteCountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetWitnessListByVoteCountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetWitnessListByVoteCountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_type_pb.vest.serializeBinaryToWriter
    );
  }
  f = message.getEnd();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      prototype_type_pb.vest.serializeBinaryToWriter
    );
  }
  f = message.getLastWitness();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.grpcpb.WitnessResponse.serializeBinaryToWriter
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional prototype.vest start = 1;
 * @return {?proto.prototype.vest}
 */
proto.grpcpb.GetWitnessListByVoteCountRequest.prototype.getStart = function() {
  return /** @type{?proto.prototype.vest} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.vest, 1));
};


/** @param {?proto.prototype.vest|undefined} value */
proto.grpcpb.GetWitnessListByVoteCountRequest.prototype.setStart = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.GetWitnessListByVoteCountRequest.prototype.clearStart = function() {
  this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetWitnessListByVoteCountRequest.prototype.hasStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional prototype.vest end = 2;
 * @return {?proto.prototype.vest}
 */
proto.grpcpb.GetWitnessListByVoteCountRequest.prototype.getEnd = function() {
  return /** @type{?proto.prototype.vest} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.vest, 2));
};


/** @param {?proto.prototype.vest|undefined} value */
proto.grpcpb.GetWitnessListByVoteCountRequest.prototype.setEnd = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.grpcpb.GetWitnessListByVoteCountRequest.prototype.clearEnd = function() {
  this.setEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetWitnessListByVoteCountRequest.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional WitnessResponse last_witness = 3;
 * @return {?proto.grpcpb.WitnessResponse}
 */
proto.grpcpb.GetWitnessListByVoteCountRequest.prototype.getLastWitness = function() {
  return /** @type{?proto.grpcpb.WitnessResponse} */ (
    jspb.Message.getWrapperField(this, proto.grpcpb.WitnessResponse, 3));
};


/** @param {?proto.grpcpb.WitnessResponse|undefined} value */
proto.grpcpb.GetWitnessListByVoteCountRequest.prototype.setLastWitness = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.grpcpb.GetWitnessListByVoteCountRequest.prototype.clearLastWitness = function() {
  this.setLastWitness(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetWitnessListByVoteCountRequest.prototype.hasLastWitness = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 limit = 4;
 * @return {number}
 */
proto.grpcpb.GetWitnessListByVoteCountRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.grpcpb.GetWitnessListByVoteCountRequest.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetPostListByVestRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetPostListByVestRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetPostListByVestRequest.displayName = 'proto.grpcpb.GetPostListByVestRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetPostListByVestRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetPostListByVestRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetPostListByVestRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetPostListByVestRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: (f = msg.getStart()) && prototype_type_pb.vest.toObject(includeInstance, f),
    end: (f = msg.getEnd()) && prototype_type_pb.vest.toObject(includeInstance, f),
    lastPost: (f = msg.getLastPost()) && proto.grpcpb.PostResponse.toObject(includeInstance, f),
    limit: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetPostListByVestRequest}
 */
proto.grpcpb.GetPostListByVestRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetPostListByVestRequest;
  return proto.grpcpb.GetPostListByVestRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetPostListByVestRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetPostListByVestRequest}
 */
proto.grpcpb.GetPostListByVestRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_type_pb.vest;
      reader.readMessage(value,prototype_type_pb.vest.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 2:
      var value = new prototype_type_pb.vest;
      reader.readMessage(value,prototype_type_pb.vest.deserializeBinaryFromReader);
      msg.setEnd(value);
      break;
    case 3:
      var value = new proto.grpcpb.PostResponse;
      reader.readMessage(value,proto.grpcpb.PostResponse.deserializeBinaryFromReader);
      msg.setLastPost(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetPostListByVestRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetPostListByVestRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetPostListByVestRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetPostListByVestRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_type_pb.vest.serializeBinaryToWriter
    );
  }
  f = message.getEnd();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      prototype_type_pb.vest.serializeBinaryToWriter
    );
  }
  f = message.getLastPost();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.grpcpb.PostResponse.serializeBinaryToWriter
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional prototype.vest start = 1;
 * @return {?proto.prototype.vest}
 */
proto.grpcpb.GetPostListByVestRequest.prototype.getStart = function() {
  return /** @type{?proto.prototype.vest} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.vest, 1));
};


/** @param {?proto.prototype.vest|undefined} value */
proto.grpcpb.GetPostListByVestRequest.prototype.setStart = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.GetPostListByVestRequest.prototype.clearStart = function() {
  this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetPostListByVestRequest.prototype.hasStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional prototype.vest end = 2;
 * @return {?proto.prototype.vest}
 */
proto.grpcpb.GetPostListByVestRequest.prototype.getEnd = function() {
  return /** @type{?proto.prototype.vest} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.vest, 2));
};


/** @param {?proto.prototype.vest|undefined} value */
proto.grpcpb.GetPostListByVestRequest.prototype.setEnd = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.grpcpb.GetPostListByVestRequest.prototype.clearEnd = function() {
  this.setEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetPostListByVestRequest.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PostResponse last_post = 3;
 * @return {?proto.grpcpb.PostResponse}
 */
proto.grpcpb.GetPostListByVestRequest.prototype.getLastPost = function() {
  return /** @type{?proto.grpcpb.PostResponse} */ (
    jspb.Message.getWrapperField(this, proto.grpcpb.PostResponse, 3));
};


/** @param {?proto.grpcpb.PostResponse|undefined} value */
proto.grpcpb.GetPostListByVestRequest.prototype.setLastPost = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.grpcpb.GetPostListByVestRequest.prototype.clearLastPost = function() {
  this.setLastPost(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetPostListByVestRequest.prototype.hasLastPost = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 limit = 4;
 * @return {number}
 */
proto.grpcpb.GetPostListByVestRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.grpcpb.GetPostListByVestRequest.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetPostListByVestResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grpcpb.GetPostListByVestResponse.repeatedFields_, null);
};
goog.inherits(proto.grpcpb.GetPostListByVestResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetPostListByVestResponse.displayName = 'proto.grpcpb.GetPostListByVestResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grpcpb.GetPostListByVestResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetPostListByVestResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetPostListByVestResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetPostListByVestResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetPostListByVestResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    postListList: jspb.Message.toObjectList(msg.getPostListList(),
    proto.grpcpb.PostResponse.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetPostListByVestResponse}
 */
proto.grpcpb.GetPostListByVestResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetPostListByVestResponse;
  return proto.grpcpb.GetPostListByVestResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetPostListByVestResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetPostListByVestResponse}
 */
proto.grpcpb.GetPostListByVestResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grpcpb.PostResponse;
      reader.readMessage(value,proto.grpcpb.PostResponse.deserializeBinaryFromReader);
      msg.addPostList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetPostListByVestResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetPostListByVestResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetPostListByVestResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetPostListByVestResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPostListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.grpcpb.PostResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PostResponse post_list = 1;
 * @return {!Array<!proto.grpcpb.PostResponse>}
 */
proto.grpcpb.GetPostListByVestResponse.prototype.getPostListList = function() {
  return /** @type{!Array<!proto.grpcpb.PostResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.grpcpb.PostResponse, 1));
};


/** @param {!Array<!proto.grpcpb.PostResponse>} value */
proto.grpcpb.GetPostListByVestResponse.prototype.setPostListList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.grpcpb.PostResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.grpcpb.PostResponse}
 */
proto.grpcpb.GetPostListByVestResponse.prototype.addPostList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.grpcpb.PostResponse, opt_index);
};


proto.grpcpb.GetPostListByVestResponse.prototype.clearPostListList = function() {
  this.setPostListList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.EsimateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.EsimateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.EsimateRequest.displayName = 'proto.grpcpb.EsimateRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.EsimateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.EsimateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.EsimateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.EsimateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    transaction: (f = msg.getTransaction()) && prototype_transaction_pb.signed_transaction.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.EsimateRequest}
 */
proto.grpcpb.EsimateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.EsimateRequest;
  return proto.grpcpb.EsimateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.EsimateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.EsimateRequest}
 */
proto.grpcpb.EsimateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_transaction_pb.signed_transaction;
      reader.readMessage(value,prototype_transaction_pb.signed_transaction.deserializeBinaryFromReader);
      msg.setTransaction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.EsimateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.EsimateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.EsimateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.EsimateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_transaction_pb.signed_transaction.serializeBinaryToWriter
    );
  }
};


/**
 * optional prototype.signed_transaction transaction = 1;
 * @return {?proto.prototype.signed_transaction}
 */
proto.grpcpb.EsimateRequest.prototype.getTransaction = function() {
  return /** @type{?proto.prototype.signed_transaction} */ (
    jspb.Message.getWrapperField(this, prototype_transaction_pb.signed_transaction, 1));
};


/** @param {?proto.prototype.signed_transaction|undefined} value */
proto.grpcpb.EsimateRequest.prototype.setTransaction = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.EsimateRequest.prototype.clearTransaction = function() {
  this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.EsimateRequest.prototype.hasTransaction = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.EsimateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.EsimateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.EsimateResponse.displayName = 'proto.grpcpb.EsimateResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.EsimateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.EsimateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.EsimateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.EsimateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    invoice: (f = msg.getInvoice()) && prototype_transaction_pb.transaction_receipt_with_info.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.EsimateResponse}
 */
proto.grpcpb.EsimateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.EsimateResponse;
  return proto.grpcpb.EsimateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.EsimateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.EsimateResponse}
 */
proto.grpcpb.EsimateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_transaction_pb.transaction_receipt_with_info;
      reader.readMessage(value,prototype_transaction_pb.transaction_receipt_with_info.deserializeBinaryFromReader);
      msg.setInvoice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.EsimateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.EsimateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.EsimateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.EsimateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvoice();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_transaction_pb.transaction_receipt_with_info.serializeBinaryToWriter
    );
  }
};


/**
 * optional prototype.transaction_receipt_with_info invoice = 1;
 * @return {?proto.prototype.transaction_receipt_with_info}
 */
proto.grpcpb.EsimateResponse.prototype.getInvoice = function() {
  return /** @type{?proto.prototype.transaction_receipt_with_info} */ (
    jspb.Message.getWrapperField(this, prototype_transaction_pb.transaction_receipt_with_info, 1));
};


/** @param {?proto.prototype.transaction_receipt_with_info|undefined} value */
proto.grpcpb.EsimateResponse.prototype.setInvoice = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.EsimateResponse.prototype.clearInvoice = function() {
  this.setInvoice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.EsimateResponse.prototype.hasInvoice = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.StakeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.StakeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.StakeInfo.displayName = 'proto.grpcpb.StakeInfo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.StakeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.StakeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.StakeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.StakeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: (f = msg.getAccount()) && prototype_type_pb.account_name.toObject(includeInstance, f),
    stakeAmount: (f = msg.getStakeAmount()) && prototype_type_pb.vest.toObject(includeInstance, f),
    stakeTime: (f = msg.getStakeTime()) && prototype_type_pb.time_point_sec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.StakeInfo}
 */
proto.grpcpb.StakeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.StakeInfo;
  return proto.grpcpb.StakeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.StakeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.StakeInfo}
 */
proto.grpcpb.StakeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_type_pb.account_name;
      reader.readMessage(value,prototype_type_pb.account_name.deserializeBinaryFromReader);
      msg.setAccount(value);
      break;
    case 2:
      var value = new prototype_type_pb.vest;
      reader.readMessage(value,prototype_type_pb.vest.deserializeBinaryFromReader);
      msg.setStakeAmount(value);
      break;
    case 3:
      var value = new prototype_type_pb.time_point_sec;
      reader.readMessage(value,prototype_type_pb.time_point_sec.deserializeBinaryFromReader);
      msg.setStakeTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.StakeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.StakeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.StakeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.StakeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_type_pb.account_name.serializeBinaryToWriter
    );
  }
  f = message.getStakeAmount();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      prototype_type_pb.vest.serializeBinaryToWriter
    );
  }
  f = message.getStakeTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      prototype_type_pb.time_point_sec.serializeBinaryToWriter
    );
  }
};


/**
 * optional prototype.account_name account = 1;
 * @return {?proto.prototype.account_name}
 */
proto.grpcpb.StakeInfo.prototype.getAccount = function() {
  return /** @type{?proto.prototype.account_name} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.account_name, 1));
};


/** @param {?proto.prototype.account_name|undefined} value */
proto.grpcpb.StakeInfo.prototype.setAccount = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.StakeInfo.prototype.clearAccount = function() {
  this.setAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.StakeInfo.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional prototype.vest stake_amount = 2;
 * @return {?proto.prototype.vest}
 */
proto.grpcpb.StakeInfo.prototype.getStakeAmount = function() {
  return /** @type{?proto.prototype.vest} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.vest, 2));
};


/** @param {?proto.prototype.vest|undefined} value */
proto.grpcpb.StakeInfo.prototype.setStakeAmount = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.grpcpb.StakeInfo.prototype.clearStakeAmount = function() {
  this.setStakeAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.StakeInfo.prototype.hasStakeAmount = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional prototype.time_point_sec stake_time = 3;
 * @return {?proto.prototype.time_point_sec}
 */
proto.grpcpb.StakeInfo.prototype.getStakeTime = function() {
  return /** @type{?proto.prototype.time_point_sec} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.time_point_sec, 3));
};


/** @param {?proto.prototype.time_point_sec|undefined} value */
proto.grpcpb.StakeInfo.prototype.setStakeTime = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.grpcpb.StakeInfo.prototype.clearStakeTime = function() {
  this.setStakeTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.StakeInfo.prototype.hasStakeTime = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetMyStakerListByNameRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetMyStakerListByNameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetMyStakerListByNameRequest.displayName = 'proto.grpcpb.GetMyStakerListByNameRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetMyStakerListByNameRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetMyStakerListByNameRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetMyStakerListByNameRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetMyStakerListByNameRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: (f = msg.getStart()) && prototype_multi_id_pb.stake_record_reverse.toObject(includeInstance, f),
    end: (f = msg.getEnd()) && prototype_multi_id_pb.stake_record_reverse.toObject(includeInstance, f),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetMyStakerListByNameRequest}
 */
proto.grpcpb.GetMyStakerListByNameRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetMyStakerListByNameRequest;
  return proto.grpcpb.GetMyStakerListByNameRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetMyStakerListByNameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetMyStakerListByNameRequest}
 */
proto.grpcpb.GetMyStakerListByNameRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_multi_id_pb.stake_record_reverse;
      reader.readMessage(value,prototype_multi_id_pb.stake_record_reverse.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 2:
      var value = new prototype_multi_id_pb.stake_record_reverse;
      reader.readMessage(value,prototype_multi_id_pb.stake_record_reverse.deserializeBinaryFromReader);
      msg.setEnd(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetMyStakerListByNameRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetMyStakerListByNameRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetMyStakerListByNameRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetMyStakerListByNameRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_multi_id_pb.stake_record_reverse.serializeBinaryToWriter
    );
  }
  f = message.getEnd();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      prototype_multi_id_pb.stake_record_reverse.serializeBinaryToWriter
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional prototype.stake_record_reverse start = 1;
 * @return {?proto.prototype.stake_record_reverse}
 */
proto.grpcpb.GetMyStakerListByNameRequest.prototype.getStart = function() {
  return /** @type{?proto.prototype.stake_record_reverse} */ (
    jspb.Message.getWrapperField(this, prototype_multi_id_pb.stake_record_reverse, 1));
};


/** @param {?proto.prototype.stake_record_reverse|undefined} value */
proto.grpcpb.GetMyStakerListByNameRequest.prototype.setStart = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.GetMyStakerListByNameRequest.prototype.clearStart = function() {
  this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetMyStakerListByNameRequest.prototype.hasStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional prototype.stake_record_reverse end = 2;
 * @return {?proto.prototype.stake_record_reverse}
 */
proto.grpcpb.GetMyStakerListByNameRequest.prototype.getEnd = function() {
  return /** @type{?proto.prototype.stake_record_reverse} */ (
    jspb.Message.getWrapperField(this, prototype_multi_id_pb.stake_record_reverse, 2));
};


/** @param {?proto.prototype.stake_record_reverse|undefined} value */
proto.grpcpb.GetMyStakerListByNameRequest.prototype.setEnd = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.grpcpb.GetMyStakerListByNameRequest.prototype.clearEnd = function() {
  this.setEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetMyStakerListByNameRequest.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 limit = 3;
 * @return {number}
 */
proto.grpcpb.GetMyStakerListByNameRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.grpcpb.GetMyStakerListByNameRequest.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetMyStakerListByNameResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grpcpb.GetMyStakerListByNameResponse.repeatedFields_, null);
};
goog.inherits(proto.grpcpb.GetMyStakerListByNameResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetMyStakerListByNameResponse.displayName = 'proto.grpcpb.GetMyStakerListByNameResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grpcpb.GetMyStakerListByNameResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetMyStakerListByNameResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetMyStakerListByNameResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetMyStakerListByNameResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetMyStakerListByNameResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    myStakerListList: jspb.Message.toObjectList(msg.getMyStakerListList(),
    proto.grpcpb.StakeInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetMyStakerListByNameResponse}
 */
proto.grpcpb.GetMyStakerListByNameResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetMyStakerListByNameResponse;
  return proto.grpcpb.GetMyStakerListByNameResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetMyStakerListByNameResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetMyStakerListByNameResponse}
 */
proto.grpcpb.GetMyStakerListByNameResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grpcpb.StakeInfo;
      reader.readMessage(value,proto.grpcpb.StakeInfo.deserializeBinaryFromReader);
      msg.addMyStakerList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetMyStakerListByNameResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetMyStakerListByNameResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetMyStakerListByNameResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetMyStakerListByNameResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMyStakerListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.grpcpb.StakeInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated StakeInfo my_staker_list = 1;
 * @return {!Array<!proto.grpcpb.StakeInfo>}
 */
proto.grpcpb.GetMyStakerListByNameResponse.prototype.getMyStakerListList = function() {
  return /** @type{!Array<!proto.grpcpb.StakeInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.grpcpb.StakeInfo, 1));
};


/** @param {!Array<!proto.grpcpb.StakeInfo>} value */
proto.grpcpb.GetMyStakerListByNameResponse.prototype.setMyStakerListList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.grpcpb.StakeInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.grpcpb.StakeInfo}
 */
proto.grpcpb.GetMyStakerListByNameResponse.prototype.addMyStakerList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.grpcpb.StakeInfo, opt_index);
};


proto.grpcpb.GetMyStakerListByNameResponse.prototype.clearMyStakerListList = function() {
  this.setMyStakerListList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetMyStakeListByNameRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetMyStakeListByNameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetMyStakeListByNameRequest.displayName = 'proto.grpcpb.GetMyStakeListByNameRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetMyStakeListByNameRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetMyStakeListByNameRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetMyStakeListByNameRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetMyStakeListByNameRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: (f = msg.getStart()) && prototype_multi_id_pb.stake_record.toObject(includeInstance, f),
    end: (f = msg.getEnd()) && prototype_multi_id_pb.stake_record.toObject(includeInstance, f),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetMyStakeListByNameRequest}
 */
proto.grpcpb.GetMyStakeListByNameRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetMyStakeListByNameRequest;
  return proto.grpcpb.GetMyStakeListByNameRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetMyStakeListByNameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetMyStakeListByNameRequest}
 */
proto.grpcpb.GetMyStakeListByNameRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_multi_id_pb.stake_record;
      reader.readMessage(value,prototype_multi_id_pb.stake_record.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 2:
      var value = new prototype_multi_id_pb.stake_record;
      reader.readMessage(value,prototype_multi_id_pb.stake_record.deserializeBinaryFromReader);
      msg.setEnd(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetMyStakeListByNameRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetMyStakeListByNameRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetMyStakeListByNameRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetMyStakeListByNameRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_multi_id_pb.stake_record.serializeBinaryToWriter
    );
  }
  f = message.getEnd();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      prototype_multi_id_pb.stake_record.serializeBinaryToWriter
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional prototype.stake_record start = 1;
 * @return {?proto.prototype.stake_record}
 */
proto.grpcpb.GetMyStakeListByNameRequest.prototype.getStart = function() {
  return /** @type{?proto.prototype.stake_record} */ (
    jspb.Message.getWrapperField(this, prototype_multi_id_pb.stake_record, 1));
};


/** @param {?proto.prototype.stake_record|undefined} value */
proto.grpcpb.GetMyStakeListByNameRequest.prototype.setStart = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.GetMyStakeListByNameRequest.prototype.clearStart = function() {
  this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetMyStakeListByNameRequest.prototype.hasStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional prototype.stake_record end = 2;
 * @return {?proto.prototype.stake_record}
 */
proto.grpcpb.GetMyStakeListByNameRequest.prototype.getEnd = function() {
  return /** @type{?proto.prototype.stake_record} */ (
    jspb.Message.getWrapperField(this, prototype_multi_id_pb.stake_record, 2));
};


/** @param {?proto.prototype.stake_record|undefined} value */
proto.grpcpb.GetMyStakeListByNameRequest.prototype.setEnd = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.grpcpb.GetMyStakeListByNameRequest.prototype.clearEnd = function() {
  this.setEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetMyStakeListByNameRequest.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 limit = 3;
 * @return {number}
 */
proto.grpcpb.GetMyStakeListByNameRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.grpcpb.GetMyStakeListByNameRequest.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetMyStakeListByNameResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grpcpb.GetMyStakeListByNameResponse.repeatedFields_, null);
};
goog.inherits(proto.grpcpb.GetMyStakeListByNameResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetMyStakeListByNameResponse.displayName = 'proto.grpcpb.GetMyStakeListByNameResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grpcpb.GetMyStakeListByNameResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetMyStakeListByNameResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetMyStakeListByNameResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetMyStakeListByNameResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetMyStakeListByNameResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    myStakeListList: jspb.Message.toObjectList(msg.getMyStakeListList(),
    proto.grpcpb.StakeInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetMyStakeListByNameResponse}
 */
proto.grpcpb.GetMyStakeListByNameResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetMyStakeListByNameResponse;
  return proto.grpcpb.GetMyStakeListByNameResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetMyStakeListByNameResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetMyStakeListByNameResponse}
 */
proto.grpcpb.GetMyStakeListByNameResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grpcpb.StakeInfo;
      reader.readMessage(value,proto.grpcpb.StakeInfo.deserializeBinaryFromReader);
      msg.addMyStakeList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetMyStakeListByNameResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetMyStakeListByNameResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetMyStakeListByNameResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetMyStakeListByNameResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMyStakeListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.grpcpb.StakeInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated StakeInfo my_stake_list = 1;
 * @return {!Array<!proto.grpcpb.StakeInfo>}
 */
proto.grpcpb.GetMyStakeListByNameResponse.prototype.getMyStakeListList = function() {
  return /** @type{!Array<!proto.grpcpb.StakeInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.grpcpb.StakeInfo, 1));
};


/** @param {!Array<!proto.grpcpb.StakeInfo>} value */
proto.grpcpb.GetMyStakeListByNameResponse.prototype.setMyStakeListList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.grpcpb.StakeInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.grpcpb.StakeInfo}
 */
proto.grpcpb.GetMyStakeListByNameResponse.prototype.addMyStakeList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.grpcpb.StakeInfo, opt_index);
};


proto.grpcpb.GetMyStakeListByNameResponse.prototype.clearMyStakeListList = function() {
  this.setMyStakeListList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpcpb.GetAccountListByVestRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpcpb.GetAccountListByVestRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpcpb.GetAccountListByVestRequest.displayName = 'proto.grpcpb.GetAccountListByVestRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpcpb.GetAccountListByVestRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpcpb.GetAccountListByVestRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpcpb.GetAccountListByVestRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetAccountListByVestRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: (f = msg.getStart()) && prototype_type_pb.vest.toObject(includeInstance, f),
    end: (f = msg.getEnd()) && prototype_type_pb.vest.toObject(includeInstance, f),
    lastAccount: (f = msg.getLastAccount()) && proto.grpcpb.AccountInfo.toObject(includeInstance, f),
    limit: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpcpb.GetAccountListByVestRequest}
 */
proto.grpcpb.GetAccountListByVestRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpcpb.GetAccountListByVestRequest;
  return proto.grpcpb.GetAccountListByVestRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpcpb.GetAccountListByVestRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpcpb.GetAccountListByVestRequest}
 */
proto.grpcpb.GetAccountListByVestRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new prototype_type_pb.vest;
      reader.readMessage(value,prototype_type_pb.vest.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 2:
      var value = new prototype_type_pb.vest;
      reader.readMessage(value,prototype_type_pb.vest.deserializeBinaryFromReader);
      msg.setEnd(value);
      break;
    case 3:
      var value = new proto.grpcpb.AccountInfo;
      reader.readMessage(value,proto.grpcpb.AccountInfo.deserializeBinaryFromReader);
      msg.setLastAccount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpcpb.GetAccountListByVestRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpcpb.GetAccountListByVestRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpcpb.GetAccountListByVestRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpcpb.GetAccountListByVestRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      prototype_type_pb.vest.serializeBinaryToWriter
    );
  }
  f = message.getEnd();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      prototype_type_pb.vest.serializeBinaryToWriter
    );
  }
  f = message.getLastAccount();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.grpcpb.AccountInfo.serializeBinaryToWriter
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional prototype.vest start = 1;
 * @return {?proto.prototype.vest}
 */
proto.grpcpb.GetAccountListByVestRequest.prototype.getStart = function() {
  return /** @type{?proto.prototype.vest} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.vest, 1));
};


/** @param {?proto.prototype.vest|undefined} value */
proto.grpcpb.GetAccountListByVestRequest.prototype.setStart = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpcpb.GetAccountListByVestRequest.prototype.clearStart = function() {
  this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetAccountListByVestRequest.prototype.hasStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional prototype.vest end = 2;
 * @return {?proto.prototype.vest}
 */
proto.grpcpb.GetAccountListByVestRequest.prototype.getEnd = function() {
  return /** @type{?proto.prototype.vest} */ (
    jspb.Message.getWrapperField(this, prototype_type_pb.vest, 2));
};


/** @param {?proto.prototype.vest|undefined} value */
proto.grpcpb.GetAccountListByVestRequest.prototype.setEnd = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.grpcpb.GetAccountListByVestRequest.prototype.clearEnd = function() {
  this.setEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetAccountListByVestRequest.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AccountInfo last_account = 3;
 * @return {?proto.grpcpb.AccountInfo}
 */
proto.grpcpb.GetAccountListByVestRequest.prototype.getLastAccount = function() {
  return /** @type{?proto.grpcpb.AccountInfo} */ (
    jspb.Message.getWrapperField(this, proto.grpcpb.AccountInfo, 3));
};


/** @param {?proto.grpcpb.AccountInfo|undefined} value */
proto.grpcpb.GetAccountListByVestRequest.prototype.setLastAccount = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.grpcpb.GetAccountListByVestRequest.prototype.clearLastAccount = function() {
  this.setLastAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpcpb.GetAccountListByVestRequest.prototype.hasLastAccount = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 limit = 4;
 * @return {number}
 */
proto.grpcpb.GetAccountListByVestRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.grpcpb.GetAccountListByVestRequest.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


goog.object.extend(exports, proto.grpcpb);
