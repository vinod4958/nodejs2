const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req,res) => res.send('Hello Azure DevOps, I am nodejs-express javascript minimal app.'));

app.listen(port, () => console.log(`Sample app listening on port ${port}.`));
