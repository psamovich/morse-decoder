const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '': ' ',
};

const NUMBERS_TO_DOTS_DASHES = {
    '10': '.',
    '11': '-',
}

function decode(expr) {
    let result = '';
    let letter = '';
    for (let i = 0; i < expr.length;) {
        let code = expr.slice(i, i + 2);
        const dotOrDashOrSpace = NUMBERS_TO_DOTS_DASHES[code];
        if (dotOrDashOrSpace) {
            letter += dotOrDashOrSpace;
        }
        if (code === '**') {
            i += 10;
        } else {
            i += 2;
        }
        if (i > 0 && i % 10 === 0) {
            result += MORSE_TABLE[letter];
            letter = '';
        }
    }
    return result;
}

module.exports = {
    decode
}