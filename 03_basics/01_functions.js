function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("T");
    console.log("Y");    
}
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);    
// }
// addTwoNumbers(3, 5)

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result    
    return number1 + number2
}
const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Prity"));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 300, 400, 50000));

const user = {
    username: "Prity",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [200, 400, 600, 100]

function returnSecondValue(getArray){
    return getArray[2]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 600, 10089]));




