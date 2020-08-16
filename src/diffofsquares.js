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