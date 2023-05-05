const express = require('express')
const path = require("path");
const bcrypt = require('bcrypt')

const app = express()

const users = []

app.use(express.static('public'));

app.use(express.urlencoded({extended:false}))


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

app.post("/register", async (req, res)=>{
   try{

    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    users.push({
        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });


    res.redirect("/login")

   }catch{
    res.redirect("/register")
   }

   console.log(users)
})


app.listen(3000)