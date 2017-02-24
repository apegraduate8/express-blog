const express = require('express');
const app     = express();
const path = require('path');
const mustacheExpress = require('mustache-express');
const packageData = require('./data.js')
const port    = process.env.PORT || 3000;

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/packages/:id', (req, res) => {
  res.json(packageData.packages[req.params.id])
})

app.get('/api/packages', (req, res) => {
  res.json(packageData)
})

app.get('/', function(req, res) {
  res.render('index', packageData);
});

app.listen(port, () =>{
  console.log(`Server started on ${port}`)
});


