---
permalink: "posts/modules-in-javascript.html"
permalinkBypassOutputDir: true
layout: "blogPostLayout.11ty.js"
title: Modules in JavaScript
date: 2020-12-13
---

## Introduction

- A module is a single script file that contains common pieces of reusable functionalities.

## How to use modules

- Whenever you need some parts of the functionality from a module you can `export` from the module and `import` them into specific scripts where ever you need.

- There are different ways to export and import stuff in modules.

- Let us see them with some examples.

- In all the examples we are going to follow this directory structure.

```plaintext
app.js - Where we import stuff
module.js - Module from where we will export stuff
```

## Exporting modules

### Named export before declaration

```javascript
// Inside module.js

export let person = "John";
export function add(num1, num2) {
  return num1 + num2;
}
```

### Named export at the end of the script

```javascript
// Inside module.js

let person = "John";
function add(num1, num2) {
  return num1 + num2;
}

export { person, add };
```

### Named export with alias

```javascript
// Inside module.js

let person = "John";
function add(num1, num2) {
  return num1 + num2;
}

export { person as person1, add as add1 };
```

### Default export before declaration

```javascript
// Inside module.js

export default function add(num1, num2) {
  return num1 + num2;
}
```

### Default export at the end of the script

```javascript
// Inside module.js

function add(num1, num2) {
  return num1 + num2;
}

export default add;
```

## Importing modules

### Named import

```javascript
// Inside app.js

import { person, add } from "./module.js";

console.log(person); // John
console.log(add(2, 3)); // 5
```

### Named import with alias

```javascript
// Inside app.js

import { person as person1, add as add1 } from "./module.js";

console.log(person1); // John
console.log(add1(2, 3)); // 5
```

### Default import

```javascript
// Inside app.js

import add from "./module.js";

console.log(add(2, 3)); // 5
```

### Import as object

```javascript
// Inside app.js

import * as fun from "./module.js";

console.log(fun.person); // John
console.log(fun.add(2, 3)); // 5
```

## Rules to follow while working with modules

- Here are the rules that you have to follow to make sure that your modules work.

- Named export is used when you want to export multiple stuffs.

- Default export is used when you want to export only one stuff.

- If you are using named export you should use named import.

- Similarly if you are using default export you should use default import.

## Conclusion

- A module is just a script file that contains reusable pieces of code.

- There are different ways to export and import stuff from modules.

- Export - named, default, alias

- Import - named, default, alias, object
