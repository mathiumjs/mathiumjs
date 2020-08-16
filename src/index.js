// Perfect Square Formula
function perfectSquare(term1, operation, term2) {
    unsquaredTerm1 = "(" + term1 + ")";
    unsquaredTerm2 = "(" + term2 + ")";

    convertedTerm1 = "(" + term1 + "^2)  ";
    convertedMiddleTerm = "2" + unsquaredTerm1 + unsquaredTerm2 + "  ";
    convertedTerm2 = "(" + term2 + "^2)  ";

    wholeAdded = convertedTerm1 + "+ " +  convertedMiddleTerm + "+ " + convertedTerm2;
    wholeSub = convertedTerm1 + "- " +  convertedMiddleTerm + "- " +  convertedTerm2;

    if(operation == "+") {
        return wholeAdded;
    }
    else if(operation == "-") {
        return wholeSub;
        }
}

module.exports.perfectSquare = perfectSquare;

// Difference of Squares Formula
function diffOfSquares(term1, term2) {
    var preEquation = (term1 + term2) * (term1 - term2);
    var squaredTerm1;
    var squaredTerm2;
    var ifTerm1String;
    var ifTerm2String;
    var stringedTerm1;
    var stringedTerm2;

    if(Number.isInteger(term1) && !Number.isInteger(term2)) {
        return squaredTerm1 =  term1 * term1;
    }
    else if(Number.isInteger(term2) && !Number.isInteger(term1)) {
        return squaredTerm2 = term2 * term2;
    }
    else if (Number.isInteger(term1) && Number.isInteger(term2)) {
        squaredTerm1 = term1 * term1
        squaredTerm2 = term2 * term2
        return squaredTerm1 + "-" + squaredTerm2
    }
    else if(typeof term1 == "string" && typeof term2 == "number") {
        return stringedTerm1 = term1 + "^2";
    }
    else if(typeof term2 == "string" && typeof term1 == "number") {
        return stringedTerm2 = term2 + "^2";
    } 
    else if(typeof term1 == "string" && typeof term2 == "string") {
        stringedTerm1 = term1 + "^2"
        stringedTerm2 = term2 + "^2"
        return stringedTerm1 + "-" + stringedTerm2
    }
    else if (Number.isInteger(term1) && Number.isInteger(term2)) {
        squaredTerm1 = term1 * term1
        squaredTerm2 = term2 * term2
        return squaredTerm1 + "-" + squaredTerm2
    }
  else if(typeof term1 == "string" && typeof term2 == "string") {
        return stringedTerm1 + "-" + stringedTerm2
    } 
    
}

module.exports.diffOfSquares = diffOfSquares;


function numberToThePowerOf(number, exponent) {
    var stringedNum = "(" + number + ")^" + exponent;

  if(Number.isInteger(number)) {
    return Math.pow(number, exponent);
  }
  else if(Number.isInteger(number) != true) {
    return stringedNum;
    }
}

module.exports.numberToThePowerOf = numberToThePowerOf;

// Sine
function findSine(opp, hypotenuse) {
    var updatedSine = Math.sin(opp, hypotenuse);

    if(Number.isInteger(opp) && Number.isInteger(hypotenuse)) {
        return updatedSine;
    }
    else if(typeof opp == "string" && typeof hypotenuse == "string") {
        return "Invalid input. Try an integer instead :)."
    }
}

module.exports.findSine = findSine;


// Cosine
function findCosine(adj, hypotenuse) {
    var updatedCosine = Math.cos(adj, hypotenuse);

    if(Number.isInteger(adj) && Number.isInteger(hypotenuse)) {
        return updatedCosine;
    }
    else if(typeof adj == "string" && typeof hypotenuse == "string") {
        return "Invalid input. Try an integer instead :)."
    }
}

module.exports.findCosine = findCosine;


// Tangent
function findTangent(opp, adj) {
    var updatedTangent = Math.tan(opp, adj);

    if(Number.isInteger(adj) && Number.isInteger(hypotenuse)) {
        return updatedTangent;
    }
    else if(typeof adj == "string" && typeof hypotenuse == "string") {
        return "Invalid input. Try an integer instead :)."
    }
}

module.exports.findTangent = findTangent;


// Degrees to Radian
function degToRad(degrees) {
    return degrees * (Math.PI / 180);
}


module.exports.degToRad = degToRad;


// Radian to Degrees
function radToDeg(rad) {
    return rad / (Math.PI / 180);
}

module.exports.radToDeg = radToDeg;


