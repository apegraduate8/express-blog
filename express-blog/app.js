const express = require("express");
const mustache = require('mustache-express');
const packageData = require('./data')
const app = express();

const port = process.env.PORT || 8080;

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log("its on")
})

///////////////////

// app.get('/', (req, res) => {
// // res.sendFile(__dirname + '/views/index.html')
// res.render('index');
// })

app.get('/', (req, res) => {
  console.log("index");
  console.log(packageData);
  // res.send(packageData)

  const title = packageData.title;
  const text = packageData.text;


  res.render('index', packageData);


});


