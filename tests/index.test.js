// test here
it("test datatypes", () => {
  // numbers 
  // strings
  // booleans
  // objects (objects are a little more in depth)key value pair stores
  // arrays

  //test here

  const PI = 3.14;

  expect(PI).toBe(3.14);
  //numbers
  expect(typeof PI).toBe("number");

  //string
  let myName = "James";
  let PI_STR = "3.14";
  expect(myName).toBe("James");
  expect(typeof myName).toBe("string");
  expect(PI_STR).not.toBe(PI);
  // string concatenation
  expect('James ' + "Yo").toBe('James Yo')
  expect('James').toBe("James")
  expect('James').toBe(`James`)

  // booleans

  // test on equality
  expect(1).toBe(1);

  expect(1 == 1).toBe(true);
  expect(typeof true).toBe("boolean");
  expect(typeof false).toBe("boolean");
  expect(typeof (1 == 1)).toBe("boolean");

  // == can ignore type (lose)
  expect(1 == "1").toBe(true);
  expect(1 == "2").toBe(false);

  // === check type as well (strict)
  expect(1 === "1").toBe(false);

  // JS converted the number 1 to a string '1' + '1' = '11'
  expect(1 + "1").toBe("11");

  // objects {key:value} pairs
  let outback = {make:"suburu", model:'outback', mileage:23000, electric:false}
  let tesla = {make:"tesla", model:'3', mileage:13000, electric:true }

  expect(outback.make).toBe('suburu')
  expect(tesla.model).toBe('3')
  expect(tesla.model).not.toBe(3)
  expect(typeof tesla).toBe('object')

  // arrays (lists) : 0 based index 0,1,2,3,4,5,6
  // array are order
  let people = ['Jill','Jack','Fred']

  expect(people[0]).toBe('Jill')
  // get the last Item
  expect(people[people.length -1]).toBe('Fred')
  // arrays
  expect(people.length).toBe(3)
  // methods
  // add "Bob" to end of the array
  people.push('Bob')
  expect(people.length).toBe(4)
  expect(people[people.length -1]).toBe('Bob')

  expect(Array.isArray(people)).toBe(true)
  expect(Array.isArray(123)).toBe(false)


  // let cars = [tesla, outback]

});