// Prefix Evaluation And Conversions

/*
1. You are given a prefix expression.
2. You are required to evaluate it and print it's value.
3. You are required to convert it to infix and print it.
4. You are required to convert it to postfix and print it.

Note -> Use brackets in infix expression for indicating precedence. Check sample input output for more details.

Input Format
Input is managed for you

Output Format
value, a number
infix
prefix

Constraints
1. Expression is a valid prefix expression
2. The only operators used are +, -, *, /
3. All operands are single digit numbers.

Sample Input
-+2/*6483

Sample Output
2
((2+((6*4)/8))-3)
264*8/+3-

*/

function getResult(val1, val2, op) {
  if (op === '+') {
    return val1 + val2;
  } else if (op === '-') {
    return val1 - val2;
  } else if (op === '*') {
    return val1 * val2;
  } else {
    return val1 / val2;
  }
}

function getPrefixEvaluationsAndConversions(expression) {
  let valueStack = new Array();
  let infixStack = new Array();
  let postFixStack = new Array();

  for (let i = expression.length - 1; i >= 0; i -= 1) {
    let char = expression.charAt(i);
    if (char >= '0' && char <= '9') {
      valueStack.push(Number(char));
      infixStack.push(char);
      postFixStack.push(char);
    } else {
      let val1 = valueStack.pop();
      let val2 = valueStack.pop();
      let res = getResult(val1, val2, char);
      valueStack.push(res);
      let inVal1 = infixStack.pop();
      let inVal2 = infixStack.pop();
      let inRes = "(" + inVal1 + char + inVal2 + ")";
      infixStack.push(inRes);
      let postVal1 = postFixStack.pop();
      let postVal2 = postFixStack.pop();
      let postRes = postVal1 + postVal2 + char;
      postFixStack.push(postRes);
    }
  }

  console.log(valueStack.pop());
  console.log(infixStack.pop());
  console.log(postFixStack.pop());
}

getPrefixEvaluationsAndConversions("-+2/*6483");

/*

Output:

2
((2+((6*4)/8))-3)
264*8/+3-

*/