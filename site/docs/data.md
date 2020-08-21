---
id: data
title: 🧠  Data & Statistics
sidebar_label: 🧠  Data & Statistics
---

## `dataStatCall(dataArray, solveFor)`

In order to implement the circle calculator formula in our code with Mathium, we must call the function using Mathium's API, as such:

```ts
import * as Mathium from "mathiumjs";
let formula = Mathium.dataStatCall(dataArray, solveFor);
```

NOTE: The name `Mathium` after `* as` is arbitrary; it can be replaced with whatever you'd like:

```ts
import * as foo from "mathiumjs";
let formula = foo.dataStatCall(dataArray, solveFor);
```

## Concept

Data & Statistics are an essencial part of Mathium. Mathium allows you to find the mean, median, mode, rande, and standard deviation in one line of code. This function uses **these formulas to work:**

| In-Equation | Formula                                   |
| ----------- | ----------------------------------------- |
| "mean"      | µ = $\frac{Σx}{n}$                        |
| "median"    | $\frac{(n+1)}{2}$                         |
| "mode"      | ℓ + h ($\frac{(fₘ - f₁)}{2fₘ - f₁ - f₂}$) |
| "range"     | max - min                                 |

NOTE: To input the data numbers, make sure to pass them in as an array like this:

```ts
[13, 18, 13, 14, 13, 16, 14, 21, 13];
```

## Example 1: Find median

Suppose we have an array of `[1, 2.25, 3.5, 4.75, 6, 7.25, 8.5]` and we want to find the median of the data.
When applying the `dataStatCall`, the result would be the following:

```
4.75
```

When used in our code, we can make it look like the following:

```ts
import * as Mathium from "mathiumjs";
function dataStats(dataArray, solveFor) {
  let formula = Mathium.dataStatCall(dataArray, solveFor);
  return formula;
}
// Test the function
console.log(dataStats([1, 2.25, 3.5, 4.75, 6, 7.25, 8.5], "median"));
```

**CODE ANALYSIS:** First, we are importing the Mathium framework at the top of the file, the we are defining the function `dataStats()` with two parameters: `dataArray`, and `solveFor`.
Inside the function, we are defining a variable called `formula`, which stores the actual Mathium function that will execute the functionality for us (with the two parameters).
After we define the variable, we are returning it with `return formula;`.
Finally, we are testing the function by logging it to the console with a predetermined set of parameters that fill in for the placeholders: `dataArray = [1, 2.25, 3.5, 4.75, 6, 7.25, 8.5]`, and `solveFor = "median`.

## Example 2: Find mean

Suppose we have an array of `[24, 24.25, 24.5, 24.75, 25]` and we want to find the mean of the data.
When applying the `dataStatCall`, the result would be the following:

```
24.5
```

When used in our code, we can make it look like the following:

```ts
import * as Mathium from "mathiumjs";
function dataStats(dataArray, solveFor) {
  let formula = Mathium.dataStatCall(dataArray, solveFor);
  return formula;
}
// Test the function
console.log(dataStats([24, 24.25, 24.5, 24.75, 25], "mean"));
```

REMEMBER: These are just examples. Feel free to take this function (and any other one that we offer) and customize them to your heart's desire.
