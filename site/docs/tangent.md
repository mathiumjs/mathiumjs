---
id: tangent
title: 🍷  Tangent
---

## `findTangent(opp, adj)`

In order to implement tangent in our code with Mathium, we must call the function using Mathium's API, as such:

```ts
import * as Mathium from "mathiumjs";

let formula = Mathium.findTangent(opp, adj);
```

NOTE: The name Mathium after \* as is arbitrary; it can be replaced with whatever you'd like:

```ts
import * as foo from "mathiumjs";

let formula = foo.findTangent(opp, adj);
```

## Concept

The Tangent is a trigonometric property that allows you to find the ratio of the length of the side opposite the angle to the length of the adjacent side to the angle, as shown:

`opposite / adjacent`

NOTE: In the three main trigonometric ratios ([sine], [cosine], and tangent), the triangle must be right in order to perform them.

A clever way of remembering these three ratios and their respective properties is the abbreviation `SOH CAH TOA`. `SOH` is short for `Sine = Opposite / Hypotenuse`, `CAH` for `Cosine = Adjacent / Hypotenuse`, and `TOA` for `Tangent = opposite / adjacent`.

Let's look at a couple examples to illustrate what cosine really looks like in real-life scenarios:

In our Mathium code, it's important to note the following:

| In-Equation | In-Code |
| ----------- | ------- |
| opposite    | opp     |
| adjacent    | adj     |

## Example 1: tan(27) = 3.2 / 6.5

When used in our code, we can make it look like the following:

```ts
import * as Mathium from "mathiumjs";

function tangentCalc(opp, adj) {
  let formula = Mathium.findTangent(opp, adjacent);
  return formula;
}

// Test the function
console.log(tangentCalc(3.2, 6.5));
```

## Example 2: cos(18) = 32.46 / 23.2

When used in our code, we can make it look like the following:

```ts
import * as Mathium from "mathiumjs";

function tangentCalc(opp, adj) {
  let formula = Mathium.findTangent(opp, adjacent);
  return formula;
}

// Test the function
console.log(tangentCalc(32.46, 23.2));
```

REMEMBER: These are just examples. Feel free to take this function (and any other one that we offer) and customize them to your heart's desire.
