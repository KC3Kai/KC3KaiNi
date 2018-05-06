const path = require('path')
const express = require('express')
const http = express()
const { app } = require('electron')

http.set('views', path.resolve(__dirname))
http.set('view engine', 'ejs')

http.get('/widget/:module', (req, res) => {
  res.render('widget-html', {
    module: req.params.module,
    scriptUrl: 'http://localhost:3000/script/' + req.params.module
  })
})

http.get('/script/:module', (req, res) => {
  res.sendFile(path.resolve(app.getPath(userData), './widget.js'))
})

http.listen(3000)
