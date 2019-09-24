// Solution to: https://leetcode.com/problems/jewels-and-stones/

const numJewelsInStones = function(J, S) {
  return S.split('').filter(char => J.indexOf(char) !== -1).length
}
