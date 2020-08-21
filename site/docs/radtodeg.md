---
id: radtodeg
title: 🦈 Radians to Degrees
---

## `radToDeg(rad)`

In order to implement the degrees to radians formula in our code with Mathium, we must call the function using Mathium's API, as such:

```ts
import * as Mathium from "mathiumjs";

let formula = Mathium.radToDeg(rad);
```

NOTE: The name Mathium after \* as is arbitrary; it can be replaced with whatever you'd like:

```ts
import * as foo from "mathiumjs";

let formula = foo.degToRad(rad);
```

## Concept

When converting from radians to degrees, we must implement the following function:

`π rad = 180 degrees`

NOTE: In the equation above, `π` is the symbol for `pi (3.141592...)`, and `rad` stands for `radians`.

In our Mathium code, it's important to note the following:

| In-Equation | In-Code |
| ----------- | ------- |
| rad         | radians |

## Example 1: radToDeg(9)

When used in our code, we can make it look like the following:

```ts
import * as Mathium from "mathiumjs";

function radToDeg(rad) {
  let formula = Mathium.radToDeg(rad);
  return formula;
}

// Test the function
console.log(radToDeg(9));
```

This function will return `515.66201562°` radians as the answer.

## Example 2: radToDeg(88)

When used in our code, we can make it look like the following:

```ts
import * as Mathium from "mathiumjs";

function radToDeg(rad) {
  let formula = Mathium.radToDeg(rad);
  return formula;
}

// Test the function
console.log(radToDeg(88));
```

This function will return `5042.0285972°` radians as the answer.

REMEMBER: These are just examples. Feel free to take this function (and any other one that we offer) and customize them to your heart's desire.
