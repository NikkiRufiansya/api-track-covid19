const express = require('express')
const app = express()
const PORT = process.env.PORT || 2000
const covid = require('novelcovid');
 
app.get('/', function (req, res) {
    let doc = " Dokumentasi Rest API : <br><br>\
                All Country : appku19.herokuapp.com/all <br><br>\
                Country Indonesia : appku19.herokuapp.com/indonesia <br><br>\
                Country Parameter : appku19.herokuapp.com/countries/pilih_negara_terserah_lu <br><br>\
                All Cases, Recovered, & Deaths in the world : appku19.herokuapp.com/getAll <br><br>\
                Website : on progress<br><br>\
                by : Backend(Nikky), Frontend(Verry)"
    return res.send(doc);
})

app.get('/indonesia', function (req, res) {
    (async () => {
 
        let specificCountry = await covid.getCountry({country: 'Indonesia'});
       
        return res.json({result:[specificCountry]})
    })()
})

app.get('/all', function (req, res) {
    (async () => {
        let sortedCountries = await covid.getCountry({sort: 'recovered'});
            return res.json(sortedCountries);
    })()
})

app.get('/countries/:country', function (req, res) {
    (async () => {
 
        let specificCountry = await covid.getCountry({country: req.params.country});
       
        return res.json(specificCountry)
    })()
})

app.get('/getAll', function (req, res) {
    (async () => {
 
        let all = await covid.getAll();
       
        return res.json(all)
    })()
})


app.listen(PORT, () => console.log(`app listening on port ${PORT}`))