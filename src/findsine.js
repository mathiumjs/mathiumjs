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

