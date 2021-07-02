const { response } = require('express');
const express = require('express');
const request = require('request');
const app = express();
const port = 5000;
const fetch = require("node-fetch");
const bodyParser = require('body-parser');

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/quote', (req, res) => {
  request(
    'https://animechan.vercel.app/api/random',
    function (error, response, body) {
      if (!error && response.statusCode ===200) {
        var parsedBody = JSON.parse(body);
        var anime = parsedBody['anime'];
        var character = parsedBody['character'];
        var quote = parsedBody['quote'];
        res.send({
          anime,
          character,
          quote
        });
      }
  })
})

app.get('/quotes/', (req, res) => {
  const queryTitle = req.query.search;
  request(
    `https://animechan.vercel.app/api/quotes/anime?title=${queryTitle}`,
    function (error, response, body) {
      var parsedBody = JSON.parse(body);
      res.send(parsedBody);
    }
  )
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
