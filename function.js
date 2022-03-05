//Function without parameter . without return type
function hello(){
    console.log("Hello Word");
}
hello();

//Function with parameter 
function add(num1,num2){
    let sum=num1+num2;
    console.log(sum);
}
add(7,4);

//Function with parameter and return type
function mul(num1,num2){
    return num1*num2;
}

console.log(mul(3,5));

//Storing function in a variable
let a = function sub(num1,num2){
    return num1-num2;
}
console.log(a(7,3));


// IIFE Function - immedietly invoked function expression,This function we dont have to call it willl be called automatically after function creation and it dont have any name

(function(){
    console.log("I am IIFE Function without parameter");
})();


//IIFE with parameter
(function(num1,num2){
    console.log(num1*num2);
})(5,3);