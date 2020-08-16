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