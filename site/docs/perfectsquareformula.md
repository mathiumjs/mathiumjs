---
id: perfsquare
title: 🏠  Perfect Square Formula
sidebar_label: 🏠  Perfect Square Formula
---

## `perfectSquare(term1, operation, term2)`

In order to implement the perfect square formula in our code with Mathium, we must call the function using Mathium's API, as such:

```ts
import Mathium from "mathiumjs";

let formula = Mathium.perfectSquare(term1, operation, term2);
```

NOTE: The name `Mathium` after `* as` is arbitrary; it can be replaced with whatever you'd like:

```ts
import Foo from "mathiumjs";

let formula = Foo.perfectSquare(term1, operation, term2);
```

## Concept

When any polynomial is multiplied by itself, then it is a perfect square.

To expand any polynomial, we can apply one of the following patterns:

```
(a + b)^2 = a^2 + 2ab + b^2

(a - b)^2 = a^2 - 2ab - b^2
```

NOTE: In these patterns, `a` and/or `b` can be replaced by any type of algebraic expression.

For example, if we want to expand `(8x + 7x)^2`, `a = 8x` and `b = 7x`. Therefore...

```
(8x + 7x)^2 = (8x)^2 + 2(8x)(7x) + (7x)^2
```

In our Mathium code, it's important to note the following:

| In-Equation | In-Code   |
| ----------- | --------- |
| a           | term1     |
| operation   | operation |
| b           | term2     |

## Example 1: (2x + 8)^2

Suppose we are given the expression `(2x + 8)^2`.

When applying the Perfect Square Formula, the result would be the following:

```
(2x + 8)^2 = (2x)^2 + 2(2x)(8) + (8)^2
```

When used in our code, we can make it look like the following:

```ts
import Mathium from "mathiumjs";

function findPerfSquare(term1, operation, term2) {
  let formula = Mathium.perfectSquare(term1, operation, term2);
  return formula;
}

// Test the function
console.log(findPerfSquare(8, "+", 9));
```

CODE ANALYSIS: First, we are importing the Mathium framework at the top of the file, the we are defining the function `findPerfSquare()` with three parameters: `term1`, `operation`, and `term2`.

Inside the function, we are defining a variable called `formula`, which stores the actual Mathium function that will execute the functionality for us (with the three parameters).

After we define the variable, we are returning it with `return formula;`.

Finally, we are testing the function by logging it to the console with a predetermined set of parameters that fill in for the placeholders: `term1 = 8`, `operation = "+"`, and `term2 = 9`.

## Example 2: (7 + 9)^2

Suppose we are given the expression `(7 + 9)^2`.

When applying the Perfect Square Formula, the result would be the following:

```
(7 + 9)^2 = (7)^2 + 2(7)(9) + (9)^2

= 49 + 126 + 81

= 256
```

When applying it to our code, the result would be the following:

```ts
import Mathium from "mathiumjs";

function findPerfSquare(term1, operation, term2) {
  let formula = Mathium.perfectSquare(term1, operation, term2);
  return formula;
}
// Test the function
console.log(findPerfSquare(7, "+", 9));
```

## Example 3: (98x + 54y)^2

Suppose we are given the expression `(98x + 54y)^2`.

When applying the Perfect Square Formula, the result could be the following:

```
(98x + 54y)^2 = (98x)^2 + 2(98x)(54y) + (54y)^2
```

With Mathium, the code for this particular exercise could be the following:

```ts
import Mathium from "mathiumjs";

function findPerfSquare(term1, operation, term2) {
  let formula = Mathium.perfectSquare(term1, operation, term2);
  return formula;
}
// Test the function
console.log(findPerfSquare("98x", "+", "54y"));
```

REMEMBER: These are just examples. Feel free to take this function (and any other one that we offer) and customize them to your heart's desire.
