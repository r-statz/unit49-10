const express = require("express")
const port = process.env.PORT || 3000
const app = express()
const morgan = morgan('dev')
const bodyParser = require("body-parser")


app.use(express.static("public"))
app.use(bodyParser.json())

app.get("/ping" , function(req, res, next){
  res.json({message: 'Pong!!!'})
})

app.use(function(req, res, next) {
  res.status(404).json{error: {message: "404 Not Found"}}
})

app.listen(port, function(req, res, next) {
  console.log("listening in on port ${port}")
})
