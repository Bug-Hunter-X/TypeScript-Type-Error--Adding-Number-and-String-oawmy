function printNumber(num: number): void {
  console.log(num);
}

function calculate(x: number, y: number): number {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return x + y;
}

try {
  const result = calculate(5, 'hello');
  printNumber(result);
} catch (error) {
  console.error(error.message);
}

//Example with type guard
function isNumber(value: any): value is number {
    return typeof value === 'number';
}

function calculate2(x: any, y: any): number {
    if (!isNumber(x) || !isNumber(y)) {
        throw new Error('Inputs must be numbers');
    }
    return x + y;
}

try{
    const result2 = calculate2(5,'hello');
    printNumber(result2);
} catch(error) {
    console.error(error.message);
}