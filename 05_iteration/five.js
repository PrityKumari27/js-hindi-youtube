const coding = ["js", "rb", "java", "cpp", "py"]

// coding.forEach(function (val){
//     console.log(val); 
// })

coding.forEach( (item) => {
    // console.log(item);
    
})

function printMe(item){
    console.log(item);
    
}
// coding.forEach(printMe)

coding.forEach( (item, indexe, arr)=>{
    // console.log(item, indexe, arr);
    
} )

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },

]
myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})