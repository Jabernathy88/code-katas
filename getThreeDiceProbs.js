// todo: return 2d6, 2d8, 3d6 arrays that look like this:
const input_1 = [8, 6]
// const input_2 
// const input_3

class DiceResult {
  constructor(diceArr) {
    this.diceArr = diceArr
    this.rows = [0,0]
    this.sum = 0
  }
  calcResults(max, i, arr) {
    // lower scope
    console.log("I am max + 1: ", max+1)
    console.log("I am i: ", i)
    console.log("I am arr: ", arr)
  }
  getAllResults() {
    // H.O.O.
    this.diceArr.map(this.calcResults)
    // console.log("I am input: ", this.diceArr)
  }
}
const matrix2d8 = new DiceResult(input_1)

matrix2d8.getAllResults()
