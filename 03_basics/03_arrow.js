const user = {
    username: "Prity",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);   
        // console.log(this);    
    }
}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Prity"
//     // console.log(this.username);
// }
// chai()

// const chai = function() {
//     let username = "Prity"
//     console.log(this.username);
// }

// chai()

const chai = () => {
    let username = "Prity"
    console.log(this.username);
}

// chai()

// ************Arrow Function************

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 4));

// const addTwo = (num1, num2) => num1 + num2   // implicit return

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Prity"})
console.log(addTwo(3, 4));

