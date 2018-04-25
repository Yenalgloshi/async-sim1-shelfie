const express = require('express');
const bodyParser = require('body-parser');

const ctrl = require('./controller');
const app = express();

app.use(bodyParser.json());


app.get('/api/shelf/:id', ctrl.getAll)
app.post('/api/bin/:id', ctrl.createBin)
app.put('/api/bin/:id', ctrl.updateBin)
app.delete('/api/bin/:id', ctrl.deleteBin)

const port = 3210;
app.listen(port, () => console.log(`The NSA is listening on port ${port}`));