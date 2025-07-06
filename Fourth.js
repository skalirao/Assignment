// Section 1: Advanced Manipulations
// Q1 Function Declaration vs Expression:
function greet(name){
    console.log("Hello,",name)
}
greet("Sahil")

function farewell(name){
    console.log("Goodbye,",name)
}
farewell("Sahil")

// Q2 Arrow Functions:
const arrowGreet=(name) => {
    console.log("Hello,",name)
}
arrowGreet("Sahil")

const sayHi=()=>{
    console.log("Hi there!")
}
sayHi()

const double=(number)=>{
    console.log(2*number)
}
double(20)

// Q3 Default Parameters:
const calculateArea=(length,width=10)=>{
    console.log(`Area is ${length*width}`)
}
calculateArea(10)
calculateArea(10,5)
// Default parameters are useful when one wants to make 
// certain arguments optional as an input as well as to ensure
// function works even if some arguments are not passed 

// Q4 Rest Parameters:
const sumAll=(...args)=>{
   return args.reduce((a,b)=> {
    return a+b},0)
}
console.log(sumAll(1,2))
console.log(sumAll(1,2,3,4,5))
// Rest parameters can be used to handle any number of 
// arguments without knowing them in advance
// Unlike arguments, rest parameters:
// Are real arrays (so you can use .map(), .reduce(), etc.)
// Work only with arrow functions (which arguments doesn’t)

// Q5 Spread Syntax (...) with Functions:
const numbers=[1,2,3,4,5]
const multiply=(a,b,c,d,e)=> {
    return a*b*c*d*e
}
console.log(multiply(...numbers))
// Rest Parameters — “Collect” Used in function definitions
// Spread Syntax — “Expand” Used in function calls, arrays, or objects

// Q6 Higher-Order Functions (HOFs):
// Higher-order functions (HOFs) are functions that take other functions 
// as arguments or return them as results. They are powerful because they 
// enable cleaner, reusable, and more abstract code in JavaScript. 

// Example 1
function createMultiplier(factor){
    return function(number){
        return number*factor
    }
}
const timesTwo=createMultiplier(2)
const timesTen=createMultiplier(10)
console.log(timesTwo(20))
console.log(timesTen(20))

// Example 2
function executeOperation(num1,num2,operation){
    return operation(num1,num2)
}
const add=(a,b)=>a+b
const subtract=(a,b)=>a-b

console.log(executeOperation(1,5,add))
console.log(executeOperation(1,5,subtract))

// Q7 Callback Functions:
function processData(data,callback){
    data.forEach(callback)
}
const print=(value)=>console.log(value)
const upperCase=(value)=>console.log(value.toUpperCase())

processData(["ram", "sham", "tam"],print)
processData(["ram", "sham", "tam"],upperCase);

// Q8 Immediately Invoked Function Expressions (IIFEs):
// An IIFE (Immediately Invoked Function Expression) is a function 
// that is defined and executed immediately after creation.
// It’s primarily used to create a private scope to avoid polluting 
// the global namespace. 

// Example 1
(()=>{
    console.log("This runs immediately!")
})();

// Example 2
((message)=>{
    console.log(message)
})("Error 407");

// Q9 Closures:
// A closure in JavaScript is a function that retains access to 
// its lexical scope, even after the outer function has finished executing.
// Closures are significant because they allow data encapsulation, creation 
// of private variables, and persistent state in functional programming. 

function makeCounter() {
    let count = 0; 
  
    return function() {
      count++;    
      return count;
    };
}
  
const counter1 = makeCounter();
const counter2 = makeCounter();
  
console.log(counter1()); 
console.log(counter1()); 
console.log(counter2()); 
console.log(counter2()); 
console.log(counter1()); 

// Q10 this Keyword in Functions:
// Global Context:
console.log("Global this:", this); 

// Regular Function:
function showThis() {
 console.log("Regular function this:", this);
}
showThis(); 

// Arrow Function:
const showArrowThis = () => {
    console.log("Arrow function this:", this);
};
  
showArrowThis(); 

// Regular functions: this depends on how the function is called.
// Arrow functions: this is lexically bound, i.e., determined by 
// where the function is defined, not called.

// Method on an Object:
const person = {
    name: "Alice",
    greet: function () {
      console.log(this.name);
    }
};
  
person.greet(); 

// Challenging this:
let greeter = person.greet;
greeter(); 
// When you do let greeter = person.greet, you copy the function, 
// but not its binding to person.
// So this inside greeter() becomes the global object 
// (or undefined in strict mode), and this.name is undefined.

// Q11 call(), apply(), and bind():
const car = {
    brand: "Toyota",
    honk: function() {
        console.log(this.brand + " honks!");
    }
};
const bike = {
    brand: "Harley"
};

// Using call()
car.honk.call(bike);

// Using apply()
car.honk.apply(bike); 

// •call() → arguments passed one-by-one.
// •apply() → arguments passed as an array.

// Using bind()
const bikeHonk = car.honk.bind(bike);
bikeHonk(); 
// bind() returns a new function with this permanently bound to the specified object.

// Section 2: Advanced Concepts & Edge Cases

// Q1 Function Hoisting:
hello()
function hello(){
    console.log("Calling Before Declaring")
}
// Function declarations are hoisted completely, meaning:
// The function definition is moved to the top of the scope during the compile phase.
// So it can be called before its appearance in code.

expression()
var expression=function(){
    console.log("This won't work")
}

// var greet is hoisted, but only the variable declaration, not the assignment.
// So at the time of greet(), it’s undefined, and trying to call undefined() throws an error.

