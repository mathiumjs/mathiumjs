(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function degToRad(degrees) {
    return degrees * (Math.PI / 180);
}
},{}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
function findCosine(adj, hypotenuse) {
    var updatedCosine = Math.cos(adj, hypotenuse);

    if(Number.isInteger(adj) && Number.isInteger(hypotenuse)) {
        return updatedCosine;
    }
    else if(typeof adj == "string" && typeof hypotenuse == "string") {
        return "Invalid input. Try an integer instead :)."
    }
    else if(typeof adj == "string") {
        return "Invalid input. Try an integer instead :)."
  }
    else if(typeof hypotenuse == "string") {
        return "Invalid input. Try an integer instead :)."
  }
}
},{}],4:[function(require,module,exports){
module.exports = function (opp, hypotenuse) {
    var updatedSine = Math.sin(opp, hypotenuse);

    if(Number.isInteger(opp) && Number.isInteger(hypotenuse)) {
        return updatedSine;
    }
    else if(typeof opp == "string" && typeof hypotenuse == "string") {
        return "Invalid input. Try an integer instead :)."
    }
    else if(typeof opp == "string") {
        return "Invalid input. Try an integer instead :)."
  }
    else if(typeof hypotenuse == "string") {
        return "Invalid input. Try an integer instead :)."
  }
}


},{}],5:[function(require,module,exports){
function findTangent(opp, adj) {
    var updatedCosine = Math.tan(opp, adj);

    if(Number.isInteger(opp) && Number.isInteger(adj)) {
        return updatedCosine;
    }
    else if(typeof opp == "string" && typeof adj == "string") {
        return "Invalid input. Try an integer instead :)."
    }
    else if(typeof opp == "string") {
        return "Invalid input. Try an integer instead :)."
  }
    else if(typeof adj == "string") {
        return "Invalid input. Try an integer instead :)."
  }
}
},{}],6:[function(require,module,exports){
var perfectSquare = require('./perfectsquare');
var diffOfSquares = require('./diffofsquares');
var numberToThePowerOf = require('./tothepowerof');
var findSine = require('./findsine');
var findCosine = require('./findcosine');
var findTangent = require('./findtangent');
var degToRad = require('./degtorad');
var radToDeg = require('./radtodeg');

module.exports = {
    perfectSquare,
    diffOfSquares,
    numberToThePowerOf,
    findSine,
    findCosine,
    findTangent,
    degToRad,
    radToDeg
}



},{"./degtorad":1,"./diffofsquares":2,"./findcosine":3,"./findsine":4,"./findtangent":5,"./perfectsquare":7,"./radtodeg":8,"./tothepowerof":9}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
// Radian to Degrees
function radToDeg(rad) {
    return rad / (Math.PI / 180);
}
},{}],9:[function(require,module,exports){
function numberToThePowerOf(number, exponent) {
    var stringedNum = "(" + number + ")^" + exponent;

  if(Number.isInteger(number)) {
    return Math.pow(number, exponent);
  }
  else if(Number.isInteger(number) != true) {
    return stringedNum;
    }
}
},{}]},{},[6]);
