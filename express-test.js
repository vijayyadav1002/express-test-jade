const express = require('express')
const app = express()
const port = 9000

app.get('/get', (req, res) => {
  // res.writeHead(200, {'Content-Type': 'application/json'});
  res.send({hello: 'world'});
});
app.get('/bbye', (req, res) => res.send('bbye!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))