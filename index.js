const express = require('express')
const app = express()
const PORT = process.env.PORT || 2000
const covid = require('novelcovid');


 
app.get('/', function (req, res) {
    let doc = " Dokumentasi Resy API : <br><br>\
                All Country : appku19.herokuapp.com/all <br><br>\
                Country Indonesia : appku19.herokuapp.com/indonesia <br><br>\
                Website : on progress<br><br>\
                by : Backend(Nikky), Frontend(Verry)"
    return res.send(doc);
})

app.get('/indonesia', function (req, res) {
    (async () => {
 
        let specificCountry = await covid.getCountry({country: 'Indonesia'});
       
        return res.json(specificCountry)
    })()
})

app.get('/all', function (req, res) {
    (async () => {
        let sortedCountries = await covid.getCountry({sort: 'recovered'});
            return res.json(sortedCountries);
    })()
})



app.listen(PORT, () => console.log(`app listening on port ${PORT}`))