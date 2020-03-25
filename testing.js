const covid = require('novelcovid');

(async () => {
    // let sortedCountries = await covid.getCountry({sort: 'recovered'});
    // return console.log(sortedCountries);

    let sortedStates = await covid.getState({sort: 'deaths'});
    return console.log(sortedStates);
})();