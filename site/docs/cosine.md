---
id: cosine
title: 🌯  Cosine
---

## `findCosine(adj, hypotenuse)`

In order to implement cosine in our code with Mathium, we must call the function using Mathium's API, as such:

```ts
import Mathium from "mathiumjs";

let formula = Mathium.findCosine(adj, hypotenuse);
```

NOTE: The name Mathium after `import` as is arbitrary; it can be replaced with whatever you'd like:

```ts
import Foo from "mathiumjs";

let formula = Foo.findCosine(adj, hypotenuse);
```

## Concept

The Cosine is a trigonometric property that allows you to find the ratio of the length of the side adjacent the angle to the length of the hypotenuse, as shown:

`adjacent / hypotenuse`

NOTE: In the three main trigonometric ratios ([sine], cosine, and [tangent]), the triangle must be right in order to perform them.

A clever way of remembering these three ratios and their respective properties is the abbreviation `SOH CAH TOA`. `SOH` is short for `Sine = Opposite / Hypotenuse`, `CAH` for `Cosine = Adjacent / Hypotenuse`, and `TOA` for `Tangent = opposite / adjacent`.

In our Mathium code, it's important to note the following:

| In-Equation | In-Code    |
| ----------- | ---------- |
| adjacent    | adj        |
| hypotenuse  | hypotenuse |

Let's look at a couple examples to illustrate what cosine really looks like in real-life scenarios:

## Example 1: cos(32) = 4.3 / 7.8

When used in our code, we can make it look like the following:

```ts
import Mathium from "mathiumjs";

function cosineCalc(adj, hypotenuse) {
  let formula = Mathium.findCosine(adj, hypotenuse);
  return formula;
}

// Test the function
console.log(cosineCalc(4.3, 7.8));
```

## Example 2: cos(22) = 27.84 / 12.4

When used in our code, we can make it look like the following:

```ts
import Mathium from "mathiumjs";

function cosineCalc(adj, hypotenuse) {
  let formula = Mathium.findCosine(adj, hypotenuse);
  return formula;
}

// Test the function
console.log(cosineCalc(27.84, 12.4));
```

REMEMBER: These are just examples. Feel free to take this function (and any other one that we offer) and customize them to your heart's desire.
