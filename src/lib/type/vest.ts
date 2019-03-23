import {vest}  from "../../prototype/type_pb"
import * as bigInt  from 'big-integer'

// @ts-ignore
vest.prototype.toString = function (){
    const precision = bigInt(1000000);
    let value = bigInt(this.getValue());
    const integer = value.divide(precision);
    const decimal = value.subtract(precision.multiply(integer))
    const decimal_str = '0'.repeat(precision.toString().length - decimal.toString().length - 1) + decimal.toString()
    return integer.toString() + '.' + decimal_str + ' VEST'
};

export {vest};
