import {vest}  from "../../prototype/type_pb"

// @ts-ignore
vest.prototype.toString = function (){
    const precision = BigInt(1000000)
    let value = BigInt(this.getValue());
    const integer = value / precision
    const decimal = value - precision * integer
    const decimal_str = '0'.repeat(precision.toString().length - decimal.toString().length - 1) + decimal.toString()
    return integer.toString() + '.' + decimal_str + ' VEST'
};

export {vest};