// Q2 Function Arity:
// Arity is the number of parameters a function expects
function sum(a, b, c) {}
console.log(sum.length); 

// Q3 Recursion:
// A function that calls itself to solve smaller parts of a problem
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); 

// Q4 Pre Functions:
// Same inputs → same output. No side effects (doesn’t change outside state).
function add(a, b) {
    return a + b;
}

// Impure
let x = 0;

function addToX(num) {
    x += num; // Side effect
}

// Benefits of Pure Functions:
// 	•Easier to test.
// 	•Predictable behavior.
// 	•Safer for parallelism and memoization.

// Q5 Currying:
// Transforming a function that takes multiple arguments into a chain of functions, each taking one argument.
function sumThree(a, b, c) {
    return a + b + c;
}

// Curried version
const curriedSum = a => b => c => a + b + c;

console.log(curriedSum(1)(2)(3)); 

// Q6 Memoization
// Caching the results of expensive function calls to avoid recomputation.
function memoizedFactorial() {
    const cache = {};

    return function factorial(n) {
        if (n in cache) return cache[n];
        if (n === 0 || n === 1) return 1;
        return cache[n] = n * factorial(n - 1);
    };
}

const factorial = memoizedFactorial();

console.log(factorial(5)); // 120 (calculated)
console.log(factorial(5)); // 120 (from cache)

// Q7 arguments Object (Legacy)
// An array-like object available inside non-arrow functions that holds all passed arguments.
function showArguments() {
    console.log(arguments);
}
showArguments(1, 2, 3); 
// Why discouraged:
// 	•Not available in arrow functions.
// 	•Not real arrays.
// 	•Less readable and flexible.
// Preferred Alternative: Rest Parameters
// function showArgs(...args) {
//     console.log(args); // true array
// }

// Section 3: Confusing Function Output Questions
// Q1 
// Reason: greet() logs “Hello!”, then returns undefined, which is printed by console.log.

// Q2
// Reason: Function modifies global variable x to 20.

// Q3
// Reason: inner() has access to a via closure.

// Q4
// Reason: Closure retains access to a even after outer() finishes.

// Q5
// Reason: var is function-scoped, so all timeouts reference the final i = 3.

// Q6
// Reason: let creates a new i per iteration (block-scoped), so each closure gets a unique value.

// Q7
// Reason: getValueRef loses its object context, so this is undefined or global.

// Q8
// Reason: Arrow functions don’t bind this; it refers to outer/global scope, not anotherObject.

// Q9
// Reason: saySomething is passed and invoked directly inside execute.

// Q10
// Reason: Closure captures x = 5, so addFive(10) returns 5 + 10.

// Section 4: Output Prediction
// Q1 
// Reason: a = 10, b = 20, and the rest (30, 40, 50) go into the rest array.

// Q2
// Reason: multiplyBy(3) returns a function that multiplies input by 3. 7 * 3 = 21.

// Q3
// Reason: count is a global variable and gets incremented with each call.

// Q4
// Reason: Inner val shadows outer val, but each is used in its respective scope.

// Q5
// Reason: The arrow function a * b is passed as the operation. 5 * 4 = 20.

// Section 5: Debugging Common Mistakes
// Q1
// When button.handler is passed without context, this is lost.
// Use .bind(button) to ensure this inside the handler refers to the button object.

// Q2
// Without var/let/const, JS assigns myValue to the global scope (bad practice).
// Always declare variables with a keyword to maintain proper scope.

// Q3
// Without a return, the function implicitly returns undefined.

// Q4
// Recursion must have a base condition to stop.
// Without it, you’ll hit call stack overflow.

// Section 6: Real-World Problem Solving
// 1. User Authentication Module:
function createUser(username,password){
    return {
        username: username,
        checkPassword: function(attemptedPassword){
            return attemptedPassword === password;
        }
    }
}
function authenticateUser(userObject,inputPassword){
    return userObject.checkPassword(inputPassword)
}

const user = createUser("Sahil", "123");

console.log("Authenticating with 'Wrong':", authenticateUser(user, "Wrong")); 

console.log("Authenticating with '123':", authenticateUser(user, "123")); 

// 2. Simple Calculator Factory:
function createCalculator(operationType) {
    return function(a, b) {
        switch (operationType) {
            case "add":
                return a + b;
            case "subtract":
                return a - b;
            case "multiply":
                return a * b;
            case "divide":
                if (b === 0) {
                    return "Error: Division by zero";
                }
                return a / b;
            default:
                return "Error: Operation Not Defined";
        }
    };
}
const addNumbers = createCalculator("add");
const subtractNumbers = createCalculator("subtract");
const multiplyNumbers = createCalculator("multiply");
const divideNumbers = createCalculator("divide");
console.log("Add: 5 + 31 =", addNumbers(5, 31));             
console.log("Subtract: 4 - 8 =", subtractNumbers(4, 8));  
console.log("Multiply: 8 * 7 =", multiplyNumbers(8, 7));    
console.log("Divide: 190 / 5 =", divideNumbers(190, 5));      
console.log("Divide by zero: 100 / 0 =", divideNumbers(100, 0)); 

// 3. Event Logger:
function createLogger(prefix) {
    return function(message) {
        const timestamp = new Date().toISOString();
        console.log(`[${prefix}] ${timestamp}: ${message}`);
    };
}
const appLogger = createLogger("APP");
const errorLogger = createLogger("ERROR");
const debugLogger = createLogger("DEBUG");
appLogger("Application started successfully.");
errorLogger("Failed to load user profile.");
debugLogger("Fetching data from API...");