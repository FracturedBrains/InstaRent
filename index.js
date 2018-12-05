const express = require("express")
const app = express()
const ejs = require("ejs");

app.set('view engine', 'ejs');
app.get('/', (req,res) => {
  res.render('home')
})
// app.post('/login', (req,res) => {
// })
app.listen(3000, () => console.log('LIVE ON 3000'));
