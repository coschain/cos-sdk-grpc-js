import multi_id = require('./prototype/multi_id_pb');
import operation = require('./prototype/operation_pb');
import transaction = require("./lib/transaction");
import raw_type = require('./lib/type');
export let type = {multi_id, operation, transaction, raw_type};

import grpc_type = require('./rpc/pb/grpc_pb');
import grpc_service = require('./rpc/pb/grpc_pb_service');

export let grpc = {grpc_service, grpc_type};

import c = require('./lib/crypto/crypto');

export let crypto = c;

