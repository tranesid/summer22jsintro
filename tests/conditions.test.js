// testy tests

it('testing conditions', ()=>{
//   // if statements

//   // declaring a variable num, am assigning it value of 1
//   let num = 1;
//   // declaring a variable, but I am not assigning it a value
//   let isOdd 
// let someVar= null;
//   expect(num).toBe(1)
//   expect(isOdd).toBe(undefined)
//   expect(isOdd).not.toBe(null)
//   expect(isEven).toBe(null) 
//   // isEven is not defined (this is not undefined)

// if(num % 2 !== 0){
//   isOdd = false;
// } else{
//   isOdd = true;
// }
// expect(isOdd).toBe(true);

// canDrink
let tonyAge = 21
let sallyAge = 41
let bobAge = 11

let isTonyLegal //true
let isSallyLegal //true
let isBobLegal //false

// function - a miniprogram // example: const canDrink = () => {}
// return true if person is 21 +

// defining the function (BluePrint)
// functions do stuff & return 1 value
// if you don't tell a function what to return, it will return undefined
const canDrink = (personAge) => {
  if(personAge >= 21){
    // return-hey return value and quit function
     return true
  } else {
     return false
  }
}

//call the function
isTonyLegal = canDrink(tonyAge)
isSallyLegal = canDrink(sallyAge)
isBobLegal = canDrink(bobAge)

expect(isTonyLegal).toBe(true)
expect(isSallyLegal).toBe(true)
expect(isBobLegal).toBe(false)




  // if else statements
  // if elese if else statements
})