const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming = ["js", "py", "rb", "cpp", "java"]

for (const key in programming) {
    console.log(key);
    
}

// const map = new Map()
// map.set("IN", "India")
// map.set("USA", "United States of America")
// map.set("Fr", "France")
// map.set("IN", "India")

// for (const key in map) {
//     console.log(key);
    
// }