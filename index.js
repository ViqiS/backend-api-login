const express = require('express');
const routerApi = require('./routes')

const app = express();
const port = 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hola');
})

app.listen(port, () => {
  console.log('Mi puerto ' + port );
});

routerApi(app);
