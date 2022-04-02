'use strict';

// --JAVASCRIPT OVERVIEW--
// 1. High-level
// 2. Garbage-collected
// 3. Interpreted or just-in-time compiled
// 4. Multi-paradigm
// 5. Prototype-based object-oriented
// 6. First-class functions
// 7. Dynamic
// 8. Single-threaded
// 9. Non-blocking event loop

// ------------------------

// --JAVASCRIPT ENGINE--
// - Program that 'executes' JavaScript code (ex. v8 engine, nodeJS).

// ------------------------

// --COMPILATION VS. INTERPRETATION--

// Compilation: Entire code is converted into machine code at once, and written to a binary(portable) file that can be executed by a computer (faster method).

// Interpretation: Interpreter runs through the source code and executes it line by line (however, this method is slow).

// Just-in-time (JIT) compinlation: Entire code is converted into machine code at once, then executed immediately (best method).
// - 'parsing' (reading)
// - 'compilation' (compile to machine code)
// - 'execution' (run code immediately)
// - 'optimization' (update code)

// ------------------------

// --JAVASCRIPT RUNTIME--
// - Container including all the things that we need to use JavaScript (ex. browser)
// - Properties
//   a) JS Engine
//   b) Web APIs
//   c) Callback queue

// ------------------------

// --EXECUTION CONTEXT--

// Q. What is an execution context?
// A. Environment in which a piece of JavaScript is executed. Stores all the necessary information for some code to be executed.

// Q. What's inside the execution context?
// A. a) Variable Environment
//       - let, const, and var declarations
//       - Functions
//       - arguments object
//    b) Scope chain
//    c) 'this' keyword

// ------------------------

// --CALL STACK--
// - JavaScript code gets executed in a certain order:
// - Global code -> code inside functions -> returned process

// ------------------------

// --SCOPE--

// Scoping: How our program's variables are 'organized' and 'accessed'.
// - "Where do variables live?" or
// - "Where can we access a certain variable, and where not?"

// Lexical scoping: Scoping is controlled by 'placement' of functions and blocks in the code.

// Scope: Space or environment in which a certain variable is 'declared'(variable environment in case of functions).
// - There is 'global' scope,
//            'function' scope, and
//            'block' scope.

// Scope of a variable: Region of our code where a certain variable can be 'accessed'.

// ------------------------

// --THE 3 TYPES OF SCOPE--

// 1. Global Scope
//    - Outside of 'any' function or block
//    - Variables declared in global scope are accessible 'everywhere'

// 2. Function Scope
//    - Variables are accessible only 'inside function, NOT' outside
//    - Also called local scope

// 3. Block Scope (ES6)
//    - Variables are accessible only 'inside block' (block scoped)
//    - HOWEVER, this only applies to 'let' and 'const' variables!
//    - Functions are 'also block scoped' (only in strict mode)

// ------------------------

// --THE SCOPE CHAIN--
// - Scope has access to variables from all 'outer scopes'
// - 'let' and 'const' are block-scoped, while 'var' is function-scoped

// ------------------------

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // reassigning outher scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        // function is a block-scope for ES6 only on 'strict mode'
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    //console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'John';
calcAge(1991);

// ------------------------

// --HOISTING IN JAVASCRIPT-- (Variable Environment)

// Hoisting: Makes some types of variables accessible/usable in the code before they are actually declared.
//         : "Variables lifted to the top of their scope".

// - Before execution, code is scanned for variable declarations, and for each variable, a new property is created in the 'variable environment object'.

// --WHY HOISTING?--
// - Using functions before actual declaration
// - 'var' hoisting is just a byproduct

// --EXAMPLES--

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'John';
let job = 'Programmer';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// --EXAMPLES(2)--

console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

// --EXAMPLES(3)--

// 'let' and 'const' do not create properties on the window object
var x = 1;
let y = 2;
const z = 3;

// ------------------------

// --'this' KEYWORD--

// this keyword/variable: Special variable that is created for every execution context (every function). Takes the value of (points to) the 'owner' of the function in which the 'this' keyword is used.

// - 'this' is NOT static. It depends on how the function is called, and its value is only assigned when the function 'is actually called'.

// 4 Ways of using 'this'
// a) Method: this = <Object that is calling the method>
// b) Simple function call: this = undefined
// c) Arrow functinos: this = <this of surrounding function (lexical this)>
// d) Event listener: this = <DOM element that the handler is attached to>

// - this does NOT point to the function itself, and also NOT to the variable environment!

// --EXAMPLES--

console.log(this);

// function
const calcAge2 = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
// for regular function calls, the 'this' keyword will be 'undefined' (only during strict mode)
calcAge2(1991);

// arrow function
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
// since the arrow function does not have a 'this' kewyord, it finds the 'this' keyword from the global scope
calcAgeArrow(1980);

// object
const john = {
  year: 1999,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
john.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = john.calcAge;
matilda.calcAge();

// cannot call 'this' keyword with regular function calls
const f = john.calcAge;
// f();

// ------------------------

// --REGULAR FUNCTIONS VS. ARROW FUNCTIONS--

// 'var' creates properties on the global object (DO NOT USE VAR!)
var firstName2 = 'Matilda';

const john2 = {
  firstName: 'John',
  year: 1999,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // in regular function calls, the 'this' keyword must be undefined
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1998);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName2}`);
  },
};
john2.greet();
john2.calcAge();

// --AGUMENTS KEYWORD--

// regular functions (can add additional arguments)
const addExpr2 = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr2(2, 5);
addExpr2(2, 5, 8, 12);

// arrow functions (cannot add additional arguments)
var addArrow2 = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow2(2, 5, 8);

// ------------------------
