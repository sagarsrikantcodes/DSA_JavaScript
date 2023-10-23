// Infix Conversions

/*

1. You are given an infix expression.
2. You are required to convert it to postfix and print it.
3. You are required to convert it to prefix and print it.


Input Format
Input is managed for you

Output Format
postfix
prefix

Constraints
1. Expression is balanced
2. The only operators used are +, -, *, /
3. Opening and closing brackets - () - are used to impact precedence of operations
4. + and - have equal precedence which is less than * and /. * and / also have equal precedence.
5. In two operators of equal precedence give preference to the one on left.
6. All operands are single digit numbers.

Sample Input
infix => "a*(b-c+d)/e"

Sample Output
postfix => "abc-d+*e/""
prefix => "/*a+-bcde"

Complexity Analysis:
- Time Complexity = O(N) since we are pushing and popping the elements in operators, prefix and postfix stacks and traversing through the string expression just once.

- Space Complexity = O(N) since we are using stack to store elements of the string expression of length N amongst different stacks. 

*/

function getPrefixExpression(val1, val2, op) {
  return op + val1 + val2;
}

function getPostExpression(val1, val2, op) {
  return val1 + val2 + op;
}

function getOrderOfPrecedence(char) {
  if (char === '+' || char === '-') {
    return 1;
  } else {
    return 2;
  }
}

function printResults(expression) {
  let operatorsStack = new Array();
  let prefixStack = new Array();
  let postfixStack = new Array();
  let preRes;
  let postRes;

  for (let i = 0; i < expression.length; i += 1) {
    let char = expression.charAt(i);
    if (char === '(') {
      operatorsStack.push(char);
    } else if (char !== '(' && char !== ')' && char !== '+' &&
      char !== '-' && char !== '*' && char !== '/') {
      prefixStack.push(char);
      postfixStack.push(char);
    } else if (char === ')') {
      while (operatorsStack[operatorsStack.length - 1] !== '(') {
        let op = operatorsStack.pop();
        let v2pre = prefixStack.pop();
        let v1pre = prefixStack.pop();
        preRes = getPrefixExpression(v1pre, v2pre, op);
        prefixStack.push(preRes);
        let v2post = postfixStack.pop();
        let v1post = postfixStack.pop();
        postRes = getPostExpression(v1post, v2post, op);
        postfixStack.push(postRes);
      }

      operatorsStack.pop();
    } else {
      if (char === '+' || char === '-' || char === '*' || char === '/') {
        while (operatorsStack.length > 0 &&
          getOrderOfPrecedence(operatorsStack[operatorsStack.length - 1]) >= getOrderOfPrecedence(char) &&
          operatorsStack[operatorsStack.length - 1] !== '('
        ) {
          let op = operatorsStack.pop();
          let v2pre = prefixStack.pop();
          let v1pre = prefixStack.pop();
          preRes = getPrefixExpression(v1pre, v2pre, op);
          prefixStack.push(preRes);
          let v2post = postfixStack.pop();
          let v1post = postfixStack.pop();
          postRes = getPostExpression(v1post, v2post, op);
          postfixStack.push(postRes);
        }

        operatorsStack.push(char);
      }
    }
  }

  while (operatorsStack.length > 0) {
    let op = operatorsStack.pop();
    let v2pre = prefixStack.pop();
    let v1pre = prefixStack.pop();
    preRes = getPrefixExpression(v1pre, v2pre, op);
    prefixStack.push(preRes);
    let v2post = postfixStack.pop();
    let v1post = postfixStack.pop();
    postRes = getPostExpression(v1post, v2post, op);
    postfixStack.push(postRes);
  }

  console.log(postfixStack.pop());
  console.log(prefixStack.pop());
}

printResults("a*(b-c+d)/e");
/*

Output
"abc-d+*e/" for postfix expression
"/*a+-bcde" for prefix expression

*/

printResults("2*(6-4+8)/3");
/*

Output
"264-8+*3/" for postfix expression
"/*2+-6483" for prefix expression

*/









