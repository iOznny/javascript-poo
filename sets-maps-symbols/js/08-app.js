// New Iterators

const cities = ['Londres', 'Los Angeles', 'Monaco', 'Paris'];
const orders = new Set([123, 323, 432, 102]);
const data = new Map();

data.set('name', 'Demo');
data.set('career', 'Software Engineer');

// Default Iterator
for (let city of cities) {
    console.log(cities);
}

for (let order of orders) {
    console.log(order);
}

for (let d of data) {
    console.log(d);
}

// Entry Iterator (Key, Value)
for (let entry of cities.entries()) {
    console.log('Entry Iterator', entry);
}

for (let entry of orders.entries()) {
    console.log('Entry Iterator', entry);
}

for (let entry of data.entries()) {
    console.log('Entry Iterator', entry);
}

// Keys Iterator (Key)
for (let keys of cities.keys()) {
    console.log('Keys Iterator', keys);
}

for (let keys of orders.keys()) {
    console.log('Keys Iterator', keys);
}

for (let keys of data.keys()) {
    console.log('Keys Iterator', keys);
}

// Values Iterator (Value)
for (let value of cities.values()) {
    console.log('Values Iterator', value);
}

for (let value of orders.values()) {
    console.log('Values Iterator', value);
}

for (let value of data.values()) {
    console.log('Values Iterator', value);
}

