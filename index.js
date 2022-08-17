const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs')


//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) => {
  var title = "Our Home Page"
  var heading = "Michael's Favorite Things"
  res.render('pages/index',{
    'title':title,
    'heading':heading
  })
})

app.get('/animal', (req, res) => {
  var title = "I love them because they are loving, compassionate and a friend to all people"
  var heading = 'My Website'
  res.render('pages/animal',{
    'title':title,
    'heading':heading
  })
})

app.get('/music', (req, res) => {
  var title = "Music can raise my mood, get me excited and relaxed!"
  var heading = 'My Website'
  res.render('pages/music',{
    'title':title,
    'heading':heading
  })
})

app.get('/sport', (req, res) => {
  var title = "My Favorite Sport: Soccer"
  var heading = 'My Website'
  res.render('pages/sport',{
    'title':title,
    'heading':heading
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})