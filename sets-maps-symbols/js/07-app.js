// Generator

// * allows to identify a generator
function *createGenerator() {
    yield 1;
    yield 'Cesar';
    yield 3 + 3;
    yield true;
}

const iterator = createGenerator();

// console.log(iterator);
// console.log(iterator.next().value);
// console.log(iterator.next().done);
// console.log(iterator);

// Generator for shopping car
function *generateShoppingCar(car) {
    for(let i = 0; i < car.length; i++) {
        yield car[i];
    }
}

const car = ['P1', 'P2', 'P3'];
const iteratorShoppingCar = generateShoppingCar(car);
console.log(iteratorShoppingCar.next());
console.log(iteratorShoppingCar.next());
console.log(iteratorShoppingCar.next());
console.log(iteratorShoppingCar.next());
