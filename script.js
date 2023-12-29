const data = [
    { name: 'Артур', age: 14 },
    { name: 'Борис', age: 17 },
    { name: 'Владимир', age: 24 },
    { name: 'Григорий', age: 32 },
    { name: 'Дмитрий', age: 24 }
];

// data.forEach((value, index) => {
//     console.log(`Имя: ${value.name}, Возраст ${value.age};`);
// })

// console.log(data[0].age);

// let result = data.find(item => item.age === 24);

// console.log(result);

// let result = data.filter(item => item.age === 24);

// console.log(result.length);

// let result = data.map(value=>{
//     value.name += '(+~+)'
//     value.age += 10
//     return value
// })

// result.forEach(value => {
//         console.log(`Имя: ${value.name}, Возраст ${value.age};`);
//     })

// let result = data.reduce((accum, item, index, array) => {
//     let text = accum + item.name + ', '
//     return text
// }, '')

// let result = data.reduce((accum, item, index, array) => {
//         let sum = accum + item.age
//         return sum
//     }, 0)

let result = data.reduce((accum, item, index, array) => accum + item.age, 0)

console.log(result);