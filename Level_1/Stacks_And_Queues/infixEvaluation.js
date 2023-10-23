// Infix Evaluation

/*
Test Case - 1
Input: Expression = "2 + 6 * 4 / 8 - 3"
Output: 2

Algorithm:

We will take two stacks one for operator and another for operand.

Now while scanning the expression, as soon as we get an operand we push that in the operand stack.

If we get an opening bracket while scanning the expression, we push that in the operator stack.

If we get a closing bracket while scanning the expression, we pop the items of the operator stack until we get an opening bracket. And as soon as we get an opening bracket we pop that out too.

If an operator comes then all the operators in the operator stack with greater or equal precedence gets pop out until we get an opening bracket or the operator stack empties out. And then we push our current operator.

And whenever an operator is popped out then at the same time two elements from the operand stack are also popped out and an operation is performed using two operands and one operator. While performing this operation, operand that is popped out second will be placed first and operand which is popped out first will be placed second i.e. after operator.

Then the solved value needs to be pushed into the operand stack.

// Complexity Analysis:

Time Complexity :
The complexity of this is O(n) because only a for loop is running n times, which is the size of the given expression.

Space Complexity:
2 stacks are used but at any moment the total space used will be less than or equal to O(n), making the space complexity O(n).

*/

function orderOfPrecedence(char) {
  if (char === '+' || char === '-') {
    return 1;
  } else if (char === '/' || char === '*') {
    return 2;
  }
}

function resultOfOperation(val1, val2, char) {
  if (char === '+') {
    return val1 + val2;
  } else if (char === '-') {
    return val1 - val2;
  } else if (char === '*') {
    return val1 * val2;
  } else {
    return Math.floor(val1 / val2);
  }
}

function getInfixExpressionValue(expression) {
  let operandStack = new Array();
  let operatorStack = new Array();

  for (let i = 0; i < expression.length; i += 1) {
    let char = expression.charAt(i);
    if (char >= '0' && char <= '9') {
      operandStack.push(Number(char));
    } else if (char === '(') {
      operatorStack.push(char);
    } else if (char === ')') {
      while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1] !== '(') {
        let op = operatorStack.pop();
        let val2 = operandStack.pop();
        let val1 = operandStack.pop();
        let value = resultOfOperation(val1, val2, op);
        operandStack.push(value);
      }

      operatorStack.pop();
    } else {
      if (char === '+' || char === '-' || char === '*' || char === '/') {
        while (operatorStack.length > 0 && orderOfPrecedence(operatorStack[operatorStack.length - 1]) >= orderOfPrecedence(char)
          && operatorStack[operatorStack.length - 1] !== '(') {
          let op = operatorStack.pop();
          let val2 = operandStack.pop();
          let val1 = operandStack.pop();
          let value = resultOfOperation(val1, val2, op);
          operandStack.push(value);
        }
        operatorStack.push(char);
      }
    }
  }

  console.log(operandStack); // [ 2, -4 ]
  console.log(operatorStack); // [ '+' ]

  while (operatorStack.length > 0) {
    let val2 = operandStack.pop();
    let val1 = operandStack.pop();
    let op = operatorStack.pop();
    let opVal = resultOfOperation(val1, val2, op);
    operandStack.push(opVal);
  }

  console.log(operandStack); // [-2]

  return operandStack.pop();
}

console.log(getInfixExpressionValue("2+(5-3*6/2)")); // -2
console.log(getInfixExpressionValue("2+2*6")); // 14
console.log(getInfixExpressionValue("1*2+1")); // 3












