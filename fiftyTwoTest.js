// generate 52 cards that are *shuffled, have a :suit and :face
// display as rectangles on webpage, georgia font + icons black or red

// ouside in: want to return array of card objects.
// initialize array with exact spaces, instead of literal?
const result = new Array(52)

// from least, to most
const colors = ['red', 'black'] // replace with hex or rgba values
const suits = ['diamonds', 'hearts', 'clubs', 'spades']
// const fontSymbols = [0, 1, 2, 3] // replace with font-awesome
const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'] // generate numeral strings "twos" dynamically as well?
// logic:

// for (i = 0; i < result.length; i++) {
//   let newCard = {}
//   // grab a face
//   faces.map((currentFace, index, arr) => {
//     // object literal to hold card values before pushing to output array
//     newCard["face"] = faces.pop()


//   })

  result[i] = i+1
}

// forEach doesn't execute on empty values?
// array.forEach(function(currentValue, index, arr), thisValue) 

console.log(result)
