const dataLib = require("../lib/data.lib");

const greetUserInNative = async (req, res) => {
    let ipAddress =
        req.headers["x-forwarded-for"] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
    console.log(ipAddress, "geref");
    let country = await dataLib.getCountryName(ipAddress);
    console.log(country);
    let language = await dataLib.getLanguage(country);
    console.log(language);
    let translatedText = await dataLib.translateText(language);
    if (translatedText) {
        res.send(translatedText);
    } else {
        res.send("No Translation Found!!");
    }
};

module.exports = greetUserInNative;
