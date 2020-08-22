// const pi = 3.14159265359;
const exponentSub = ["\u2070", "\u00b9", "\u00b2", "\u00b3", "\u2074", "\u2075", "\u2076", "\u2077", "\u2078", "\u2079"];

export const solveForDiameter: Function = (radius: number) => {
  return radius * 2;
};

export const solveForCircumference: Function = (radius: number) => {
  return 2 * Math.PI * radius;
};

export const solveForArea: Function = (radius: number) => {
  return Math.PI * (radius * radius);
};

export const degToRad: Function = (degrees: number) => {
  return degrees * (Math.PI / 180);
};

export const radToDeg: Function = (rad: number) => {
  return rad / (Math.PI / 180);
};

export const findTangent: Function = (opp: number) => {
  return Math.tan(opp);
};

export const findCosine: Function = (adj: number) => {
  return Math.cos(adj)
};

export const findSine: Function = (opp: number) => {
  return Math.cos(opp)
}

export const numberToThePowerOf: Function = (integer: number, exponent: number) => {
  return Math.pow(integer, exponent)
}

export const diffOfSquares: Function = (term1: number, term2: number) => {
  let squaredTerm1: number;
  let squaredTerm2: number;
  let stringedTerm1: string;
  let stringedTerm2: string;


  if(Number.isInteger(term1) && !Number.isInteger(term2)) {
      return squaredTerm1 = term1 * term1;
  } else if(!Number.isInteger(term1) && Number.isInteger(term2)) {
      return squaredTerm2 = term2 * term2;
  } else if(Number.isInteger(term1) && Number.isInteger(term2)) {
      squaredTerm1 = term1 * term1;
      squaredTerm2 = term2 * term2;
      return squaredTerm1 + " - " + squaredTerm2;
  } else if (typeof term1 == "string" && typeof term2 == "number") {
      return (stringedTerm1 = term1 + "^2");
  } else if (typeof term2 == "string" && typeof term1 == "number") {
      return (stringedTerm2 = term2 + "^2");
  } else if (typeof term1 == "string" && typeof term2 == "string") {
      stringedTerm1 = term1 + "^2";
      stringedTerm2 = term2 + "^2";
      return stringedTerm1 + " - " + stringedTerm2;
  } else if (Number.isInteger(term1) && Number.isInteger(term2)) {
      squaredTerm1 = term1 * term1;
      squaredTerm2 = term2 * term2;
      return squaredTerm1 + " - " + squaredTerm2;
  } else if (typeof term1 == "string" && typeof term2 == "string") {
      stringedTerm1 = term1
      stringedTerm2 = term2
      return stringedTerm1 + " - " + stringedTerm2;
  };
}

export const perfectSquare: Function = (term1, term2, operation: "+" | "-") => {
  let unsquaredTerm1: string = `(${term1})`;
  let unsquaredTerm2: string = `(${term2})`;

  let convertedMidTerm: string = `2${unsquaredTerm1 + unsquaredTerm2}`;
  let convertedTerm1: string = `(${term1}^2)`;
  let convertedTerm2: string = `(${term2}^2)`;

  const wholeEquation: string = `${convertedTerm1} ${operation} ${convertedMidTerm} ${operation} ${convertedTerm2}`; 
}

export const findMean = (inputArray) => {
    let sumOfArray = 0;
    for(let i = 0; i < inputArray.length; i++) {
        sumOfArray += inputArray[i];
    }
    return sumOfArray / inputArray.length;
}

//add median under this comment
export const findMedian = (array: number[]) => {
    const arrayInOrder = array.sort()
    let medianP1 = 0;

    if (arrayInOrder.length & 1) {
        medianP1 = (arrayInOrder.length + 1) / 2;
        return arrayInOrder[medianP1 - 1];
      } else {
        medianP1 = (arrayInOrder.length + 1) / 2;
        medianP1 = medianP1 + 0.5;
        let num1 = arrayInOrder[medianP1 - 1]; // high val
        let num2 = arrayInOrder[medianP1 - 2]; // low val
        return (num1 + num2) / 2;
      }
}


export const findMode = (array: number[]) => {
    const arrayInOrder = array.sort()
    for(let i = 0; i < arrayInOrder.length; i++) {
        let num1 = arrayInOrder[i];
        let num2 = arrayInOrder[i + 1];
        if(num1 === num2) {
            return num1;
        }
    };
    return 'There is no mode. No numbers repeat.';
}

export const findRange = (array: number[]) => {
    const arrayInOrder = array.sort()
    let min = arrayInOrder[0];
    let max = arrayInOrder[arrayInOrder.length - 1];

    return max - min;
}

export const findStandardDeviation = (array: number[]) => {
    const arrayInOrder = array.sort();
    let mean1 = findMean(arrayInOrder);
    let sumForSD: number[] = [];
    let squaredForSD: number[] = [];
    let pushForSD: number = 0;
    let sumOfSquared: number = 0;
    let mean2;

    for(let i = 0; i < arrayInOrder.length; i++) {
        pushForSD = arrayInOrder[i] - mean1;
        sumForSD.push(pushForSD);
    }

    for(let k = 0; k < arrayInOrder.length; k++) {
        pushForSD = sumForSD[k] * sumForSD[k];
        squaredForSD.push(pushForSD);
    }

    for(let l = 0; l < arrayInOrder.length; l++) {
        sumOfSquared = sumOfSquared + squaredForSD[l];
    }

    mean2 = sumOfSquared / squaredForSD.length;

    return Math.sqrt(mean2)
}