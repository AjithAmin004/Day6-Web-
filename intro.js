console.log("Hai Ajith");//console

//Variables in js
let num = 10;
console.log(num);

let char = 'a';
console.log(char);

let str = "I am Ajith Amin";
console.log(str);

let bool =(true);
console.log(bool);

//loops in js
for(let i=0;i<5;i++){
   console.log(i);
}


let j=0;
while(j<5){
    console.log(j);
    j++;
}
// is prime in js

let n=13,isprime=true;
let i;
for(i=2;i*i<=n;i++){
    if(n%i==0){
        isprime=false;
        break;
    }
}
if(isprime){
    console.log("Is prime");
}else{
    console.log("Is not prime");
}


