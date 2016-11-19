'use strict'
const moment = require('moment')
moment().format()
const express = require('express')
const app = express()

app.get('*', (req, res) => {
  let time = moment(decodeURIComponent(req.url.slice(1)), ['X', 'MMMM D, YYYY'], 'en', true)
  let unix = null;
  let natural = null;
  if (time.isValid()) {
    unix = time.unix()
    natural = time.format('MMMM D, YYYY')
  }

  res.writeHead(200, {
    'Content-Type': 'application/json'
  })
  res.end(JSON.stringify({
    unix,
    natural
  }))
})

app.listen(8080)
