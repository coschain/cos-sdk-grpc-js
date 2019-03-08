import {time_point_sec}  from "../../prototype/type_pb"

const addzero = function (e:number | string) {
    e = '' + e;
    if (e.length < 2) {
        return '0'+e;
    }
    else {
        return e;
    }
};

const formatDate = function(unixtimestamp:number) {
    const d = new Date(unixtimestamp * 1000);
    let month = d.getMonth() + 1;
    let day = d.getDay();
    const year = d.getFullYear();
    const hour = d.getHours();
    const minute = d.getMinutes();
    const second = d.getSeconds();
    return [year, addzero(month), addzero(day)].join('-') + ' ' + [addzero(hour), addzero(minute), addzero(second)].join(':')
}

// @ts-ignore
// timestamp should be second
time_point_sec.prototype.toString = function (){
    const timestamp = this.getUtcSeconds();
    return formatDate(timestamp)
};

export {time_point_sec};