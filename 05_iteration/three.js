// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}


const greeting = "Hello world!"
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}

// Maps
const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
map.set("IN", "India")       // takes unique value

// console.log(map);

for (const key of map) {
    // console.log(key);
}
for (const [key, value] of map) {
    // console.log(key, ":-", value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value] of myObject){
//     console.log(key, ':-', value);
    
// }        ye object me kaam nhi krega






