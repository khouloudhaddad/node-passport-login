const express = require('express')
const path = require("path");

const app = express()

app.use(express.static('public'));


app.set('view-engine', 'ejs')


app.get("/", (req, res)=>{
    res.render('index.ejs', {name: 'Joe'})
})

app.get("/login", (req, res)=>{
    res.render('login.ejs')
})

app.get("/register", (req, res)=>{
    res.render('register.ejs')
})

app.post("/register", (req, res)=>{
    //res.render('register.ejs')
})


app.listen(3000)