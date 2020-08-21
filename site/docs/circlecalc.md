---
id: circcalc
title: 🚜  Circles
sidebar_label: 🚜 Circles
---

## `circleCalculator(radius, solveFor)`

In order to implement the various circle-related formulas in our code with Mathium, we must call the function using Mathium's API, as such:

```ts
import * as Mathium from "mathiumjs";

let formula = Mathium.circleCalculator(radius, solveFor);
```

NOTE: The name `Mathium` after `* as` is arbitrary; it can be replaced with whatever you'd like:

```ts
import * as foo from "mathiumjs";

let formula = foo.circleCalculator(radius, solveFor);
```

## Concept

There are multiple equations that can be applied to circles.
With the circle calculator formula, you can solve for the diameter, area, and circumference. Mathium uses the following equations to achieve this:

```
C = 2πr
d = 2r
A = πr²
```

NOTE: The Mathium circle calcluator function uses a total of `11` decimal points for pi. **This is Mathium's Pi...**

```
3.14159265359
```

| In-Equation | In-Code       |
| ----------- | ------------- |
| C           | circumference |
| d           | diameter      |
| A           | area          |

## Example 1: Solve for diameter with a radius of 8

Suppose we have a circle with a radius of `8` and we want to find the diameter of the circle.
When applying the formula for diameter, the result would be the following:

```
d = 2r = 2(8)
d = 16
```

When used in our code, we can make it look like the following:

```ts
import * as Mathium from "mathiumjs";
function circleFunction(radius, solveFor) {
  let formula = Mathium.circleCalculator(radius, solveFor);
  return formula;
}
// Test the function
console.log(findPerfSquare(8, "diameter"));
```

**CODE ANALYSIS:** First, we are importing the Mathium framework at the top of the file, the we are defining the function `circleFunction()` with two parameters: `radius`, and `solveFor`.
Inside the function, we are defining a variable called `formula`, which stores the actual Mathium function that will execute the functionality for us (with the two parameters).
After we define the variable, we are returning it with `return formula;`.
Finally, we are testing the function by logging it to the console with a predetermined set of parameters that fill in for the placeholders: `radius = 8`, and `solveFor = "diameter`.

## Example 2: Solve for circumference with a radius of 423.89

Suppose we have a circle with a radius of `423.89` and we want to find the circumference of the circle.
When applying the formula for circumference, the result would be the following:

```
C = 2πr = 2π(423.89)
C = 2663.38
```

When used in our code, we can make it look like the following:

```ts
import * as Mathium from "mathiumjs";
function circleFunction(radius, solveFor) {
  let formula = Mathium.circleCalculator(radius, solveFor);
  return formula;
}
// Test the function
console.log(findPerfSquare(423.89, "circumference"));
```

## Example 3: Solve for area with a radius of 2.8562

Suppose we have a circle with a radius of `2.8562` and we want to find the area of that circle.
When applying the formula for area, the result would be the following:

```
a = πr² = π(2.8562)²
a = 25.63
```

When used in our code, we can make it look like the following:

```ts
import * as Mathium from "mathiumjs";
function circleFunction(radius, solveFor) {
  let formula = Mathium.circleCalculator(radius, solveFor);
  return formula;
}
// Test the function
console.log(findPerfSquare(423.89, "area"));
```

REMEMBER: These are just examples. Feel free to take this function (and any other one that we offer) and customize them to your heart's desire.
