function solveEquation(equation) {
    equation = equation.replace(/\s/g, "");
    if (equation.startsWith('-')) {
        let regExp1 = /[-+]\d+/g;
        let ABC = equation.match(regExp1);
        console.log(ABC);
        let a = parseInt(ABC[0]);
        let b = parseInt(ABC[1]);
        let c = parseInt(ABC[2]);
        let answer = [];
        answer[0]= (- b + Math.sqrt(Math.pow(b,2)- 4 * a * c)) / (2 * a)
        answer[1]= (- b - Math.sqrt(Math.pow(b,2)- 4 * a * c)) / (2 * a)
        console.log(answer);
    } else {
        let regExp = /\d+/;
        let regExp1 = /[-+]\d+/g;
        let A = equation.match(regExp);
        let BC = equation.match(regExp1);
        console.log(A,BC);
        let a = parseInt(A[0]);
        let b = parseInt(BC[0]);
        let c = parseInt(BC[1]);
        let answer = [];
        answer[0]= (- b + Math.sqrt(Math.pow(b,2)- 4 * a * c)) / (2 * a)
        answer[1]= (- b - Math.sqrt(Math.pow(b,2)- 4 * a * c)) / (2 * a)
        console.log(answer);
    }
    return answer
}

    solveEquation('-20 * x^2 - 108797540 * x - 130011773690520')