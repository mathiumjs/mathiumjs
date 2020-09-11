export * from './methods';
declare const _default: {
    /**
     *
     * @param term1 Variable a
     * @param term2 Variable b
     * @param operation
     */
    perfectSquare(term1: any, term2: any, operation: "+" | "-"): void;
    /**
     *
     * @param term1
     * @param term2
     */
    diffOfSquares(term1: any, term2: any): string | number | undefined;
    /**
     *
     * @param integer
     * @param exponent
     */
    numberToThePowerOf(integer: number, exponent: number): number;
    /**
     *
     * @param adj
     */
    findCosine(adj: number, hypotenuse: number): number;
    /**
     *
     * @param opp
     * @param hypotenuse
     */
    findSine(opp: number, hypotenuse: number): number;
    /**
     *
     * @param opp A numeric expression that contains an angle measured in radians.
     */
    findTangent(opp: number): number;
    /**
     *
     * @param degrees Input of degrees to convert to Radian
     */
    degToRad(degrees: number): number;
    /**
     *
     * @param rad Input of Radian to convert to Degrees
     */
    radToDeg(rad: number): number;
    /**
     *
     * @param radius
     * @param solveFor
     */
    circleCalculator(radius: number, solveFor: "diameter" | "circumference" | "area"): number;
    statisticCall(arr: number[], solveFor: "mean" | "median" | "mode" | "range" | "standard deviation"): number | undefined;
};
export default _default;
