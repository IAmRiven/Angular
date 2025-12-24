import { Product, taxCalculation } from './06-function-destructuring'

const shoppingCart: Product[] = [
    {
        description: 'Nokia A1',
        price: 100
    },
    {
        description: 'Samsung Galaxy S21',
        price: 150
    }
];

const [total, tax] = taxCalculation({
    tax: 0.2,
    products: shoppingCart
});

console.log(`Total: ${total}`);
console.log(`Tax: ${tax}`);