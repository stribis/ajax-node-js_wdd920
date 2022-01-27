const request = require('request')
const express = require('express')
const bodyParser = require('body-parser')


const app = express()
const apiKey = '108c1179d5f49e7ba876cdd2b2e7f156'

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
  res.render('index.ejs', {
    data: null,
    error: null
  })
})

app.post('/', (req, res) => {
  const city = req.body.city
  // Test out the request
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`
  request(url, (err, response, body) => {
    if ( err ){
      console.log(err)
      res.render('index.ejs', {
        data: null,
        error: 'Could not connect to the weather API!'
      })
    } else {
      const weatherData = JSON.parse(body)
      if ( weatherData.cod == 404) {
        res.render('index.ejs', {
          data: null,
          error: 'Your city does not exist!'
        })  
      } else {
        const data = {
          temp: weatherData.main.temp,
          city: city,
          description: weatherData.weather[0].description,
          icon: weatherData.weather[0].icon
        }
        res.render('index.ejs', {
          data: data,
          error: null
        })
      }
    }
  })
})
//

app.listen(3000, ()=> {
  console.log('Server is running at http://127.0.0.1:3000')
})




