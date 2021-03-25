// todo: return 2d6, 2d8, 3d6 arrays that look like this:

class ResultsObj {
  constructor(rows, sum) {
    this.rows = rows
    this.sum = sum
  }
  getAllResults() {

    console.log("I am a method.")
  }
}
const matrix2d8 = new ResultsObj([], 0)

matrix2d8.getAllResults()
