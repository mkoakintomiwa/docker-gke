'use strict';
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
  res.send(`Alhamdulillahi robil alameen, Ar-Rahman Ar-Roheem. Maliki yamwi deen. ${process.env.PORTAL_URL}`);
});

app.get('/devops', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
