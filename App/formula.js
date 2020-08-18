// Perfect Square Formula
function perfectSquare(term1, operation, term2) {
    var term1 = document.getElementById("term1").value;
    var operation = document.getElementById("operation").value;
    var term2 = document.getElementById("term2").value;
    
    unsquaredTerm1 = "(" + term1 + ")";
    unsquaredTerm2 = "(" + term2 + ")";

    convertedTerm1 = "(" + term1 + "^2)  ";
    convertedMiddleTerm = "2" + unsquaredTerm1 + unsquaredTerm2 + "  ";
    convertedTerm2 = "(" + term2 + "^2)  ";

    wholeAdded = convertedTerm1 + "+ " +  convertedMiddleTerm + "+ " + convertedTerm2;
    wholeSub = convertedTerm1 + "- " +  convertedMiddleTerm + "- " +  convertedTerm2;

        if(operation == "+") {
             parsedWholeAdded = parseFloat(wholeAdded);
             document.getElementById("answer").innerHTML="The answer is: " + wholeAdded;
        
        }
        else if(operation == "-") {
            parsedWholeAdded = parseFloat(wholeSub);
            document.getElementById("answer").innerHTML="The answer is: " + wholeSub;
       
       }
}

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
console.log(diffOfSquares("8x", "4x"));

function numberToThePowerOf(number, exponent) {
    var number = document.getElementById("number").value;
    var exponent = document.getElementById("exponent").value;
    
    var stringedNum = "(" + number + ")^" + exponent;

    var updatedNumber = Math.pow(number, exponent)
    var result = parseFloat(updatedNumber);

    if(!isNaN(result)) {
        document.getElementById("answer").innerHTML="The answer is: " + result;
    }
    else if(Number.isInteger(number) != true) {
        document.getElementById("answer").innerHTML="The answer is: " + stringedNum;
    }
}

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
console.log(findSine(8, 9));


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
// Degrees to Radian
function degToRad(degrees) {
    return degrees * (Math.PI / 180);
}

// Radian to Degrees
function radToDeg(rad) {
    return rad / (Math.PI / 180);
}


