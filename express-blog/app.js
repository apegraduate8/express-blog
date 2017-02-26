const express = require("express");
const mustache = require('mustache-express');
const packageData = require('./data')
const app = express();
const port = process.env.PORT || 8080;
// let a;

app.engine('html', mustache());
app.set('view engine', 'html');
// app.set('view engine', 'pug');  ///// http://expressjs.com/en/guide/using-template-engines.html
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log("its on")
})

///////////////////---------- setup finish

app.get('/', (req, res) => {
    console.log("index");
    console.log(packageData);
    res.render('completion');
});


///// rendering the index html with data then storing it in variable a
// app.render("index", packageData, (err, html) => {
//    a = html;
//    console.log(html);
//   })
///////////////// trying some stuff!! (above)


app.get('/api/packages/', (req, res) => {
    const title = packageData.title;
    const text = packageData.text;
    res.render('index', packageData);
});


app.get('/api/packages/:id', (req, res) => {
    let id = req.params.id;
    const title = packageData.title;
    const text = packageData.text;
    let thePackageData = packageData.packages;

    if (id === "Express") {
        return res.render('index_show', { package: thePackageData[0], title: title, text: text }) }
    if (id === "Gulp") {
        return res.render('index_show', { package: thePackageData[1], title: title, text: text }) }
    if (id === "Mocha") {
        return res.render('index_show', { package: thePackageData[2], title: title, text: text }) }
    if (id === "React") {
        return res.render('index_show', { package: thePackageData[3], title: title, text: text }) }
    if (id === "Passport") {
        return res.render('index_show', { package: thePackageData[4], title: title, text: text }) }
    if (id === "PG Promise") {
        return res.render('index_show', { package: thePackageData[5], title: title, text: text }) }

});


//////////// reference------

//// https://stackoverflow.com/questions/15403791/whats-the-difference-between-app-render-and-res-render-in-express-js
//// http://expressjs.com/en/4x/api.html#res
