const express = require('express');
const path = require('path');
const route = require('./routes.js');

const app = express();

const port = process.env.PORT || 3005;

app.use('/item', route)

app.use(express.static(path.join(__dirname, '../client')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
});