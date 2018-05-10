const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config()

const ctrl = require('./controller');
const app = express();
massive(process.env.CONNECTION_STRING).then(dbInstance =>{
    dbInstance.seedFile()
    .then(res => console.log('Cool... seed successful'))
    .catch(err => console.log('Sorry... not successful', err))

    app.set('db', dbInstance);

}).catch(err => console.log(err))

app.use(bodyParser.json());

app.get('/api/bins/:shelf', ctrl.getBins)
app.get('/api/product/:shelf/:bin', ctrl.readBin)
app.post('/api/product/:shelf/:bin', ctrl.createBin)
app.put('/api/product/:shelf/:bin', ctrl.updateBin)
app.delete('/api/product/:shelf/:bin', ctrl.deleteBin)

const port = 3210;
app.listen(port, () => {console.log(`The NSA is listening on port ${port}`)});