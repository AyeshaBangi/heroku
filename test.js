const getIPRangePacakge = require("get-ip-range");
const netAddressPackage = require("netaddr");

let ipAddresses = getIPRangePacakge.getIPRange("1.0.1.0-1.0.3.255");
console.log(ipAddresses.length);

let ipAddressesV6 = getIPRangePacakge.getIPRange(
    "::ffff:5af:3000-::ffff:5af:37ff"
);
console.log(ipAddressesV6.length);
