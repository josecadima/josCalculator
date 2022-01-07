const express = require('express');
const basicApi = require('./api/basic-operations-api');

let app = express();

app.use('/basic', basicApi);

app.listen(3000);