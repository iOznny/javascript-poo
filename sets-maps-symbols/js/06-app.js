// Iterators

function createIterator(car) {
    let i = 0;

    return {
        next: () => {
            const end = (i >= car.length);
            const value = !end ? car[i++] : undefined;
            return { end, value };
        }
    }
}

const car = ['P1', 'P2', 'P3'];

// Use the iterator
const tourCart = createIterator(car);

console.log(tourCart.next());
console.log(tourCart.next());
console.log(tourCart.next());
console.log(tourCart.next());
