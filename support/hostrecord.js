"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function transform(i, data, record) {
    if (data instanceof Array) {
        if (data[0] === 'MX') {
            record[`HostName${i}`] = data[1];
            record[`RecordType${i}`] = data[0];
            record[`Address${i}`] = data[3];
            record.EmailType = data[0];
            record[`MXPref${i}`] = data[2];
            // [`TTL${i}`] = d[0]
        }
        else {
            record[`HostName${i}`] = data[1];
            record[`RecordType${i}`] = data[0];
            record[`Address${i}`] = data[2];
            // [`MXPref${i}`] = d[0],
            // [`EmailType${i}`] = d[0],
            // [`TTL${i}`] = d[0]
        }
    }
    else {
        if (data.type === 'MX') {
            record[`HostName${i}`] = data.name;
            record[`RecordType${i}`] = data.type;
            record[`Address${i}`] = data.address;
            record.EmailType = data.type;
            record[`MXPref${i}`] = data[2];
        }
        else {
            record[`HostName${i}`] = data.name;
            record[`RecordType${i}`] = data.type;
            record[`Address${i}`] = data.address;
        }
    }
}
function HostRecord(data) {
    let record = {};
    let i = 0;
    data.map(d => {
        i++;
        transform(i, d, record);
    });
    return record;
}
exports.default = HostRecord;
