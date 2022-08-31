const axios = require("axios");
const {
    countryDetails,
    ipToCountryMapv4,
    ipToCountryMapv6,
} = require("../csv.reader");

const getCountryName = async (ipAddress) => {
    // // ipAddress = "5.44.37.25"; //Azerbaijan
    // ipAddress = "130.41.72.255"; //Kuwait
    // ipAddress = "18.61.0.0";
    // // ipAddress = "::ffff:5af:3000";

    let checkIP = ipAddress.split(".");
    console.log(checkIP.length);
    if (checkIP.length == 4) {
        return new Promise((resolve, reject) => {
            let country;
            const result = ipAddress
                ?.split(".")
                .map((d) => ("000" + d).substr(-3))
                .join("");
            ipToCountryMapv4?.data?.map((data) => {
                let ip1 = data?.startIP
                    ?.split(".")
                    .map((d) => ("000" + d).substr(-3))
                    .join("");

                let ip2 = data?.endIP
                    ?.split(".")
                    .map((d) => ("000" + d).substr(-3))
                    .join("");

                if (result) {
                    if (result >= ip1 && result <= ip2) {
                        country = data.country;
                    }
                }
                // let check = getIPRangePacakge.getIPRange(
                //     `${data.startIP}-${data.endIP}`
                // );
                // if (check.includes(ipAddress)) {
                //     country = data.country;
                //     console.log(country);
                // }
            });
            resolve(country);
        });
    } else {
    }
};

const getLanguage = async (countryName) => {
    let language;
    if (countryDetails && countryDetails.data) {
        countryDetails.data.map((countries) => {
            if (countryName == countries.name) {
                language = countries.languages[0].iso639_1;
            }
        });
    }
    return language;
};

const translateText = async (lang) => {
    let translatedText;
    let data = {
        q: "Welcome",
        source: "en",
        target: lang,
    };
    await axios
        .post(`https://libretranslate.de/translate`, data)
        .then((response) => {
            translatedText = response.data.translatedText;
        })
        .catch((error) => {
            console.log(error.message);
        });
    return translatedText;
};

module.exports = {
    translateText,
    getLanguage,
    getCountryName,
};
