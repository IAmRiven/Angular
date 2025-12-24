

export function whatsMyType<T>(arg: T): T {
    return arg;
}

let amIString = whatsMyType<string>('Hola mundo');
let amINumer = whatsMyType<number>(2);
let amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);

console.log(amIString.split(' '))
console.log(amINumer.toFixed())
console.log(amIArray.join('-'))