const express = require('express');
const app = express();
const PORT = 3001;
const HOST = '0.0.0.0';

app.get('/', (req,res) => res.send('Hello Azure DevOps, I am nodejs-express javascript minimal app.'));

var port = process.env.PORT||PORT;
app.listen(port, () => console.log(`Running on http://${HOST}:${port}`));
