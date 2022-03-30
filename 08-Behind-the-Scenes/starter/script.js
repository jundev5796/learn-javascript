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
