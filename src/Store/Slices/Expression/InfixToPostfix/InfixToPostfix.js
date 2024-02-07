const precedence = (operator) => {
    if(operator === 'x' || operator === '/')
        return 2;
    else if(operator === '+' || operator === '-')
        return 1;
}


export default function InfixToPostfix(expression){
    let stack = [];                     //the top of the stack will always have the operator with highest precedence
    let result = ''

    for(let i = 0; i < expression.length; i++){
        let c = expression[i];

        if(c.match(/\d/) || c === '.')
            result += c;
        else {
            result += ' ';
            while(stack.length > 0 && precedence(c) <= precedence(stack[stack.length - 1]))
                result += stack.pop();
            stack.push(c);
        }
    }

    result += ' ';

    while(stack.length)
        result += stack.pop();

    return result;
}
