
const sdk = require('./dist/sdk');

sdk.getAccountByName('kochiye').then(
    value => console.log(value)
);
