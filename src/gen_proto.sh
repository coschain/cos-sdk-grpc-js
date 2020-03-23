protoc --plugin=protoc-gen-ts=/usr/local/lib/node_modules/ts-protoc-gen/bin/protoc-gen-ts --js_out=import_style=commonjs,binary:./ --ts_out=./ -I=. prototype/*.proto
protoc --plugin=protoc-gen-ts=/usr/local/lib/node_modules/ts-protoc-gen/bin/protoc-gen-ts --js_out=import_style=commonjs,binary:./ --ts_out=service=grpc-web:./ -I=. rpc/pb/grpc.proto

