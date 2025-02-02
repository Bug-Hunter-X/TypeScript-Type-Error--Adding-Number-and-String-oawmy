function printNumber(num: number): void {
  console.log(num);
}

function calculate(x: number, y: number): number {
  return x + y;  //forgot to handle potential errors
}

const result = calculate(5, 'hello');
printNumber(result);