export interface Product {
    description: string;
    price: number;
}

// const phone: Product = {
//     description: 'Nokia A1',
//     price: 199
// }

// const tablet: Product = {
//     description: 'iPad Air',
//     price: 599
// }

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export function taxCalculation(options: TaxCalculationOptions): [number, number] {
    let total = 0;
    const { tax, products } = options;

    products.forEach(({ price }) => {
        total += price;
    });

    return [total, total * tax];
}

// const shoppingCart = [phone, tablet];
// const tax = 0.15;


// const result = taxCalculation({
//     products: shoppingCart,
//     tax
// });

// const [total, taxTotal] = result;


// console.log(`Total: ${total}`);
// console.log(`Tax: ${taxTotal}`);
