// HOW TO: target one file: yarn test testing operators

const exp = require("constants")

// basic test

// it('string here',(),=>{
//   write tests
// })
it('testing operators', ()=>{
  // +, -, *, /
  expect(1 + 1).toBe(2)
  expect(1 - 1).toBe(0)
  expect(3 / 2).toBe(1.5)
  expect(3 * 2).toBe(6)
  
  // % modulous - returns remainder
  expect(3 % 2).toBe(1) // odd
  expect(2 % 2).toBe(0) // even
  
  // ++ adds 1 -- minus
  let num = 0
  num ++ 
  expect(num).toBe(1)
 
  // add ten to number
  num = num + 10
  expect(num).toBe(11)

 // -= *= /=

 // logic operators 
// && (AND) - || (OR) - ! (NOT)

expect(true && true).toBe(true)
expect(true && false).toBe(false)

expect(true || false).toBe(true)

expect( !false).toBe(true)

expect(false && (true || flase && !false || (true && true))).toBe(false)


})



