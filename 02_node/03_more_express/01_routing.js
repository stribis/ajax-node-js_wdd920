const express = require('express')
const app = express()


// Main page route
app.get('/', (req, res) => {
  res.send('Accessed the main page')
})


// About route
app.get('/about', (req, res) => {
  res.send('The about page has been accessed')
})

// About route
app.get('/about/me', (req, res) => {
  res.send('Martin')
})

// POST /about
app.post('/about', (req, res)=> {
  res.send('This is not going to appear')
})




app.listen( 3000, ()=> {
  console.log(`app is listening on http://127.0.0.1:3000`)
})