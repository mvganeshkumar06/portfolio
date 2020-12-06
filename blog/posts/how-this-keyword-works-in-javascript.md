---
permalink: "posts/how-this-keyword-works-in-javascript.html"
permalinkBypassOutputDir: true
layout: "blogPostLayout.11ty.js"
title: How <em>this</em> keyword works in JavaScript
date: 2020-12-06
---

## Introduction

- `this` is a keyword in JavaScript which works very differently based on how you are using it.

- In this article we'll go through all different possible cases and see how `this` keyword works.


## Where `this` points to ?

- The reference of `this` depends on where and how you are using it.

- Let us take some examples to see where `this` points to.

### Using `this` globally

- When you are using `this` globally it points to the global window object.

```javascript
console.log(this === window); // true
```

### Using `this` inside a function

- `this` works differently when your using a regular function v/s using an arrow function.

- The reference of `this` inside a regular function depends on **who is invoking the function which is accessing `this` keyword.**

- In arrow functions the reference of `this` depends on **the surrounding scope of the function which is accessing `this` keyword.**

Don't worry if you didn't fully understand the above definition, we'll see lot of examples to understand them.

- Whenever you want to know where `this` points to you can recall the above definition.

- Let's take an example to see the difference between using `this` in regular and arrow function.

```javascript
btn.addEventListener("click", function (event) {
    
    console.log(event.target === this); // true
    
    setTimeout(function () {
        console.log(event.target === this); // false
        console.log(this) // window
    }, 2000);

})
```

- At first `this` was pointing to the button but after 2 seconds it points to the window object.

- Let's see why this is the case.

- Intially `this` points to the button because button was the one which called the callback function (regular function) when a click event took place.

- But after 2 seconds another callback function (regular function) is accessing `this` but it points to the window not the button because the callback function is not being invoked by the button.

- Let's see what happens if we used an arrow function as callback.

```javascript
btn.addEventListener("click", function (event) {
    
    console.log(event.target === this); // true
    
    setTimeout(()=>{
        console.log(event.target === this); // true
        console.log(this) // button
    }, 2000);

})
```

- Now `this` points to the same button even after 2 seconds.

- Try to recall the definition of `this` in an arrow function to know why this is the case. 

- It's because the surrounding scope of the callback function is the button, that is why `this` still points to the button. 


### Using `this` inside a method

- When you are using `this` inside a method, the same rules that are discussed above can be used.

```javascript
let obj = {

    name: "peter",
    
    showThisOuter() {

        console.log(this); // object

        function showThisInner() {
            console.log(this); // window
        }

        showThisInner();

    }
}

obj.showThisOuter();
```

- Here the `this` in outer function (regular function) points to the object because the object is the one who is invoking the outer function.

- And the `this` in the inner function (regular function) is not being invoked by the object so it points to the global window object.

- Let's see what happens if we used an arrow function as outer function.

```javascript
let obj = {
    name: "peter",
    showThisOuter: () => {

        console.log(this); // window

        function showThisInner() {
            console.log(this); // window
        }

        showThisInner();

    }
}

obj.showThisOuter();
```

- Here both in outer and inner function the `this` points to the global window object.

- It's because in the outer function (arrow function) the `this` points to surrounding scope which is the global window object.

- And the inner function (regular function) is not being invoked by the object so `this` points to the global window object.

- Let's see what happens if we used an arrow function as inner function.

```javascript
let obj = {

    name: "peter",
    
    showThisOuter() {

        console.log(this); // object

        let showThisInner=()=> {
            console.log(this); // object
        }

        showThisInner();

    }
}

obj.showThisOuter();
```

- In both the outer and inner function the `this` points to the object.

- In the outer function (regular function) the `this` points to the object because the object is the one who is invoking the outer function.

- And the `this` in the inner function (arrow function) points to the surrounding scope which is the object.

## Changing the reference of `this`

- There are ways to change the reference of `this` using methods like call, apply and bind.

```javascript
let obj = {
  name: "peter"
}

function displayThis(param1, param2) {
  console.log(this === window); // true
  console.log(this === obj); // false
}

displayThis();
```

- Here `this` points to global window object. If you want `this` to point to the object we can use any of the above three mentioned methods.

- Let's see all the methods one by one.

### Using call method

```javascript
let obj = {
  name: "peter"
}

function displayThis(param1, param2) {
  console.log(this === window); // false
  console.log(this === obj); // true
  console.log(param1, param2); // a b
}

displayThis.call(obj, "a", "b");
```

- The call method makes `this` inside the function point to the object passed as first argument.

- And it takes the rest of the parameters of the function as seperate arguments.

### Using apply method

```javascript
let obj = {
  name: "peter"
}

function displayThis(param1, param2) {
  console.log(this === window); // false
  console.log(this === obj); //true
  console.log(param1, param2); // a b
}

displayThis.apply(obj, ["a", "b"]);
```

- The apply method is same as call it makes `this` inside the function point to the object passed as first argument.

- But it takes the parameters of the function as a single array passed as second argument.

### Using bind method

```javascript
let obj = {
  name: "peter"
}

function displayThis(param1, param2) {
  console.log(this === window); // false
  console.log(this === obj); // true
  console.log(params); // ["a","b"]
}

let changedThis = displayThis.bind(obj, ["a", "b"]);
changedThis();
```

- The bind method makes `this` inside the function point to the object passed as first argument.

- It takes the parameters of the function as a single array passed as second argument.

- And it returns a function with above changes so that you can call them later.

- **Note that the above three methods call, apply and bind can not change the reference of `this` inside the arrow function.**

## Conclusion

- Here are few things to take away from this article

- 1. In the global scope, `this` refers to the global window object.

- 2. In regular function the value of `this` is determined by who is invoking the function which is accessing `this`.

- 3. In arrow function the value of `this` is determined by the surrounding scope of the function which is accessing `this`.

- 4. We can change the reference of `this` using call, apply, and bind.

- 5. The call and apply can be used when you want to change the reference of `this` while calling the function.

- 6. The bind can be used when you want a separate function with modified reference of `this`.

- 7. You can not modify the reference of `this` for arrow functions.
