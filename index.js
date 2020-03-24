const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const covid = require('novelcovid');

 
// Now we create a async/await
(async () => {
 
    let specificCountry = await covid.getCountry({country: 'Indonesia'});
   
    return app.get('/', (req, res) => res.json(specificCountry))
})()


app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// app.get('/', (req, res) => res.send('<h2> Hello World! </h2>'));
// app.listen(PORT, () => console.log(`app listening on port ${PORT}`))