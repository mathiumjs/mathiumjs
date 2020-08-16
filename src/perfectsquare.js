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
