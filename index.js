const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const covid = require('novelcovid');
const cors = require("cors");


app.use(cors());
app.get('/', function (req, res) {
    let doc = " Dokumentasi Rest API Covid-19 : <br><br>\
                All Country : appku19.herokuapp.com/all<br><br>\
                Country Indonesia : appku19.herokuapp.com/indonesia <br><br>\
                Country Parameter : appku19.herokuapp.com/countries/{country} <br><br>\
                All Cases, Recovered, & Deaths in the world : appku19.herokuapp.com/getAll <br><br>\
                Historical Parameter : appku19.herokuapp.com/getHistorical/{country}' <br><br>\
                Province : appku19.herokuapp.com/getAllProvince/<br><br>\
                Website : https://covid19-info-id.netlify.com/ <br><br>\
                by : Backend(Nikky), Frontend(Verry),   "

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

app.get('/getHistorical/:country', function (req, res) {
    (async () => {
 
        let historical = await covid.getHistorical({country: req.params.country});  
        return res.json(historical)
    })()
})

app.get('/getProvince/:params', function (req, res) {
    (async () => {
 
        let prov = await covid.getProv({country: req.params.params});  
        return res.json(prov)
    })()
})

app.get('/getProvince/', function (req, res) {
   
});

app.get('/getAllProvince/', function (req, res) {
    (async () => {
 
        let AllProv = await covid.getProv();  
        return res.json(AllProv)
    })()
})

app.listen(PORT, () => console.log(`app listening on port ${PORT}`))