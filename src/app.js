const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = 8000; 

const static_path = path.join(__dirname, "../public")

app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'views')) 
app.use(express.static(static_path));
app.set('views',path.join(__dirname,"../template/views"))
hbs.registerPartials(path.join(__dirname,"../template/partials"))

app.get("", (req, res) => {
    res.render('index');
})

app.get("/about", (req, res) => {
    res.render('about')
})

app.get("/weather", (req, res) => {
    res.render('weather')
})

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})