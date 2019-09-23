// Solution to: https://leetcode.com/problems/occurrences-after-bigram/

const findOcurrences = function(text, first, second) {
  const textArray = text.split(" ")
  let output = new Array(0)

  for (let i = 0; i < textArray.length; ++i) {
    if (!textArray[i+2]) { break; }
    if (textArray[i] == first && textArray[i+1] === second) {
      output.push(textArray[i+2])
    }    
  }
  return output
}
