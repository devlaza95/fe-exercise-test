"use strict";
//#region Exercise Group 1
const parseNumber = (input) => {
    const match = /^\d+/.exec(input);
    if (match) {
        return success([{ type: "NUMBER", value: match[0] }], input.slice(match[0].length));
    }
    return failure("Not a number");
};
//#region Exercise 1
/**
 * Write a sumSquares function that sums the square of numbers between the lower bound a and an upper bound b.
 */
function sumSquares(a, b) {
    return a > b ? 0 : a * a + sumSquares(a + 1, b);
}
const sumOfSquares = sumSquares(1, 5);
console.log("Sum of squares: ", sumOfSquares); // 55
//#endregion
//#region Exercise 2
/**
 * Your function should sum the cubes of numbers between the lower bound a and the upper bound b.
 */
function sumCubes(a, b) {
    // recursion runs until a > b, in that case we return 0
    if (a > b) {
        return 0;
    }
    else {
        // Calculate the cube of the current number
        return Math.pow(a, 3) + sumCubes(a + 1, b);
    }
}
const sumOfCubes = sumCubes(1, 5);
console.log("Sum of cubes: ", sumOfCubes); // 225
//#endregion
//#region Exercise 3
/**
 * Your function should sum the factorials of numbers between the lower bound a and the upper bound b.
 */
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
function sumFactorials(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += factorial(i);
    }
    return sum;
}
const sumOfFactorials = sumFactorials(1, 5);
console.log("Sum of factorials: ", sumOfFactorials); // 153
//#endregion
//#region Exercise 4
/**
 * Having implemented sumInts, sumSquares, sumCubes, and sumFactorial, you should notice a pattern emerging. Using this observation, create a more general sumMap function that allows for mapping any function before summing between the bounds [a,b].
 */
/**
 * This is a higher-order function, it takes mapping function and it returns another function that takes
 * the bounds 'a' and 'b' as its parameters.
 * Calculation of the sum of the mapped values between 'a' and 'b' using recursion.
 */
const sumMap = (mapFn) => (a, b) => {
    if (a > b) {
        return 0;
    }
    else {
        return mapFn(a) + sumMap(mapFn)(a + 1, b);
    }
};
const sumMapResult1 = sumMap((x) => x)(1, 5);
const sumMapResult2 = sumMap((x) => x * x)(1, 5);
console.log("Sum map result 1", sumMapResult1); // 15
console.log("Sum map result 2", sumMapResult2); // 55
const sumInts2 = sumMap((value) => value);
const sumSquares2 = sumMap((value) => value * value);
const sumCubes2 = sumMap((value) => value * value * value);
const sumFactorial2 = sumMap(factorial);
console.log("Sum Ints 2: ", sumInts2(1, 5));
console.log("Sum Squares 2: ", sumSquares2(1, 5));
console.log("Sum Cubes 2: ", sumCubes2(1, 5));
console.log("Sum Factorial 2: ", sumFactorial2(1, 5));
//#endregion
//#region Exercise 5
/**
 * Write a prodInts function in the style of sumInts.
 * Your function should compute the product of numbers between the lower bound a and the upper bound of b.
 */
function prodInts(a, b) {
    return a > b ? 1 : a * prodInts(a + 1, b);
}
const prodOfInts = prodInts(1, 5);
console.log("Prod of ints: ", prodOfInts); // 120
//#endregion
//#region Exercise 6
/**
 * Write a prodSquares function that multiplies together
 * the squares of numbers from the lower bound a to the upper bound b.
 */
function prodSquares(a, b) {
    let product = 1;
    for (let i = a; i <= b; i++) {
        product *= i * i;
    }
    return product;
}
const prodOfSquares = prodSquares(1, 5);
console.log("Prod of squares: ", prodOfSquares);
//#endregion
//#region Exercise 7
/**
 * Write a prodCubes function that multiplies together the cubes of numbers
 * from the lower bound a to the upper bound b.
 */
function prodCubes(a, b) {
    let product = 1;
    for (let i = a; i <= b; i++) {
        product *= i * i * i;
    }
    return product;
}
const prodOfCubes = prodCubes(1, 5);
console.log("Prod of cubes: ", prodOfCubes);
//#endregion
//#region Exercise 8
/**
 * Write a prodFactorial function that multiplies together the factorials
 * of numbers from the lower bound a to the upper bound b.
 */
function prodFactorial(a, b) {
    let product = 1;
    for (let i = a; i <= b; i++) {
        product *= factorial(i);
    }
    return product;
}
const prodOfFactorial = prodFactorial(1, 5);
console.log("Prod of factorial: ", prodOfFactorial);
//#endregion
//#region Exercise 9
/**
 * Having implemented prodInts, prodSquares, prodCubes, and prodFactorial, you should recognize a pattern.
 * Design a prodMap function that allows for mapping any function onto numbers in the range before multiplying the results between the bounds a and b.
 */
