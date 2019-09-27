// in progress
// problem: https://leetcode.com/problems/lemonade-change/

let ourCash = {
  5: 0,
  10: 0,
  20: 0
}

const lemonadeChange = (billsArray => {
  let output = true
  billsArray.map(bill => {
    if (output === false) { return }
    if (bill < 5 || bill > 20 || bill % 5 >= 1 ) {
      output = false
    }
    // if bill is 10, give them $5 change
    // if bill is 20, give them $10 change
    ourCash[bill.toString()] += 1
  })
  // console.log("I am ourCash: ", ourCash)

  return output
})
