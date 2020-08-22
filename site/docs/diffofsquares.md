---
id: diffofsquares
title: 🏢  Difference of Squares
sidebar_label: 🏢  Difference of Squares
---

## `diffOfSquares(term1, term2)`

In order to implement the difference of squares formula in our code with Mathium, we must call the function using Mathium's API, as such:

```ts
import Mathium from "mathiumjs";

let formula = Mathium.diffOfSquares(term1, term2);
```

NOTE: The name `Mathium` after `import` is arbitrary; it can be replaced with whatever you'd like:

```ts
import Foo from "mathiumjs";

let formula = foo.diffOfSquares(term1, term2);
```

## Concept

The process of finding the difference of perfect squares involves writing the polynomial as a product of two or more polynomials.

Every polynomial that contains identical parentheses with a different operation (i.e. `(a + b)(a - b)`, can be simplified using the following formula and logic:

```
(a + b)(a - b) = (a - b)^2
```

NOTE: In these patterns, `a` and/or `b` can be replaced by any type of algebraic expression.

For example, if we want to pass in `(5x + 7y)(6x - 4y)`, where `a = 8x` and `b = 7x` to the formula, we can. Therefore, the complete process would be:

```
(5x + 7y)(5x - 7y) = (5x - 7y)^2
```

In our Mathium code, it's important to note the following:

| In-Equation | In-Code |
| ----------- | ------- |
| a           | term1   |
| b           | term2   |

## Example 1: (2x + 8)^2

Suppose we are given the expression `(2x + 8)^2`.

When applying the Perfect Square Formula, the result would be the following:

```
(2x + 8)^2 = (2x)^2 + 2(2x)(8) + (8)^2
```

When used in our code, we can make it look like the following:

```ts
import Mathium from "mathiumjs";

function findDiffOfSquares(term1, term2) {
  let formula = Mathium.diffOfSquares(term1, term2);
  return formula;
}

// Test the function
console.log(findDiffOfSquares("2x", 8));
```

## Example 2: (7 + 9)^2

Suppose we are given the expression `(7 + 9)^2`.

When applying the Perfect Square Formula, the result would be the following:

```
(7 + 9)^2 = (7)^2 + 2(7)(9) + (9)^2

= 49 + 126 + 81

= 256
```

When used in our code, we can make it look like the following:

```ts
import Mathium from "mathiumjs";

function findDiffOfSquares(term1, term2) {
  let formula = Mathium.diffOfSquares(term1, term2);
  return formula;
}

// Test the function
console.log(findDiffOfSquares(7, 9));
```

## Example 3: (98x + 54y)^2

Suppose we are given the expression `(98x + 54y)^2`.

When applying the Perfect Square Formula, the result would be the following:

```
(98x + 54y)^2 = (98x)^2 + 2(98x)(54y) + (54y)^2
```

When used in our code, we can make it look like the following:

```ts
import Mathium from "mathiumjs";

function findDiffOfSquares(term1, term2) {
  let formula = Mathium.diffOfSquares(term1, term2);
  return formula;
}

// Test the function
console.log(findDiffOfSquares("98x", "54y"));
```

REMEMBER: These are just examples. Feel free to take this function (and any other one that we offer) and customize them to your heart's desire.
