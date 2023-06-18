const express = require('express');
const router = express.Router();

const {
  characters,
  quotes,
} = require('../data/api/breaking-bad/breaking-bad.js');

router.get('/', (req, res) => {
  res.send({
    characters:
      'https://serene-inlet-05924.herokuapp.com/breaking-bad/characters',
    quotes: 'https://serene-inlet-05924.herokuapp.com/breaking-bad/quotes',
  });
});

router.get('/characters', (req, res) => {
  res.send(characters);
});
router.get('/quotes', (req, res) => {
  res.send(quotes);
});

module.exports = router;
