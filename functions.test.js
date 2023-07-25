let myFunctions = require('./function')

test("Return Two test", () => {
expect(myFunctions.returnTwo()).toBe(2)
})

test("Greeting test", () => {
    expect(myFunctions.greeting('James')).toEqual('Hello, James.')
    expect(myFunctions.greeting('Jill')).toEqual('Hello, Jill.')
})

test('Add Test', () => {
    expect(myFunctions.add(1,2)).toEqual(3)
    expect(myFunctions.add(5,9)).toEqual(14)
})