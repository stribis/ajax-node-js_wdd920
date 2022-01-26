const express = require('express')
const app = express()


app.set('view engine', 'ejs')


app.get('/', (req, res) => {

  let students = [
    {name: 'Sven', note: '16'},
    {name: 'Nicole', note: '14'},
    {name: 'Carlo', note: '1'}
  ]

  let message = 'Express is very simple and many uses :D'

  res.render('index.ejs', {
    students: students,
    message: message
  })
})

// About route
app.get('/about', (req, res) => {
  res.render('about.ejs')
})

// Listen for requests
app.listen( 3000, ()=> {
  console.log(`app is listening on http://127.0.0.1:3000`)
})