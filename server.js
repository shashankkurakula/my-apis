const express = require('express');
const connectDB = require('./config/db')
const path = require('path');

const gameOfThronesRouter = require('./routes/game-of-thrones');
const breakingBad = require('./routes/breaking-bad');
const drugsInfo = require('./routes/drugs')

const app = express();

app.use(express.json({ extended: false }));

//enable CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

connectDB()

const PORT = process.env.PORT || 5000;

// static folder
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send({
    'game of thrones': [
      {
        characters:
          'https://serene-inlet-05924.herokuapp.com/game-of-thrones/characters',
        quotes:
          'https://serene-inlet-05924.herokuapp.com/game-of-thrones/quotes',
      },
    ],
    'Breaking Bad': [
      {
        characters:
          'https://serene-inlet-05924.herokuapp.com/breaking-bad/characters',
        quotes: 'https://serene-inlet-05924.herokuapp.com/breaking-bad/quotes',
      },
    ],
  });
});

app.use('/game-of-thrones', gameOfThronesRouter);

app.use('/breaking-bad', breakingBad);

app.use('/drugs', drugsInfo)

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