const prodMap = (mapFn) => (a, b) => {
    let product = 1;
    for (let i = a; i <= b; i++) {
        product *= mapFn(i);
    }
    return product;
};
const prodInts2 = prodMap((value) => value);
const prodSquares2 = prodMap((value) => value * value);
const prodCubes2 = prodMap((value) => value * value * value);
const prodFactorial2 = prodMap(factorial);
console.log("Prod Ints 2: ", prodInts2(1, 5)); // 120
console.log("Prod Squares 2: ", prodSquares2(1, 5)); // 14,400
console.log("Prod Cubes 2: ", prodCubes2(1, 5)); // 1,728,000
console.log("Prod Factorial 2: ", prodFactorial2(1, 5)); // 34,560
//#endregion
//#region Exercise 10
/**
 * By now, you should recognize a pattern between the sumMap and prodMap functions. This observation should guide you in creating a mapReduce function that encompasses the functionalities of both.
 */
const mapReduce = (mapFn, reduceFn, zero) => (a, b) => {
    let result = zero;
    for (let i = a; i <= b; i++) {
        result = reduceFn(result, mapFn(i));
    }
    return result;
};
//#endregion
//#region Exercise 11
/**
 * Refactor the mapReduce function to create mapReduce2, which should accept three parameter groups. This adjustment prepares us to later refactor both sumMap and prodMap functions as constants using mapReduce2.
 */
const mapReduce2 = (reduceFn, zero) => (mapFn) => (a, b) => {
    let result = zero;
    for (let i = a; i <= b; i++) {
        result = reduceFn(result, mapFn(i));
    }
    return result;
};
const sumMap2 = mapReduce2((first, second) => first + second, 0);
const prodMap2 = mapReduce2((first, second) => first + second, 1);
const sumMapResult3 = sumMap((x) => x)(1, 5);
const sumMapResult4 = sumMap((x) => x * x)(1, 5);
console.log("Sum map result 3: ", sumMapResult3);
console.log("Sum map result 4: ", sumMapResult4);
const success = (value, rest) => ({
    success: true,
    value: value,
    rest,
});
const failure = (reason) => ({ success: false, reason });
//#endregion
//#region Exercise 1
/**
 * Develop a parser, parseOperator, that identifies the + and − operators from a given input string.
 * Important: The parser should only recognise operators. Parsing of the parentheses and their contents should be delegated to other parsers.
 */
const parseOperator = (input) => {
    const operators = ["+", "-"];
    const firstChar = input[0];
    if (operators.includes(firstChar)) {
        const operatorToken = {
            type: "OPERATOR",
            value: firstChar,
        };
        return success([operatorToken], input.substring(1));
    }
    return failure("No valid operator found.");
};
const parseOperatorResult1 = parseOperator("1 +");
const parseOperatorResult2 = parseOperator("+ 2");
const parseOperatorResult3 = parseOperator("-3");
console.log("Parse operator result 1: ", parseOperatorResult1);
console.log("Parse operator result 2: ", parseOperatorResult2);
console.log("Parse operator result 3: ", parseOperatorResult3);
//#endregion
//#region Exercise 2
/**
 * Construct a parser, parseOpenParenthesis, designed to identify open parentheses.
 */
const parseOpenParenthesis = (input) => {
    const firstChar = input[0];
    if (firstChar === "(") {
        const openParenthesisToken = {
            type: "OPEN_PARENTHESIS",
            value: "(",
        };
        return success([openParenthesisToken], input.substring(1));
    }
    return failure("Expected '('");
};
const parseOpenParenthesisResult1 = parseOpenParenthesis("(");
const parseOpenParenthesisResult2 = parseOpenParenthesis("+ (");
const parseOpenParenthesisResult3 = parseOpenParenthesis(")");
console.log("Parse open parenthesis result 1: ", parseOpenParenthesisResult1);
console.log("Parse open parenthesis result 2: ", parseOpenParenthesisResult2);
console.log("Parse open parenthesis result 3: ", parseOpenParenthesisResult3);
//#endregion
//#region Exercise 3
/**
 * Construct a parser named parseCloseParenthesis that is designed to detect closed brackets.
 */
const parseCloseParenthesis = (input) => {
    const firstChar = input[0];
    if (firstChar === ")") {
        const closeParenthesisToken = {
            type: "CLOSE_PARENTHESIS",
            value: ")",
        };
        return success([closeParenthesisToken], input.substring(1));
    }
    return failure("Expected ')'");
};
const parseCloseParenthesisResult1 = parseCloseParenthesis(")");
const parseCloseParenthesisResult2 = parseCloseParenthesis("+ )");
const parseCloseParenthesisResult3 = parseCloseParenthesis("()");
console.log("Parse close parenthesis result 1: ", parseCloseParenthesisResult1);
console.log("Parse close parenthesis result 2: ", parseCloseParenthesisResult2);
console.log("Parse close parenthesis result 3: ", parseCloseParenthesisResult3);
//#endregion
//#region Exercise 4
/**
 * Have you noticed the similarity between the parsers for open and close brackets? Let’s be efficient and create a generic function named parseCharacter. This function will take in a character and a token type and return the appropriate parser result.
 */
