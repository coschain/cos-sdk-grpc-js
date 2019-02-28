import {account_name}  from "../../prototype/type_pb"

// @ts-ignore
account_name.prototype.validate = function (){
    let name = this.getValue();
    if(name.length < 6 || name.length > 16) {
        return false
    }
    return name.match(/^[A-Za-z0-9]+$/i) !== null;
};

export {account_name};
