---
permalink: "posts/strict-mode-in-javascript.html"
permalinkBypassOutputDir: true
layout: "blogPostLayout.11ty.js"
title: Strict mode in JavaScript
date: 2020-11-29
---

## What is strict mode ?

---

- Strict mode is a feature introduced in es5 which helps you to run JavaScript code in a more strict operating context.

- What it means is that your code will be checked more strictly.

## What are the benefits of strict mode ?

---

The two main uses of strict mode are

- It throws errors which were silently ignored in the past by the JavaScript engine. This helps you to write more secure code.

- It fixes certain issues/mistakes that makes it difficult for the JavaScript engine to perform optimizations. This increases the performance and enables your code which is in strict mode to run faster than identical code which is in non strict mode.

## How to use the strict mode ?

---

- Strict mode can be used for a function or an entire script.

- To enable strict mode use the string `"use strict"` or `'use strict'` in the beginning of a function or a script.

Below is an example code for using strict mode.

- Using strict mode for a function

```javascript
function myFunction() {
  "use strict"; // This enables strict mode only inside this function
}
```

- Using strict mode for an entire script

```javascript
"use strict"; // This enables strict mode for this entire script

// Rest of the code here ...

```

## Common mistakes that leads to errors in strict mode

---

Here are some of the common mistakes that leads to error during strict mode and not in non strict mode.

### Using variables or objects before declaring them

```javascript
// In non strict mode

myVariable = 15;
console.log(myVariable); // This prints 15
```

```javascript
"use strict"; // In strict mode

myVariable = 15;
console.log(myVariable); // This gives a ReferenceError
```

### Using reserved keywords for naming your variables.

```javascript
// In non strict mode

var let = 15; // let is a reserved keyword in JavaScript
console.log(let); // This prints 15
```

```javascript
"use strict"; // In strict mode

var let = 15;
console.log(let); // This gives a SyntaxError
```

### Using same name for multiple parameters in functions

```javascript
// In non strict mode

function myFunction(param1, param1) {
  console.log(param1, param1); // This gives a weird output of peter peter
}

myFunction("bob", "peter");
```

```javascript
"use strict"; // In strict mode

function myFunction(param1, param1) {
  console.log(param1, param1); // This gives a SyntaxError
}

myFunction("bob", "peter");
```

**Note that the above are just few examples and there are many other cases where strict mode throws error. To know more such cases visit the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode "Strict mode mdn docs")**

## Strict mode is great so why not have it by default ?

---

Yes strict mode is enabled by default when using es6 modules and classes, when using tools like webpack or babel etc.

## Conclusion

---

- If you are using modern JavaScript then strict mode will be turned on by default and you don’t have to think about it much.

- I hope this article gave you some insights about strict mode.
