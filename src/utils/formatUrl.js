const hprose = require("hprose");
const client = hprose.Client.create("https://a.meidebi.com/Rpc-Pysharecommon");
const proxy = client.useService();


module.exports.formatUrl = (url) => {
    return new Promise((resolve, reject) => {
        proxy.getrealurl(url, function(result) {
            resolve(result);
        });
    });
}

