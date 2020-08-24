"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findStandardDeviation = exports.findRange = exports.findMode = exports.findMedian = exports.findMean = exports.perfectSquare = exports.diffOfSquares = exports.numberToThePowerOf = exports.findSine = exports.findCosine = exports.findTangent = exports.radToDeg = exports.degToRad = exports.solveForArea = exports.solveForCircumference = exports.solveForDiameter = void 0;
// const pi = 3.14159265359;
const exponentSub = ["\u2070", "\u00b9", "\u00b2", "\u00b3", "\u2074", "\u2075", "\u2076", "\u2077", "\u2078", "\u2079"];
exports.solveForDiameter = (radius) => {
    return radius * 2;
};
exports.solveForCircumference = (radius) => {
    return 2 * Math.PI * radius;
};
exports.solveForArea = (radius) => {
    return Math.PI * (radius * radius);
};
exports.degToRad = (degrees) => {
    return degrees * (Math.PI / 180);
};
exports.radToDeg = (rad) => {
    return rad / (Math.PI / 180);
};
exports.findTangent = (opp) => {
    return Math.tan(opp);
};
exports.findCosine = (adj) => {
    return Math.cos(adj);
};
exports.findSine = (opp) => {
    return Math.cos(opp);
};
exports.numberToThePowerOf = (integer, exponent) => {
    return Math.pow(integer, exponent);
};
exports.diffOfSquares = (term1, term2) => {
    let squaredTerm1;
    let squaredTerm2;
    let stringedTerm1;
    let stringedTerm2;
    if (Number.isInteger(term1) && !Number.isInteger(term2)) {
        return squaredTerm1 = term1 * term1;
    }
    else if (!Number.isInteger(term1) && Number.isInteger(term2)) {
        return squaredTerm2 = term2 * term2;
    }
    else if (Number.isInteger(term1) && Number.isInteger(term2)) {
        squaredTerm1 = term1 * term1;
        squaredTerm2 = term2 * term2;
        return squaredTerm1 + " - " + squaredTerm2;
    }
    else if (typeof term1 == "string" && typeof term2 == "number") {
        return (stringedTerm1 = term1 + exponentSub[2]);
    }
    else if (typeof term2 == "string" && typeof term1 == "number") {
        return (stringedTerm2 = term2 + exponentSub[2]);
    }
    else if (typeof term1 == "string" && typeof term2 == "string") {
        stringedTerm1 = term1 + exponentSub[2];
        stringedTerm2 = term2 + exponentSub[2];
        return stringedTerm1 + " - " + stringedTerm2;
    }
    else if (Number.isInteger(term1) && Number.isInteger(term2)) {
        squaredTerm1 = term1 * term1;
        squaredTerm2 = term2 * term2;
        return squaredTerm1 + " - " + squaredTerm2;
    }
    else if (typeof term1 == "string" && typeof term2 == "string") {
        stringedTerm1 = term1;
        stringedTerm2 = term2;
        return stringedTerm1 + " - " + stringedTerm2;
    }
    ;
};
exports.perfectSquare = (term1, term2, operation) => {
    let unsquaredTerm1 = `(${term1})`;
    let unsquaredTerm2 = `(${term2})`;
    let convertedMidTerm = `2${unsquaredTerm1 + unsquaredTerm2}`;
    let convertedTerm1 = `(${term1}${exponentSub[2]})`;
    let convertedTerm2 = `(${term2}${exponentSub[2]})`;
    const wholeEquation = `${convertedTerm1} ${operation} ${convertedMidTerm} ${operation} ${convertedTerm2}`;
};
exports.findMean = (inputArray) => {
    let sumOfArray = 0;
    for (let i = 0; i < inputArray.length; i++) {
        sumOfArray += inputArray[i];
    }
    return sumOfArray / inputArray.length;
};
//add median under this comment
exports.findMedian = (array) => {
    const arrayInOrder = array.sort();
    let medianP1 = 0;
    if (arrayInOrder.length & 1) {
        medianP1 = (arrayInOrder.length + 1) / 2;
        return arrayInOrder[medianP1 - 1];
    }
    else {
        medianP1 = (arrayInOrder.length + 1) / 2;
        medianP1 = medianP1 + 0.5;
        let num1 = arrayInOrder[medianP1 - 1]; // high val
        let num2 = arrayInOrder[medianP1 - 2]; // low val
        return (num1 + num2) / 2;
    }
};
exports.findMode = (array) => {
    const arrayInOrder = array.sort();
    for (let i = 0; i < arrayInOrder.length; i++) {
        let num1 = arrayInOrder[i];
        let num2 = arrayInOrder[i + 1];
        if (num1 === num2) {
            return num1;
        }
    }
    ;
    return 'There is no mode. No numbers repeat.';
};
exports.findRange = (array) => {
    const arrayInOrder = array.sort();
    let min = arrayInOrder[0];
    let max = arrayInOrder[arrayInOrder.length - 1];
    return max - min;
};
exports.findStandardDeviation = (array) => {
    const arrayInOrder = array.sort();
    let mean1 = exports.findMean(arrayInOrder);
    let sumForSD = [];
    let squaredForSD = [];
    let pushForSD = 0;
    let sumOfSquared = 0;
    let mean2;
    for (let i = 0; i < arrayInOrder.length; i++) {
        pushForSD = arrayInOrder[i] - mean1;
        sumForSD.push(pushForSD);
    }
    for (let k = 0; k < arrayInOrder.length; k++) {
        pushForSD = sumForSD[k] * sumForSD[k];
        squaredForSD.push(pushForSD);
    }
    for (let l = 0; l < arrayInOrder.length; l++) {
        sumOfSquared = sumOfSquared + squaredForSD[l];
    }
    mean2 = sumOfSquared / squaredForSD.length;
    return Math.sqrt(mean2);
};
//# sourceMappingURL=methods.js.map