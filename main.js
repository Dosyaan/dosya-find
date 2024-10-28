// task - 1

// const num = [1,3,7,8,10]
// const numFind = num.find((item=>{
//     return item % 2===0
// }))
// console.log(numFind)

// task - 2

// const animals = ['кот', 'собака', 'тигр', 'слон']
// const animalsFind = animals.find((item =>{
//     if(item.length >5){
//         return true
//     }
// }))
// console.log(animalsFind)

// task - 3

// const num = [5, 9, 12, 3, 18]
// const numFind = num.find((item=>{
//     if(item > 10){
//         return true
//     }
// }))
// console.log(numFind)

// task - 4

const person = [
    { name: 'Алекс', age: 25 },
    { name: 'Мария', age: 17 },
    { name: 'Иван', age: 19 }
  ]
const personFind = person.find((item =>{
    return item.age < 18
}))

// const personFind = person.find((item=>{
//     return item.name === "Мария"
// }))
console.log(personFind)

// // task - 5

// const num = [3, 5, -2, -8, 7]
// const numFind = num.find((item=>{
//     return item < 0
// }))
// console.log(numFind)