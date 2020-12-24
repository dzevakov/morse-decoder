const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  var simbolAmount = expr.length / 10;
  var simbolArray = [];
  var charWord = 0;
  var wordArray = [];

  for(var i = 0; i < simbolAmount; i += 1) {
    simbolArray.push(expr.slice(charWord, charWord + 10));

    if(simbolArray[i].length < 10) {
      simbolArray[i] = "0" + simbolArray[i];
    }

    charWord += 10;

    var simbol = "";
    var charSimbol = 0;

    for(var j = 0; j < 5; j += 1) {
      if(simbolArray[i].slice(charSimbol, charSimbol + 2) === "10") {
        simbol += ".";
      } else if (simbolArray[i].slice(charSimbol, charSimbol + 2) === "11") {
        simbol += "-";
      } else if (simbolArray[i].slice(charSimbol, charSimbol + 2) === "**") {
        simbol = " ";
        break;
      }
      charSimbol += 2;
    }
    if(simbol === " ") { 
      wordArray.push(" ");
    }
    wordArray.push(MORSE_TABLE[simbol]);
    
  }
  return wordArray.join('');
}

module.exports = {
    decode
}
