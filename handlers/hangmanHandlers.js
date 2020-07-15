const { words } = require('../data/words');

// write your handlers here...

const hangmanTester = (req, res) => {
    console.log('hangmanTester')
    res.status(200).send("This is a hangman test... No actual men were hung in the making of this game")
}

const hangmanId = (id) => {
    return words.find((word) => word.id === id)
};

const hangmanTest = (req, res) => {
    const id = req.params.id
    res.status(200).json({status: '200', data: hangmanId(id)})
}

const hangRandomWord = (req, res) => {
    const randomWord = () => {
        return words[Math.floor(Math.random() * words.length)]
    }
    const data = () => {
        const word = randomWord()
        return { id: word.id, letterCount: word.letterCount}
    }
    res.status(200).json({status: '200', data: data()})
}

const hangGuessLetter = (req, res) => {
    const id = req.params.id;
    const letter = req.params.letter.toLowerCase();
    const word = hangmanId(id);
  
    const wordIncludes = (word, letter) => {
      return word.word.includes(letter);
    };
  
    if (!!wordIncludes(word, letter) === true) {
      res.status(200).json({
        status: "200",
        message: `This word includes ${letter.toUpperCase()}`,
      });
    } else {
      res.status(404).json({
        status: "404",
        message: `Letter ${letter.toUpperCase()} not found`,
      });
    }
  };
  
  const handleGuessLetter2 = (req, res) => {
    const id = req.params.id;
    const letter = req.params.letter.toLowerCase();
    const word = hangmanId(id);
  
    const wordIncludes2 = (word, letter) => {
      const wordText = word.word;
      return [...wordText].map((character) => character === letter);
    };
  
    res.status(200).json({ status: "200", data: wordIncludes2(word, letter) });
  };
  

module.exports = { hangmanTester, hangmanTest, hangRandomWord, hangGuessLetter, handleGuessLetter2 };