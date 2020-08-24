export * from './methods'

const exponentSub = ["\u2070", "\u00b9", "\u00b2", "\u00b3", "\u2074", "\u2075", "\u2076", "\u2077", "\u2078", "\u2079"];

export default new (class MathiumJS {
    constructor() {
        if(!(this instanceof MathiumJS)) {
          return new MathiumJS()  
        };
    }

    /**
     * 
     * @param term1 Variable a
     * @param term2 Variable b
     * @param operation 
     */
    public perfectSquare(term1, term2, operation: "+" | "-") {
        let unsquaredTerm1: string = `(${term1})`;
        let unsquaredTerm2: string = `(${term2})`;

        let convertedMidTerm: string = `2${unsquaredTerm1 + unsquaredTerm2}`;
        let convertedTerm1: string = `(${term1}${exponentSub[2]})`;
        let convertedTerm2: string = `(${term2}${exponentSub[2]})`;

        const wholeEquation: string = `${convertedTerm1} ${operation} ${convertedMidTerm} ${operation} ${convertedTerm2}`; 
    }

    /**
     * 
     * @param term1 
     * @param term2 
     */
    public diffOfSquares(term1: any, term2: any) {
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
            return (stringedTerm1 = term1 + exponentSub[2]);
        } else if (typeof term2 == "string" && typeof term1 == "number") {
            return (stringedTerm2 = term2 + exponentSub[2]);
        } else if (typeof term1 == "string" && typeof term2 == "string") {
            stringedTerm1 = term1 + exponentSub[2];
            stringedTerm2 = term2 + exponentSub[2];
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

    /**
     * 
     * @param integer 
     * @param exponent 
     */
    public numberToThePowerOf(integer: number, exponent: number) {
        return Math.pow(integer, exponent)
    }

    /**
     * 
     * @param adj 
     */
    public findCosine(adj: number) {
        return Math.cos(adj)
    }

    //Tangent
    /**
     * 
     * @param opp A numeric expression that contains an angle measured in radians.
     */
    public findTangent(opp: number) {
        return Math.tan(opp)
    }

    //Degress to Radian
    /**
     * 
     * @param degrees Input of degrees to convert to Radian
     */
    public degToRad(degrees: number) {
        return degrees * (Math.PI / 180);
    };

    //Radian to Degrees
    /**
     * 
     * @param rad Input of Radian to convert to Degrees
     */
    public radToDeg(rad: number) {
        return rad / (Math.PI / 180);
    };

    //Circle Calculator
    /**
     * 
     * @param radius 
     * @param solveFor 
     */
    public circleCalculator(radius: number, solveFor: "diameter" | "circumference" | "area") {
        const pi: number = 3.14159265359;

        const solveForDiameter = (radius: number) => radius * 2;
        const solveForCircumference = (radius: number) => 2 * pi * radius;
        const solveForArea = (radius: number) => pi * (radius * radius);

        switch(solveFor) {
            case "diameter":
                return solveForDiameter(radius);
                break;
            case "circumference":
                return solveForCircumference(radius);
                break;
            case "area":
                return solveForArea(radius);
                break;
        };
    }

    // Data & Analytics Calculator
    public statisticCall(arr: number[], solveFor: "mean" | "median" | "mode" | "range" | "standard deviation") {
        //Declare variablees
        let sumOfArray: number = 0;
        let arrayInOrder: Array<number> = arr.sort();

        //Find Mean
        const findMean = (inputArray) => {
            for(let i = 0; i < inputArray.length; i++) {
                sumOfArray += inputArray[i];
            }
            return sumOfArray / inputArray.length;
        }

        //Find Median
        const findMedian = () => {
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

        //Find Mode
        const findMode = () => {
            for(let j = 0; j < arrayInOrder.length; j++) {
                let num1 = arrayInOrder[j]; //low val
                let num2 = arrayInOrder[j + 1]; //high val
                if(num1 === num2) {
                    return num1;
                };
            };
        };

        //Find Range
        const findRange = () => {
            let min = arrayInOrder[0];
            let max = arrayInOrder[arrayInOrder.length - 1];

            return min - max;
        }

        //Find SD
        const findStandardDeviation = () => {
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

        switch(solveFor) {
            case 'mean':
                return findMean(arrayInOrder);
                break;
            case 'median':
                return findMedian();
                break;
            case 'mode':
                return findMode();
                break;
            case 'range':
                return findRange();
                break;
            case 'standard deviation':
                return findStandardDeviation();
                break;
        }
    }

    public significantFigures(number: number) {
        let numArray = number.toString().split('');
        return numArray
    }
});