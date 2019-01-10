const express = require("express")
const app = express()
const ejs = require("ejs")

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.get('/', (req,res) => {
  res.render('home')
});
app.get('/login', (req,res) => {
  res.render('login')
});
app.get('/direct_messages', (req,res) => {
  res.render('direct_messages')
});
app.get('/alerts', (req,res) => {
  res.render('alerts')
});
app.get('/rent', (req,res) => {
  res.render('rent')
});

// app.post('/login', (req,res) => {
// })
app.listen(3000, () => console.log('LIVE ON 3000'));
