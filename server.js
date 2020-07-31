if(process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
console.log(stripeSecretKey)

const express = require("express")
const app = express()
const fs = require('fs')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/about', function(req,res){
    fs.readFile('data.json', function(error, data){
        if(error)
        {
            res.status(500).end()
        } else {
            res.render('about.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

app.listen(3000)