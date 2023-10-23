/*
Postfox Evaluation And Conversions

1. You are given a postfix expression.
2. You are required to evaluate it and print it's value.
3. You are required to convert it to infix and print it.
4. You are required to convert it to prefix and print it.

Note -> Use brackets in infix expression for indicating precedence. Check sample input output for more details.

Input Format
Input is managed for you

Output Format
value, a number
infix
prefix

Constraints
1. Expression is a valid postfix expression
2. The only operators used are +, -, *, /
3. All operands are single digit numbers.

Sample Input
264*8/+3-

Sample Output
2
((2+((6*4)/8))-3) => infix
-+2/*6483 => prefix

*/

function getResult(value1, value2, op) {
  if (op === '+') {
    return value1 + value2;
  } else if (op === '-') {
    return value1 - value2;
  } else if (op === '*') {
    return value1 * value2;
  } else {
    return value1 / value2;
  }
}

function getPostfixEvalConversions(expression) {
  let valueStack = new Array();
  let infixStack = new Array();
  let prefixStack = new Array();

  for (let i = 0; i < expression.length; i += 1) {
    let char = expression.charAt(i);
    if (char >= '0' && char <= '9') {
      valueStack.push(Number(char));
      infixStack.push(char);
      prefixStack.push(char);
    } else {
      let val2 = valueStack.pop();
      let val1 = valueStack.pop();
      let result = getResult(val1, val2, char);
      valueStack.push(result);
      let preVal2 = prefixStack.pop();
      let preVal1 = prefixStack.pop();
      let preRes = char + preVal1 + preVal2;
      prefixStack.push(preRes);
      let inVal2 = infixStack.pop();
      let inVal1 = infixStack.pop();
      let inRes = "(" + inVal1 + char + inVal2 + ")";
      infixStack.push(inRes);
    }
  }

  console.log(valueStack.pop());
  console.log(infixStack.pop());
  console.log(prefixStack.pop());
}

getPostfixEvalConversions("264*8/+3-");
/*
Output:

2
((2+((6*4)/8))-3)
-+2/*6483

*/

