function generateFibonacci(n) {
   

  let num1 = 0;
  let num2 = 1;
  let sum;
  for (i = 2; i < n; i++) {
      sum = num1 + num2;
      num1 = num2;
      num2 = sum;
  }
  return num2;
}

  const n = 8;
  const fibonacciSequence = generateFibonacci(n);
  
  console.log(fibonacciSequence);
  