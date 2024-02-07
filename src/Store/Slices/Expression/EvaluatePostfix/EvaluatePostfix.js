function EvaluatePostfix(postfix) {
    let stack = [];
    let number = '';

    for(let i = 0; i < postfix.length; i++){
        let c = postfix[i];
        if(c.match(/\d/) || c === '.')
            number += c;
        else if(c === ' '){
            stack.push(number);
            number = '';
        }
        else {
            let operandOne = Number(stack.pop());
            let operandTwo = Number(stack.pop());
            let currentResult;

            if(c === '+')
                currentResult = operandOne + operandTwo;
            else if(c === '-')
                currentResult = operandTwo - operandOne;
            else if(c === 'x')
                currentResult = operandOne * operandTwo;
            else if(c === '/')
                currentResult = operandTwo / operandOne;

            stack.push(currentResult);
        }
    }

    return stack[0] + '';

}

export default EvaluatePostfix;