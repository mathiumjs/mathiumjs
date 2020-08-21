---
id: number-exponent
title: 🛩  Number + Exponent
---

## `numberToThePowerOf(number, exponent)`

In order to implement the `numberToThePowerOf(number, exponent)` function in our code with Mathium, we must call the function using Mathium's API, as such:

```ts
import * as Mathium from "mathiumjs";

let formula = Mathium.numberToThePowerOf(number, exponent);
```

NOTE: The name Mathium after \* as is arbitrary; it can be replaced with whatever you'd like:

```ts
import * as foo from "mathiumjs";

let formula = foo.numberToThePowerOf(opp, adj);
```

## Concept

As a general refresher, exponents tell us how many times to multiply a number by itself.

For example, `6^6` would mean we multiply 6 by itself 6 times, as such:

```
6^6 = 6 x 6 x 6 x 6 x 6 x 6
= 46,656
```

## Example 1: 8²

```ts
import * as Mathium from "mathiumjs";

function powerCalc(number, exponent) {
  let formula = Mathium.numberToThePowerOf(number, exponent);
  return formula;
}

// Test the function
console.log(numberToThePowerOf(8, 2));
```

This function will log `16` to the console.

## Example 2: 32^4

```ts
import * as Mathium from "mathiumjs";

function powerCalc(number, exponent) {
  let formula = Mathium.numberToThePowerOf(number, exponent);
  return formula;
}

// Test the function
console.log(numberToThePowerOf(32, 4));
```

This function will log `1,000,048,576` to the console.

REMEMBER: These are just examples. Feel free to take this function (and any other one that we offer) and customize them to your heart's desire.
