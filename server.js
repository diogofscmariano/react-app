const express = require('express');
const path = require('path');
const cors = require('cors');
const logfmt = require('logfmt');
const app = express();

app.use(cors());
app.use(logfmt.requestLogger());
app.use('/', express.static(path.resolve(__dirname + '/dist')));

app.listen(Number(process.env.PORT || 5000));
