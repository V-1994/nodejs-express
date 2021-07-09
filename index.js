// create new express instance
const express = require('express')

// create a new app instance & port to listen
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('Home')
})

app.get('/about', (req, res) => {
    res.render('About')
})

app.get('/services', (req, res) => {
    res.render('Services')
})

app.listen(port, ()=>{
console.log('app listening at port' + port)
})