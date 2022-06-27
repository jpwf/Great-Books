const express = require("express")
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({
  extended: true
}))

const template = require("nunjucks")
template.configure("src/pages", {
  express: app,
  watch: true,
  noCache: true
})

app.get('/', (req, res) => {
  return res.render("index.html")
})
app.get('/tech', (req, res) => {
  return res.render("tech.html")
})
app.get('/finance', (req, res) => {
  return res.render("finance.html")
})
app.get('L-brasi', (req, res) => {
  return res.render("L-brasi.html")
})
app.get('/romance', (req, res) => {
  return res.render("romance.html")
})

const port = 2700
app.listen(port, () =>{
  console.log(`Server running on port: ${port}`);
})