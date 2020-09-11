---
id: sine
title: 🚧 Sine
---

## `findSine(opp, hypotenuse)`

In order to implement sine in our code with Mathium, we must call the function using Mathium's API, as such:

```ts
import Mathium from "mathiumjs";

let formula = Mathium.findSine(opp, hypotenuse);
```

NOTE: The name `Mathium` after `import` is arbitrary; it can be replaced with whatever you'd like:

```ts
import Foo from "mathiumjs";

let formula = Foo.findSine(opp, hypotenuse);
```

## Concept

Sine is a trigonometric property that allows you to find the ratio of the length of the side opposite the angle to the length of the hypotenuse, as shown:

```
opposite / hypotenuse
```

NOTE: In the three main trigonometric ratios (sine, [cosine], and [tangent]), the triangle must be right in order to perform them.

A clever way of remembering these three ratios and their respective properties is the abbreviation `SOH CAH TOA`. `SOH` is short for `Sine = Opposite / Hypotenuse`, `CAH` for `Cosine = Adjacent / Hypotenuse`, and `TOA` for `Tangent = opposite / adjacent`.

Let's look at a couple examples to illustrate what sine really looks like in real-life scenarios:

In our Mathium code, it's important to note the following:

| In-Equation | In-Code    |
| ----------- | ---------- |
| opposite    | opp        |
| hypotenuse  | hypotenuse |

## Example 1: sin(35) = 2.8 / 4.9

Suppose we are given the equation `sin(35) = 2.8 / 4.9`.

First, let's deconstruct the specific terms of the equation:

`sin(35)` represents the fact that we're attempting to find the sine of the angle, which equals 35.

`2.8` represents the side of the right triangle that is opposite to the angle (35), whilst `4.9` represents the hypotenuse of the right triangle.

When applying the formula for finding the Sine of an angle, the result would be the following:

```
sin(35) = 2.8 / 4.9
2.8 / 4.9 = 0.57...
sin(35) = 0.57...
```

When used in our code, we can make it look like the following:

```ts
import Mathium from "mathiumjs";

function sineCalc(opp, hypotenuse) {
  let formula = Mathium.sineCalc(opp, hypotenuse);
  return formula;
}

// Test the function
console.log(sineCalc(2.8, 4.9));
```

## Example 2: sin(39) = 15.39 / 24.45

Suppose we are given the equation `sin(39) = 15.39 / 24.45`.

First, let's deconstruct the specific terms of the equation:

`sin(39)` represents the fact that we're attempting to find the sine of the angle, which equals 35.

`15.39` represents the side of the right triangle that is opposite to the angle (35), whilst `24.95` represents the hypotenuse of the right triangle.

When applying the formula for finding the Sine of an angle, the result would be the following:

```
sin(39) = 15.39 / 24.45
15.39 / 24.95 = 0.629
sin(39) = 0.629
```

```ts
import Mathium from "mathiumjs";

function sineCalc(opp, hypotenuse) {
  let formula = Mathium.sineCalc(opp, hypotenuse);
  return formula;
}

// Test the function
console.log(sineCalc(15.39, 24.45));
```

REMEMBER: These are just examples. Feel free to take this function (and any other one that we offer) and customize them to your heart's desire.
