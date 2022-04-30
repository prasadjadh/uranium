const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://prasad1137:5IQmYIBLEHIAI7xz@cluster0.jra3o.mongodb.net/prasad07?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

let globalMiddleware = function(req, res, next){
    let currentDate = new Date()
    console.log('Before adding custom header '+JSON.stringify(req.headers))
    let contentTypeHeader = req.headers["content-type"]
    let name = "functionup"
    req.headers.organisation = name

    let freeApp = "true"
    req.headers.isFreeAppUser = freeApp
    res.setHeader('isFreeAppUser', 'true')

    //console.log('content-type header is '+contentTypeHeader)
    console.log('After adding custom header '+JSON.stringify(req.headers))
    // console.log('Before adding custom response header '+JSON.stringify(res.getHeaders()))
    // res.setHeader('isFreeAppUser','True')

    // res.setHeader('batch','uranium')
    // console.log('After adding custom response header '+JSON.stringify(res.getHeaders()))
    // req.newAtribute = 'India'

    
    let date = currentDate.getDate()
    let month = currentDate.getMonth() + 1
    let year = currentDate.getFullYear()
    let hour = currentDate.getHours()
    let minutes = currentDate.getMinutes()
    let seconds = currentDate.getSeconds()

    let formattedDate = year + "-" + month + "-" + date + " " + hour + ":" + minutes + ":" + seconds
    let url = req.originalUrl
    let ip = req.ip
    let result = formattedDate + ", " + ip + ", " + url
    
    console.log(result)
    next()
}

app.use(globalMiddleware)
app.use('/', route)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});