const parseCharacter = (char, tokenType) => (input) => {
    const firstChar = input[0];
    if (firstChar === char) {
        const token = {
            type: tokenType,
            value: char,
        };
        return success([token], input.substring(1));
    }
    return failure(`Expected '${char}'`);
};
const parseOpenParenthesisResult4 = parseCharacter("(", "OPEN_PARENTHESIS");
const parseCloseParenthesisResult4 = parseCharacter(")", "CLOSE_PARENTHESIS");
console.log("Parse open parenthesis result 4: ", parseOpenParenthesisResult4("("));
console.log("Parse close parenthesis result 4: ", parseCloseParenthesisResult4(")"));
//#endregion
//#region Exercise 5
/**
 * Before refactoring the parseOperator with the parseCharacter function, there’s another thing to address. We need a choice function. This handy operator will help us decide between two parsers.
 */
/**
 * Function tries to parse usin p1, if succeeds it returns the result. If p1 fails, it tries to parse the input using p2...
 */
const choice = (p1, p2) => (input) => {
    const result1 = p1(input);
    if (result1.success) {
        return result1;
    }
    else {
        const result2 = p2(input);
        return result2;
    }
};
//#endregion
//#region Exercise 6
/**
 * Refactor the parseOperator by leveraging the parseCharacter and choice parsers.
 */
const parseOperator2 = choice(parseCharacter("+", "OPERATOR"), parseCharacter("-", "OPERATOR"));
const parseOperator2Result1 = parseOperator2("1 +");
const parseOperator2Result2 = parseOperator2("+ 2");
const parseOperator2Result3 = parseOperator2("-3");
console.log("Parse operator 2 result 1: ", parseOperator2Result1);
console.log("Parse operator 2 result 2: ", parseOperator2Result2);
console.log("Parse operator 2 result 3: ", parseOperator2Result3);
//#endregion
//#region Exercise 7
/**
    The choice operator is somewhat limiting. Let’s introduce a choiceN, which allows us to pick between any number of parsers.
 */
const choiceN = (parsers) => (input) => {
    for (let parser of parsers) {
        const result = parser(input);
        if (result.success) {
            return result;
        }
    }
    return failure("Choice parser: All choices failed on input!");
};
//#endregion
//#region Exercise 8
/**
 * Up until now, we’ve parsed strings that start with a number or an operator. Let’s now dive into combination operators. These will en- able us to stitch two parsers together. The task at hand is to write the zip parser. When provided two parsers, it should combine their outputs in the result.
 */
const zip = (parser1, parser2) => (input) => {
    const result1 = parser1(input);
    if (result1.success) {
        const result2 = parser2(result1.rest.trim());
        if (result2.success) {
            return success([...result1.value, ...result2.value], result2.rest);
        }
    }
    return failure("Not a number. Not an operator.");
};
const zipResult1 = zip(parseNumber, parseOperator)("1+");
const zipResult2 = zip(parseNumber, parseOperator)("+1");
const zipResult3 = zip(parseNumber, parseOperator)("1+2+3");
console.log("Zip result 1: ", zipResult1);
console.log("Zip result 2: ", zipResult2);
console.log("Zip result 3: ", zipResult3);
//#endregion
//#region Exercise 9
const isEmpty = (input) => {
    if (input === "")
        return success([], "");
    else
        return failure("Not an empty string");
};
/**
 *
 * It takes a parser function
 * Recursive parser applies the given parser function to the input string
 * If the parser succeeds, it continues parsing the remaining input by making a
 * recursive call to doUntil(parser)(result.rest)
 * The doUntil will return recursiveParser function that retains access to the
 * "parser" argument because of the closure mechanism. When provided with an
 * input string, it starts the parsing process based on the provided 'parser'
 * function
 *
 */
function doUntil(parser) {
    return (input) => {
        const recursiveParser = choiceN([
            zip(parser, doUntil(parser)),
            isEmpty,
        ]);
        return recursiveParser(input);
    };
}
const doUntilResult1 = doUntil(choiceN([parseNumber, parseOperator]))("1+2");
const doUntilResult2 = doUntil(choiceN([parseNumber, parseOperator]))("1+(");
console.log("Do until result 1: ", doUntilResult1);
console.log("Do until result 2: ", doUntilResult2);
//#endregion
//#region Exercise 10
const tokenParsers = [
    parseNumber,
    parseOperator,
    parseOpenParenthesis,
    parseCloseParenthesis,
];
const tokenizer = choiceN(tokenParsers);
const testExpressions = [
    "1 + (2 - 3)",
    "(1 + 2) * 3",
    "10 - 5",
    "(8 + 2",
    "+ 5",
    "This will fail!",
];
testExpressions.forEach((expression) => {
    const result = tokenizer(expression);
    console.log(`Input: ${expression}`);
    if (result.success) {
        console.log(`Tokens: ${JSON.stringify(result.value)}`);
        console.log(`Rest: ${result.rest}`);
    }
    else {
        console.log(`Error: ${result.reason}`);
    }
    console.log("------------------------");
});
//#endregion
//#endregion
