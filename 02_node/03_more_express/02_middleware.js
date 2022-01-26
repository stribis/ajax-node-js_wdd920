const express = require('express')
const app = express()

let requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(requestTime)

app.get('/', (req, res) => {
  let responseText = `<h1>Hello user</h1><br><small>You logged in at: ${req.requestTime}</small>`
  res.send(responseText)
})

app.listen( 3000, ()=> {
  console.log(`app is listening on http://127.0.0.1:3000`)
})