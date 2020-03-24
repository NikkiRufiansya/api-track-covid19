const express = require('express')
const app = express()
const port = 8000
const covid = require('novelcovid');

 
// Now we create a async/await
(async () => {
 
    let specificCountry = await covid.getCountry({country: 'Indonesia'});
   
    return app.get('/', (req, res) => res.json(specificCountry))
})()


app.listen(port, () => console.log(`Example app listening on port ${port}!`))