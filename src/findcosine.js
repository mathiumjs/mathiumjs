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