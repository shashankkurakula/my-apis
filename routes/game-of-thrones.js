const express = require('express');
const router = express.Router();

const {
  characters,
  quotes,
} = require('../data/api/game-of-thrones/game-of-thrones');

router.get('/', (req, res) => {
  res.send({
    characters:
      'https://serene-inlet-05924.herokuapp.com/game-of-thrones/characters',
    quotes: 'https://serene-inlet-05924.herokuapp.com/game-of-thrones/quotes',
  });
});

router.get('/characters', async (req, res) => {
  try {
    res.json(characters);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.get('/characters/:charName', async (req, res) => {
  try {
    var Characters = characters.filter(
      (character) =>
        character.characterName
          .toLowerCase()
          .includes(req.params.charName.toLowerCase())
      // character.characterName.toLowerCase() ===
      // req.params.charName.toLowerCase()
    );
    res.send(Characters);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.get('/quotes', async (req, res) => {
  try {
    res.json(quotes);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

module.exports = router;
