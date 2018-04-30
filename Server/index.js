const express = require('express');
const bodyParser = require('body-parser');

const ctrl = require('./controller');
const app = express();

app.use(bodyParser.json());


app.get('/api/binList/:id', ctrl.readBin)
app.post('/api/binList/:id', ctrl.createBin)
app.put('/api/binList/:id', ctrl.updateBin)
app.delete('/api/binList/:id', ctrl.deleteBin)

const port = 3210;
app.listen(port, () => {console.log(`The NSA is listening on port ${port}`)});