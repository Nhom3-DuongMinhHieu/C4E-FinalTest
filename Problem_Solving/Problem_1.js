// Option 1:
const findOppositeNumber_1 = (n, inputNumber) => inputNumber > n/2 ? inputNumber - n/2 : inputNumber + n/2;

// Option 2:
const findOppositeNumber_2 = (n, inputNumber) => (n/2 + inputNumber) % n;