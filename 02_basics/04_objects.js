// singleton
const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Prity",
            lastname: "Kumari"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4);

const obj4 = {...obj1, ...obj2}
// console.log(obj4);

const users = [
    {
        id: 1,
        email: "prity@gmail.com"
    },
    {
        id: 1,
        email: "prity@gmail.com"
    },
    {
        id: 1,
        email: "prity@gmail.com"
    },
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}
// course.courseInstructor
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// API
// {
//     "nmae": "hitesh",
//     "coursename": "JS in hindi",
//     "price": "free"
// }









