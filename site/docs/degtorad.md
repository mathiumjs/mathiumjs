---
id: degtorad
title: 🐊  Degrees to Radians
---

## `degToRad(degrees)`

In order to implement the degrees to radians formula in our code with Mathium, we must call the function using Mathium's API, as such:

```ts
import * as Mathium from "mathiumjs";

let formula = Mathium.degToRad(degrees);
```

NOTE: The name Mathium after \* as is arbitrary; it can be replaced with whatever you'd like:

```ts
import * as foo from "mathiumjs";

let formula = foo.degToRad(degrees);
```

## Concept

When converting from degrees to radians, we must implement the following function:

`π rad = 180 degrees`

NOTE: In the equation above, `π` is the symbol for `pi (3.141592...)`, and `rad` stands for `radians`.

In our Mathium code, it's important to note the following:

| In-Equation | In-Code |
| ----------- | ------- |
| degrees     | degrees |

## Example 1: degToRad(8)

When used in our code, we can make it look like the following:

```ts
import * as Mathium from "mathiumjs";

function degToRad(degrees) {
  let formula = Mathium.degToRad(degrees);
  return formula;
}

// Test the function
console.log(degToRad(8));
```

This function will return `0.13962634016` radians as the answer.

## Example 2: degToRad(347)

When used in our code, we can make it look like the following:

```ts
import * as Mathium from "mathiumjs";

function degToRad(347) {
  let formula = Mathium.degToRad(degrees);
  return formula;
}

// Test the function
console.log(degToRad(347));
```

This function will return `6.0562925044` radians as the answer.

REMEMBER: These are just examples. Feel free to take this function (and any other one that we offer) and customize them to your heart's desire.
